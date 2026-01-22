"use client";

import { motion } from "framer-motion";

export const AuroraBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Orbe Cyan Principal - Subtilité maximale */}
      <motion.div
        className="hidden md:block absolute -left-40 top-[-10rem] h-[40rem] w-[40rem] rounded-full bg-cyan-400/10 blur-2xl sm:bg-cyan-400/20 sm:blur-3xl"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbe Bleu Principal - Subtilité maximale */}
      <motion.div
        className="hidden md:block absolute -right-32 top-10 h-[42rem] w-[42rem] rounded-full bg-blue-500/10 blur-2xl sm:bg-blue-500/20 sm:blur-3xl"
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.4, 0.75, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbe Violet Principal - Subtilité maximale */}
      <motion.div
        className="hidden md:block absolute bottom-[-8rem] left-1/3 h-[38rem] w-[38rem] rounded-full bg-violet-500/10 blur-2xl sm:bg-violet-500/20 sm:blur-3xl"
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbe Cyan secondaire - Milieu droit */}
      <motion.div
        className="hidden md:block absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-cyan-300/8 blur-2xl sm:bg-cyan-300/15 sm:blur-3xl"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -50, 0],
          scale: [1, 1.5, 0.65, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbe Bleu secondaire - Bas gauche */}
      <motion.div
        className="hidden md:block absolute bottom-20 left-20 h-96 w-96 rounded-full bg-blue-400/8 blur-2xl sm:bg-blue-400/15 sm:blur-3xl"
        animate={{
          x: [0, 60, -45, 0],
          y: [0, -55, 35, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbe Violet secondaire - Haut centre */}
      <motion.div
        className="hidden md:block absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-400/8 blur-2xl sm:bg-violet-400/15 sm:blur-3xl"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, 50, -40, 0],
          scale: [1, 1.35, 0.7, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
