import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  Upload, 
  Link as LinkIcon, 
  ExternalLink, 
  Eye, 
  Trash2, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  HelpCircle, 
  ArrowRight, 
  Check, 
  Download,
  Maximize2,
  X,
  Plus,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Modal from './Modal';
import { savePdfToIndexedDB, getPdfFromIndexedDB, deletePdfFromIndexedDB } from '../utils/pdfStorage';
import { extractTextFromPdfArrayBuffer, parseRawQuestionText, categorizeQuestionByModule } from '../utils/pdfParser';
import { getModuleRainbowColor } from '../constants/initialData';

export default function PdfMasterManager({
  subject,
  onUpdateSubject,
  onOpenCompiledModuleBank
}) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isViewerModalOpen, setIsViewerModalOpen] = useState(false);
  const [isCategorizerModalOpen, setIsCategorizerModalOpen] = useState(false);

  // Upload modal inputs
  const [pdfInputMode, setPdfInputMode] = useState('file'); // 'file' | 'url'
  const [urlInput, setUrlInput] = useState('');
  const [pdfTitle, setPdfTitle] = useState('');
  const [notesInput, setNotesInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Active loaded PDF object URL for rendering in iframe
  const [activePdfUrl, setActivePdfUrl] = useState('');

  // Categorizer state
  const [rawTextSource, setRawTextSource] = useState('');
  const [parsedQuestions, setParsedQuestions] = useState([]);
  const [selectedQIds, setSelectedQIds] = useState(new Set());
  const [activeModPreviewTab, setActiveModPreviewTab] = useState('ALL');
  const [isExtractingText, setIsExtractingText] = useState(false);
  const [categorizerSuccessMsg, setCategorizerSuccessMsg] = useState('');

  const fileInputRef = useRef(null);
  const masterPdf = subject.masterPdf;

  // Load PDF into activePdfUrl when masterPdf changes or viewer opens
  useEffect(() => {
    let objectUrlToRevoke = null;

    async function loadPdf() {
      if (!masterPdf) {
        setActivePdfUrl('');
        return;
      }

      if (masterPdf.url) {
        setActivePdfUrl(masterPdf.url);
        return;
      }

      if (masterPdf.storageKey) {
        const record = await getPdfFromIndexedDB(masterPdf.storageKey);
        if (record && record.data) {
          if (typeof record.data === 'string' && record.data.startsWith('data:')) {
            setActivePdfUrl(record.data);
          } else if (record.data instanceof Blob) {
            objectUrlToRevoke = URL.createObjectURL(record.data);
            setActivePdfUrl(objectUrlToRevoke);
          }
        }
      } else if (masterPdf.dataUrl) {
        setActivePdfUrl(masterPdf.dataUrl);
      }
    }

    loadPdf();

    return () => {
      if (objectUrlToRevoke) {
        URL.revokeObjectURL(objectUrlToRevoke);
      }
    };
  }, [masterPdf]);

  // Handle file select in upload modal
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
        alert('Please select a valid PDF document.');
        return;
      }
      setSelectedFile(file);
      if (!pdfTitle) {
        setPdfTitle(file.name.replace(/\.pdf$/i, ''));
      }
    }
  };

  // Submit Upload / Update Master PDF
  const handleSaveMasterPdf = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      let pdfMetadata = {};

      if (pdfInputMode === 'file' && selectedFile) {
        const storageKey = `pdf_${subject.id}_${Date.now()}`;
        const fileSizeStr = (selectedFile.size / (1024 * 1024)).toFixed(1) + ' MB';

        // Save in IndexedDB
        await savePdfToIndexedDB(storageKey, selectedFile, {
          name: selectedFile.name,
          subjectId: subject.id
        });

        pdfMetadata = {
          name: pdfTitle.trim() || selectedFile.name,
          storageKey,
          size: fileSizeStr,
          type: 'file',
          uploadedAt: new Date().toISOString(),
          notes: notesInput.trim() || 'Contains all university question paper sets (2019-2026).'
        };
      } else if (pdfInputMode === 'url' && urlInput.trim()) {
        pdfMetadata = {
          name: pdfTitle.trim() || `${subject.code} Multi-Year Question Papers PDF`,
          url: urlInput.trim(),
          type: 'url',
          uploadedAt: new Date().toISOString(),
          notes: notesInput.trim() || 'Online university question paper archive link.'
        };
      } else {
        alert('Please select a PDF file or provide a valid PDF link.');
        setIsUploading(false);
        return;
      }

      onUpdateSubject({
        ...subject,
        masterPdf: pdfMetadata
      });

      setIsUploadModalOpen(false);
      setSelectedFile(null);
      setUrlInput('');
      setPdfTitle('');
      setNotesInput('');
    } catch (err) {
      console.error('Error saving master PDF:', err);
      alert('Failed to save master PDF. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  // Remove Master PDF
  const handleRemoveMasterPdf = async () => {
    if (window.confirm('Are you sure you want to remove the master PDF attachment for this subject?')) {
      if (masterPdf?.storageKey) {
        await deletePdfFromIndexedDB(masterPdf.storageKey);
      }
      onUpdateSubject({
        ...subject,
        masterPdf: null
      });
      setActivePdfUrl('');
    }
  };

  // Load sample KTU exam text into categorizer
  const handleLoadSampleQpText = () => {
    const sample = `APJ Abdul Kalam Technological University (KTU)
${subject.name} (${subject.code}) - Comprehensive Past Years Question Papers

KTU End-Semester Examination - December 2025 (Set A)
MODULE 1
Q1. Find the rank of the matrix [[1, 2, -1, 3], [3, 4, 0, -1], [-1, 0, -2, 7]] by reducing to row echelon form. [7 Marks]
Hint: Apply R2 -> R2 - 3R1, R3 -> R3 + R1 to reach echelon form.
Q2. Test the consistency of the non-homogeneous system: x + y + z = 6, x + 2y + 3z = 10, x + 2y + 4z = 12 and find its solution. [14 Marks]

MODULE 2
Q3. State Cayley-Hamilton theorem. Find the characteristic equation and compute A^-1 for A = [[2, -1], [1, 3]]. [7 Marks]
Q4. Find the eigenvalues and eigenvectors of [[3, 2, 2], [2, 3, 2], [2, 2, 3]] and orthogonally diagonalize the matrix. [14 Marks]

MODULE 3
Q5. If u = tan^-1((x^3 + y^3)/(x - y)), prove using Euler's theorem that x*(du/dx) + y*(du/dy) = sin(2u). [14 Marks]
Q6. Examine the function f(x, y) = x^3 + y^3 - 3axy for extreme values and saddle points. [14 Marks]

MODULE 4
Q7. Change the order of integration in integral from 0 to 1 of integral from x to sqrt(x) of (x^2 + y^2) dy dx and evaluate. [14 Marks]
Q8. Evaluate the triple integral of x*y*z dx dy dz throughout the positive octant of the sphere x^2 + y^2 + z^2 <= a^2. [14 Marks]

MODULE 5
Q9. Test the convergence of the infinite series sum of (sqrt(n) / (n^2 + 1)) using limit comparison test. [7 Marks]
Q10. Obtain the Fourier series expansion of periodic function f(x) = x^2 in the interval (-pi, pi). Hence deduce sum of 1/n^2 = pi^2/6. [14 Marks]`;

    setRawTextSource(sample);
    const parsed = parseRawQuestionText(sample, subject.modules || [], 2025, 'Dec 2025 (Set A)');
    setParsedQuestions(parsed);
    setSelectedQIds(new Set(parsed.map(q => q.id)));
  };

  // Launch Categorizer Wizard
  const handleOpenCategorizer = async () => {
    setIsCategorizerModalOpen(true);
    setCategorizerSuccessMsg('');

    // If questions aren't parsed yet, try extracting from the master PDF if file is present
    if (parsedQuestions.length === 0) {
      if (masterPdf?.storageKey) {
        setIsExtractingText(true);
        try {
          const record = await getPdfFromIndexedDB(masterPdf.storageKey);
          if (record && record.data) {
            let buffer;
            if (record.data instanceof Blob) {
              buffer = await record.data.arrayBuffer();
            }
            if (buffer) {
              const text = await extractTextFromPdfArrayBuffer(buffer);
              if (text && text.trim().length > 50) {
                setRawTextSource(text);
                const parsed = parseRawQuestionText(text, subject.modules || [], 2026, 'KTU Master Exam PDF');
                setParsedQuestions(parsed);
                setSelectedQIds(new Set(parsed.map(q => q.id)));
              } else {
                handleLoadSampleQpText();
              }
            } else {
              handleLoadSampleQpText();
            }
          } else {
            handleLoadSampleQpText();
          }
        } catch (e) {
          console.warn('Text extraction fallback:', e);
          handleLoadSampleQpText();
        } finally {
          setIsExtractingText(false);
        }
      } else {
        handleLoadSampleQpText();
      }
    }
  };

  // Re-parse when raw text changes
  const handleReparseText = () => {
    if (!rawTextSource.trim()) return;
    const parsed = parseRawQuestionText(rawTextSource, subject.modules || [], 2026, 'KTU Master Exam PDF');
    setParsedQuestions(parsed);
    setSelectedQIds(new Set(parsed.map(q => q.id)));
  };

  // Toggle selection of a question
  const toggleSelectQuestion = (qId) => {
    setSelectedQIds(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  // Toggle all questions in current view
  const toggleSelectAll = () => {
    const displayedQs = activeModPreviewTab === 'ALL'
      ? parsedQuestions
      : parsedQuestions.filter(q => q.moduleNumber.toString() === activeModPreviewTab.toString());

    const allSelected = displayedQs.every(q => selectedQIds.has(q.id));
    setSelectedQIds(prev => {
      const next = new Set(prev);
      displayedQs.forEach(q => {
        if (allSelected) next.delete(q.id);
        else next.add(q.id);
      });
      return next;
    });
  };

  // Change question's assigned module
  const handleChangeQuestionModule = (qId, newModuleNum) => {
    setParsedQuestions(prev => prev.map(q => {
      if (q.id !== qId) return q;
      const targetModNum = parseInt(newModuleNum, 10);
      const modObj = (subject.modules || []).find(m => (m.number || 1) === targetModNum);
      return {
        ...q,
        moduleNumber: targetModNum,
        topicId: modObj?.topics?.[0]?.id || q.topicId,
        topicName: modObj?.topics?.[0]?.name || q.topicName
      };
    }));
  };

  // Compile selected questions into the subject's master bank
  const handleCompileQuestions = () => {
    const questionsToCompile = parsedQuestions.filter(q => selectedQIds.has(q.id));
    if (questionsToCompile.length === 0) {
      alert('Please select at least one question to compile.');
      return;
    }

    // 1. Group questions by Year and Exam to append or update in subject.pastPapers
    const currentPastPapers = [...(subject.pastPapers || [])];
    const groupedByPaperKey = {};

    questionsToCompile.forEach(q => {
      const year = q.year || 2026;
      const exam = q.exam || `Dec ${year} Exam`;
      const key = `${year}-${exam}`;
      if (!groupedByPaperKey[key]) {
        groupedByPaperKey[key] = {
          year,
          exam,
          questions: []
        };
      }
      groupedByPaperKey[key].questions.push(q);
    });

    Object.values(groupedByPaperKey).forEach(group => {
      const existingPaperIndex = currentPastPapers.findIndex(
        p => p.year === group.year && (p.examType === group.exam || p.title.includes(group.exam))
      );

      if (existingPaperIndex >= 0) {
        // Append unique questions to existing paper
        const existingPaper = currentPastPapers[existingPaperIndex];
        const existingTexts = new Set((existingPaper.questions || []).map(q => (q.text || '').toLowerCase().trim()));

        const newQsToAdd = group.questions
          .filter(q => !existingTexts.has((q.text || '').toLowerCase().trim()))
          .map((q, idx) => ({
            id: 'q-comp-' + Date.now() + '-' + idx,
            number: q.number || `Q${(existingPaper.questions?.length || 0) + idx + 1}`,
            moduleNumber: q.moduleNumber,
            topicId: q.topicId,
            topicName: q.topicName,
            marks: q.marks,
            text: q.text,
            solved: false,
            hint: q.hint || ''
          }));

        currentPastPapers[existingPaperIndex] = {
          ...existingPaper,
          questions: [...(existingPaper.questions || []), ...newQsToAdd]
        };
      } else {
        // Create new paper entry for this exam set
        const newPaperId = 'qp-compiled-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4);
        currentPastPapers.unshift({
          id: newPaperId,
          title: `KTU Examination — ${group.exam}`,
          year: group.year,
          examType: group.exam,
          marks: 100,
          difficulty: 'Standard',
          questions: group.questions.map((q, idx) => ({
            id: 'q-comp-' + Date.now() + '-' + idx,
            number: q.number || `Q${idx + 1}`,
            moduleNumber: q.moduleNumber,
            topicId: q.topicId,
            topicName: q.topicName,
            marks: q.marks,
            text: q.text,
            solved: false,
            hint: q.hint || ''
          }))
        });
      }
    });

    // 2. Also attach to corresponding module topics for complete integration
    const updatedModules = (subject.modules || []).map(mod => {
      const modNum = mod.number || 1;
      const modQuestions = questionsToCompile.filter(q => q.moduleNumber === modNum);
      if (modQuestions.length === 0) return mod;

      const updatedTopics = (mod.topics || []).map((topic, tIdx) => {
        // Questions specifically mapped to this topic or default to first topic
        const topicQs = modQuestions.filter(q => q.topicId === topic.id || (!q.topicId && tIdx === 0));
        if (topicQs.length === 0) return topic;

        const existingPQs = topic.previousQuestions || [];
        const existingTexts = new Set(existingPQs.map(pq => (pq.text || '').toLowerCase().trim()));

        const newPQs = topicQs
          .filter(q => !existingTexts.has((q.text || '').toLowerCase().trim()))
          .map((q, i) => ({
            id: 'pq-comp-' + Date.now() + '-' + i,
            year: q.year,
            exam: q.exam,
            marks: q.marks,
            text: q.text,
            frequency: `KTU ${q.year} (${q.exam})`,
            solved: false,
            hint: q.hint
          }));

        return {
          ...topic,
          previousQuestions: [...existingPQs, ...newPQs]
        };
      });

      return { ...mod, topics: updatedTopics };
    });

    // Save update to subject
    onUpdateSubject({
      ...subject,
      pastPapers: currentPastPapers,
      modules: updatedModules
    });

    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    setCategorizerSuccessMsg(`Successfully compiled ${questionsToCompile.length} questions across 5 modules!`);
    setTimeout(() => {
      setIsCategorizerModalOpen(false);
      setCategorizerSuccessMsg('');
      if (onOpenCompiledModuleBank) {
        onOpenCompiledModuleBank();
      }
    }, 1200);
  };

  return (
    <>
      {/* Master PDF Hub Card */}
      <div className="p-5 sm:p-6 rounded-[26px] bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-slate-900 text-white shadow-lg relative overflow-hidden">
        {/* Ambient glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-400/20 text-indigo-200 border border-indigo-300/30 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-indigo-300" />
                Master PDF Hub
              </span>

              {masterPdf ? (
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  PDF Attached ({masterPdf.size || 'Active'})
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[10px] font-bold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-amber-400" />
                  No Master PDF Attached Yet
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span>{masterPdf ? masterPdf.name : 'Master Multi-Year QP PDF Document'}</span>
            </h3>

            <p className="text-xs text-indigo-100/80 max-w-2xl font-medium leading-relaxed">
              {masterPdf
                ? masterPdf.notes || 'Full university question papers booklet containing all past years. View side-by-side or extract questions directly into module-wise bins.'
                : 'Upload or update the complete master PDF containing all year question papers. Our smart system categorizes questions into Module 1 to 5 and compiles them into a unified study area.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto shrink-0">
            {masterPdf ? (
              <>
                <button
                  onClick={() => setIsViewerModalOpen(true)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 border border-white/20 backdrop-blur-sm transition-all shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5 text-indigo-200" />
                  <span>Open PDF Reader</span>
                </button>

                <button
                  onClick={handleOpenCategorizer}
                  className="px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-violet-900/40 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Categorize by Module</span>
                </button>

                <button
                  onClick={() => setIsUploadModalOpen(true)}
                  className="p-2 text-indigo-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                  title="Update / Replace Master PDF"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>

                <button
                  onClick={handleRemoveMasterPdf}
                  className="p-2 text-rose-300 hover:text-rose-100 bg-rose-500/10 hover:bg-rose-500/20 rounded-xl border border-rose-400/20 transition-colors"
                  title="Remove Master PDF"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsUploadModalOpen(true)}
                  className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-md shadow-violet-900/40 transition-all"
                >
                  <Upload className="w-4 h-4" />
                  <span>Update Entire PDF</span>
                </button>

                <button
                  onClick={handleOpenCategorizer}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-bold flex items-center gap-1.5 border border-white/20 backdrop-blur-sm transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Categorize & Compile</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: UPLOAD / UPDATE MASTER PDF MODAL                                 */}
      {/* ========================================================================= */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title={masterPdf ? 'Update Master Question Papers PDF' : 'Upload All-Year Question Papers PDF'}
        subtitle={`Attach the complete question papers booklet for ${subject.name}`}
      >
        <form onSubmit={handleSaveMasterPdf} className="space-y-4">
          {/* Input Mode Selector */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setPdfInputMode('file')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                pdfInputMode === 'file'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Upload className="w-3.5 h-3.5 text-indigo-600" />
              <span>Upload PDF File</span>
            </button>

            <button
              type="button"
              onClick={() => setPdfInputMode('url')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                pdfInputMode === 'url'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LinkIcon className="w-3.5 h-3.5 text-purple-600" />
              <span>Link Online PDF URL</span>
            </button>
          </div>

          {/* Mode A: File Upload */}
          {pdfInputMode === 'file' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Select Master PDF Document
              </label>

              <div
                onClick={() => fileInputRef.current?.click()}
                className={`p-6 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all ${
                  selectedFile
                    ? 'border-emerald-400 bg-emerald-50/50'
                    : 'border-slate-300 hover:border-indigo-400 bg-slate-50/80 hover:bg-indigo-50/30'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {selectedFile ? (
                  <div className="space-y-1">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                    <div className="text-xs font-bold text-slate-800">{selectedFile.name}</div>
                    <div className="text-[11px] text-slate-500">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to save
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                    <div className="text-xs font-bold text-slate-700">Click to choose or drag PDF here</div>
                    <div className="text-[11px] text-slate-400">Supports multi-page KTU Question Paper PDFs</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mode B: URL Input */}
          {pdfInputMode === 'url' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Direct PDF Web URL
              </label>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/ktu-qp-2019-2026.pdf"
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
              />
            </div>
          )}

          {/* PDF Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Document Title / Label
            </label>
            <input
              type="text"
              value={pdfTitle}
              onChange={(e) => setPdfTitle(e.target.value)}
              placeholder={`e.g. ${subject.code || 'KTU'} Master Question Papers (2019-2026)`}
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Description / Notes (Optional)
            </label>
            <input
              type="text"
              value={notesInput}
              onChange={(e) => setNotesInput(e.target.value)}
              placeholder="e.g. Contains 16 exam sets from Dec 2019 through Dec 2026."
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => {
                // Pre-fill with sample multi-year metadata
                setPdfTitle(`${subject.name} (2019-2026 KTU Master PDF)`);
                setNotesInput('Compiled 16 KTU end-semester question paper sets.');
                setUrlInput('https://ktu.edu.in/question-papers');
                setPdfInputMode('url');
              }}
              className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800"
            >
              Use Sample Metadata
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsUploadModalOpen(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isUploading || (pdfInputMode === 'file' && !selectedFile) || (pdfInputMode === 'url' && !urlInput.trim())}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
              >
                {isUploading ? 'Saving PDF...' : masterPdf ? 'Update PDF' : 'Attach PDF'}
              </button>
            </div>
          </div>
        </form>
      </Modal>

      {/* ========================================================================= */}
      {/* MODAL 2: IN-APP PDF VIEWER MODAL                                          */}
      {/* ========================================================================= */}
      {isViewerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-5xl h-[88vh] rounded-[28px] border border-slate-200 shadow-2xl flex flex-col overflow-hidden">
            {/* Viewer Header */}
            <div className="p-4 sm:px-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText className="w-5 h-5 text-indigo-600 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-slate-900 truncate">
                    {masterPdf?.name || 'Master Question Papers PDF'}
                  </h3>
                  <p className="text-[11px] text-slate-500 truncate">
                    {subject.name} • {masterPdf?.size || 'Document'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsViewerModalOpen(false);
                    handleOpenCategorizer();
                  }}
                  className="px-3.5 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden sm:inline">Categorize into Modules</span>
                </button>

                {activePdfUrl && (
                  <a
                    href={activePdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors"
                    title="Open in new window"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={() => setIsViewerModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Viewer Content Canvas */}
            <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-hidden relative">
              {activePdfUrl ? (
                <iframe
                  src={activePdfUrl}
                  title="PDF Reader"
                  className="w-full h-full rounded-2xl border border-slate-300/80 bg-white shadow-inner"
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl border border-slate-200">
                  <FileText className="w-12 h-12 text-slate-300 mb-2" />
                  <h4 className="text-sm font-bold text-slate-800">Master PDF Link Ready</h4>
                  <p className="text-xs text-slate-500 max-w-md mt-1">
                    {masterPdf?.url ? (
                      <>
                        Linked to external PDF URL: <br />
                        <span className="font-mono text-indigo-600 text-[11px] break-all">{masterPdf.url}</span>
                      </>
                    ) : (
                      'PDF storage ready. Click below to view online or re-upload.'
                    )}
                  </p>
                  {masterPdf?.url && (
                    <a
                      href={masterPdf.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open External PDF URL</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: QUESTION CATEGORIZER & COMPILER WIZARD                           */}
      {/* ========================================================================= */}
      {isCategorizerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-6xl h-[90vh] rounded-[28px] border border-slate-200 shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:px-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/80 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white flex items-center justify-center font-black">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    PDF Question Extractor & Module Categorizer
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Classify questions across all exam years into Module 1 to 5 bins and compile into one master hub
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCategorizerModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Two-Column / Split Layout */}
            <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
              {/* Left Column: Source Text / PDF Input */}
              <div className="w-full lg:w-96 border-b lg:border-b-0 lg:border-r border-slate-200 p-4 sm:p-5 flex flex-col bg-slate-50/50 shrink-0 overflow-y-auto">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Raw Exam Paper Text</span>
                  </label>
                  <button
                    onClick={handleLoadSampleQpText}
                    className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    Reset to Sample Text
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 mb-2 leading-relaxed">
                  Paste exam paper text directly or edit extracted text. The parser will auto-categorize questions into Modules 1 to 5.
                </p>

                <textarea
                  value={rawTextSource}
                  onChange={(e) => setRawTextSource(e.target.value)}
                  placeholder="Paste question paper text here with questions, marks, and module indicators..."
                  rows={14}
                  className="w-full flex-1 bg-white border border-slate-200 rounded-xl p-3 text-xs font-mono text-slate-800 focus:outline-none focus:border-indigo-500 leading-relaxed resize-none shadow-inner"
                />

                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={handleReparseText}
                    className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Re-parse & Categorize</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Categorized Questions Review & Compilation */}
              <div className="flex-1 flex flex-col min-h-0 bg-white p-4 sm:p-5 overflow-hidden">
                {/* Module Filter Chips */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 shrink-0">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                    <span className="text-xs font-bold text-slate-400 uppercase mr-1">Filter:</span>
                    <button
                      onClick={() => setActiveModPreviewTab('ALL')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        activeModPreviewTab === 'ALL'
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      All Modules ({parsedQuestions.length})
                    </button>
                    {[1, 2, 3, 4, 5].map(num => {
                      const count = parsedQuestions.filter(q => q.moduleNumber === num).length;
                      const modColor = getModuleRainbowColor(num);
                      const isSelected = activeModPreviewTab.toString() === num.toString();

                      return (
                        <button
                          key={num}
                          onClick={() => setActiveModPreviewTab(num.toString())}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                            isSelected
                              ? modColor.chipActive
                              : modColor.chipInactive
                          }`}
                        >
                          <span>Module {num}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                            isSelected ? 'bg-black/20 text-white' : 'bg-white text-slate-700'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                    <button
                      onClick={toggleSelectAll}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
                    >
                      Toggle All
                    </button>
                  </div>
                </div>

                {/* Questions Scrollable List */}
                <div className="flex-1 overflow-y-auto space-y-3 py-3 pr-1">
                  {parsedQuestions.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-slate-200 rounded-2xl">
                      <Layers className="w-10 h-10 text-slate-300 mb-2" />
                      <h4 className="text-sm font-bold text-slate-800">No Questions Extracted</h4>
                      <p className="text-xs text-slate-500 max-w-xs mt-1">
                        Paste question paper text on the left or click 'Reset to Sample Text' to generate questions.
                      </p>
                    </div>
                  ) : (
                    parsedQuestions
                      .filter(q => activeModPreviewTab === 'ALL' || q.moduleNumber.toString() === activeModPreviewTab.toString())
                      .map((q) => {
                        const isSelected = selectedQIds.has(q.id);
                        const modColor = getModuleRainbowColor(q.moduleNumber);

                        return (
                          <div
                            key={q.id}
                            className={`p-4 rounded-2xl border transition-all ${
                              isSelected
                                ? `bg-white ${modColor.border} shadow-sm ring-1 ${modColor.border}`
                                : 'bg-slate-50/70 border-slate-200/80 opacity-75'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleSelectQuestion(q.id)}
                                className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-0 cursor-pointer shrink-0"
                              />

                              <div className="flex-1 min-w-0 space-y-2">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono font-extrabold text-xs text-slate-900">
                                      {q.number}
                                    </span>

                                    {/* Module Assignment Selector Dropdown */}
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] font-bold text-slate-400 uppercase">Module:</span>
                                      <select
                                        value={q.moduleNumber}
                                        onChange={(e) => handleChangeQuestionModule(q.id, e.target.value)}
                                        className={`text-xs font-bold rounded-lg px-2 py-0.5 border ${modColor.border} ${modColor.bg} ${modColor.text} focus:outline-none cursor-pointer`}
                                      >
                                        <option value={1}>Module 1 (Lilac Violet)</option>
                                        <option value={2}>Module 2 (Aqua Cyan)</option>
                                        <option value={3}>Module 3 (Mint Emerald)</option>
                                        <option value={4}>Module 4 (Warm Amber)</option>
                                        <option value={5}>Module 5 (Blush Rose)</option>
                                      </select>
                                    </div>

                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                                      {q.exam || `Dec ${q.year}`}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-slate-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                                      {q.marks} Marks
                                    </span>
                                  </div>
                                </div>

                                <p className="text-xs font-medium text-slate-800 leading-relaxed">
                                  {q.text}
                                </p>

                                {q.hint && (
                                  <div className="text-[11px] text-indigo-600 bg-indigo-50/60 p-2 rounded-xl border border-indigo-100">
                                    💡 <strong>Solution Guide:</strong> {q.hint}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                  )}
                </div>

                {/* Footer Controls & Compile Action */}
                <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                  <div className="text-xs text-slate-500 font-medium">
                    <strong className="text-slate-900">{selectedQIds.size}</strong> of {parsedQuestions.length} questions selected for compilation
                  </div>

                  <div className="flex items-center gap-2">
                    {categorizerSuccessMsg && (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 animate-in fade-in">
                        <Check className="w-4 h-4 text-emerald-500" />
                        {categorizerSuccessMsg}
                      </span>
                    )}

                    <button
                      onClick={() => setIsCategorizerModalOpen(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
                    >
                      Close
                    </button>

                    <button
                      onClick={handleCompileQuestions}
                      disabled={selectedQIds.size === 0}
                      className="px-5 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md shadow-violet-200 transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Compile into Module Bank</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
