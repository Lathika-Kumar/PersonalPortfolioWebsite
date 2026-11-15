import React, { useEffect } from "react";
import { X, ExternalLink, Download, Trophy, Award } from "lucide-react";

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  imageUrl: string;
  type: "certificate" | "poster";
}

export const AchievementModal: React.FC<AchievementModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  imageUrl,
  type
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              {type === "certificate" ? (
                <Trophy className="h-5 w-5" />
              ) : (
                <Award className="h-5 w-5" />
              )}
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-tight">
                {title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              title="Open full image in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={imageUrl}
              download
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              title="Download image"
            >
              <Download className="h-4 w-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="p-3 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-100/50 dark:bg-slate-950/60 max-h-[calc(92vh-75px)]">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-lg border border-slate-200/70 dark:border-slate-800/70"
          />
        </div>
      </div>
    </div>
  );
};
