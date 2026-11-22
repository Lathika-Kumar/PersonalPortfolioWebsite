import { SectionHeading } from "../components/SectionHeading";
import { ExternalLink, Award, BrainCircuit, CheckCircle2 } from "lucide-react";
import { LeetCodeIcon } from "../components/SocialIcons";

export const CodingProfiles: React.FC = () => {
  const dsaTopics = [
    {
      level: "Advanced Topics",
      topics: ["Dynamic Programming", "Backtracking", "Divide and Conquer"],
      description: "Complex algorithmic problems requiring optimal substructure and state space search."
    },
    {
      level: "Intermediate Topics",
      topics: ["Math & Number Theory", "Hash Table", "Binary Search"],
      description: "Data mapping, logarithmic search, and optimization solutions."
    },
    {
      level: "Fundamental Topics",
      topics: ["Array & Matrix Operations", "String Manipulation", "Two Pointers"],
      description: "Basic array transformations, sliding window patterns, and two-pointer traversals."
    }
  ];

  return (
    <section
      id="coding"
      className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="DSA & Problem Solving" subtitle="LeetCode Activity" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LeetCode Profile Card (Col 5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex flex-col h-full p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-left shadow-xs justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                      <LeetCodeIcon className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white text-base">
                      LeetCode Profile
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase">
                    Active Coder
                  </span>
                </div>

                {/* Big Stats */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      200+
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-2 uppercase tracking-wide">
                      Problems Solved
                    </span>
                  </div>

                  {/* Languages bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400">
                      <span>Java (130+ solved)</span>
                      <span>Python3 (63+ solved)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
                      <div className="h-full bg-indigo-600 rounded-l" style={{ width: "67%" }}></div>
                      <div className="h-full bg-sky-500 rounded-r" style={{ width: "33%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Badge Panel */}
                <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/10 dark:bg-orange-950/20 flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-orange-500 text-white shadow-xs">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-orange-900 dark:text-orange-300 uppercase tracking-wide">
                      50 Days Badge 2026
                    </h4>
                    <p className="text-2xs text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                      Recognizing consistent coding activity and daily streak commits on LeetCode.
                    </p>
                  </div>
                </div>
              </div>

              {/* Link CTA */}
              <a
                href="https://leetcode.com/u/Lathika_Kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-orange-600 dark:hover:bg-orange-500 transition-colors text-sm shadow-md cursor-pointer"
              >
                View My LeetCode Profile
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* DSA Topic List (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {dsaTopics.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-xs text-left flex flex-col justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {item.level}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* Topic tags row */}
                <div className="flex flex-wrap gap-2 mt-4 pl-14">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
