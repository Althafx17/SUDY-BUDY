import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Filter, 
  Search, 
  BookOpen, 
  ChevronRight, 
  Clock, 
  Award,
  Layers,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SUBJECT_COLORS, getModuleRainbowColor } from '../constants/initialData';

export default function RevisionMode({ 
  data, 
  onMarkTopicRevised,
  onOpenSubject 
}) {
  const [selectedSemester, setSelectedSemester] = useState('ALL');
  const [selectedSubjectId, setSelectedSubjectId] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all eligible topics (studied or needs-revision)
  const pendingRevisionList = [];
  let totalStudiedOrRevisedCount = 0;
  let totalRevisedCount = 0;

  const semestersToScan = selectedSemester === 'ALL' ? ['S1', 'S2'] : [selectedSemester];

  semestersToScan.forEach(semKey => {
    const sem = data[semKey];
    if (sem && sem.subjects) {
      sem.subjects.forEach(sub => {
        (sub.modules || []).forEach(mod => {
          (mod.topics || []).forEach(top => {
            if (top.status === 'studied' || top.status === 'needs-revision' || top.status === 'revised') {
              totalStudiedOrRevisedCount++;
              if (top.status === 'revised') {
                totalRevisedCount++;
              } else {
                pendingRevisionList.push({
                  semester: semKey,
                  subject: sub,
                  module: mod,
                  topic: top
                });
              }
            }
          });
        });
      });
    }
  });

  // Filter pending topics by subject filter & search query
  const filteredList = pendingRevisionList.filter(item => {
    const matchesSubject = selectedSubjectId === 'ALL' || item.subject.id === selectedSubjectId;
    const matchesSearch = item.topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.topic.notes && item.topic.notes.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSubject && matchesSearch;
  });

  // Group filtered list by Subject -> Module
  const groupedData = {};
  filteredList.forEach(item => {
    const subKey = item.subject.id;
    if (!groupedData[subKey]) {
      groupedData[subKey] = {
        subject: item.subject,
        semester: item.semester,
        modules: {}
      };
    }
    const modKey = item.module.id;
    if (!groupedData[subKey].modules[modKey]) {
      groupedData[subKey].modules[modKey] = {
        module: item.module,
        topics: []
      };
    }
    groupedData[subKey].modules[modKey].topics.push(item.topic);
  });

  const handleQuickMarkRevised = (semesterKey, subjectId, moduleId, topicId) => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#a855f7', '#ec4899', '#3b82f6', '#10b981', '#f59e0b']
      });
    } catch (e) {}

    onMarkTopicRevised(semesterKey, subjectId, moduleId, topicId);
  };

  const revisionPercentage = totalStudiedOrRevisedCount > 0
    ? Math.round((totalRevisedCount / totalStudiedOrRevisedCount) * 100)
    : 100;

  // List of all unique subjects for filter dropdown
  const allAvailableSubjects = [];
  ['S1', 'S2'].forEach(semKey => {
    (data[semKey]?.subjects || []).forEach(sub => {
      allAvailableSubjects.push({ id: sub.id, name: sub.name, semester: semKey });
    });
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="p-5 rounded-lg bg-[#161b22] border border-[#30363d] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/60 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              Pre-Exam Sprint
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#f0f6fc] tracking-tight mt-1.5">
            Revision Checklist Mode
          </h2>
          <p className="text-xs text-[#8b949e] mt-0.5 max-w-xl">
            Streamlined high-yield checklist showing only topics marked <em>Studied</em> or <em>Needs Revision</em>. 
          </p>
        </div>

        {/* Global Revision Progress Stat */}
        <div className="bg-[#0d1117] p-3.5 rounded-md border border-[#30363d] shrink-0 self-start md:self-auto min-w-[200px]">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-[#8b949e]">Revision Progress</span>
            <span className="font-mono font-bold text-[#2ea043]">{revisionPercentage}%</span>
          </div>
          <div className="w-full bg-[#21262d] h-1.5 rounded-full overflow-hidden mb-1.5">
            <div 
              className="h-full bg-[#238636] transition-all duration-300"
              style={{ width: `${revisionPercentage}%` }}
            />
          </div>
          <div className="text-[11px] text-[#8b949e] font-mono text-center">
            <strong className="text-[#f0f6fc]">{pendingRevisionList.length}</strong> items remaining to revise
          </div>
        </div>
      </div>

      {/* Toolbar: Filters & Search */}
      <div className="flex flex-col sm:flex-row items-center gap-2.5">
        {/* Monochrome Segmented Switcher */}
        <div className="flex items-center p-0.5 bg-[#0d1117] border border-[#30363d] rounded-md w-full sm:w-auto">
          {['ALL', 'S1', 'S2'].map(sem => (
            <button
              key={sem}
              onClick={() => {
                setSelectedSemester(sem);
                setSelectedSubjectId('ALL');
              }}
              className={`flex-1 sm:flex-none px-3 py-1 rounded text-xs font-semibold transition-all ${
                selectedSemester === sem
                  ? 'bg-[#21262d] text-[#f0f6fc] border border-[#30363d]'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              {sem === 'ALL' ? 'Both Semesters' : sem}
            </button>
          ))}
        </div>

        {/* Subject Filter Dropdown */}
        <div className="w-full sm:w-64">
          <select
            value={selectedSubjectId}
            onChange={(e) => setSelectedSubjectId(e.target.value)}
            className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-xs text-[#f0f6fc] focus:outline-none focus:border-[#58a6ff] cursor-pointer"
          >
            <option value="ALL" className="bg-[#161b22] text-[#f0f6fc]">All Subjects</option>
            {allAvailableSubjects
              .filter(s => selectedSemester === 'ALL' || s.semester === selectedSemester)
              .map(s => (
                <option key={s.id} value={s.id} className="bg-[#161b22] text-[#f0f6fc]">
                  {s.semester}: {s.name}
                </option>
              ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#8b949e]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics, modules, or notes..."
            className="w-full bg-[#0d1117] border border-[#30363d] rounded-md pl-8 pr-3 py-1.5 text-xs text-[#f0f6fc] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
          />
        </div>
      </div>

      {/* Grouped Checklist */}
      {Object.keys(groupedData).length === 0 ? (
        <div className="p-16 rounded-[28px] border border-dashed border-zinc-800 bg-[#121214]/60 text-center">
          <Sparkles className="w-12 h-12 text-zinc-400 mx-auto mb-3 animate-bounce" />
          <h3 className="text-lg font-bold text-white">All Caught Up on Revision!</h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto font-medium">
            {pendingRevisionList.length === 0
              ? "Every studied topic has been marked as revised. You're in peak exam readiness!"
              : "No pending revision topics match your current filter criteria."}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.values(groupedData).map(({ subject, semester, modules }) => {
            const subColor = SUBJECT_COLORS.find(c => c.id === subject.color) || SUBJECT_COLORS[0];

            return (
              <div 
                key={subject.id} 
                className="p-6 sm:p-7 rounded-[28px] bg-[#121214] border border-zinc-800 space-y-4 shadow-sm"
              >
                {/* Subject Subheader */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700">
                      {semester} • {subject.code || 'COURSE'}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {subject.name}
                    </h3>
                  </div>

                  <button
                    onClick={() => onOpenSubject(semester, subject.id)}
                    className="text-xs text-zinc-300 hover:text-white flex items-center gap-1 font-bold"
                  >
                    <span>Full Syllabus</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Modules under this subject */}
                <div className="space-y-4">
                  {Object.values(modules).map(({ module, topics }) => {
                    const modRainbow = getModuleRainbowColor(module.number);

                    return (
                      <div key={module.id} className="space-y-2.5">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider pl-1">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: modRainbow.hex }} />
                          <span className="text-white font-extrabold">M{module.number || ''}</span>
                          <span className="text-zinc-200">{module.name}</span>
                          <span 
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono font-extrabold"
                            style={{
                              backgroundColor: `${modRainbow.hex}22`,
                              color: modRainbow.hex,
                              border: `1px solid ${modRainbow.hex}55`
                            }}
                          >
                            {modRainbow.colorCode}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-semibold">
                            ({topics.length} to revise)
                          </span>
                        </div>

                      {/* Topics */}
                      <div className="space-y-2">
                        {topics.map(topic => (
                          <div
                            key={topic.id}
                            className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                              topic.status === 'needs-revision'
                                ? 'bg-[#151310] border-amber-900/70 shadow-sm'
                                : 'bg-[#18181b] border-zinc-800 hover:border-zinc-700 shadow-sm'
                            }`}
                          >
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                              <div className="mt-0.5">
                                {topic.status === 'needs-revision' ? (
                                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                                ) : (
                                  <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-sm font-bold text-zinc-100">
                                    {topic.name}
                                  </span>
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                                    topic.status === 'needs-revision'
                                      ? 'bg-amber-950/70 text-amber-300 border-amber-800'
                                      : 'bg-zinc-800 text-zinc-300 border-zinc-700'
                                  }`}>
                                    {topic.status === 'needs-revision' ? 'Flagged For Revision' : 'Studied'}
                                  </span>
                                </div>

                                {topic.notes && (
                                  <div className="mt-1.5 p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 text-xs text-zinc-300 font-mono flex items-start gap-2">
                                    <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                                    <span className="line-clamp-2">{topic.notes}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* One-click Mark Revised Button */}
                            <button
                              onClick={() => handleQuickMarkRevised(semester, subject.id, module.id, topic.id)}
                              className="px-4 py-2 bg-white hover:bg-zinc-200 text-black rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm shrink-0 transition-all self-end sm:self-auto"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Mark Revised</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
