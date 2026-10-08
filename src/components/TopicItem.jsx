import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  AlertCircle, 
  FileText, 
  Plus, 
  Trash2, 
  ChevronDown, 
  ChevronUp, 
  Bookmark, 
  Tag, 
  ListTodo, 
  CheckSquare,
  Award,
  HelpCircle,
  Eye,
  EyeOff,
  Sparkles,
  Flame
} from 'lucide-react';
import YouTubeIcon from './YouTubeIcon';
import YouTubeEmbed from './YouTubeEmbed';
import { calculateTopicCompletion } from '../utils/progress';

export default function TopicItem({ 
  topic, 
  onUpdateTopic, 
  onDeleteTopic 
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newSubTopicName, setNewSubTopicName] = useState('');
  const [newTagInput, setNewTagInput] = useState('');
  const [isAddingTag, setIsAddingTag] = useState(false);
  
  // YouTube attachment state
  const [isAddingYt, setIsAddingYt] = useState(false);
  const [ytVideoInput, setYtVideoInput] = useState('');

  // Previous Exam Questions (PYQ) state
  const [isAddingPQ, setIsAddingPQ] = useState(false);
  const [newPQText, setNewPQText] = useState('');
  const [newPQYear, setNewPQYear] = useState(new Date().getFullYear().toString());
  const [newPQExam, setNewPQExam] = useState('End-Sem Final');
  const [newPQMarks, setNewPQMarks] = useState('15');
  const [newPQHint, setNewPQHint] = useState('');
  const [newPQFreq, setNewPQFreq] = useState('');
  const [showPQHintMap, setShowPQHintMap] = useState({});

  const completion = calculateTopicCompletion(topic);
  const completionPercent = Math.round(completion * 100);
  const isStudiedOrAbove = topic.status === 'studied' || topic.status === 'needs-revision' || topic.status === 'revised';

  // Toggle Sub-topic Done
  const handleToggleSubTopic = (subTopicId) => {
    const updatedSubTopics = (topic.subTopics || []).map(st => 
      st.id === subTopicId ? { ...st, done: !st.done } : st
    );

    let newStatus = topic.status;
    const hasAnyDone = updatedSubTopics.some(st => st.done);
    
    if (newStatus === 'not-started' && hasAnyDone) {
      newStatus = 'studied';
    }

    onUpdateTopic({
      ...topic,
      subTopics: updatedSubTopics,
      status: newStatus
    });
  };

  // Add Sub-topic / To-do
  const handleAddSubTopic = (e) => {
    e.preventDefault();
    if (!newSubTopicName.trim()) return;
    const newSub = {
      id: 'sub-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      name: newSubTopicName.trim(),
      done: false
    };
    onUpdateTopic({
      ...topic,
      subTopics: [...(topic.subTopics || []), newSub]
    });
    setNewSubTopicName('');
  };

  // Delete Sub-topic / To-do
  const handleDeleteSubTopic = (subTopicId) => {
    const updatedSubTopics = (topic.subTopics || []).filter(st => st.id !== subTopicId);
    onUpdateTopic({
      ...topic,
      subTopics: updatedSubTopics
    });
  };

  // Toggle "Mark for revision"
  const handleToggleRevisionFlag = () => {
    if (topic.status === 'needs-revision') {
      onUpdateTopic({ ...topic, status: 'studied' });
    } else {
      onUpdateTopic({ ...topic, status: 'needs-revision' });
    }
  };

  // Status Change
  const handleStatusChange = (newStatus) => {
    onUpdateTopic({
      ...topic,
      status: newStatus
    });
  };

  // Notes update
  const handleNotesChange = (e) => {
    onUpdateTopic({
      ...topic,
      notes: e.target.value
    });
  };

  // Add Tag
  const handleAddTag = (e) => {
    e.preventDefault();
    if (!newTagInput.trim()) return;
    const existing = topic.tags || [];
    if (!existing.includes(newTagInput.trim())) {
      onUpdateTopic({
        ...topic,
        tags: [...existing, newTagInput.trim()]
      });
    }
    setNewTagInput('');
    setIsAddingTag(false);
  };

  const handleRemoveTag = (tagToRemove) => {
    onUpdateTopic({
      ...topic,
      tags: (topic.tags || []).filter(t => t !== tagToRemove)
    });
  };

  // Save YouTube Video Attachment
  const handleAttachYouTube = (e) => {
    e.preventDefault();
    if (!ytVideoInput.trim()) return;
    onUpdateTopic({
      ...topic,
      youtubeUrl: ytVideoInput.trim()
    });
    setYtVideoInput('');
    setIsAddingYt(false);
  };

  const handleRemoveYouTube = () => {
    onUpdateTopic({
      ...topic,
      youtubeUrl: ''
    });
  };

  // Previous Exam Questions (PYQ) Handlers & Stats
  const previousQuestions = topic.previousQuestions || [];
  const solvedPQCount = previousQuestions.filter(q => q.solved).length;
  const totalPQCount = previousQuestions.length;
  const totalPQMarks = previousQuestions.reduce((sum, q) => sum + (parseInt(q.marks) || 0), 0);

  const handleTogglePQSolved = (pqId) => {
    const updatedPQs = previousQuestions.map(q => 
      q.id === pqId ? { ...q, solved: !q.solved } : q
    );
    onUpdateTopic({
      ...topic,
      previousQuestions: updatedPQs
    });
  };

  const handleAddPQ = (e) => {
    e.preventDefault();
    if (!newPQText.trim()) return;
    const newQ = {
      id: 'pq-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      year: parseInt(newPQYear) || 2024,
      exam: newPQExam || 'End-Sem Final',
      marks: parseInt(newPQMarks) || 15,
      text: newPQText.trim(),
      frequency: newPQFreq.trim() || 'Exam Question',
      solved: false,
      hint: newPQHint.trim()
    };
    onUpdateTopic({
      ...topic,
      previousQuestions: [newQ, ...previousQuestions]
    });
    setNewPQText('');
    setNewPQHint('');
    setNewPQFreq('');
    setIsAddingPQ(false);
  };

  const handleDeletePQ = (pqId) => {
    onUpdateTopic({
      ...topic,
      previousQuestions: previousQuestions.filter(q => q.id !== pqId)
    });
  };

  const togglePQHint = (pqId) => {
    setShowPQHintMap(prev => ({ ...prev, [pqId]: !prev[pqId] }));
  };

  // Status color badge helper for monochrome theme
  const getStatusBadge = () => {
    switch (topic.status) {
      case 'revised':
        return {
          label: 'Revised',
          color: 'bg-emerald-950/70 text-emerald-300 border-emerald-800/80',
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        };
      case 'needs-revision':
        return {
          label: 'Needs Revision',
          color: 'bg-amber-950/70 text-amber-300 border-amber-800/80',
          icon: <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
        };
      case 'studied':
        return {
          label: 'Studied',
          color: 'bg-zinc-800 text-zinc-200 border-zinc-700',
          icon: <Clock className="w-3.5 h-3.5 text-zinc-300" />
        };
      default:
        return {
          label: 'Not Started',
          color: 'bg-zinc-900 text-zinc-400 border-zinc-800',
          icon: <Circle className="w-3.5 h-3.5 text-zinc-500" />
        };
    }
  };

  const statusBadge = getStatusBadge();

  return (
    <div className={`group rounded-[22px] border transition-all duration-300 ${
      topic.status === 'revised' 
        ? 'bg-[#121413] border-emerald-900/60 shadow-sm' 
        : topic.status === 'needs-revision'
        ? 'bg-[#151310] border-amber-900/60 shadow-sm'
        : 'bg-[#121214] border-zinc-800/80 hover:border-zinc-700 shadow-sm'
    }`}>
      {/* Main Bar */}
      <div className="p-4 sm:p-4.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left: Checkmark / Title */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <button
            onClick={() => {
              if (topic.status === 'not-started') handleStatusChange('studied');
              else if (topic.status === 'studied') handleStatusChange('revised');
              else if (topic.status === 'needs-revision') handleStatusChange('revised');
              else handleStatusChange('not-started');
            }}
            className="mt-0.5 shrink-0 text-zinc-500 hover:text-zinc-300 transition-colors"
            title="Cycle topic status"
          >
            {topic.status === 'revised' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950/60" />
            ) : topic.status === 'needs-revision' ? (
              <AlertCircle className="w-5 h-5 text-amber-400 fill-amber-950/60" />
            ) : topic.status === 'studied' ? (
              <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            ) : (
              <Circle className="w-5 h-5 text-zinc-600 hover:text-zinc-400" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-base font-bold transition-all ${
                topic.status === 'revised' ? 'text-zinc-500 line-through/30' : 'text-zinc-100'
              }`}>
                {topic.name}
              </span>

              {/* Status Selector Pill */}
              <div className="relative inline-flex items-center">
                <select
                  value={topic.status}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  className={`text-xs font-bold px-3 py-1 rounded-full border appearance-none pr-6 cursor-pointer outline-none transition-colors ${statusBadge.color}`}
                >
                  <option value="not-started" className="bg-zinc-900 text-zinc-300">Not Started</option>
                  <option value="studied" className="bg-zinc-900 text-zinc-300">Studied</option>
                  <option value="needs-revision" className="bg-zinc-900 text-amber-300">Needs Revision</option>
                  <option value="revised" className="bg-zinc-900 text-emerald-300">Revised</option>
                </select>
                <ChevronDown className="w-3 h-3 absolute right-2 pointer-events-none opacity-60" />
              </div>

              {/* Revision toggle (shown when studied or needs-revision) */}
              {isStudiedOrAbove && (
                <button
                  onClick={handleToggleRevisionFlag}
                  className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full border transition-all ${
                    topic.status === 'needs-revision'
                      ? 'bg-amber-950/70 text-amber-300 border-amber-800 shadow-sm'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-amber-300 hover:border-amber-800 hover:bg-amber-950/40'
                  }`}
                  title="Toggle revision flag"
                >
                  <Bookmark className="w-3 h-3" />
                  <span>{topic.status === 'needs-revision' ? 'Marked for Revision' : 'Flag for Revision'}</span>
                </button>
              )}
            </div>

            {/* Sub-topics count, PYQ badge, YouTube badge, notes & tags */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {topic.subTopics && topic.subTopics.length > 0 && (
                <span className="text-xs font-medium text-zinc-300 bg-zinc-900/90 px-2 py-0.5 rounded-lg border border-zinc-800 flex items-center gap-1">
                  <CheckSquare className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{topic.subTopics.filter(st => st.done).length}/{topic.subTopics.length} to-dos ({completionPercent}%)</span>
                </span>
              )}

              {/* Topic-Wise Previous Exam Questions Badge */}
              {totalPQCount > 0 && (
                <span className="text-xs font-bold text-zinc-200 bg-zinc-900/90 px-2.5 py-0.5 rounded-lg border border-zinc-700/80 flex items-center gap-1.5 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-zinc-300" />
                  <span>{solvedPQCount}/{totalPQCount} PYQ{totalPQCount > 1 ? 's' : ''} ({totalPQMarks} M)</span>
                </span>
              )}

              {topic.youtubeUrl && (
                <span className="text-xs text-red-400 bg-red-950/40 px-2 py-0.5 rounded-lg border border-red-900/50 flex items-center gap-1 font-bold">
                  <YouTubeIcon className="w-3.5 h-3.5 text-red-500" /> YT Video
                </span>
              )}

              {topic.notes && topic.notes.trim().length > 0 && (
                <span className="text-xs text-zinc-300 bg-zinc-900/90 px-2 py-0.5 rounded-lg border border-zinc-800 flex items-center gap-1 font-medium">
                  <FileText className="w-3.5 h-3.5 text-zinc-400" /> Note attached
                </span>
              )}

              {/* Tags */}
              {(topic.tags || []).map((tag, idx) => (
                <span key={idx} className="text-[11px] font-semibold bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-md border border-zinc-800 flex items-center gap-1">
                  #{tag}
                  <button 
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-red-400 text-zinc-500 ml-0.5 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
              isExpanded 
                ? 'bg-white text-black border-white shadow-xs' 
                : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-current" />
            <span>To-Dos & Media</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => onDeleteTopic(topic.id)}
            className="p-1.5 text-zinc-500 hover:text-rose-400 hover:bg-rose-950/40 rounded-xl transition-colors"
            title="Delete topic"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar under topic */}
      {topic.subTopics && topic.subTopics.length > 0 && (
        <div className="w-full bg-zinc-900 h-1.5">
          <div 
            className="bg-gradient-to-r from-zinc-400 to-white h-1.5 transition-all duration-300"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      )}

      {/* Expanded Drawer: To-Dos, YouTube Video, Notes & Tags */}
      {isExpanded && (
        <div className="p-5 border-t border-zinc-800 bg-[#0d0d0f] rounded-b-[22px] space-y-4 transition-all">
          {/* Attached YouTube Lecture Video Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                <span>Lecture Video / Tutorial (YouTube)</span>
              </label>

              {!topic.youtubeUrl && !isAddingYt && (
                <button
                  type="button"
                  onClick={() => setIsAddingYt(true)}
                  className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Attach YouTube Video
                </button>
              )}
            </div>

            {/* If video attached, show embedded player */}
            {topic.youtubeUrl ? (
              <YouTubeEmbed
                url={topic.youtubeUrl}
                title={`${topic.name} — Lecture`}
                onRemove={handleRemoveYouTube}
                initialExpanded={false}
              />
            ) : isAddingYt ? (
              <form onSubmit={handleAttachYouTube} className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#141416] border border-zinc-700">
                <input
                  type="url"
                  value={ytVideoInput}
                  onChange={(e) => setYtVideoInput(e.target.value)}
                  placeholder="Paste YouTube video link (e.g. https://www.youtube.com/watch?v=...)"
                  autoFocus
                  className="flex-1 bg-[#09090b] border border-zinc-700 rounded-xl px-3 py-1.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-400"
                />
                <button
                  type="submit"
                  disabled={!ytVideoInput.trim()}
                  className="px-3.5 py-1.5 bg-white hover:bg-zinc-200 disabled:opacity-40 text-black rounded-xl text-xs font-bold"
                >
                  Attach
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingYt(false)}
                  className="px-2 py-1.5 text-xs text-zinc-400 hover:text-zinc-200"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <p className="text-[11px] text-zinc-500 italic">
                No YouTube lecture attached yet. Click "Attach YouTube Video" to link concept lectures or tutorials.
              </p>
            )}
          </div>

          {/* Topic To-Dos / Checklist Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <ListTodo className="w-3.5 h-3.5 text-zinc-300" />
                <span>Topic Action Items & To-Dos</span>
                <span className="text-[11px] font-semibold text-zinc-500">
                  ({(topic.subTopics || []).filter(s => s.done).length}/{(topic.subTopics || []).length} done)
                </span>
              </h4>
            </div>

            {/* Checklist items */}
            <div className="space-y-1.5">
              {(topic.subTopics || []).length === 0 ? (
                <p className="text-xs text-zinc-500 italic py-1">
                  No to-dos yet. Add action items below (e.g. "Watch lecture video", "Solve exercise 4.2", "Review cheat sheet").
                </p>
              ) : (
                topic.subTopics.map((st) => (
                  <div 
                    key={st.id} 
                    className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#141416] hover:bg-[#1a1a1e] transition-colors border border-zinc-800 group/sub"
                  >
                    <label className="flex items-center gap-2.5 flex-1 min-w-0 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={st.done}
                        onChange={() => handleToggleSubTopic(st.id)}
                        className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-white focus:ring-0 cursor-pointer accent-white"
                      />
                      <span className={`text-xs font-medium transition-colors ${st.done ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
                        {st.name}
                      </span>
                    </label>
                    <button
                      onClick={() => handleDeleteSubTopic(st.id)}
                      className="opacity-0 group-hover/sub:opacity-100 p-1 text-zinc-500 hover:text-rose-400 transition-all"
                      title="Delete action item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Add Action Item Inline Form */}
            <form onSubmit={handleAddSubTopic} className="mt-2.5 flex items-center gap-2">
              <input
                type="text"
                value={newSubTopicName}
                onChange={(e) => setNewSubTopicName(e.target.value)}
                placeholder="Add new topic to-do (e.g. solve numerical problem, derive formula)..."
                className="flex-1 bg-[#141416] border border-zinc-700 rounded-xl px-3 py-1.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-400"
              />
              <button
                type="submit"
                disabled={!newSubTopicName.trim()}
                className="px-3.5 py-1.5 bg-white hover:bg-zinc-200 disabled:opacity-40 text-black rounded-xl text-xs font-bold flex items-center gap-1 transition-colors shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add To-Do</span>
              </button>
            </form>
          </div>

          {/* Topic-Wise Previous Exam Questions (PYQ) Section */}
          <div className="p-4 rounded-2xl bg-[#141416] border border-zinc-800 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-200 shrink-0">
                  <Award className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100 flex flex-wrap items-center gap-1.5">
                    <span>Topic Previous Exam Questions</span>
                    <span className="text-[11px] font-bold text-zinc-200 bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-700">
                      {solvedPQCount}/{totalPQCount} Solved • {totalPQMarks} Marks
                    </span>
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-medium">
                    Past university and midterm questions asked specifically on this concept.
                  </p>
                </div>
              </div>

              {!isAddingPQ && (
                <button
                  type="button"
                  onClick={() => setIsAddingPQ(true)}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors self-start sm:self-auto border border-zinc-700"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Exam Question</span>
                </button>
              )}
            </div>

            {/* Add Past Question Form */}
            {isAddingPQ && (
              <form onSubmit={handleAddPQ} className="p-3.5 rounded-xl bg-[#18181b] border border-zinc-700 space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-200 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                    Record Previous Exam Question
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsAddingPQ(false)}
                    className="text-xs text-zinc-400 hover:text-zinc-200 font-medium"
                  >
                    Cancel
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 mb-1">
                    Question Statement *
                  </label>
                  <textarea
                    value={newPQText}
                    onChange={(e) => setNewPQText(e.target.value)}
                    placeholder="e.g. State Coffman conditions for deadlock and solve Banker's safety algorithm with allocation matrix..."
                    rows={2}
                    required
                    className="w-full bg-[#09090b] border border-zinc-700 rounded-xl p-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-400 font-sans"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 mb-0.5">Year</label>
                    <input
                      type="number"
                      value={newPQYear}
                      onChange={(e) => setNewPQYear(e.target.value)}
                      className="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-2.5 py-1 text-xs text-zinc-100 focus:outline-none focus:border-zinc-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 mb-0.5">Exam</label>
                    <select
                      value={newPQExam}
                      onChange={(e) => setNewPQExam(e.target.value)}
                      className="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-2.5 py-1 text-xs text-zinc-100 focus:outline-none focus:border-zinc-400"
                    >
                      <option value="End-Sem Final">End-Sem Final</option>
                      <option value="Midterm Exam">Midterm Exam</option>
                      <option value="Supplementary">Supplementary</option>
                      <option value="Model Paper">Model Paper</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 mb-0.5">Marks</label>
                    <input
                      type="number"
                      value={newPQMarks}
                      onChange={(e) => setNewPQMarks(e.target.value)}
                      className="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-2.5 py-1 text-xs text-zinc-100 focus:outline-none focus:border-zinc-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 mb-0.5">Frequency Tag</label>
                    <input
                      type="text"
                      value={newPQFreq}
                      onChange={(e) => setNewPQFreq(e.target.value)}
                      placeholder="e.g. Asked 3 times"
                      className="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-2.5 py-1 text-xs text-zinc-100 focus:outline-none focus:border-zinc-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 mb-0.5">
                    Solution Hint / Formula / Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={newPQHint}
                    onChange={(e) => setNewPQHint(e.target.value)}
                    placeholder="e.g. Remember to check Need <= Work and release allocation back..."
                    className="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 focus:outline-none focus:border-zinc-400"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsAddingPQ(false)}
                    className="px-3 py-1 rounded-lg text-xs font-semibold text-zinc-400 hover:text-zinc-200 bg-zinc-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!newPQText.trim()}
                    className="px-4 py-1 bg-white hover:bg-zinc-200 disabled:opacity-40 text-black rounded-lg text-xs font-bold shadow-xs"
                  >
                    Save Question
                  </button>
                </div>
              </form>
            )}

            {/* List of Previous Questions */}
            <div className="space-y-2">
              {previousQuestions.length === 0 ? (
                <div className="text-center py-4 px-3 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/30">
                  <p className="text-xs text-zinc-400 italic">
                    No previous exam questions recorded for this topic yet.
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Add past exam questions to track your mastery of recurring patterns.
                  </p>
                </div>
              ) : (
                previousQuestions.map((q) => (
                  <div
                    key={q.id}
                    className={`p-3 rounded-xl border transition-all ${
                      q.solved
                        ? 'bg-[#121614] border-emerald-900/60 shadow-2xs'
                        : 'bg-[#18181b] border-zinc-800 hover:border-zinc-700 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <label className="flex items-start gap-2.5 flex-1 min-w-0 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={q.solved}
                          onChange={() => handleTogglePQSolved(q.id)}
                          className="mt-0.5 w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-white focus:ring-0 cursor-pointer shrink-0 accent-white"
                        />
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-medium leading-relaxed ${
                            q.solved ? 'line-through text-zinc-500' : 'text-zinc-100 font-semibold'
                          }`}>
                            {q.text}
                          </p>

                          {/* Metadata Tags */}
                          <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-1">
                              <span>{q.year} {q.exam}</span>
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                              {q.marks || 10} Marks
                            </span>
                            {q.frequency && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-950/40 text-amber-300 border border-amber-900/60 flex items-center gap-1">
                                <Flame className="w-3 h-3 text-amber-400" />
                                <span>{q.frequency}</span>
                              </span>
                            )}
                            {q.hint && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  togglePQHint(q.id);
                                }}
                                className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 flex items-center gap-1 transition-colors"
                              >
                                {showPQHintMap[q.id] ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                                <span>{showPQHintMap[q.id] ? 'Hide Hint' : 'View Solution Hint'}</span>
                              </button>
                            )}
                          </div>

                          {/* Solution Hint reveal */}
                          {q.hint && showPQHintMap[q.id] && (
                            <div className="mt-2.5 p-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-[11px] text-zinc-200 font-mono leading-relaxed">
                              <span className="font-bold block text-zinc-300 mb-0.5">💡 Solution Hint / Pointers:</span>
                              {q.hint}
                            </div>
                          )}
                        </div>
                      </label>

                      <button
                        onClick={() => handleDeletePQ(q.id)}
                        className="p-1 text-zinc-500 hover:text-rose-400 hover:bg-rose-950/40 rounded-lg transition-colors shrink-0"
                        title="Delete past question"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Notes Section with formatting advice and character count */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-zinc-300" />
                <span>Topic Study Notes</span>
              </label>
              <span className="text-[11px] text-zinc-500 font-medium">
                {(topic.notes || '').length} characters
              </span>
            </div>
            <textarea
              value={topic.notes || ''}
              onChange={handleNotesChange}
              placeholder="Record summary concepts, important formulas, gotchas, code snippets, or exam hints here..."
              rows={4}
              className="w-full bg-[#141416] border border-zinc-800 rounded-xl p-3 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 font-mono resize-y leading-relaxed shadow-inner"
            />
          </div>

          {/* Tags Manager */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                <Tag className="w-3 h-3 text-zinc-300" />
                <span>Tags & Classifiers</span>
              </span>
              {!isAddingTag && (
                <button
                  type="button"
                  onClick={() => setIsAddingTag(true)}
                  className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1"
                >
                  <Plus className="w-3 h-3" /> Add tag
                </button>
              )}
            </div>

            {isAddingTag && (
              <form onSubmit={handleAddTag} className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  value={newTagInput}
                  onChange={(e) => setNewTagInput(e.target.value)}
                  placeholder="e.g. Must-Review, Formula, 5-Star"
                  autoFocus
                  className="bg-[#09090b] border border-zinc-700 rounded-xl px-3 py-1 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-400"
                />
                <button
                  type="submit"
                  className="px-3 py-1 bg-white hover:bg-zinc-200 text-black rounded-xl text-xs font-bold"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingTag(false)}
                  className="px-2 py-1 text-xs text-zinc-400 hover:text-zinc-200"
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
