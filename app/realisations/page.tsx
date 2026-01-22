"use client";

import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RealisationsPage() {
  const projets = [
    {
      title: "Clean Master",
      description: "Plateforme moderne pour une société de nettoyage. Design épuré inspiré de la propreté et conversion optimisée.",
      category: "Site Vitrine & Services",
      link: "https://clean-master-i2wo.vercel.app/",
      image: "/projects/clean-master.png",
      alt: "Interface Clean Master nettoyage",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Villa Villaverde",
      description: "Site de location saisonnière pour une villa à Fuerteventura. Expérience immersive axée sur les visuels et la réservation.",
      category: "Tourisme & Voyage",
      link: "https://villa-villaverde-test.vercel.app/",
      image: "/projects/villa.png",
      alt: "Site de location Villa Fuerteventura",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Planify",
      description: "Application complexe de gestion de planning et productivité. Architecture Laravel/React, tableaux de bord et gestion utilisateurs.",
      category: "SaaS / Application Métier",
      link: "https://www.planify-work.com/",
      image: "/projects/planify.png",
      alt: "Dashboard SaaS Planify",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Portfolio Ilyas Nassiri",
      description: "Mon portfolio personnel actuel. Une vitrine interactive mettant en avant mes compétences Fullstack et UI/UX.",
      category: "Personal Branding",
      link: "https://www.ilyasnassiri.com/",
      image: "/projects/portfolio.png",
      alt: "Portfolio Personnel Ilyas Nassiri",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Fond Aurora fixe global */}
      <AuroraBackground />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <FadeIn delay={0.1}>
              <h1 className="mx-auto max-w-5xl font-display text-5xl font-extrabold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-violet-600 bg-clip-text text-transparent animate-text-shimmer bg-[length:300%_auto]">
                  Nos plus belles réussites.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 mx-auto max-w-3xl text-xl leading-relaxed text-slate-700 sm:text-2xl lg:text-3xl">
                Des projets qui transforment les ambitions en résultats mesurables.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Grille de Projets */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {projets.map((projet, index) => {
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.a
                    href={projet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-blue-500/20 sm:p-10"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Glow background */}
                    <div
                      className={`absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br ${projet.color} opacity-20 blur-3xl transition-all duration-300 group-hover:opacity-40`}
                    />

                    {/* Contenu */}
                    <div className="relative space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-3xl">
                          {projet.title}
                        </h3>
                        <span className="rounded-full bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur-sm">
                          {projet.category}
                        </span>
                      </div>
                      <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                        {projet.description}
                      </p>
                    </div>

                    {/* Image visuelle */}
                    <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg bg-slate-200">
                      <Image
                        src={projet.image}
                        alt={projet.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </motion.a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
