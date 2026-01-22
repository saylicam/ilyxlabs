"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVercel,
} from "react-icons/si";

// Technologies avec logos officiels de react-icons
const technologies = [
  {
    name: "Next.js 15",
    Icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Framer Motion",
    Icon: SiFramer,
    color: "#0055FF",
  },
  {
    name: "Vercel",
    Icon: SiVercel,
    color: "#000000",
  },
];

// Dupliquer la liste 5 fois pour un flux continu sans coupure
const duplicatedTechs = Array(5).fill(technologies).flat();

export const TechStack = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm sm:backdrop-blur-xl py-12 border-y border-slate-100/50">
      {/* Masques dégradés pour effet fade premium */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

      {/* Container du marquee avec pause au hover */}
      <div className="flex animate-scroll hover:[animation-play-state:paused] will-change-transform">
        {duplicatedTechs.map((tech, index) => {
          const IconComponent = tech.Icon;
          return (
            <motion.div
              key={`tech-${index}`}
              className="mx-3 flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 will-change-transform"
              whileHover={{
                scale: 1.15,
                y: -4,
              }}
              style={{
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
              onHoverStart={(e) => {
                const element = e.currentTarget;
                if (element) {
                  element.style.boxShadow = `0 12px 30px -8px ${tech.color}50, 0 0 0 1px ${tech.color}30`;
                }
              }}
              onHoverEnd={(e) => {
                const element = e.currentTarget;
                if (element) {
                  element.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
                }
              }}
            >
              <IconComponent
                className="h-5 w-5 transition-all duration-300"
                style={{
                  color: tech.color,
                }}
              />
              <span className="text-sm font-semibold text-slate-600 transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
