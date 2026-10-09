import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Edit3, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Search, 
  Filter, 
  Flame, 
  Award, 
  ListTodo, 
  CheckSquare, 
  Clock, 
  AlertTriangle,
  FileText,
  Sparkles
} from 'lucide-react';
import YouTubeIcon from './YouTubeIcon';
import TopicItem from './TopicItem';
import YouTubeEmbed from './YouTubeEmbed';
import PastQuestionPapers from './PastQuestionPapers';
import Modal from './Modal';
import { SUBJECT_COLORS, getModuleRainbowColor } from '../constants/initialData';
import { 
  calculateModuleProgress, 
  calculateSubjectProgress, 
  calculateSubjectRevisionProgress 
} from '../utils/progress';

export default function SubjectView({ 
  subject, 
  semesterKey, 
  onBack, 
  onUpdateSubject,
  initialModuleId
}) {
  const [selectedModuleId, setSelectedModuleId] = useState(
    initialModuleId || (subject.modules && subject.modules.length > 0 ? subject.modules[0].id : null)
  );

  // Sync selectedModuleId whenever initialModuleId changes (e.g. clicked in sidebar or dashboard)
  useEffect(() => {
    if (initialModuleId && subject.modules?.some(m => m.id === initialModuleId)) {
      setSelectedModuleId(initialModuleId);
    } else if (subject.modules && subject.modules.length > 0 && !subject.modules.some(m => m.id === selectedModuleId)) {
      setSelectedModuleId(subject.modules[0].id);
    }
  }, [initialModuleId, subject]);

  // Primary Tab state: 'syllabus' | 'tasks' | 'pyq'
  const [activeTab, setActiveTab] = useState('syllabus');
  
  // Modals state
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false);
  const [newModuleName, setNewModuleName] = useState('');
  
  const [moduleToEdit, setModuleToEdit] = useState(null);
  const [editModuleName, setEditModuleName] = useState('');

  const [moduleToDelete, setModuleToDelete] = useState(null);

  const [isAddTopicOpen, setIsAddTopicOpen] = useState(false);
  const [newTopicName, setNewTopicName] = useState('');
  const [newTopicNotes, setNewTopicNotes] = useState('');

  // Search & filter
  const [topicSearch, setTopicSearch] = useState('');
  const [topicFilter, setTopicFilter] = useState('all');

  // Subject To-Dos state
  const [isAddingSubjectTodo, setIsAddingSubjectTodo] = useState(false);
  const [newSubjectTodoText, setNewSubjectTodoText] = useState('');
  const [newSubjectTodoPriority, setNewSubjectTodoPriority] = useState('medium');

  // Subject YouTube state
  const [isEditingSubjectYt, setIsEditingSubjectYt] = useState(false);
  const [subjectYtInput, setSubjectYtInput] = useState('');

  // Edit Subject Details state
  const [isEditSubjectModalOpen, setIsEditSubjectModalOpen] = useState(false);
  const [editSubjectName, setEditSubjectName] = useState(subject.name);
  const [editSubjectCode, setEditSubjectCode] = useState(subject.code || '');
  const [editSubjectColor, setEditSubjectColor] = useState(subject.color || 'violet');
  const [editSubjectExamDate, setEditSubjectExamDate] = useState(subject.examDate || '');
  const [editSubjectVenue, setEditSubjectVenue] = useState(subject.venue || '');

  // Current active module
  const currentModule = (subject.modules || []).find(m => m.id === selectedModuleId) || subject.modules?.[0];
  const activeModIndex = subject.modules ? subject.modules.findIndex(m => m.id === currentModule?.id) : 0;
  const activeModColor = getModuleRainbowColor(currentModule?.number || activeModIndex + 1);

  // Filter topics in current module
  const filteredTopics = (currentModule?.topics || []).filter(topic => {
    const matchesSearch = topic.name.toLowerCase().includes(topicSearch.toLowerCase()) ||
      (topic.notes && topic.notes.toLowerCase().includes(topicSearch.toLowerCase()));
    
    if (topicFilter === 'all') return matchesSearch;
    return matchesSearch && topic.status === topicFilter;
  });

  // Calculate stats
  const subjectProgress = Math.round(calculateSubjectProgress(subject) * 100);
  const subjectRevision = Math.round(calculateSubjectRevisionProgress(subject));
  const subjectColorObj = SUBJECT_COLORS.find(c => c.id === subject.color) || SUBJECT_COLORS[0];
  const subjectTodos = subject.todos || [];
  const completedSubjectTodosCount = subjectTodos.filter(t => t.done).length;

  // MODULE CRUD
  const handleAddModule = (e) => {
    e.preventDefault();
    if (!newModuleName.trim()) return;
    const newMod = {
      id: 'mod-' + Date.now(),
      name: newModuleName.trim(),
      number: (subject.modules || []).length + 1,
      topics: []
    };
    const updatedModules = [...(subject.modules || []), newMod];
    onUpdateSubject({
      ...subject,
      modules: updatedModules
    });
    setSelectedModuleId(newMod.id);
    setNewModuleName('');
    setIsAddModuleOpen(false);
  };

  const handleSaveEditModule = (e) => {
    e.preventDefault();
    if (!editModuleName.trim() || !moduleToEdit) return;
    const updatedModules = (subject.modules || []).map(m => 
      m.id === moduleToEdit.id ? { ...m, name: editModuleName.trim() } : m
    );
    onUpdateSubject({
      ...subject,
      modules: updatedModules
    });
    setModuleToEdit(null);
  };

  const handleConfirmDeleteModule = () => {
    if (!moduleToDelete) return;
    const updatedModules = (subject.modules || []).filter(m => m.id !== moduleToDelete.id);
    onUpdateSubject({
      ...subject,
      modules: updatedModules
    });
    if (selectedModuleId === moduleToDelete.id) {
      setSelectedModuleId(updatedModules.length > 0 ? updatedModules[0].id : null);
    }
    setModuleToDelete(null);
  };

  // TOPIC CRUD
  const handleAddTopic = (e) => {
    e.preventDefault();
    if (!newTopicName.trim() || !currentModule) return;
    const newTopic = {
      id: 'top-' + Date.now(),
      name: newTopicName.trim(),
      status: 'not-started',
      notes: newTopicNotes.trim(),
      subTopics: []
    };

    const updatedModules = (subject.modules || []).map(m => {
      if (m.id === currentModule.id) {
        return {
          ...m,
          topics: [...(m.topics || []), newTopic]
        };
      }
      return m;
    });

    onUpdateSubject({
      ...subject,
      modules: updatedModules
    });

    setNewTopicName('');
    setNewTopicNotes('');
    setIsAddTopicOpen(false);
  };

  const handleUpdateTopic = (updatedTopic) => {
    if (!currentModule) return;
    const updatedModules = (subject.modules || []).map(m => {
      if (m.id === currentModule.id) {
        return {
          ...m,
          topics: (m.topics || []).map(t => t.id === updatedTopic.id ? updatedTopic : t)
        };
      }
      return m;
    });

    onUpdateSubject({
      ...subject,
      modules: updatedModules
    });
  };

  const handleDeleteTopic = (topicId) => {
    if (!currentModule) return;
    const updatedModules = (subject.modules || []).map(m => {
      if (m.id === currentModule.id) {
        return {
          ...m,
          topics: (m.topics || []).filter(t => t.id !== topicId)
        };
      }
      return m;
    });

    onUpdateSubject({
      ...subject,
      modules: updatedModules
    });
  };

  // Subject To-Dos CRUD
  const handleAddSubjectTodo = (e) => {
    e.preventDefault();
    if (!newSubjectTodoText.trim()) return;
    const newTodo = {
      id: 'stodo-' + Date.now(),
      text: newSubjectTodoText.trim(),
      done: false,
      priority: newSubjectTodoPriority
    };
    onUpdateSubject({
      ...subject,
      todos: [...(subject.todos || []), newTodo]
    });
    setNewSubjectTodoText('');
    setIsAddingSubjectTodo(false);
  };

  const handleToggleSubjectTodo = (todoId) => {
    const updatedTodos = (subject.todos || []).map(t => 
      t.id === todoId ? { ...t, done: !t.done } : t
    );
    onUpdateSubject({ ...subject, todos: updatedTodos });
  };

  const handleDeleteSubjectTodo = (todoId) => {
    const updatedTodos = (subject.todos || []).filter(t => t.id !== todoId);
    onUpdateSubject({ ...subject, todos: updatedTodos });
  };

  // YouTube Link Save/Remove
  const handleSaveSubjectYouTube = (e) => {
    e.preventDefault();
    onUpdateSubject({
      ...subject,
      youtubeUrl: subjectYtInput.trim()
    });
    setIsEditingSubjectYt(false);
  };

  const handleRemoveSubjectYouTube = () => {
    onUpdateSubject({
      ...subject,
      youtubeUrl: ''
    });
  };

  // Edit Subject Info
  const handleSaveSubjectDetails = (e) => {
    e.preventDefault();
    onUpdateSubject({
      ...subject,
      name: editSubjectName.trim(),
      code: editSubjectCode.trim(),
      color: editSubjectColor,
      examDate: editSubjectExamDate,
      venue: editSubjectVenue.trim()
    });
    setIsEditSubjectModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Back & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="btn-gh inline-flex items-center gap-2 text-xs px-3 py-1.5 w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Repositories</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditSubjectModalOpen(true)}
            className="btn-gh flex items-center gap-1.5 px-3 py-1.5 text-xs"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Course Details</span>
          </button>

          {!subject.youtubeUrl && (
            <button
              onClick={() => {
                setSubjectYtInput('');
                setIsEditingSubjectYt(true);
              }}
              className="btn-gh text-red-400 hover:text-red-300 flex items-center gap-1.5 px-3 py-1.5 text-xs"
            >
              <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>Attach Lectures</span>
            </button>
          )}
        </div>
      </div>

      {/* Spacious Course Header Banner */}
      <div className="p-5 rounded-lg border border-[#30363d] bg-[#161b22] text-[#f0f6fc] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1 min-w-0">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border border-[#30363d] bg-[#0d1117] text-[#8b949e]">
                {subject.code || 'KTU'}
              </span>

              {subject.examDate && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[#30363d] bg-[#0d1117] text-[#c9d1d9] flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#8b949e]" />
                  <span>Exam: {new Date(subject.examDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </span>
              )}

              {subject.venue && (
                <span className="text-[11px] px-2 py-0.5 rounded border border-[#30363d] bg-[#0d1117] text-[#8b949e] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#8b949e]" />
                  <span>{subject.venue}</span>
                </span>
              )}
            </div>

            {/* Course Title */}
            <h1 className="text-xl sm:text-2xl font-bold text-[#f0f6fc] tracking-tight">
              {subject.name}
            </h1>

            <p className="text-xs text-[#8b949e]">
              {(subject.modules || []).length} syllabus modules • {(subject.modules || []).flatMap(m => m.topics || []).length} topics • {(subject.pastPapers || []).length} past question papers
            </p>
          </div>

          {/* Quick Dual Progress Gauges */}
          <div className="flex items-center gap-4 shrink-0 bg-[#0d1117] p-3 rounded-md border border-[#30363d]">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#8b949e] mb-0.5">
                Mastery
              </div>
              <div className="text-lg font-black text-[#f0f6fc] font-mono">
                {subjectProgress}%
              </div>
              <div className="w-20 bg-[#21262d] h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-[#238636] h-full" style={{ width: `${subjectProgress}%` }} />
              </div>
            </div>

            <div className="w-px h-8 bg-[#30363d]" />

            <div>
              <div className="text-[10px] font-mono uppercase text-[#8b949e] mb-0.5">
                Revision
              </div>
              <div className="text-lg font-black text-[#c9d1d9] font-mono">
                {subjectRevision}%
              </div>
              <div className="w-20 bg-[#21262d] h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-[#58a6ff] h-full" style={{ width: `${subjectRevision}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Subject YouTube Player if attached */}
        {subject.youtubeUrl && (
          <div className="mt-3 pt-3 border-t border-[#30363d]">
            <YouTubeEmbed
              url={subject.youtubeUrl}
              title={`${subject.name} — Full Course Lectures`}
              onRemove={handleRemoveSubjectYouTube}
              initialExpanded={false}
            />
          </div>
        )}
      </div>

      {/* Primary Clean Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-[#30363d]">
        <button
          onClick={() => setActiveTab('syllabus')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
            activeTab === 'syllabus'
              ? 'bg-[#21262d] text-[#f0f6fc] border border-[#30363d]'
              : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#161b22]'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Syllabus Modules & Topics</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full border border-[#30363d] bg-[#0d1117] text-[#8b949e]">
            {(subject.modules || []).length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('tasks')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
            activeTab === 'tasks'
              ? 'bg-[#21262d] text-[#f0f6fc] border border-[#30363d]'
              : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#161b22]'
          }`}
        >
          <ListTodo className="w-3.5 h-3.5" />
          <span>Course Tasks & To-Dos</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full border border-[#30363d] bg-[#0d1117] text-[#8b949e]">
            {completedSubjectTodosCount}/{subjectTodos.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('pyq')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
            activeTab === 'pyq'
              ? 'bg-[#21262d] text-[#f0f6fc] border border-[#30363d]'
              : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#161b22]'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>KTU Past Question Papers</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full border border-[#30363d] bg-[#0d1117] text-[#8b949e]">
            {(subject.pastPapers || []).length}
          </span>
        </button>
      </div>

      {/* TAB 1: SYLLABUS MODULES & TOPICS (Spacious, Uncluttered Layout) */}
      {activeTab === 'syllabus' && (
        <div className="space-y-5">
          {/* SPACIOUS HORIZONTAL MODULE SELECTOR WITH COLOR CODES */}
          <div className="bg-[#161b22] p-4 rounded-lg border border-[#30363d]">
            <div className="flex items-center justify-between mb-2.5 px-0.5">
              <span className="text-xs font-semibold text-[#f0f6fc]">
                Select Module (Color-Coded Syllabus Units)
              </span>
              <button
                onClick={() => setIsAddModuleOpen(true)}
                className="btn-gh text-xs px-2.5 py-1 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Module</span>
              </button>
            </div>

            {/* Horizontal Module Stepper Cards with Explicit Color Codes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {(subject.modules || []).map((mod, index) => {
                const modProgress = Math.round(calculateModuleProgress(mod) * 100);
                const isSelected = mod.id === (currentModule?.id || selectedModuleId);
                const modRainbow = getModuleRainbowColor(mod.number || index + 1);

                return (
                  <button
                    key={mod.id || index}
                    onClick={() => setSelectedModuleId(mod.id)}
                    className={`p-3 rounded-md border text-left transition-all flex flex-col justify-between group ${
                      isSelected
                        ? `border-[#58a6ff] bg-[#1c2128]`
                        : `border-[#30363d] bg-[#0d1117] hover:bg-[#161b22] hover:border-[#8b949e]`
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${modRainbow.badgeBg}`}>
                          M{mod.number || index + 1}
                        </span>

                        {/* Explicit Module Color Code */}
                        <span 
                          style={{
                            borderColor: `${modRainbow.hex}50`,
                            color: modRainbow.hex,
                            backgroundColor: `${modRainbow.hex}18`
                          }}
                          className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border"
                        >
                          {modRainbow.colorCode}
                        </span>

                        <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-[#f0f6fc]' : 'text-[#8b949e]'}`}>
                          {modProgress}%
                        </span>
                      </div>

                      <h4 className={`text-xs font-semibold line-clamp-2 leading-snug ${isSelected ? 'text-[#f0f6fc]' : 'text-[#c9d1d9] group-hover:text-[#f0f6fc]'}`}>
                        {mod.name.replace(/^Module\s*\d+\s*:\s*/i, '')}
                      </h4>
                    </div>

                    <div className="mt-2.5">
                      <div className="text-[10px] text-[#8b949e] font-mono mb-1">
                        {mod.topics?.length || 0} topics
                      </div>
                      <div className="w-full bg-[#21262d] h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-300"
                          style={{ width: `${modProgress}%`, backgroundColor: modRainbow.hex }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE MODULE CANVAS */}
          {currentModule ? (
            <div className="bg-[#161b22] p-5 sm:p-6 rounded-lg border border-[#30363d] space-y-4">
              {/* Module Header & Add Topic with Prominent Color Code Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#30363d]">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span 
                      style={{ color: activeModColor.hex }}
                      className="text-xs uppercase tracking-wider font-bold flex items-center gap-1.5"
                    >
                      <span 
                        style={{ backgroundColor: activeModColor.hex }}
                        className="w-2.5 h-2.5 rounded-full" 
                      />
                      <span>Module {currentModule.number || activeModIndex + 1} Syllabus</span>
                    </span>

                    {/* PROMINENT COLOR CODE BADGE */}
                    <span 
                      style={{
                        borderColor: `${activeModColor.hex}50`,
                        color: activeModColor.hex,
                        backgroundColor: `${activeModColor.hex}18`
                      }}
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded border flex items-center gap-1"
                    >
                      <span>COLOR:</span>
                      <span>{activeModColor.colorCode}</span>
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-[#f0f6fc] tracking-tight mt-1">
                    {currentModule.name}
                  </h2>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    onClick={() => {
                      setModuleToEdit(currentModule);
                      setEditModuleName(currentModule.name);
                    }}
                    className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors border border-zinc-800"
                    title="Rename this module"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsAddTopicOpen(true)}
                    style={{ backgroundColor: activeModColor.hex }}
                    className="px-4 py-2 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md hover:opacity-90 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Topic</span>
                  </button>
                </div>
              </div>

              {/* Search & Filter Toolbar */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    value={topicSearch}
                    onChange={(e) => setTopicSearch(e.target.value)}
                    placeholder="Search topics, notes, or tags in this module..."
                    className="w-full bg-[#0c0c0e] border border-zinc-800 rounded-xl pl-9 pr-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
                  />
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                  {[
                    { id: 'all', label: 'All Topics' },
                    { id: 'not-started', label: 'Not Started' },
                    { id: 'studied', label: 'Studied' },
                    { id: 'needs-revision', label: 'Needs Revision' },
                    { id: 'revised', label: 'Revised' }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setTopicFilter(f.id)}
                      className={`text-[11px] px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-colors border ${
                        topicFilter === f.id
                          ? 'bg-white text-black font-black border-white shadow-xs'
                          : 'bg-[#0c0c0e] text-zinc-400 hover:text-white hover:bg-zinc-900 border-zinc-800'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic List */}
              <div className="space-y-3 pt-1">
                {filteredTopics.length === 0 ? (
                  <div className="text-center py-14 px-4 border border-dashed border-zinc-800 rounded-2xl bg-[#0c0c0e]">
                    <BookOpen className="w-10 h-10 text-zinc-600 mx-auto mb-2" />
                    <h3 className="text-sm font-bold text-zinc-300">No Topics Found</h3>
                    <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto font-medium">
                      {topicSearch || topicFilter !== 'all'
                        ? 'No syllabus topics match your active search or filter.'
                        : 'No topics created in this module yet. Click below to add your first topic.'}
                    </p>
                    {(!topicSearch && topicFilter === 'all') && (
                      <button
                        onClick={() => setIsAddTopicOpen(true)}
                        style={{ backgroundColor: activeModColor.hex }}
                        className="mt-4 px-4 py-2 text-white rounded-xl text-xs font-bold shadow-sm"
                      >
                        + Add Topic Now
                      </button>
                    )}
                  </div>
                ) : (
                  filteredTopics.map((topic) => (
                    <TopicItem
                      key={topic.id}
                      topic={topic}
                      onUpdateTopic={handleUpdateTopic}
                      onDeleteTopic={handleDeleteTopic}
                    />
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-[#121214] rounded-2xl border border-zinc-800">
              <p className="text-sm text-zinc-500 font-bold">No module selected</p>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: COURSE TASKS & TO-DOS (Dedicated Spacious Task Board) */}
      {activeTab === 'tasks' && (
        <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-slate-200 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">
                Course Tasks & Action Items
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Track homework, assignments, lab records, and mock exam practice for this course
              </p>
            </div>

            {!isAddingSubjectTodo && (
              <button
                onClick={() => setIsAddingSubjectTodo(true)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Course Task</span>
              </button>
            )}
          </div>

          {/* Add Task Form */}
          {isAddingSubjectTodo && (
            <form onSubmit={handleAddSubjectTodo} className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-3">
              <input
                type="text"
                value={newSubjectTodoText}
                onChange={(e) => setNewSubjectTodoText(e.target.value)}
                placeholder="e.g. Solve KTU 2024 December Set A Module 1 Questions..."
                autoFocus
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600">Priority:</span>
                  <select
                    value={newSubjectTodoPriority}
                    onChange={(e) => setNewSubjectTodoPriority(e.target.value)}
                    className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-700 font-medium focus:outline-none"
                  >
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingSubjectTodo(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!newSubjectTodoText.trim()}
                    className="px-4 py-1.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-sm"
                  >
                    Save Task
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Task List */}
          <div className="space-y-2">
            {subjectTodos.length === 0 ? (
              <div className="text-center py-14 border border-dashed border-slate-200 rounded-2xl bg-slate-50">
                <ListTodo className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-slate-700">No Course Tasks Yet</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Keep track of practice papers, lab reports, or revision reminders here.
                </p>
                <button
                  onClick={() => setIsAddingSubjectTodo(true)}
                  className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-sm"
                >
                  + Add First Task
                </button>
              </div>
            ) : (
              subjectTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200/80 transition-all group"
                >
                  <label className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => handleToggleSubjectTodo(todo.id)}
                      className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-0 cursor-pointer"
                    />
                    <span className={`text-xs font-medium truncate ${todo.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {todo.text}
                    </span>
                  </label>

                  <div className="flex items-center gap-2 shrink-0">
                    {todo.priority === 'high' && (
                      <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md border border-rose-200">
                        HIGH
                      </span>
                    )}
                    <button
                      onClick={() => handleDeleteSubjectTodo(todo.id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition-all"
                      title="Delete task"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 3: PAST QUESTION PAPERS (Full KTU 2019-2026 Archive & Topic Bank) */}
      {activeTab === 'pyq' && (
        <PastQuestionPapers
          subject={subject}
          semesterKey={semesterKey}
          onUpdateSubject={onUpdateSubject}
          onNavigateToModule={(moduleId) => {
            if (moduleId) {
              setSelectedModuleId(moduleId);
            }
            setActiveTab('syllabus');
          }}
        />
      )}

      {/* Add Module Modal */}
      <Modal
        isOpen={isAddModuleOpen}
        onClose={() => setIsAddModuleOpen(false)}
        title="Add Syllabus Module"
        subtitle={`Enrolling in ${subject.name}`}
      >
        <form onSubmit={handleAddModule} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Module Name *
            </label>
            <input
              type="text"
              value={newModuleName}
              onChange={(e) => setNewModuleName(e.target.value)}
              placeholder="e.g. Module 6: Advanced Topics"
              autoFocus
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAddModuleOpen(false)}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newModuleName.trim()}
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-sm"
            >
              Create Module
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit Module Modal */}
      <Modal
        isOpen={!!moduleToEdit}
        onClose={() => setModuleToEdit(null)}
        title="Edit Module Name"
      >
        <form onSubmit={handleSaveEditModule} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Module Name
            </label>
            <input
              type="text"
              value={editModuleName}
              onChange={(e) => setEditModuleName(e.target.value)}
              autoFocus
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setModuleToEdit(null)}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!editModuleName.trim()}
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-sm"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>

      {/* Add Topic Modal */}
      <Modal
        isOpen={isAddTopicOpen}
        onClose={() => setIsAddTopicOpen(false)}
        title="Add Syllabus Topic"
        subtitle={`Adding to ${currentModule?.name || 'Current Module'}`}
      >
        <form onSubmit={handleAddTopic} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Topic Title *
            </label>
            <input
              type="text"
              value={newTopicName}
              onChange={(e) => setNewTopicName(e.target.value)}
              placeholder="e.g. Cayley-Hamilton Theorem & Inverse Calculation"
              autoFocus
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Initial Study Notes (Optional)
            </label>
            <textarea
              value={newTopicNotes}
              onChange={(e) => setNewTopicNotes(e.target.value)}
              placeholder="Write formulas, important KTU hints, or chapter references..."
              rows={3}
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAddTopicOpen(false)}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newTopicName.trim()}
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-sm"
            >
              Add Topic
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit Subject Modal */}
      <Modal
        isOpen={isEditSubjectModalOpen}
        onClose={() => setIsEditSubjectModalOpen(false)}
        title="Edit Course Details"
      >
        <form onSubmit={handleSaveSubjectDetails} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Course Name *
            </label>
            <input
              type="text"
              value={editSubjectName}
              onChange={(e) => setEditSubjectName(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Course Code
              </label>
              <input
                type="text"
                value={editSubjectCode}
                onChange={(e) => setEditSubjectCode(e.target.value)}
                placeholder="e.g. MAT101"
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Exam Date
              </label>
              <input
                type="date"
                value={editSubjectExamDate}
                onChange={(e) => setEditSubjectExamDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Exam Hall / Venue
            </label>
            <input
              type="text"
              value={editSubjectVenue}
              onChange={(e) => setEditSubjectVenue(e.target.value)}
              placeholder="e.g. Main Examination Hall 3B"
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsEditSubjectModalOpen(false)}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-sm"
            >
              Save Course
            </button>
          </div>
        </form>
      </Modal>

      {/* Attach YouTube Modal */}
      <Modal
        isOpen={isEditingSubjectYt}
        onClose={() => setIsEditingSubjectYt(false)}
        title="Attach Video Lectures"
        subtitle="Paste any YouTube playlist or video URL"
      >
        <form onSubmit={handleSaveSubjectYouTube} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              YouTube Video or Playlist URL
            </label>
            <input
              type="url"
              value={subjectYtInput}
              onChange={(e) => setSubjectYtInput(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              autoFocus
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsEditingSubjectYt(false)}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-sm"
            >
              Attach Video
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
