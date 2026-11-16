import React from 'react';
import { CheckCircle2, ChevronRight, Sparkles, BookOpen, Calculator, Award, Lightbulb } from 'lucide-react';

/**
 * Clean markdown & LaTeX noise for human readability
 */
function cleanMathAndMarkdown(str) {
  if (!str) return '';
  return str
    // LaTeX symbols to clean unicode
    .replace(/\\begin\{aligned\}/g, '')
    .replace(/\\end\{aligned\}/g, '')
    .replace(/\\begin\{bmatrix\}/g, '')
    .replace(/\\end\{bmatrix\}/g, '')
    .replace(/\\begin\{vmatrix\}/g, '')
    .replace(/\\end\{vmatrix\}/g, '')
    .replace(/\\\\/g, '\n')
    .replace(/\\to/g, ' → ')
    .replace(/\\leftrightarrow/g, ' ↔ ')
    .replace(/\\times/g, ' × ')
    .replace(/\\cdot/g, ' · ')
    .replace(/\\pm/g, ' ± ')
    .replace(/\\neq/g, ' ≠ ')
    .replace(/\\approx/g, ' ≈ ')
    .replace(/\\le/g, ' ≤ ')
    .replace(/\\ge/g, ' ≥ ')
    .replace(/\\in/g, ' ∈ ')
    .replace(/\\lambda/g, 'λ')
    .replace(/\\rho/g, 'ρ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\theta/g, 'θ')
    .replace(/\\mu/g, 'μ')
    .replace(/\\pi/g, 'π')
    .replace(/\\varepsilon/g, 'ε')
    .replace(/\\nabla/g, '∇')
    .replace(/\\partial/g, '∂')
    .replace(/\\iiint/g, '∭')
    .replace(/\\iint/g, '∬')
    .replace(/\\oint/g, '∮')
    .replace(/\\int/g, '∫')
    .replace(/\\hat\{i\}/g, 'î')
    .replace(/\\hat\{j\}/g, 'ĵ')
    .replace(/\\hat\{k\}/g, 'k̂')
    .replace(/\\hat\{n\}/g, 'n̂')
    .replace(/\\vec\{F\}/g, 'F⃗')
    .replace(/\\vec\{r\}/g, 'r⃗')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\det/g, 'det')
    .replace(/\\log_\{?10\}?/g, 'log₁₀')
    .replace(/\\circ/g, '°')
    .replace(/\\xrightarrow\{([^}]+)\}/g, ' ──[$1]──> ')
    // Strip standalone LaTeX dollar signs
    .replace(/\$\$/g, '')
    .replace(/\$/g, '')
    // Strip markdown bold asterisks where unclosed or awkward
    .replace(/\*\*\*/g, '')
    .trim();
}

/**
 * Render inline text with bolding and badges without raw asterisks
 */
