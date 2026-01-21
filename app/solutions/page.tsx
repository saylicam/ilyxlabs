"use client";

import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  Zap,
  TrendingUp,
  Palette,
  Code,
  Search,
  Target,
  Check,
  X,
  Building2,
  ShoppingBag,
  Rocket,
  ShieldCheck,
  Gauge,
} from "lucide-react";

type CounterProps = {
  to: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

function Counter({
  to,
  durationMs = 900,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const from = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const next = from + (to - from) * eased;
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, durationMs]);

  const formatted = useMemo(() => {
    const factor = Math.pow(10, decimals);
    const rounded = Math.round(value * factor) / factor;
    return rounded.toFixed(decimals);
  }, [value, decimals]);

  return (
    <span className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function SolutionsPage() {
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
                  Nos Expertises.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 mx-auto max-w-3xl text-xl leading-relaxed text-slate-700 sm:text-2xl lg:text-3xl">
                Une suite complète d&apos;outils pour votre domination digitale.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative flex items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeIn>
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Propulsé par les meilleures technologies du marché.
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                {/* Next.js */}
                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-lg shadow-blue-900/5">
                    <Code className="h-8 w-8 text-slate-700" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    Next.js 15
                  </span>
                </motion.div>
                {/* React */}
                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-lg shadow-blue-900/5">
                    <Zap className="h-8 w-8 text-blue-500" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    React
                  </span>
                </motion.div>
                {/* Vercel */}
                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-lg shadow-blue-900/5">
                    <div className="h-8 w-8 rounded-full bg-black" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    Vercel
                  </span>
                </motion.div>
                {/* Tailwind */}
                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-lg shadow-blue-900/5">
                    <Palette className="h-8 w-8 text-cyan-500" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    Tailwind CSS
                  </span>
                </motion.div>
                {/* Framer Motion */}
                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-lg shadow-blue-900/5">
                    <TrendingUp className="h-8 w-8 text-violet-500" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    Framer Motion
                  </span>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REALITY CHECK - Comparatif */}
      <section className="relative flex items-center justify-center overflow-hidden px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <FadeIn>
            <div className="rounded-3xl border border-white/40 bg-white/40 p-8 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl sm:p-12">
              <div className="flex flex-col items-center text-center">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-4 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur-sm">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  Reality check
                </p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Pourquoi les leaders abandonnent les solutions classiques.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Un site n&apos;est pas un coût. C&apos;est une infrastructure commerciale.
                  Comparez l&apos;expérience réelle au quotidien.
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
                {/* Site Standard */}
                <div className="rounded-2xl border border-white/50 bg-white/50 p-6 backdrop-blur-xl sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">
                      Site Standard (WordPress / Wix)
                    </p>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      Classique
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700 sm:text-base">
                    <li className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <span>Lent → perte de visiteurs et de demandes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <span>Sécurité faillible → risques &amp; failles.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <span>Design générique → faible différenciation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <span>Maintenance pénible → plugins, bugs, updates.</span>
                    </li>
                  </ul>
                </div>

                {/* Standard Ilyx Labs */}
                <div className="rounded-2xl border border-blue-500/20 bg-slate-950/90 p-6 text-slate-50 shadow-[0_0_40px_-18px_rgba(59,130,246,0.35)] backdrop-blur-2xl sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm font-semibold text-blue-50">
                      Standard Ilyx Labs
                    </p>
                    <span className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-blue-500/40">
                      Premium
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-blue-50/95 sm:text-base">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span>Chargement &lt; 1s → plus de leads.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span>Sécurité “bancaire” → confiance immédiate.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span>Design unique → image premium, conversion.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span>0 maintenance pénible → site toujours à jour.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CHIFFRES CLÉS - Proof by Data */}
      <section className="relative flex items-center justify-center overflow-hidden px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeIn>
            <div className="grid gap-4 rounded-3xl border border-white/40 bg-white/40 p-6 shadow-xl shadow-blue-900/10 backdrop-blur-2xl sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
              <div className="flex items-center gap-4 rounded-2xl bg-white/40 p-5 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/40 to-blue-500/40">
                  <Gauge className="h-6 w-6 text-cyan-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-slate-900">
                    <Counter to={98} suffix="/100" />
                  </p>
                  <p className="text-xs font-medium text-slate-600">
                    Score Google Performance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/40 p-5 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/40 to-violet-500/40">
                  <Zap className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-slate-900">
                    <Counter to={0.5} decimals={1} prefix="< " suffix="s" />
                  </p>
                  <p className="text-xs font-medium text-slate-600">
                    Temps de chargement
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/40 p-5 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/40 to-purple-500/40">
                  <ShieldCheck className="h-6 w-6 text-violet-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-slate-900">
                    <Counter to={100} suffix="%" />
                  </p>
                  <p className="text-xs font-medium text-slate-600">
                    Sécurisé &amp; chiffré
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/40 p-5 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/40 to-cyan-400/40">
                  <TrendingUp className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-slate-900">
                    <Counter to={24} suffix="/7" />
                  </p>
                  <p className="text-xs font-medium text-slate-600">
                    Disponibilité garantie
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 1 - Développement Web Next.js */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-cyan-50/80 px-4 py-2 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-cyan-700">
                    Performance & Sécurité
                  </span>
                </div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                  Une Infrastructure Commerciale Infaillible.
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                  Un site rapide et fiable n&apos;est pas “du confort” : c&apos;est un
                  multiplicateur de clients. Nous construisons une base solide
                  qui inspire confiance et convertit, même quand votre trafic
                  explose.
                </p>
                <ul className="space-y-4 text-base text-slate-700 sm:text-lg">
                  <li className="flex items-start gap-3">
                    <Zap className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Temps de chargement &lt; 1s
                      </strong>{" "}
                      : Pages statiques pré-rendues, optimisations automatiques,
                      CDN global Vercel.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Sécurité renforcée
                      </strong>{" "}
                      : Headers de sécurité, validation des données, protection
                      contre les attaques courantes (OWASP Top 10).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Scalabilité infinie
                      </strong>{" "}
                      : Architecture prête pour des millions de visiteurs, auto-scaling
                      automatique, zéro downtime.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Performance Lighthouse 100/100
                      </strong>{" "}
                      : Optimisations images, lazy loading, code splitting automatique.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Visuel abstrait - Icône géante en verre */}
            <FadeIn delay={0.2}>
              <div className="relative flex items-center justify-center">
                <div className="relative h-96 w-96 rounded-3xl border border-white/40 bg-white/30 backdrop-blur-2xl shadow-2xl shadow-cyan-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/40 to-blue-500/40 backdrop-blur-xl">
                      <Code className="h-24 w-24 text-cyan-600/80" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 2 - SEO & Growth */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Visuel abstrait - Icône géante en verre */}
            <FadeIn>
              <div className="relative flex items-center justify-center lg:order-first">
                <div className="relative h-96 w-96 rounded-3xl border border-white/40 bg-white/30 backdrop-blur-2xl shadow-2xl shadow-violet-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400/40 to-purple-500/40 backdrop-blur-xl">
                      <TrendingUp className="h-24 w-24 text-violet-600/80" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-violet-50/80 px-4 py-2 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/40">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-violet-700">
                    Acquisition & Visibilité
                  </span>
                </div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                  Acquisition Automatisée de Clients.
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                  Une machine à visibilité qui transforme la recherche Google en
                  demandes entrantes. Nous alignons votre contenu, votre SEO et
                  vos preuves sociales pour gagner des positions et des clients.
                </p>
                <ul className="space-y-4 text-base text-slate-700 sm:text-lg">
                  <li className="flex items-start gap-3">
                    <Search className="mt-1 h-5 w-5 shrink-0 text-violet-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Score SEO 100/100
                      </strong>{" "}
                      : Articles optimisés SEO, maillage interne, structure
                      sémantique, schema.org.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="mt-1 h-5 w-5 shrink-0 text-violet-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Référencement local
                      </strong>{" "}
                      : Optimisation Google My Business, citations locales,
                      avis clients, géolocalisation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="mt-1 h-5 w-5 shrink-0 text-violet-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Croissance mesurable
                      </strong>{" "}
                      : +30% de trafic organique en moyenne, rapports mensuels,
                      recommandations d&apos;amélioration continue.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="mt-1 h-5 w-5 shrink-0 text-violet-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Contenus performants
                      </strong>{" "}
                      : Rédaction orientée conversion, A/B testing, optimisation
                      des taux de transformation.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3 - Design & Branding */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-blue-50/80 px-4 py-2 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/40">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-blue-700">
                    Identité & Expérience
                  </span>
                </div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                  Design & Branding
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                  Une identité visuelle forte qui légitime vos prix, renforce la
                  confiance et clarifie votre positionnement sur le marché.
                </p>
                <ul className="space-y-4 text-base text-slate-700 sm:text-lg">
                  <li className="flex items-start gap-3">
                    <Palette className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Identité visuelle
                      </strong>{" "}
                      : Logo, palette de couleurs, typographies, guidelines
                      complètes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Palette className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        UI/UX Design
                      </strong>{" "}
                      : Interfaces intuitives, parcours utilisateurs optimisés,
                      design system cohérent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Palette className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                    <span>
                      <strong className="font-semibold text-slate-900">
                        Ton de voix
                      </strong>{" "}
                      : Messages orientés business, copywriting premium,
                      storytelling impactant.
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Visuel abstrait - Icône géante en verre */}
            <FadeIn delay={0.2}>
              <div className="relative flex items-center justify-center">
                <div className="relative h-96 w-96 rounded-3xl border border-white/40 bg-white/30 backdrop-blur-2xl shadow-2xl shadow-blue-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/40 to-violet-500/40 backdrop-blur-xl">
                      <Palette className="h-24 w-24 text-blue-600/80" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTEURS D'ACTIVITÉ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeIn>
            <div className="flex flex-col items-center text-center">
              <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Pensé pour vos enjeux business.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Avocats, cliniques, commerces, startups… chaque secteur a ses codes.
                Nous adaptons le message, la preuve et le parcours pour convertir.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
            <FadeIn delay={0.1}>
              <motion.div
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/40 bg-white/40 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 sm:p-10"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl transition-all duration-300 group-hover:bg-blue-400/35" />
                <div className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/30">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    Professions Libérales &amp; Services
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                    Inspirez confiance instantanément.
                  </p>
                </div>
                <ul className="relative mt-8 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>Preuves sociales, avis, expertise.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>Parcours clair → prise de contact simplifiée.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>SEO local orienté “intention client”.</span>
                  </li>
                </ul>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/40 bg-white/40 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 sm:p-10"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/35" />
                <div className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30">
                    <ShoppingBag className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    Commerces &amp; E-commerce
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                    Transformez vos visiteurs en acheteurs.
                  </p>
                </div>
                <ul className="relative mt-8 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>Tunnels de vente rapides, optimisés.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>Performance mobile → moins d’abandon.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>Tracking &amp; optimisation conversion.</span>
                  </li>
                </ul>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.div
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-950/85 p-8 text-slate-50 shadow-[0_0_40px_-18px_rgba(59,130,246,0.25)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/30 sm:p-10"
                whileHover={{ scale: 1.01 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/15 via-transparent to-violet-500/15" />
                <div className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/40">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">
                    Startups &amp; Tech
                  </h3>
                  <p className="text-sm leading-relaxed text-blue-50/90 sm:text-base">
                    Scalez sans limite technique.
                  </p>
                </div>
                <ul className="relative mt-8 space-y-3 text-sm text-blue-50/90">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span>SaaS, plateformes sur-mesure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span>Intégrations API, CRM, paiement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span>Architecture prête pour l’hypercroissance.</span>
                  </li>
                </ul>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
