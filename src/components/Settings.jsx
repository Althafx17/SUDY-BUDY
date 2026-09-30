import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Calendar, 
  Trash2, 
  Download, 
  Upload, 
  RotateCcw, 
  Save, 
  AlertTriangle, 
  Check, 
  MapPin,
  Clock,
  Sparkles,
  Layout,
  Palette
} from 'lucide-react';
import Modal from './Modal';
import { INITIAL_DATA, SUBJECT_COLORS } from '../constants/initialData';
import { THEMES, COLOR_ACCENTS } from '../constants/themes';

export default function Settings({ 
  data, 
  onUpdateData, 
  onResetData,
  currentTheme,
  onSelectTheme,
  currentColorAccent,
  onSelectColorAccent
}) {
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(data)));
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isSavedBanner, setIsSavedBanner] = useState(false);

  // Handle Semester examWindowDate update
  const handleSemesterWindowDateChange = (semKey, dateValue) => {
    setFormData(prev => ({
      ...prev,
      [semKey]: {
        ...prev[semKey],
        examWindowDate: dateValue
      }
    }));
  };

  // Handle Subject exam schedule & venue update
  const handleSubjectFieldChange = (semKey, subjectId, field, value) => {
    setFormData(prev => ({
      ...prev,
      [semKey]: {
        ...prev[semKey],
        subjects: (prev[semKey]?.subjects || []).map(s => 
          s.id === subjectId ? { ...s, [field]: value } : s
        )
      }
    }));
  };

  // Save all changes
  const handleSaveChanges = () => {
    onUpdateData(formData);
    setIsSavedBanner(true);
    setTimeout(() => setIsSavedBanner(false), 2500);
  };

  // Export JSON backup
  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `study-ledger-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Import JSON backup
  const handleImportJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported.S1 && imported.S2) {
          setFormData(imported);
          onUpdateData(imported);
          alert('Study ledger data successfully imported!');
        } else {
          alert('Invalid backup file format. Must contain S1 and S2 semester objects.');
        }
      } catch (err) {
        alert('Failed to parse backup JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Reload initial template curriculum
  const handleReloadSampleData = () => {
    setFormData(INITIAL_DATA);
    onUpdateData(INITIAL_DATA);
    setIsSavedBanner(true);
    setTimeout(() => setIsSavedBanner(false), 2500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-5xl mx-auto">
      {/* Header */}
      <div className="p-6 sm:p-7 rounded-[28px] border border-slate-200 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200 flex items-center gap-1.5">
              <SettingsIcon className="w-3.5 h-3.5 text-purple-600" />
              Application Preferences
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Ledger & Theme Studio
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Customize UI themes, layout architecture, color palettes, and examination schedules.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          {isSavedBanner && (
            <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200">
              <Check className="w-4 h-4 text-emerald-600" /> Changes Saved!
            </span>
          )}
          <button
            onClick={handleSaveChanges}
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-md shadow-purple-200 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save All Schedules</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: 5 COMPLETELY DIFFERENT UI THEMES & LAYOUTS */}
      <div className="p-6 sm:p-7 rounded-[28px] border border-slate-200 bg-white shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Layout className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 tracking-tight">
                UI & Layout Architecture (5 Distinct Themes)
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Switching theme transforms navigation, layout hierarchy, and visuals while preserving your data
              </p>
            </div>
          </div>
        </div>

        {/* 5 Theme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
          {THEMES.map((th) => {
            const isActive = currentTheme === th.id;
            return (
              <div
                key={th.id}
                onClick={() => onSelectTheme && onSelectTheme(th.id)}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between group ${
                  isActive
                    ? 'border-purple-600 bg-purple-50/70 shadow-md shadow-purple-100 scale-[1.01]'
                    : 'border-slate-200 hover:border-purple-300 bg-slate-50/60 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{th.icon}</span>
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                          {th.name}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                          {th.badge}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                    {th.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-600">
                  <span>Layout Style:</span>
                  <span className="capitalize font-mono text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded">
                    {th.layoutType.replace('-', ' ')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 2: COLOR ACCENT CHOOSER */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-4 h-4 text-purple-600" />
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
              Accent Color Palette
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {COLOR_ACCENTS.map((col) => {
              const isColActive = currentColorAccent === col.id;
              return (
                <button
                  key={col.id}
                  onClick={() => onSelectColorAccent && onSelectColorAccent(col.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all ${
                    isColActive
                      ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold shadow-xs'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${col.dot} shrink-0 shadow-xs`} />
                  <span className="text-xs truncate font-medium">{col.name.split(' ')[0]}</span>
                  {isColActive && <Check className="w-3.5 h-3.5 text-purple-600 ml-auto shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 3: SEMESTER EXAM WINDOWS */}
      <div className="p-6 sm:p-7 rounded-[28px] border border-slate-200 bg-white shadow-xs space-y-4">
        <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-purple-600" />
          <span>Semester Exam Windows</span>
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          Set the target main examination start date for each academic semester.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {['S1', 'S2'].map(semKey => (
            <div key={semKey} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">
                  {semKey === 'S1' ? 'Semester 1 Target Date' : 'Semester 2 Target Date'}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                  {formData[semKey]?.subjects?.length || 0} enrolled courses
                </span>
              </div>
              <input
                type="date"
                value={formData[semKey]?.examWindowDate || ''}
                onChange={(e) => handleSemesterWindowDateChange(semKey, e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-purple-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: COURSE EXAM TIMETABLE & VENUES */}
      <div className="p-6 sm:p-7 rounded-[28px] border border-slate-200 bg-white shadow-xs space-y-4">
        <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
          <Clock className="w-4 h-4 text-purple-600" />
          <span>Subject Exam Dates & Venues</span>
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          Specify exact exam schedules and halls for each course to power the countdown clocks.
        </p>

        <div className="space-y-6 pt-2">
          {['S1', 'S2'].map(semKey => {
            const subs = formData[semKey]?.subjects || [];
            if (subs.length === 0) return null;

            return (
              <div key={semKey} className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600 pb-1 border-b border-slate-200">
                  {semKey === 'S1' ? 'Semester 1 Courses' : 'Semester 2 Courses'}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {subs.map(sub => (
                    <div key={sub.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-slate-900 truncate flex-1">
                          {sub.code ? `${sub.code} — ` : ''}{sub.name}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 mb-1">
                            Exam Date
                          </label>
                          <input
                            type="date"
                            value={sub.examDate || ''}
                            onChange={(e) => handleSubjectFieldChange(semKey, sub.id, 'examDate', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-purple-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 mb-1">
                            Hall / Venue
                          </label>
                          <input
                            type="text"
                            value={sub.venue || ''}
                            onChange={(e) => handleSubjectFieldChange(semKey, sub.id, 'venue', e.target.value)}
                            placeholder="e.g. Hall 3B"
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 5: DATA BACKUP & RESTORE */}
      <div className="p-6 sm:p-7 rounded-[28px] border border-slate-200 bg-white shadow-xs space-y-4">
        <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
          <Download className="w-4 h-4 text-purple-600" />
          <span>Backup, Restore & Reset</span>
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          Export your complete syllabus progress, notes, and study logs to a local JSON file or restore from a previous backup.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleExportJSON}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Export Backup (JSON)</span>
          </button>

          <label className="px-4 py-2.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer shadow-2xs transition-all">
            <Upload className="w-4 h-4 text-slate-500" />
            <span>Restore from File</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImportJSON}
              className="hidden"
            />
          </label>

          <button
            onClick={handleReloadSampleData}
            className="px-4 py-2.5 bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ml-auto"
            title="Reload full 4-course KTU curriculum with 2019-2026 PYQs"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Reload KTU 4-Course Syllabus</span>
          </button>

          <button
            onClick={() => setIsResetModalOpen(true)}
            className="px-4 py-2.5 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 rounded-xl text-xs font-bold flex items-center gap-2 transition-all"
          >
            <Trash2 className="w-4 h-4 text-rose-600" />
            <span>Clear All Data</span>
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      <Modal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        title="Reset Study Ledger?"
        subtitle="This action cannot be undone"
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed font-medium">
              Are you sure you want to clear all your courses, topic progress, revision statuses, and notes?
            </p>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={() => setIsResetModalOpen(false)}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onResetData();
                setIsResetModalOpen(false);
              }}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-sm"
            >
              Yes, Reset Everything
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
