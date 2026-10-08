import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Tag, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Sparkles,
  Filter
} from 'lucide-react';
import { SUBJECT_COLORS, getModuleRainbowColor } from '../constants/initialData';

export default function NotesVault({ 
  data, 
  onOpenSubject, 
  onUpdateTopicNote 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [copiedId, setCopiedId] = useState(null);

  // Extract all notes
  const notesList = [];
  const allTags = new Set();

  ['S1', 'S2'].forEach(semKey => {
    (data[semKey]?.subjects || []).forEach(sub => {
      (sub.modules || []).forEach(mod => {
        (mod.topics || []).forEach(top => {
          if (top.notes && top.notes.trim().length > 0) {
            notesList.push({
              semester: semKey,
              subject: sub,
              module: mod,
              topic: top,
              notes: top.notes,
              tags: top.tags || []
            });
            (top.tags || []).forEach(t => allTags.add(t));
          }
        });
      });
    });
  });

  const filteredNotes = notesList.filter(item => {
    const matchesSearch = item.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag === 'ALL' || item.tags.includes(selectedTag);
    const matchesSubject = selectedSubject === 'ALL' || item.subject.id === selectedSubject;

    return matchesSearch && matchesTag && matchesSubject;
  });

  const handleCopyNote = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportMarkdown = () => {
    let mdContent = `# Study Buddy — Consolidated Academic Notes Guide\nGenerated: ${new Date().toLocaleString()}\n\n`;
    
    ['S1', 'S2'].forEach(semKey => {
      mdContent += `\n# SEMESTER ${semKey}\n`;
      (data[semKey]?.subjects || []).forEach(sub => {
        mdContent += `\n## Subject: ${sub.name} (${sub.code || 'N/A'})\n`;
        if (sub.examDate) mdContent += `**Exam Schedule:** ${new Date(sub.examDate).toLocaleString()}\n`;
        if (sub.examVenue) mdContent += `**Venue:** ${sub.examVenue}\n\n`;

        (sub.modules || []).forEach(mod => {
          mdContent += `### Module: ${mod.name}\n\n`;
          (mod.topics || []).forEach(top => {
            if (top.notes && top.notes.trim().length > 0) {
              mdContent += `#### Topic: ${top.name} [Status: ${top.status}]\n`;
              if (top.tags && top.tags.length > 0) {
                mdContent += `*Tags: ${top.tags.join(', ')}*\n\n`;
              }
              mdContent += `${top.notes}\n\n`;
              if (top.subTopics && top.subTopics.length > 0) {
                mdContent += `Checklist:\n`;
                top.subTopics.forEach(st => {
                  mdContent += `- [${st.done ? 'x' : ' '}] ${st.name}\n`;
                });
                mdContent += `\n`;
              }
            }
          });
        });
      });
    });

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `study-notes-guide-${new Date().toISOString().slice(0, 10)}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="p-6 sm:p-7 rounded-[28px] bg-[#121214] border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-zinc-300" />
              Central Notes Vault
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
            Study Notes & Knowledge Base
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-xl font-medium">
            Search, filter, review, and export all concept summaries, formulas, and cheat-sheets attached across your curriculum topics.
          </p>
        </div>

        <button
          onClick={handleExportMarkdown}
          className="px-4 py-2.5 bg-white hover:bg-zinc-200 text-black rounded-2xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all self-start md:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export Markdown Guide</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search within note contents, topic names, or subjects..."
            className="w-full bg-[#121214] border border-zinc-800 rounded-2xl pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 shadow-sm"
          />
        </div>

        {/* Tags filter */}
        <div className="w-full sm:w-64">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full bg-[#121214] border border-zinc-800 rounded-2xl px-3.5 py-2 text-xs text-zinc-200 font-medium focus:outline-none focus:border-zinc-500 shadow-sm cursor-pointer"
          >
            <option value="ALL" className="bg-[#121214] text-zinc-200">All Note Tags ({allTags.size})</option>
            {Array.from(allTags).map(tag => (
              <option key={tag} value={tag} className="bg-[#121214] text-zinc-200">
                #{tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Notes Cards List */}
      {filteredNotes.length === 0 ? (
        <div className="p-16 rounded-[28px] border border-dashed border-zinc-800 bg-[#121214]/60 text-center">
          <FileText className="w-12 h-12 text-zinc-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">No Notes Found</h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto font-medium">
            {notesList.length === 0 
              ? "You haven't attached notes to any topics yet. Open any subject and click 'To-Dos & Media' to start drafting summaries." 
              : "No notes match the current search query or tag filter."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredNotes.map((item) => {
            const isCopied = copiedId === item.topic.id;
            const modRainbow = getModuleRainbowColor(item.module.number);

            return (
              <div
                key={item.topic.id}
                className="bg-[#121214] p-6 rounded-[26px] border border-zinc-800 hover:border-zinc-700 hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative group"
              >
                <div>
                  {/* Top info row */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700">
                        {item.semester} • {item.subject.code || item.subject.name}
                      </span>
                      <span className="text-[11px] text-zinc-300 font-medium flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: modRainbow.hex }} />
                        <span>M{item.module.number || ''}</span>
                        <span 
                          className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold"
                          style={{
                            backgroundColor: `${modRainbow.hex}22`,
                            color: modRainbow.hex,
                            border: `1px solid ${modRainbow.hex}55`
                          }}
                        >
                          {modRainbow.colorCode}
                        </span>
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyNote(item.notes, item.topic.id)}
                      className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                      title="Copy note text"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Topic Title */}
                  <h3 className="text-base font-bold text-white">
                    {item.topic.name}
                  </h3>

                  {/* Tags */}
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-semibold bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md border border-zinc-700">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Note Body */}
                  <div className="mt-3.5 p-4 bg-[#18181b] rounded-2xl border border-zinc-700/80 text-xs text-zinc-200 font-mono whitespace-pre-wrap leading-relaxed shadow-inner">
                    {item.notes}
                  </div>
                </div>

                {/* Footer link to subject */}
                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-medium">
                    Status: <strong className="text-zinc-200 capitalize">{item.topic.status}</strong>
                  </span>
                  <button
                    onClick={() => onOpenSubject(item.semester, item.subject.id)}
                    className="text-xs text-zinc-300 hover:text-white flex items-center gap-1 font-bold"
                  >
                    <span>View in Syllabus</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
