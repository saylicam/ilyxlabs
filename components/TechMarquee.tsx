"use client";

import { motion } from "framer-motion";
import { Code, Zap, Palette, TrendingUp, Layers } from "lucide-react";

const technologies = [
  { name: "Next.js 15", icon: Code, color: "text-slate-900", bgColor: "bg-slate-50" },
  { name: "React", icon: Zap, color: "text-blue-600", bgColor: "bg-blue-50" },
  { name: "Vercel", icon: Layers, color: "text-black", bgColor: "bg-slate-100" },
  { name: "Tailwind CSS", icon: Palette, color: "text-cyan-600", bgColor: "bg-cyan-50" },
  { name: "Framer Motion", icon: TrendingUp, color: "text-violet-600", bgColor: "bg-violet-50" },
];

export const TechMarquee = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/40 bg-white/50 backdrop-blur-2xl py-8">
      {/* Gradient masks pour effet fade premium */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-white/50 via-white/30 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-white/50 via-white/30 to-transparent" />

      <div className="flex animate-scroll">
        {/* Première série */}
        <div className="flex shrink-0 items-center gap-16 pr-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={`first-${index}`}
              className="group flex items-center gap-4 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 ${tech.bgColor} shadow-lg shadow-slate-900/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-slate-900/10`}>
                <tech.icon className={`h-6 w-6 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              <span className="text-base font-bold tracking-tight text-slate-800">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Deuxième série (pour boucle infinie) */}
        <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden="true">
          {technologies.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-4 whitespace-nowrap"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 ${tech.bgColor} shadow-lg shadow-slate-900/5 backdrop-blur-sm`}>
                <tech.icon className={`h-6 w-6 ${tech.color}`} />
              </div>
              <span className="text-base font-bold tracking-tight text-slate-800">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
