import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Award, 
  AlertCircle, 
  Printer, 
  Sparkles,
  HelpCircle,
  Eye,
  EyeOff,
  Layers,
  Search,
  Filter,
  Flame,
  CheckSquare,
  BookOpen
} from 'lucide-react';
import Modal from './Modal';
import { getModuleRainbowColor } from '../constants/initialData';
import PdfMasterManager from './PdfMasterManager';

export default function PastQuestionPapers({ 
  subject, 
  onUpdateSubject 
}) {
  const [viewMode, setViewMode] = useState('by-module'); // 'by-module' | 'by-year'
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [expandedPaperId, setExpandedPaperId] = useState(
    subject.pastPapers && subject.pastPapers.length > 0 ? subject.pastPapers[0].id : null
  );
  const [showHintMap, setShowHintMap] = useState({});

  // Module-Wise View Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'solved' | 'unsolved' | 'high-yield'
  const [selectedModuleFilter, setSelectedModuleFilter] = useState('ALL'); // 'ALL' | 1 | 2 | 3 | 4 | 5

  // Add Question Paper Modal
  const [isAddPaperOpen, setIsAddPaperOpen] = useState(false);
  const [newPaperTitle, setNewPaperTitle] = useState('');
  const [newPaperYear, setNewPaperYear] = useState(new Date().getFullYear().toString());
  const [newPaperType, setNewPaperType] = useState('End-Semester Final');
  const [newPaperMarks, setNewPaperMarks] = useState('100');
  const [newPaperQuestionsText, setNewPaperQuestionsText] = useState('');

  const pastPapers = subject.pastPapers || [];

  // Available unique years in descending order (2026, 2025, 2024...)
  const availableYears = Array.from(new Set(pastPapers.map(p => p.year.toString()))).sort((a, b) => b - a);

  // Group papers by year for 'by-year' mode
  const filteredYearsList = selectedYear === 'ALL' ? availableYears : [selectedYear];

  // Derive Module-Wise aggregated questions across all 16 papers and syllabus topics
  const rawModuleWiseData = (subject.modules || []).map((module, modIdx) => {
    const currentModNum = module.number || (modIdx + 1);

    // 1. All questions from all papers belonging to this module
    const paperQuestionsForModule = pastPapers.flatMap(paper => 
      (paper.questions || [])
        .filter(q => q.moduleNumber === currentModNum || q.moduleId === module.id || (q.topicId && (module.topics || []).some(t => t.id === q.topicId)))
        .map(q => ({
          id: q.id,
          number: q.number,
          year: paper.year,
          exam: paper.examType || paper.title,
          marks: q.marks,
          text: q.text,
          solved: q.solved,
          hint: q.hint,
          moduleNumber: currentModNum,
          moduleName: module.name,
          frequency: `KTU ${paper.year} (${paper.examType || 'Dec'})`,
          paperId: paper.id,
          source: 'paper',
          topicId: q.topicId,
          topicName: q.topicName
        }))
    );

    // 2. Topics in this module with attached questions
    const topicsWithQuestions = (module.topics || []).map(topic => {
      // Direct topic questions
      const directQuestions = (topic.previousQuestions || []).map(q => ({
        ...q,
        source: 'topic',
        topicId: topic.id,
        topicName: topic.name,
        moduleId: module.id,
        moduleName: module.name,
        moduleNumber: currentModNum
      }));

      // Paper questions for this topic
      const paperQsForTopic = paperQuestionsForModule.filter(
        q => q.topicId === topic.id || (q.topicName && q.topicName.toLowerCase() === topic.name.toLowerCase())
      );

      // Merge and deduplicate by text
      const seen = new Set();
      const combined = [];
      for (const q of [...directQuestions, ...paperQsForTopic]) {
        const key = (q.text || '').toLowerCase().slice(0, 40);
        if (!seen.has(key)) {
          seen.add(key);
          combined.push(q);
        }
      }

      return {
        topic,
        questions: combined,
        solvedCount: combined.filter(q => q.solved).length,
        totalMarks: combined.reduce((acc, q) => acc + (parseInt(q.marks) || 0), 0)
      };
    });

    // Check for any module questions that didn't match any specific topic
    const matchedQIds = new Set(topicsWithQuestions.flatMap(t => t.questions.map(q => q.id)));
    const unassignedQuestions = paperQuestionsForModule.filter(q => !matchedQIds.has(q.id));

    if (unassignedQuestions.length > 0 && topicsWithQuestions.length > 0) {
      topicsWithQuestions[0].questions.push(...unassignedQuestions);
      topicsWithQuestions[0].solvedCount = topicsWithQuestions[0].questions.filter(q => q.solved).length;
      topicsWithQuestions[0].totalMarks = topicsWithQuestions[0].questions.reduce((acc, q) => acc + (parseInt(q.marks) || 0), 0);
    }

    const allModuleQs = topicsWithQuestions.flatMap(t => t.questions);

    return {
      module,
      moduleNumber: currentModNum,
      topics: topicsWithQuestions,
      allQuestions: allModuleQs,
      totalQuestionsCount: allModuleQs.length,
      solvedCount: allModuleQs.filter(q => q.solved).length,
      totalMarks: allModuleQs.reduce((acc, q) => acc + (parseInt(q.marks) || 0), 0)
    };
  });

  // Calculate high-level module-wise metrics
  const allModuleQuestions = rawModuleWiseData.flatMap(m => m.allQuestions);
  const totalModuleQuestionsCount = allModuleQuestions.length;
  const solvedModuleQuestionsCount = allModuleQuestions.filter(q => q.solved).length;
  const totalModuleMarks = allModuleQuestions.reduce((sum, q) => sum + (parseInt(q.marks) || 0), 0);
  const solvedModulePercent = totalModuleQuestionsCount > 0 ? Math.round((solvedModuleQuestionsCount / totalModuleQuestionsCount) * 100) : 0;
  const highYieldQuestionsCount = allModuleQuestions.filter(q => (parseInt(q.marks) || 0) >= 14 || (q.frequency && q.frequency.toLowerCase().includes('times'))).length;

  // Filter module-wise data based on search, status filter, and module filter
  const filteredModuleWiseData = rawModuleWiseData
    .filter(mGroup => selectedModuleFilter === 'ALL' || mGroup.moduleNumber.toString() === selectedModuleFilter.toString() || mGroup.module.id === selectedModuleFilter)
    .map(mGroup => {
      const filteredTopics = mGroup.topics
        .map(tGroup => {
          let qs = tGroup.questions;

          // Status filter
          if (filterStatus === 'solved') {
            qs = qs.filter(q => q.solved);
          } else if (filterStatus === 'unsolved') {
            qs = qs.filter(q => !q.solved);
          } else if (filterStatus === 'high-yield') {
            qs = qs.filter(q => (parseInt(q.marks) || 0) >= 14 || (q.frequency && q.frequency.toLowerCase().includes('times')));
          }

          // Search query filter
          if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            qs = qs.filter(q => 
              (q.text && q.text.toLowerCase().includes(query)) ||
              (tGroup.topic.name && tGroup.topic.name.toLowerCase().includes(query)) ||
              (q.hint && q.hint.toLowerCase().includes(query)) ||
              (q.frequency && q.frequency.toLowerCase().includes(query))
            );
          }

          return {
            ...tGroup,
            questions: qs
          };
        })
        .filter(tGroup => tGroup.questions.length > 0 || (!searchQuery && filterStatus === 'all'));

      return {
        ...mGroup,
        topics: filteredTopics
      };
    })
    .filter(mGroup => mGroup.topics.length > 0);

  // Toggle question solved in paper view
  const handleToggleQuestionInPaper = (paperId, questionId) => {
    const updatedPapers = pastPapers.map(paper => {
      if (paper.id !== paperId) return paper;
      const updatedQuestions = (paper.questions || []).map(q => 
        q.id === questionId ? { ...q, solved: !q.solved } : q
      );
      return {
        ...paper,
        questions: updatedQuestions
      };
    });

    onUpdateSubject({
      ...subject,
      pastPapers: updatedPapers
    });
  };

  // Toggle question solved in Module-Wise view (syncs modules & past papers)
  const handleToggleModuleQuestion = (question) => {
    // 1. Update in topic.previousQuestions if present
    const updatedModules = (subject.modules || []).map(mod => {
      if (mod.id !== question.moduleId && mod.number !== question.moduleNumber) return mod;
      const updatedTopics = (mod.topics || []).map(top => {
        if (top.id !== question.topicId) return top;
        const updatedPQs = (top.previousQuestions || []).map(pq => 
          pq.id === question.id ? { ...pq, solved: !pq.solved } : pq
        );
        return { ...top, previousQuestions: updatedPQs };
      });
      return { ...mod, topics: updatedTopics };
    });

    // 2. Also sync to pastPapers if corresponding question exists
    const updatedPapers = pastPapers.map(paper => {
      const updatedQs = (paper.questions || []).map(pq => {
        if (pq.id === question.id || (pq.text && question.text && pq.text.trim() === question.text.trim())) {
          return { ...pq, solved: !question.solved };
        }
        return pq;
      });
      return { ...paper, questions: updatedQs };
    });

    onUpdateSubject({
      ...subject,
      modules: updatedModules,
      pastPapers: updatedPapers
    });
  };

  // Toggle answer hint visibility
  const toggleHint = (qId) => {
    setShowHintMap(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Delete past paper
  const handleDeletePaper = (paperId) => {
    if (window.confirm('Are you sure you want to delete this past question paper?')) {
      onUpdateSubject({
        ...subject,
        pastPapers: pastPapers.filter(p => p.id !== paperId)
      });
    }
  };

  // Add new Question Paper
  const handleCreatePaper = (e) => {
    e.preventDefault();
    if (!newPaperTitle.trim()) return;

    const parsedQuestions = newPaperQuestionsText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map((text, idx) => ({
        id: 'q-' + Date.now() + '-' + idx,
        number: `Q${idx + 1}`,
        text: text.replace(/^[0-9]+[.)]\s*/, ''),
        marks: 14,
        solved: false,
        hint: ''
      }));

    const newPaper = {
      id: 'qp-' + Date.now(),
      title: newPaperTitle.trim(),
      year: parseInt(newPaperYear) || 2026,
      examType: newPaperType,
      marks: parseInt(newPaperMarks) || 100,
      difficulty: 'Standard',
      questions: parsedQuestions.length > 0 ? parsedQuestions : [
        { id: 'q-default-1', number: 'Q1', text: 'Explain key analytical mechanisms and compare theoretical derivations.', marks: 14, solved: false, hint: '' }
      ]
    };

    onUpdateSubject({
      ...subject,
      pastPapers: [newPaper, ...pastPapers]
    });

    setIsAddPaperOpen(false);
    setNewPaperTitle('');
    setNewPaperQuestionsText('');
  };

  // Print paper
  const handlePrintPaper = (paper) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <html>
        <head>
          <title>${subject.name} - ${paper.title} (${paper.year})</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }
            .header { text-align: center; border-bottom: 2px solid #334155; padding-bottom: 16px; margin-bottom: 24px; }
            .meta { display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 20px; font-size: 13px; color: #475569; }
            .question { margin-bottom: 16px; padding: 10px 14px; background: #f8fafc; border-left: 4px solid #6366f1; border-radius: 4px; font-size: 14px; }
            .q-num { font-weight: bold; color: #4338ca; margin-right: 8px; }
            .marks { float: right; font-weight: bold; color: #64748b; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>APJ Abdul Kalam Technological University (KTU)</h2>
            <h3>${subject.name} (${subject.code || 'COURSE'})</h3>
            <p><strong>${paper.title} — ${paper.year}</strong></p>
          </div>
          <div class="meta">
            <span>Type: ${paper.examType}</span>
            <span>Maximum Marks: ${paper.marks}</span>
            <span>Duration: 3 Hours</span>
          </div>
          ${(paper.questions || []).map((q, i) => `
            <div class="question">
              <span class="q-num">${q.number || `Q${i + 1}`}.</span>
              <span>${q.text}</span>
              <span class="marks">[${q.marks || 10} Marks]</span>
            </div>
          `).join('')}
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 500);
  };

  // Print entire Module-Wise Question Bank
  const handlePrintModuleQuestionBank = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    let contentHtml = `
      <html>
        <head>
          <title>${subject.name} - KTU Module-Wise Question Bank (2019-2026)</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #0f172a; line-height: 1.5; }
            .header { text-align: center; border-bottom: 2px solid #334155; padding-bottom: 16px; margin-bottom: 24px; }
            .module-title { background: #f1f5f9; padding: 12px 16px; border-left: 6px solid #4f46e5; font-size: 16px; font-weight: bold; margin-top: 30px; margin-bottom: 14px; }
            .topic-title { font-size: 14px; font-weight: bold; color: #4338ca; margin-top: 16px; margin-bottom: 8px; }
            .question-item { margin-bottom: 14px; padding: 10px 14px; background: #fafafa; border: 1px solid #e2e8f0; border-radius: 6px; }
            .badge { display: inline-block; font-size: 11px; padding: 2px 8px; background: #e0e7ff; color: #3730a3; border-radius: 4px; font-weight: bold; margin-right: 6px; }
            .marks { float: right; font-weight: bold; color: #475569; font-size: 12px; }
            .hint { font-size: 11px; color: #4338ca; font-style: italic; margin-top: 6px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>KTU University Question Bank (2019 - 2026 December)</h2>
            <h3>${subject.name} (${subject.code || 'COURSE'})</h3>
            <p style="font-size: 13px; color: #64748b;">Comprehensive Question Bank Collected & Organised Module-by-Module</p>
          </div>
    `;

    rawModuleWiseData.forEach(group => {
      contentHtml += `<div class="module-title">${group.module.name} (${group.allQuestions.length} Questions • ${group.totalMarks} Marks)</div>`;
      group.topics.forEach(tData => {
        if (tData.questions.length > 0) {
          contentHtml += `<div class="topic-title">📌 ${tData.topic.name} (${tData.questions.length} Questions)</div>`;
          tData.questions.forEach((q, idx) => {
            contentHtml += `
              <div class="question-item">
                <span class="badge">${q.frequency || (q.year + ' ' + q.exam)}</span>
                <span class="marks">[${q.marks || 10} Marks]</span>
                <p style="margin: 6px 0 0 0; font-size: 13px; font-weight: 500;">${idx + 1}. ${q.text}</p>
                ${q.hint ? `<p class="hint">💡 Key Method / Solution Hint: ${q.hint}</p>` : ''}
              </div>
            `;
          });
        }
      });
    });

    contentHtml += `</body></html>`;
    printWindow.document.write(contentHtml);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="glass-panel p-6 sm:p-7 rounded-[28px] border border-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              KTU Official PYQ Archive (2019 – 2026 Dec)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            {subject.name} ({subject.code})
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-xl font-medium">
            Previous year question papers organized by <strong>Each Year (Set A & Set B)</strong> and collected into a comprehensive <strong>Module-Wise Question Bank</strong> (5 Modules).
          </p>
        </div>

        <button
          onClick={() => setIsAddPaperOpen(true)}
          className="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-md shadow-violet-200 transition-all self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Question Paper</span>
        </button>
      </div>

      {/* Master PDF Hub: Upload / Update Entire Multi-Year PDF & Auto-Categorize Questions */}
      <PdfMasterManager
        subject={subject}
        onUpdateSubject={onUpdateSubject}
        onOpenCompiledModuleBank={() => setViewMode('by-module')}
      />

      {/* Main Mode Switcher: Module-Wise Question Bank vs By Year Papers */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="inline-flex p-1 bg-slate-200/80 rounded-2xl border border-slate-300/60 shadow-inner">
          <button
            onClick={() => setViewMode('by-module')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              viewMode === 'by-module'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>🎯 Compiled Module-Wise Question Bank</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              viewMode === 'by-module' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-300/60 text-slate-600'
            }`}>
              5 Modules • {totalModuleQuestionsCount} Qs
            </span>
          </button>

          <button
            onClick={() => setViewMode('by-year')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              viewMode === 'by-year'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4 text-violet-600" />
            <span>📅 By Exam Year (2019-2026 Sets)</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              viewMode === 'by-year' ? 'bg-violet-100 text-violet-700' : 'bg-slate-300/60 text-slate-600'
            }`}>
              {pastPapers.length} Papers
            </span>
          </button>
        </div>

        {viewMode === 'by-module' && (
          <button
            onClick={handlePrintModuleQuestionBank}
            className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 border border-slate-200 shadow-xs transition-colors self-start sm:self-auto"
          >
            <Printer className="w-3.5 h-3.5 text-indigo-600" />
            <span>Print Module Revision Bank</span>
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* VIEW MODE 1: MODULE-WISE QUESTION BANK                                    */}
      {/* ========================================================================= */}
      {viewMode === 'by-module' ? (
        <div className="space-y-5 animate-in fade-in duration-200">
          {/* Top Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="glass-panel p-4 rounded-2xl border border-white">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Total Module Questions
              </span>
              <div className="text-2xl font-black text-slate-900 mt-1">
                {totalModuleQuestionsCount}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Aggregated from 16 KTU exam sets</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-white">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Questions Mastered
              </span>
              <div className="text-2xl font-black text-emerald-600 mt-1">
                {solvedModuleQuestionsCount} / {totalModuleQuestionsCount}
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-500" 
                  style={{ width: `${solvedModulePercent}%` }}
                />
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-white">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Total Exam Marks
              </span>
              <div className="text-2xl font-black text-indigo-600 mt-1">
                {totalModuleMarks} M
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Full KTU syllabus coverage</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-white">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <span>High-Yield KTU Problems</span>
                <Flame className="w-3.5 h-3.5 text-rose-500" />
              </span>
              <div className="text-2xl font-black text-rose-600 mt-1">
                {highYieldQuestionsCount}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">14-mark long answer or repeated</p>
            </div>
          </div>

          {/* Module Pills & Search Toolbar */}
          <div className="glass-panel p-4 rounded-2xl border border-white space-y-3">
            {/* Quick Module Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <span className="text-xs font-bold text-slate-400 uppercase mr-1 flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5 text-slate-500" />
                Module:
              </span>
              <button
                onClick={() => setSelectedModuleFilter('ALL')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedModuleFilter === 'ALL'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All 5 Modules
              </button>
              {[1, 2, 3, 4, 5].map(modNum => {
                const modData = rawModuleWiseData.find(m => m.moduleNumber === modNum);
                const count = modData ? modData.allQuestions.length : 0;
                const modRainbow = getModuleRainbowColor(modNum);
                const isSelected = selectedModuleFilter.toString() === modNum.toString();

                return (
                  <button
                    key={modNum}
                    onClick={() => setSelectedModuleFilter(modNum.toString())}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                      isSelected
                        ? modRainbow.chipActive
                        : `${modRainbow.chipInactive}`
                    }`}
                  >
                    <span>Module {modNum}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-black/20 text-white' : 'bg-white/80 text-slate-700'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search and Solved Status Filter */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1 border-t border-slate-100">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions by keyword (e.g. Cayley-Hamilton, Nernst, Fourier, laser, double integral)..."
                  className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xs"
                />
              </div>

              <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200/60 self-start md:self-auto shrink-0">
                {[
                  { id: 'all', label: 'All Qs' },
                  { id: 'unsolved', label: 'Unsolved' },
                  { id: 'solved', label: 'Solved' },
                  { id: 'high-yield', label: 'High Yield 🔥' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setFilterStatus(tab.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                      filterStatus === tab.id
                        ? 'bg-white text-indigo-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grouped Modules & Topics Accordion */}
          {filteredModuleWiseData.length === 0 ? (
            <div className="glass-panel p-12 rounded-[28px] border border-dashed border-slate-300 text-center">
              <Layers className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-800">No Questions Match Filter</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto font-medium">
                No past questions match your current search query. Try clearing the search or switching module filter.
              </p>
              {(searchQuery || filterStatus !== 'all' || selectedModuleFilter !== 'ALL') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilterStatus('all');
                    setSelectedModuleFilter('ALL');
                  }}
                  className="mt-3 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold border border-indigo-200"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          ) : (
            filteredModuleWiseData.map(mGroup => {
              const modRainbow = getModuleRainbowColor(mGroup.moduleNumber);

              return (
                <div key={mGroup.module.id || mGroup.moduleNumber} className={`glass-panel p-5 sm:p-6 rounded-[26px] border ${modRainbow.cardBorder} space-y-4 shadow-sm`}>
                  {/* Module Heading Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-xl bg-gradient-to-br ${modRainbow.gradient} text-white flex items-center justify-center font-black text-xs shadow-sm`}>
                        M{mGroup.moduleNumber}
                      </span>
                      <div>
                        <h3 className={`text-sm font-extrabold ${modRainbow.headerText} tracking-tight`}>
                          {mGroup.module.name}
                        </h3>
                        <span className="text-[11px] text-slate-500 font-medium">
                          KTU Module {mGroup.moduleNumber} Previous Year Questions
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${modRainbow.badgeBg}`}>
                        {mGroup.solvedCount}/{mGroup.totalQuestionsCount} Solved ({mGroup.totalMarks} Marks)
                      </span>
                    </div>
                  </div>

                {/* Topics in this module */}
                <div className="space-y-4">
                  {mGroup.topics.map(tData => (
                    <div 
                      key={tData.topic.id}
                      className="rounded-2xl border border-slate-200/90 bg-white/95 shadow-xs overflow-hidden"
                    >
                      {/* Topic Card Header */}
                      <div className="p-3.5 sm:p-4 bg-slate-50/70 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                          <h4 className="text-xs font-extrabold text-slate-900">
                            {tData.topic.name}
                          </h4>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                            tData.topic.status === 'revised' 
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                              : tData.topic.status === 'needs-revision'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : tData.topic.status === 'studied'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}>
                            {tData.topic.status.toUpperCase()}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200 flex items-center gap-1">
                            <Award className="w-3 h-3 text-indigo-600" />
                            <span>{tData.solvedCount}/{tData.questions.length} Solved • {tData.totalMarks} M</span>
                          </span>
                        </div>
                      </div>

                      {/* Topic Questions List */}
                      <div className="p-3.5 sm:p-4 space-y-3">
                        {tData.questions.length === 0 ? (
                          <p className="text-xs text-slate-400 italic py-1">
                            No past questions attached to this topic yet.
                          </p>
                        ) : (
                          tData.questions.map((q, idx) => (
                            <div 
                              key={q.id || idx}
                              className={`p-3.5 rounded-xl border transition-all ${
                                q.solved 
                                  ? 'bg-emerald-50/50 border-emerald-200 shadow-2xs' 
                                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xs'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <label className="flex items-start gap-3 flex-1 min-w-0 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={q.solved}
                                    onChange={() => handleToggleModuleQuestion(q)}
                                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-0 cursor-pointer shrink-0"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <p className={`text-xs font-medium leading-relaxed ${
                                      q.solved ? 'line-through text-slate-400' : 'text-slate-900 font-semibold'
                                    }`}>
                                      {q.text}
                                    </p>

                                    {/* Question Tag Badges */}
                                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1">
                                        <Calendar className="w-3 h-3 text-indigo-500" />
                                        <span>{q.frequency || `${q.year} KTU Paper`}</span>
                                      </span>
                                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                                        {q.marks || 14} Marks
                                      </span>
                                      {subject.masterPdf && (
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1">
                                          <FileText className="w-3 h-3 text-purple-500" />
                                          <span>Master PDF</span>
                                        </span>
                                      )}
                                      {q.hint && (
                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            toggleHint(q.id);
                                          }}
                                          className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-700 border border-slate-200 flex items-center gap-1 transition-colors"
                                        >
                                          {showHintMap[q.id] ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3 text-indigo-600" />}
                                          <span>{showHintMap[q.id] ? 'Hide Hint' : 'View Solution Hint'}</span>
                                        </button>
                                      )}
                                    </div>

                                    {/* Expandable Hint Container */}
                                    {q.hint && showHintMap[q.id] && (
                                      <div className="mt-2.5 p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 font-mono leading-relaxed">
                                        <span className="font-bold block text-indigo-700 mb-0.5">💡 Solution Method & Key Formulas:</span>
                                        {q.hint}
                                      </div>
                                    )}
                                  </div>
                                </label>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }))}
        </div>
      ) : (
        /* ========================================================================= */
        /* VIEW MODE 2: BY EXAM YEAR (2019 - 2026, 2 SETS PER YEAR)                  */
        /* ========================================================================= */
        <div className="space-y-6">
          {/* Year Filter Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setSelectedYear('ALL')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedYear === 'ALL'
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Years ({pastPapers.length} Papers)
              </button>
              {availableYears.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    selectedYear === year
                      ? 'bg-violet-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {year} (2 Sets)
                </button>
              ))}
            </div>

            <span className="text-xs font-medium text-slate-500 shrink-0">
              KTU 2019 Scheme Examination Archive
            </span>
          </div>

          {/* Grouped by Year */}
          <div className="space-y-8">
            {filteredYearsList.map(year => {
              const yearPapers = pastPapers.filter(p => p.year.toString() === year);
              if (yearPapers.length === 0) return null;

              return (
                <div key={year} className="space-y-3">
                  {/* Year Group Header */}
                  <div className="flex items-center gap-3 pb-1 border-b border-slate-200">
                    <span className="text-xs font-black uppercase tracking-wider text-violet-700 bg-violet-100 px-3 py-1 rounded-xl border border-violet-200">
                      KTU {year} Examination Papers
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {yearPapers.length} Paper Sets Available (Set A & Set B)
                    </span>
                  </div>

                  {/* Papers in this Year */}
                  <div className="grid grid-cols-1 gap-4">
                    {yearPapers.map(paper => {
                      const isExpanded = expandedPaperId === paper.id;
                      const totalQuestions = (paper.questions || []).length;
                      const solvedCount = (paper.questions || []).filter(q => q.solved).length;
                      const percentSolved = totalQuestions > 0 ? Math.round((solvedCount / totalQuestions) * 100) : 0;
                      const isSetA = (paper.examType || '').includes('Set A') || paper.title.includes('Set A');

                      return (
                        <div
                          key={paper.id}
                          className="glass-panel rounded-[26px] border border-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          {/* Header Bar */}
                          <div 
                            onClick={() => setExpandedPaperId(isExpanded ? null : paper.id)}
                            className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-white/40 transition-colors"
                          >
                            <div className="flex items-start sm:items-center gap-3.5">
                              <div className={`w-12 h-12 rounded-2xl text-white flex flex-col items-center justify-center shrink-0 shadow-md ${
                                isSetA 
                                  ? 'bg-gradient-to-br from-violet-600 to-indigo-600 shadow-violet-200' 
                                  : 'bg-gradient-to-br from-indigo-500 to-cyan-600 shadow-indigo-200'
                              }`}>
                                <span className="text-[9px] font-black uppercase tracking-wider leading-none">SET</span>
                                <span className="text-base font-black leading-none mt-0.5">{isSetA ? 'A' : 'B'}</span>
                              </div>

                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                                    {paper.title}
                                  </h3>
                                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                                    isSetA 
                                      ? 'bg-violet-50 text-violet-700 border-violet-200' 
                                      : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                                  }`}>
                                    {paper.examType}
                                  </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-500 font-medium">
                                  <span>Maximum Marks: <strong>{paper.marks} M</strong></span>
                                  <span>•</span>
                                  <span>{totalQuestions} Exam Questions</span>
                                  <span>•</span>
                                  <span className="text-emerald-700 font-bold">
                                    {solvedCount}/{totalQuestions} solved ({percentSolved}%)
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePrintPaper(paper);
                                }}
                                className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 flex items-center gap-1.5 shadow-2xs transition-colors"
                                title="Print or save as PDF"
                              >
                                <Printer className="w-3.5 h-3.5 text-slate-500" />
                                <span className="hidden sm:inline">Print Paper</span>
                              </button>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeletePaper(paper.id);
                                }}
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                                title="Delete Paper"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>

                              <div className="p-1.5 text-slate-400">
                                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                              </div>
                            </div>
                          </div>

                          {/* Progress Bar under header */}
                          <div className="w-full bg-slate-100 h-1">
                            <div 
                              className="bg-emerald-500 h-full transition-all duration-300"
                              style={{ width: `${percentSolved}%` }}
                            />
                          </div>

                          {/* Expanded Questions Content */}
                          {isExpanded && (
                            <div className="p-5 sm:p-6 bg-slate-50/70 border-t border-slate-100 space-y-4">
                              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                                  <span>Questions from this Paper ({paper.year} {paper.examType})</span>
                                </h4>
                                <span className="text-xs text-slate-500 font-medium">
                                  Mark questions as solved as you practice
                                </span>
                              </div>

                              {/* Questions List */}
                              <div className="space-y-3">
                                {(paper.questions || []).map((q, idx) => (
                                  <div
                                    key={q.id || idx}
                                    className={`p-4 rounded-2xl border transition-all ${
                                      q.solved
                                        ? 'bg-emerald-50/60 border-emerald-200 shadow-2xs'
                                        : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-xs'
                                    }`}
                                  >
                                    <div className="flex items-start justify-between gap-3">
                                      <label className="flex items-start gap-3 flex-1 min-w-0 cursor-pointer">
                                        <input
                                          type="checkbox"
                                          checked={q.solved}
                                          onChange={() => handleToggleQuestionInPaper(paper.id, q.id)}
                                          className="mt-0.5 w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-0 cursor-pointer shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200/60">
                                              {q.number || `Q${idx + 1}`}
                                            </span>
                                            <span className="text-xs font-bold text-slate-500">
                                              [{q.marks || 14} Marks]
                                            </span>
                                            {q.moduleNumber && (
                                              <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-md border border-violet-200">
                                                Module {q.moduleNumber}
                                              </span>
                                            )}
                                            {q.topicName && (
                                              <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                                                {q.topicName}
                                              </span>
                                            )}
                                          </div>

                                          <p className={`text-xs font-medium leading-relaxed ${
                                            q.solved ? 'line-through text-slate-400' : 'text-slate-800'
                                          }`}>
                                            {q.text}
                                          </p>
                                        </div>
                                      </label>

                                      {q.hint && (
                                        <button
                                          onClick={() => toggleHint(q.id)}
                                          className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors shrink-0"
                                          title="Toggle Solution Hint"
                                        >
                                          {showHintMap[q.id] ? <EyeOff className="w-4 h-4" /> : <HelpCircle className="w-4 h-4 text-indigo-500" />}
                                        </button>
                                      )}
                                    </div>

                                    {q.hint && showHintMap[q.id] && (
                                      <div className="mt-3 p-3 bg-indigo-50 rounded-xl border border-indigo-200/80 text-xs text-indigo-900 font-mono leading-relaxed">
                                        <span className="font-bold block text-indigo-700 mb-0.5">💡 Solution Hint / Key Formula:</span>
                                        {q.hint}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Add Question Paper Modal */}
      <Modal
        isOpen={isAddPaperOpen}
        onClose={() => setIsAddPaperOpen(false)}
        title="Add KTU Question Paper"
        subtitle={`Upload or record official KTU question papers for ${subject.name}`}
      >
        <form onSubmit={handleCreatePaper} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Question Paper Title *
            </label>
            <input
              type="text"
              value={newPaperTitle}
              onChange={(e) => setNewPaperTitle(e.target.value)}
              placeholder="e.g. KTU University Examination - Dec 2026 (Set A)"
              autoFocus
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Year
              </label>
              <input
                type="number"
                value={newPaperYear}
                onChange={(e) => setNewPaperYear(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Set / Exam Type
              </label>
              <select
                value={newPaperType}
                onChange={(e) => setNewPaperType(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-violet-500"
              >
                <option value="Dec 2026 (Set A)">Dec (Set A)</option>
                <option value="Dec 2026 (Set B)">Dec (Set B)</option>
                <option value="End-Semester Final">End-Semester Final</option>
                <option value="Supplementary Exam">Supplementary</option>
                <option value="Model Paper">Model Paper</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Max Marks
              </label>
              <input
                type="number"
                value={newPaperMarks}
                onChange={(e) => setNewPaperMarks(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Questions (Paste one per line) *
            </label>
            <textarea
              value={newPaperQuestionsText}
              onChange={(e) => setNewPaperQuestionsText(e.target.value)}
              placeholder="Q1. State Cayley-Hamilton theorem and compute inverse.&#10;Q2. Evaluate double integral by changing the order of integration.&#10;Q3. Obtain Fourier series of f(x) = x^2 in (-pi, pi)."
              rows={5}
              className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-violet-500 font-mono"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAddPaperOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newPaperTitle.trim()}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 disabled:opacity-40 shadow-md shadow-violet-200"
            >
              Save Question Paper
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
