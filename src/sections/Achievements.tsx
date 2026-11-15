import React, { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { achievements } from "../data/achievements";
import { AchievementModal } from "../components/AchievementModal";
import confetti from "canvas-confetti";
import {
  Trophy,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Eye,
  CheckCircle2,
  Sparkles,
  Compass,
  Code2
} from "lucide-react";

export const Achievements: React.FC = () => {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    imageUrl: string;
    type: "certificate" | "poster";
  }>({
    isOpen: false,
    title: "",
    subtitle: "",
    imageUrl: "",
    type: "certificate"
  });

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#F59E0B", "#EAB308", "#6366F1", "#10B981"]
      });
    } catch {
      // Graceful fallback if canvas is not supported
    }
  };

  const openModal = (
    title: string,
    subtitle: string,
    imageUrl: string,
    type: "certificate" | "poster"
  ) => {
    triggerConfetti();
    setModalData({
      isOpen: true,
      title,
      subtitle,
      imageUrl,
      type
    });
  };

  const featuredAchievement = achievements.find((a) => a.featured);
  const otherAchievements = achievements.filter((a) => !a.featured);

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden"
    >
      {/* Subtle ambient decorative gradient behind featured achievement */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 dark:bg-amber-400/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Honors & Achievements" subtitle="Recognition" />

        {/* Featured Achievement: VIT Mapathon 1st Place */}
        {featuredAchievement && (
          <div className="relative mb-10 rounded-3xl p-1 bg-gradient-to-br from-amber-400/40 via-indigo-500/20 to-amber-500/40 dark:from-amber-500/30 dark:via-indigo-500/10 dark:to-amber-500/20 shadow-xl shadow-amber-500/5">
            <div className="rounded-[22px] bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-10 text-left border border-amber-200/50 dark:border-amber-900/40">
              {/* Header row: Badge, Trophy, Date */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25 shadow-sm">
                    <Trophy className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      {featuredAchievement.badgeText}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                      Major Academic & Technical Milestone
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-350 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-750">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    {featuredAchievement.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-350 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-750">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    VIT, Vellore
                  </span>
                </div>
              </div>

              {/* Title & Organization */}
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {featuredAchievement.title}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-indigo-650 dark:text-indigo-400">
                  {featuredAchievement.competition}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2">
                  <span>Conducted as part of: <strong className="text-slate-700 dark:text-slate-200">{featuredAchievement.event}</strong></span>
                  <span className="hidden sm:inline">•</span>
                  <span>Organized by {featuredAchievement.organizer}</span>
                </p>
              </div>

              {/* Narrative Description */}
              <p className="text-slate-650 dark:text-slate-350 text-sm sm:text-base leading-relaxed mb-6 max-w-4xl">
                {featuredAchievement.description}
              </p>

              {/* Core Pillars / Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {featuredAchievement.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200/60 dark:border-slate-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Focus Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1">
                  <Compass className="h-3.5 w-3.5" />
                  Key Domains:
                </span>
                {featuredAchievement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Verification & Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {featuredAchievement.certificateUrl && (
                  <button
                    onClick={() =>
                      openModal(
                        "Certificate of Achievement — VIT Mapathon 1st Place",
                        "Presented to Lathika K at SustainAI 2026, VIT Vellore",
                        featuredAchievement.certificateUrl!,
                        "certificate"
                      )
                    }
                    className="flex items-center gap-2 py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                  >
                    <Eye className="h-4 w-4" />
                    View Official Certificate
                  </button>
                )}

                {featuredAchievement.posterUrl && (
                  <button
                    onClick={() =>
                      openModal(
                        "Winners Announcement Poster — 1st Place Mapathon",
                        "Karpagam College of Engineering Team Recognition at VIT Vellore",
                        featuredAchievement.posterUrl!,
                        "poster"
                      )
                    }
                    className="flex items-center gap-2 py-2.5 px-5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-200/80 dark:border-slate-700 transition-colors cursor-pointer"
                  >
                    <Award className="h-4 w-4" />
                    View Conclave Poster
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Secondary Achievements Grid */}
        {otherAchievements.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherAchievements.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-850 shadow-sm text-left flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-800 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-2xs font-extrabold uppercase tracking-wider bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-500/20">
                      {item.badgeText}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-indigo-650 dark:text-indigo-400 mb-3">
                    {item.competition} ({item.date})
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {item.highlights.slice(0, 2).map((hl, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-350"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-3xs font-semibold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://leetcode.com/u/Lathika_Kumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-650 dark:text-indigo-400 hover:underline"
                  >
                    Verify
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox / Modal for Certificate & Poster */}
      <AchievementModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
        title={modalData.title}
        subtitle={modalData.subtitle}
        imageUrl={modalData.imageUrl}
        type={modalData.type}
      />
    </section>
  );
};
