import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Play, Trash2 } from 'lucide-react';
import YouTubeIcon from './YouTubeIcon';
import { getYouTubeEmbedUrl, getYouTubeVideoId } from '../utils/youtube';

export default function YouTubeEmbed({ 
  url, 
  title = "Lecture Video", 
  onRemove = null,
  initialExpanded = false 
}) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const videoId = getYouTubeVideoId(url);
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!url || !videoId || !embedUrl) return null;

  return (
    <div className="rounded-md border border-[#30363d] bg-[#161b22] overflow-hidden text-xs">
      <div className="p-2.5 flex items-center justify-between gap-3 bg-[#0d1117]">
        <div className="flex items-center gap-2 min-w-0">
          <YouTubeIcon className="w-4 h-4 text-red-500 shrink-0" />
          <div className="min-w-0">
            <div className="font-semibold text-[#f0f6fc] truncate flex items-center gap-2">
              <span>{title}</span>
              <span className="text-[10px] text-red-400 font-mono px-1 py-0.2 rounded border border-red-900/40 bg-red-950/20">
                YouTube
              </span>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#8b949e] hover:text-[#58a6ff] flex items-center gap-1 transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn-gh px-2.5 py-1 text-xs flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Hide</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-red-400 text-red-400" />
                <span>Play</span>
              </>
            )}
          </button>

          {onRemove && (
            <button
              type="button"
              onClick={onRemove}
              className="p-1 text-[#8b949e] hover:text-red-400 hover:bg-red-950/20 rounded transition-colors"
              title="Remove attached video"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="relative aspect-video w-full bg-black border-t border-[#30363d]">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
