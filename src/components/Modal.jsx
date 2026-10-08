import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = 'max-w-lg' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className={`relative w-full ${maxWidth} bg-[#121214] border border-zinc-800 rounded-[28px] shadow-2xl p-6 sm:p-7 text-zinc-100 z-10 backdrop-blur-2xl transition-all transform scale-100`}>
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-zinc-400 mt-1 font-medium">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 transition-colors"
            title="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
