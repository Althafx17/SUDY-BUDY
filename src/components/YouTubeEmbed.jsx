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
    <div className="rounded-xl border border-red-500/20 bg-red-950/10 overflow-hidden transition-all duration-300">
      <div className="p-3 flex items-center justify-between gap-3 bg-red-950/20">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-1.5 rounded-lg bg-red-600/20 text-red-400 shrink-0">
            <YouTubeIcon className="w-4 h-4 text-red-500" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-slate-200 truncate flex items-center gap-2">
              <span>{title}</span>
              <span className="text-[10px] text-red-400 font-mono bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
                YouTube
              </span>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-slate-400 hover:text-red-300 flex items-center gap-1 transition-colors"
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
            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-red-600/20 hover:bg-red-600/30 text-red-200 flex items-center gap-1 transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Hide Video</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-red-400 text-red-400" />
                <span>Play Here</span>
              </>
            )}
          </button>

          {onRemove && (
            <button
              type="button"
              onClick={onRemove}
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
              title="Remove attached video"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="relative aspect-video w-full bg-black border-t border-red-500/20">
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
