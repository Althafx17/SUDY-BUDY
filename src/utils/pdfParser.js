// Utility for extracting, parsing, and auto-categorizing questions from Master PDF text

/**
 * Intelligent categorization of question text into a module number (1 to 5)
 * Matches against subject's module names, topics, subtopics, tags, and common engineering/university terms.
 */
export function categorizeQuestionByModule(questionText, modules = []) {
  if (!questionText) return 1;
  const textLower = questionText.toLowerCase();

  // 1. Explicit module indicators in the question text or heading
  const explicitMatch = textLower.match(/module\s*([1-5]|i{1,3}|iv|v)\b/);
  if (explicitMatch) {
    const romanMap = { i: 1, ii: 2, iii: 3, iv: 4, v: 5 };
    const val = explicitMatch[1];
    return romanMap[val] || parseInt(val, 10) || 1;
  }

  // 2. Score against module content (topics, subtopics, notes, tags)
  if (modules && modules.length > 0) {
    let bestModNumber = 1;
    let maxScore = -1;

    modules.forEach((mod, idx) => {
      const modNumber = mod.number || (idx + 1);
      let score = 0;

      // Module title keywords
      const modWords = (mod.name || '')
        .toLowerCase()
        .replace(/module\s*\d+\s*:\s*/i, '')
        .split(/[\s,()/-]+/)
        .filter(w => w.length > 3);

      modWords.forEach(word => {
        if (textLower.includes(word)) score += 5;
      });

      // Topic titles and notes
      (mod.topics || []).forEach(top => {
        const topWords = (top.name || '')
          .toLowerCase()
          .split(/[\s,()/-]+/)
          .filter(w => w.length > 3);

        topWords.forEach(word => {
          if (textLower.includes(word)) score += 6;
        });

        if (top.tags) {
          top.tags.forEach(tag => {
            if (textLower.includes(tag.toLowerCase())) score += 3;
          });
        }

        if (top.subTopics) {
          top.subTopics.forEach(st => {
            const stWords = (st.name || '')
              .toLowerCase()
              .split(/[\s,()/-]+/)
              .filter(w => w.length > 3);
            stWords.forEach(w => {
              if (textLower.includes(w)) score += 4;
            });
          });
        }
      });

      if (score > maxScore) {
        maxScore = score;
        bestModNumber = modNumber;
      }
    });

    if (maxScore > 0) {
      return bestModNumber;
    }
  }

  // 3. Fallback KTU MAT101 / General Engineering heuristic dictionary
  const fallbackDict = {
    1: ['matrix', 'matrices', 'rank', 'echelon', 'linear equation', 'gauss elimination', 'consistency', 'rouche', 'augmented'],
    2: ['eigenvalue', 'eigenvector', 'cayley-hamilton', 'diagonalization', 'quadratic form', 'orthogonal', 'canonical', 'definite'],
    3: ['partial derivative', 'euler theorem', 'euler', 'taylor series', 'maxima', 'minima', 'saddle point', 'jacobian', 'lagrange'],
    4: ['double integral', 'triple integral', 'order of integration', 'polar coordinates', 'cylindrical', 'spherical', 'volume', 'area'],
    5: ['fourier', 'series', 'convergence', 'divergence', 'ratio test', 'p-series', 'half range', 'harmonic', 'periodic']
  };

  let fallbackBestMod = 1;
  let fallbackBestCount = 0;

  Object.entries(fallbackDict).forEach(([modNum, keywords]) => {
    let count = 0;
    keywords.forEach(kw => {
      if (textLower.includes(kw)) count++;
    });
    if (count > fallbackBestCount) {
      fallbackBestCount = count;
      fallbackBestMod = parseInt(modNum, 10);
    }
  });

  return fallbackBestCount > 0 ? fallbackBestMod : 1;
}

/**
 * Client-side basic text extractor for PDF ArrayBuffers.
 * Scans for literal text objects, stream text blocks, and Unicode text strings.
 */