function renderInlineText(text) {
  if (!text) return null;
  const cleaned = cleanMathAndMarkdown(text);
  
  // Split by markdown bold (**text**)
  const parts = cleaned.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2).trim();
      return (
        <strong key={idx} className="solution-bold">
          {inner}
        </strong>
      );
    }
    // Also handle inline code `code`
    if (part.includes('`')) {
      const codeParts = part.split(/(`[^`]+`)/g);
      return codeParts.map((cp, cIdx) => {
        if (cp.startsWith('`') && cp.endsWith('`')) {
          return <code key={`${idx}-${cIdx}`} className="solution-inline-code">{cp.slice(1, -1)}</code>;
        }
        return cp;
      });
    }
    return part;
  });
}

/**
 * High-readability Formatted Solution Component
 * Renders textbook-quality answers with zero markdown hashes (#) or stray stars (**)
 */
export default function FormattedSolution({ text, isCompact = false }) {
  if (!text || typeof text !== 'string') {
    return <p className="solution-empty">Step-by-step solution compiled for KTU Scheme.</p>;
  }

  // Split lines
  const rawLines = text.split('\n');
  const sections = [];
  let currentSection = {
    title: '',
    type: 'normal', // 'header' | 'given' | 'formula' | 'step' | 'answer' | 'tips' | 'normal'
    lines: []
  };

  const getSectionType = (title) => {
    const t = title.toLowerCase();
    if (t.includes('final answer') || t.includes('conclusion') || t.includes('result:')) return 'answer';
    if (t.includes('step') || t.includes('calculation') || t.includes('reduction')) return 'step';
    if (t.includes('given') || t.includes('aim') || t.includes('objective')) return 'given';
    if (t.includes('formula') || t.includes('theorems') || t.includes('governing') || t.includes('principle')) return 'formula';
    if (t.includes('scheme') || t.includes('valuation') || t.includes('tips') || t.includes('marks')) return 'tips';
    if (t.includes('ktu model') || t.includes('course') || t.includes('academic')) return 'header';
    return 'normal';
  };

  for (let line of rawLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === '---' || trimmed === '___') continue;

    // Detect markdown headings (### or #### or 1. GIVEN ... or Step 1:)
    const isHeading =
      trimmed.startsWith('#') ||
      /^(\d+\.|\bStep\s+\d+:?)\s+[A-Z\s&/()-]{3,}/i.test(trimmed) ||
      /^(final answer|given information|governing principles|step-by-step|ktu valuation)/i.test(trimmed);

    if (isHeading) {
      if (currentSection.lines.length > 0 || currentSection.title) {
        sections.push(currentSection);
      }
      // Strip hashes and bold stars from title
      const cleanTitle = trimmed
        .replace(/^#+\s*/, '')
        .replace(/^\*\*|\*\*$/g, '')
        .trim();
      currentSection = {
        title: cleanTitle,
        type: getSectionType(cleanTitle),
        lines: []
      };
    } else {
      currentSection.lines.push(trimmed);
    }
  }

  if (currentSection.lines.length > 0 || currentSection.title) {
    sections.push(currentSection);
  }

  const getIconForType = (type) => {
    switch (type) {
      case 'header': return <Sparkles size={14} className="sec-icon header-icon" />;
      case 'given': return <BookOpen size={14} className="sec-icon given-icon" />;
      case 'formula': return <Calculator size={14} className="sec-icon formula-icon" />;
      case 'step': return <ChevronRight size={14} className="sec-icon step-icon" />;
      case 'answer': return <CheckCircle2 size={16} className="sec-icon answer-icon" />;
      case 'tips': return <Award size={14} className="sec-icon tips-icon" />;
      default: return <Lightbulb size={13} className="sec-icon default-icon" />;
    }
  };

  return (
    <div className={`formatted-solution ${isCompact ? 'is-compact' : ''}`}>
      {sections.map((sec, sIdx) => {
        // Special render for Final Answer Callout Card
        if (sec.type === 'answer') {
          return (
            <div key={sIdx} className="solution-card final-answer-card">
              <div className="final-answer-header">
                <CheckCircle2 size={17} />
                <strong>{sec.title || 'FINAL ANSWER'}</strong>
              </div>
              <div className="final-answer-body">
                {sec.lines.map((l, lIdx) => (
                  <p key={lIdx} className="final-answer-text">
                    {renderInlineText(l)}
                  </p>
                ))}
              </div>
            </div>
          );
        }

        // Special render for KTU Header banner
        if (sec.type === 'header') {
          return (
            <div key={sIdx} className="solution-hero-banner">
              <div className="solution-hero-tag">
                <Sparkles size={13} />
                <span>OFFICIAL KTU MODEL EXAMINATION SOLUTION</span>
              </div>
              {sec.title && !sec.title.toLowerCase().includes('model examination') && (
                <h4 className="solution-hero-title">{sec.title}</h4>
              )}
              {sec.lines.length > 0 && (
                <div className="solution-hero-meta">
                  {sec.lines.map((l, lIdx) => (
                    <span key={lIdx} className="solution-meta-item">
                      {renderInlineText(l)}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <div key={sIdx} className={`solution-card section-${sec.type}`}>
            {sec.title && (
              <div className="solution-section-title">
                {getIconForType(sec.type)}
                <h4>{sec.title}</h4>
              </div>
            )}
            <div className="solution-section-content">
              {sec.lines.map((l, lIdx) => {
                const isBullet = l.startsWith('- ') || l.startsWith('* ');
                const cleanLine = isBullet ? l.replace(/^[-*]\s+/, '') : l;

                // Check for step pill inside content e.g. "Step 1 (First Pivot):"
                const stepMatch = cleanLine.match(/^(Step\s+\d+[^:]*):(.*)$/i);
                if (stepMatch) {
                  return (
                    <div key={lIdx} className="solution-step-item">
                      <span className="step-pill">{cleanMathAndMarkdown(stepMatch[1])}</span>
                      <div className="step-text">{renderInlineText(stepMatch[2])}</div>
                    </div>
                  );
                }

                // Check if it's a matrix representation line like "[ 1 2 -1 3 ]"
                const isMatrixLine = /^\[[\s\d\-.,]+\]$/.test(cleanLine.trim());
                if (isMatrixLine) {
                  return (
                    <div key={lIdx} className="solution-matrix-row">
                      {cleanLine}
                    </div>
                  );
                }

                if (isBullet) {
                  return (
                    <div key={lIdx} className="solution-bullet-item">
                      <span className="bullet-dot" />
                      <div className="bullet-content">{renderInlineText(cleanLine)}</div>
                    </div>
                  );
                }

                return (
                  <p key={lIdx} className="solution-paragraph">
                    {renderInlineText(cleanLine)}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
