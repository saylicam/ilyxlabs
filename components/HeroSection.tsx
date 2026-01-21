"use client";

import { FadeIn } from "./FadeIn";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <FadeIn delay={0.1}>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              Technologie des grandes Tech, pensée pour les PME.
            </p>
          </FadeIn>

          <div className="mt-10 space-y-8 sm:mt-12">
            <FadeIn delay={0.2}>
              <h1 className="mx-auto max-w-6xl font-display text-6xl font-extrabold tracking-tighter pb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 animate-text-shimmer bg-[length:300%_auto] sm:text-7xl md:text-8xl lg:text-9xl">
                L&apos;Ingénierie Digitale <br /> au service de votre Croissance.
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Nous concevons les infrastructures web qui sécurisent votre
                avenir et accélèrent votre croissance.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5 sm:mt-16">
              <a
                href="#tarifs"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 py-4 text-base font-bold text-slate-50 shadow-lg shadow-slate-900/20 transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30 active:scale-95"
              >
                <span className="relative z-10">Découvrir les offres</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white/90 px-7 py-3.5 text-base font-semibold text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:bg-white hover:shadow-xl active:scale-95"
              >
                Parler de votre projet
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-16 grid gap-5 text-sm text-slate-600 sm:mt-20 sm:grid-cols-3 sm:gap-6">
              <p className="rounded-2xl bg-white/90 px-5 py-4 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
                Pour cabinets d&apos;avocats, cliniques privées, restaurants,
                industriels et startups en croissance.
              </p>
              <p className="rounded-2xl bg-white/90 px-5 py-4 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
                Performance de niveau entreprise avec Next.js, Vercel, Tailwind
                &amp; meilleures pratiques UX.
              </p>
              <p className="rounded-2xl bg-white/90 px-5 py-4 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
                Accompagnement continu : optimisation, SEO et évolutions
                fonctionnelles.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
