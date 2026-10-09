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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto font-sans">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className={`relative w-full ${maxWidth} bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl p-5 text-[#f0f6fc] z-10 transition-all`}>
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-[#30363d]">
          <div>
            <h3 className="text-base font-bold tracking-tight text-[#f0f6fc]">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-[#8b949e] mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#8b949e] hover:text-[#f0f6fc] rounded hover:bg-[#21262d] transition-colors"
            title="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-3.5">
          {children}
        </div>
      </div>
    </div>
  );
}