export async function extractTextFromPdfArrayBuffer(arrayBuffer) {
  try {
    const uint8 = new Uint8Array(arrayBuffer);
    let rawStr = '';
    const chunkSize = 65536;
    for (let i = 0; i < uint8.length; i += chunkSize) {
      const slice = uint8.subarray(i, Math.min(i + chunkSize, uint8.length));
      rawStr += String.fromCharCode.apply(null, slice);
    }

    const textPieces = [];

    // Match Tj operator: (Hello World) Tj
    const tjRegex = /\(([^)]+)\)\s*Tj/g;
    let match;
    while ((match = tjRegex.exec(rawStr)) !== null) {
      const cleaned = match[1].replace(/\\([()\\])/g, '$1').trim();
      if (cleaned.length > 1) {
        textPieces.push(cleaned);
      }
    }

    // Match TJ array operator: [(H) 10 (ello)] TJ
    const tjArrayRegex = /\[(.*?)\]\s*TJ/g;
    while ((match = tjArrayRegex.exec(rawStr)) !== null) {
      const inner = match[1];
      const stringMatches = inner.match(/\(([^)]+)\)/g);
      if (stringMatches) {
        const assembled = stringMatches.map(s => s.slice(1, -1).replace(/\\([()\\])/g, '$1')).join('');
        if (assembled.trim().length > 1) {
          textPieces.push(assembled.trim());
        }
      }
    }

    if (textPieces.length > 10) {
      return textPieces.join(' ');
    }

    // Fallback: look for printable ASCII clusters (> 20 chars)
    const asciiClusters = rawStr.match(/[A-Za-z0-9 ,.;:()\-'"/?!\n]{25,}/g);
    if (asciiClusters && asciiClusters.length > 0) {
      return asciiClusters.join('\n');
    }

    return '';
  } catch (err) {
    console.warn('PDF raw text extraction error:', err);
    return '';
  }
}

/**
 * Parses raw text containing question papers into structured question objects with module categorization.
 */
export function parseRawQuestionText(rawText, modules = [], defaultYear = 2026, defaultExam = 'University Exam') {
  if (!rawText || !rawText.trim()) return [];

  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  const parsedQuestions = [];

  let currentYear = defaultYear;
  let currentExam = defaultExam;
  let currentActiveModule = null;
  let currentQuestionBuffer = null;

  // Regex patterns
  const yearPattern = /\b(201[9]|202[0-9])\b/;
  const examSetPattern = /(Set\s*[AB]|December|Dec|May|June|Supplementary|Regular|Model)/i;
  const moduleHeaderPattern = /^(?:PART\s+[A-B]\s*[-–:]*\s*)?MODULE\s*([1-5]|I{1,3}|IV|V)\b/i;
  const questionStartPattern = /^(?:Q(?:uestion)?\.?\s*(\d+[a-z]?)|(\d+)[.)]\s*|\(([a-z\d]+)\)\s*)/i;
  const marksPattern = /\[(\d+)\s*(?:Marks?|M)?\]|\((\d+)\s*(?:Marks?|M)?\)|(?:--|-)\s*(\d+)\s*Marks?/i;

  const flushCurrentQuestion = () => {
    if (currentQuestionBuffer && currentQuestionBuffer.text.trim()) {
      const qText = currentQuestionBuffer.text.trim();
      
      // Module assignment
      let targetModule = currentQuestionBuffer.explicitModule;
      if (!targetModule) {
        targetModule = categorizeQuestionByModule(qText, modules);
      }

      // Map to topic in that module if possible
      let matchedTopicId = null;
      let matchedTopicName = '';
      const modObj = modules.find(m => (m.number || 1) === targetModule);
      if (modObj && modObj.topics && modObj.topics.length > 0) {
        const textLow = qText.toLowerCase();
        let bestTopic = null;
        let bestScore = -1;
        modObj.topics.forEach(top => {
          let score = 0;
          const words = top.name.toLowerCase().split(/\W+/).filter(w => w.length > 3);
          words.forEach(w => {
            if (textLow.includes(w)) score++;
          });
          if (score > bestScore) {
            bestScore = score;
            bestTopic = top;
          }
        });
        if (bestTopic && bestScore > 0) {
          matchedTopicId = bestTopic.id;
          matchedTopicName = bestTopic.name;
        } else {
          matchedTopicId = modObj.topics[0].id;
          matchedTopicName = modObj.topics[0].name;
        }
      }

      parsedQuestions.push({
        id: 'q-extracted-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
        number: currentQuestionBuffer.number || `Q${parsedQuestions.length + 1}`,
        year: currentQuestionBuffer.year || currentYear,
        exam: currentQuestionBuffer.exam || currentExam,
        marks: currentQuestionBuffer.marks || 14,
        text: qText,
        moduleNumber: targetModule,
        topicId: matchedTopicId,
        topicName: matchedTopicName,
        solved: false,
        hint: currentQuestionBuffer.hint || ''
      });
      currentQuestionBuffer = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for year/exam headers (e.g. "KTU B.Tech Dec 2024 (Set A)")
    const yrMatch = line.match(yearPattern);
    if (yrMatch && (line.toLowerCase().includes('ktu') || line.toLowerCase().includes('exam') || line.toLowerCase().includes('set'))) {
      currentYear = parseInt(yrMatch[1], 10);
      const setMatch = line.match(examSetPattern);
      currentExam = setMatch ? `Dec ${currentYear} (${setMatch[0]})` : `Dec ${currentYear} Exam`;
      continue;
    }

    // Check for Module Section heading (e.g. "MODULE 1", "MODULE II")
    const modMatch = line.match(moduleHeaderPattern);
    if (modMatch) {
      flushCurrentQuestion();
      const romanMap = { i: 1, ii: 2, iii: 3, iv: 4, v: 5 };
      const rawVal = modMatch[1].toLowerCase();
      currentActiveModule = romanMap[rawVal] || parseInt(rawVal, 10) || 1;
      continue;
    }

    // Check for Question start
    const qMatch = line.match(questionStartPattern);
    if (qMatch) {
      flushCurrentQuestion();

      const qNum = qMatch[1] ? `Q${qMatch[1]}` : (qMatch[2] ? `Q${qMatch[2]}` : `Q${parsedQuestions.length + 1}`);
      let restOfLine = line.replace(questionStartPattern, '').trim();

      // Check for marks in this line
      let marksVal = 14;
      const marksMatch = restOfLine.match(marksPattern);
      if (marksMatch) {
        marksVal = parseInt(marksMatch[1] || marksMatch[2] || marksMatch[3], 10) || 14;
        restOfLine = restOfLine.replace(marksPattern, '').trim();
      }

      currentQuestionBuffer = {
        number: qNum,
        year: currentYear,
        exam: currentExam,
        marks: marksVal,
        text: restOfLine,
        explicitModule: currentActiveModule,
        hint: ''
      };
      continue;
    }

    // Check for hint line (e.g. "Hint: Use Cayley-Hamilton" or "Ans:")
    if (line.toLowerCase().startsWith('hint:') || line.toLowerCase().startsWith('solution hint:')) {
      if (currentQuestionBuffer) {
        currentQuestionBuffer.hint = line.replace(/^(?:hint|solution hint):\s*/i, '').trim();
      }
      continue;
    }

    // If we have an active question buffer, append line to it
    if (currentQuestionBuffer) {
      // Check if marks are specified on a continuation line
      const marksMatch = line.match(marksPattern);
      if (marksMatch) {
        currentQuestionBuffer.marks = parseInt(marksMatch[1] || marksMatch[2] || marksMatch[3], 10) || currentQuestionBuffer.marks;
        const lineWithoutMarks = line.replace(marksPattern, '').trim();
        if (lineWithoutMarks) {
          currentQuestionBuffer.text += ' ' + lineWithoutMarks;
        }
      } else {
        currentQuestionBuffer.text += ' ' + line;
      }
    }
  }

  flushCurrentQuestion();
  return parsedQuestions;
}
