"use client";

import { HeroSection } from "@/components/HeroSection";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import {
  Zap,
  Palette,
  TrendingUp,
  Rocket,
  Shield,
  Code,
  Check,
  Lightbulb,
  Search,
  Target,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col">
      {/* Fond Aurora fixe global - Derrière tout le site */}
      <AuroraBackground />

      {/* HERO plein écran et pleine largeur */}
      <HeroSection />

      {/* Contenu principal : chaque section occupe toute la largeur + min-h-screen */}
      <main className="relative w-full overflow-hidden">
        {/* PHILOSOPHIE - THE MANIFESTO GLASS */}
        <section
          id="philosophie"
          className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-32 sm:py-40"
        >
          <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              {/* Grande Carte de Verre - Le Manifeste */}
              <div className="relative rounded-3xl border border-white/50 bg-white/40 p-12 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-16 lg:p-20">
                {/* Corner Accents - Repères architecturaux */}
                <div className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-slate-300/60" />
                <div className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-slate-300/60" />
                <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-slate-300/60" />
                <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-slate-300/60" />

                <div className="flex flex-col items-center text-center">
                  {/* Icône - Le Joyau Lumineux */}
                  <motion.div
                    className="mb-10 flex justify-center"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/50">
                      <Lightbulb className="h-10 w-10 text-white" />
                      {/* Glow pulsant */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl"
                        animate={{
                          opacity: [0.4, 0.7, 0.4],
                          scale: [1, 1.15, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Titre - Impact Maximum */}
                  <h2 className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Notre Philosophie
                  </h2>

                  {/* Contenu texte - Rythme & Respiration */}
                  <div className="space-y-8 text-center">
                    <FadeIn delay={0.2}>
                      <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-800 sm:text-lg lg:text-xl">
                        Chez <span className="font-bold text-blue-600">Ilyx Labs</span>, nous ne sommes pas seulement des développeurs
                        web. Nous sommes des <span className="font-bold text-violet-600">partenaires stratégiques</span> qui comprennent
                        que votre présence digitale est bien plus qu&apos;un simple site
                        internet.
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                      <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-800 sm:text-lg lg:text-xl">
                        Chaque projet que nous menons est pensé pour devenir un
                        véritable <span className="font-bold text-blue-600">levier de croissance</span>, un outil qui transforme vos
                        visiteurs en clients et vos ambitions en résultats mesurables.
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                      <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-800 sm:text-lg lg:text-xl">
                        Nous croyons en une <span className="font-bold text-violet-600">approche holistique</span> : design premium,
                        technologie de pointe, stratégie de contenu et optimisation
                        continue. Tout est pensé ensemble pour créer une expérience
                        digitale qui reflète votre excellence et accélère votre
                        développement.
                      </p>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative flex min-h-screen w-full items-center py-20 sm:py-32"
        >
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:gap-20">
            {/* Header centré avec badge */}
            <FadeIn>
              <div className="flex flex-col items-center text-center">
                <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                  Nos Services
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Une agence globale, capable de concevoir, développer et
                  faire grandir votre présence en ligne, quel que soit votre
                  secteur.
                </p>
              </div>
            </FadeIn>

            {/* Grille Bento - Cartes Glassmorphism */}
            <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
              {/* Carte 1 - Deep Glass */}
              <FadeIn delay={0.1}>
                <motion.div
                  className="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 sm:p-10"
                >
                  {/* Icône néon dans box carrée arrondie */}
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="relative mt-16 space-y-4">
                    <p className="inline-flex items-center rounded-full bg-cyan-50/80 px-3 py-1 text-xs font-semibold text-cyan-700 backdrop-blur-sm">
                      Performance Next.js
                    </p>
                    <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                      Sites vitrines &amp; E-commerce
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      Des expériences rapides, stables et scalables, pensées
                      pour transmettre votre valeur et générer des demandes
                      qualifiées.
                    </p>
                  </div>
                  
                  <ul className="mt-8 space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                      <span>Architecture Next.js &amp; hébergement Vercel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                      <span>Parcours utilisateurs optimisés pour la conversion.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                      <span>Intégration de formulaires, blog, réservation, etc.</span>
                    </li>
                  </ul>
                </motion.div>
              </FadeIn>

              {/* Carte 2 - Monolithe Dark Mode */}
              <FadeIn delay={0.2}>
                <motion.div
                  className="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-blue-500/30 bg-slate-950 p-8 text-slate-50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/40 sm:p-10"
                >
                  {/* Glow interne subtil */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-violet-500/15 opacity-70" />
                  
                  {/* Icône néon dans box carrée arrondie */}
                  <div className="absolute left-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/60">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="relative mt-16 space-y-4">
                    <p className="inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur-sm">
                      Identité &amp; messages
                    </p>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">
                      Identité visuelle &amp; branding fort
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-200/90 sm:text-base">
                      Une image claire, cohérente et mémorable, qui légitime vos
                      prix, renforce la confiance et clarifie votre
                      positionnement.
                    </p>
                  </div>
                  
                  <ul className="mt-8 space-y-2.5 text-sm text-slate-200/90">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      <span>Direction artistique, logo, palettes &amp; typographies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      <span>Ton de voix et messages orientés business.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      <span>Guidelines pour vos futures communications.</span>
                    </li>
                  </ul>
                </motion.div>
              </FadeIn>

              {/* Carte 3 - Deep Glass */}
              <FadeIn delay={0.3}>
                <motion.div
                  className="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 sm:p-10"
                >
                  {/* Icône néon dans box carrée arrondie */}
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/40">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="relative mt-16 space-y-4">
                    <p className="inline-flex items-center rounded-full bg-violet-50/80 px-3 py-1 text-xs font-semibold text-violet-700 backdrop-blur-sm">
                      Acquisition &amp; visibilité
                    </p>
                    <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                      Croissance &amp; SEO
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      Une base SEO propre et une stratégie de contenu pour
                      générer plus de visibilité, plus de confiance et plus de
                      demandes.
                    </p>
                  </div>
                  
                  <ul className="mt-8 space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                      <span>Structure SEO technique optimisée dès le départ.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                      <span>Contenus pensés pour vos clients et Google.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                      <span>Suivi des résultats et recommandations d&apos;actions.</span>
                    </li>
                  </ul>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PROCESSUS */}
        <section
          id="processus"
          className="relative flex min-h-screen w-full items-center py-20 sm:py-32"
        >
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center">
                <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                  Notre Processus
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Une méthodologie éprouvée en 4 étapes pour transformer votre
                  vision en réalité digitale.
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {/* Étape 01 - Découverte */}
              <FadeIn delay={0.1}>
                <motion.div
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 sm:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40">
                      <Search className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-400">
                      01
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    Découverte
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Nous analysons votre marché, vos objectifs et vos défis pour
                    définir une stratégie digitale sur-mesure.
                  </p>
                </motion.div>
              </FadeIn>

              {/* Étape 02 - Stratégie */}
              <FadeIn delay={0.2}>
                <motion.div
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 sm:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/40">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-400">
                      02
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    Stratégie
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Nous concevons l&apos;architecture de votre projet, définissons
                    les parcours utilisateurs et planifions chaque étape.
                  </p>
                </motion.div>
              </FadeIn>

              {/* Étape 03 - Création */}
              <FadeIn delay={0.3}>
                <motion.div
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 sm:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/40">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-400">
                      03
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    Création
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Design premium, développement Next.js haute performance et
                    intégration de toutes les fonctionnalités clés.
                  </p>
                </motion.div>
              </FadeIn>

              {/* Étape 04 - Lancement */}
              <FadeIn delay={0.4}>
                <motion.div
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 sm:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 shadow-lg shadow-blue-500/40">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-400">
                      04
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    Lancement
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Déploiement sur Vercel, optimisation SEO, formation et
                    accompagnement continu pour maximiser vos résultats.
                  </p>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* TARIFS */}
        <section
          id="tarifs"
          className="relative flex min-h-screen w-full items-center py-32 sm:py-40"
        >
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:gap-24">
            {/* Header Premium */}
            <FadeIn>
              <div className="flex flex-col items-center text-center">
                <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                  Tarifs transparents, pensés pour les PME et les entreprises
                  en croissance.
                </h2>
                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Modèle hybride : un setup initial pour poser une base solide,
                  puis un abonnement léger pour faire vivre et évoluer votre
                  site, sans surprise.
                </p>
                <p className="mt-4 text-sm text-slate-500 sm:text-base">
                  Hébergement, maintenance et petites évolutions incluses selon
                  l&apos;offre choisie.
                </p>
              </div>
            </FadeIn>

            {/* Grille de cartes premium */}
            <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
              {/* Offre Essentiel */}
              <FadeIn delay={0.1}>
                <motion.div
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/25 sm:p-10"
                >
                  {/* Glow background */}
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/40" />
                  
                  {/* Header avec icône */}
                  <div className="relative mb-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40">
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Start
                      </p>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                      Offre Essentiel
                    </h3>
                  </div>

                  {/* Prix */}
                  <div className="relative mb-6">
                    <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
                      290€
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      (setup) + <span className="text-slate-900">79€/mois</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="relative mb-8 text-base leading-relaxed text-slate-600">
                    Pour démarrer rapidement avec une présence professionnelle
                    et rassurante.
                  </p>

                  {/* Liste avec checkmarks */}
                  <ul className="relative mt-auto space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                      <span>Site vitrine jusqu&apos;à 5 pages.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                      <span>SEO basique (structure &amp; balisage propres).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                      <span>Formulaire de contact &amp; appels à l&apos;action.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                      <span>Hébergement &amp; maintenance technique.</span>
                    </li>
                  </ul>
                </motion.div>
              </FadeIn>

              {/* Offre Business (POPULAIRE) */}
              <FadeIn delay={0.2}>
                <motion.div
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-blue-500/40 bg-slate-950 p-8 text-slate-50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] ring-1 ring-blue-500/50 transition-all duration-300 hover:-translate-y-3 hover:border-blue-400/80 hover:shadow-[0_30px_80px_-24px] hover:shadow-blue-500/60 sm:p-10 md:translate-y-[-8px]"
                >
                  {/* Glow interne intensifié */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-600/30 to-violet-600/30 blur-2xl" />
                  <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-500/50 blur-3xl transition-all duration-300 group-hover:bg-blue-500/70" />
                  
                  {/* Badge Populaire */}
                  <div className="absolute right-6 top-6 z-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-blue-500/60">
                    Populaire
                  </div>

                  {/* Header avec icône */}
                  <div className="relative mb-6 mt-2">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl shadow-blue-500/60">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/90">
                        Business
                      </p>
                    </div>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">
                      Offre Business
                    </h3>
                  </div>

                  {/* Prix */}
                  <div className="relative mb-6">
                    <p className="text-3xl font-bold text-slate-50 sm:text-4xl">
                      1490€
                    </p>
                    <p className="mt-1 text-sm font-medium text-blue-100/80">
                      (setup) + <span className="text-slate-50">49€/mois</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="relative mb-8 text-base leading-relaxed text-blue-100/90">
                    L&apos;offre idéale pour les entreprises qui veulent une
                    image haut de gamme et un site pensé pour convertir.
                  </p>

                  {/* Liste avec checkmarks */}
                  <ul className="relative mt-auto space-y-3 text-sm text-blue-50/95">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                      <span>Design sur-mesure aligné sur votre positionnement.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                      <span>SEO avancé (structure, contenus, maillage interne).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                      <span>Module avis clients &amp; preuves sociales.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                      <span>Rédaction incluse des pages clés.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                      <span>Optimisation continue &amp; petites évolutions.</span>
                    </li>
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="relative mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-blue-500/50 transition-all hover:scale-105 hover:bg-slate-100 hover:shadow-2xl active:scale-95"
                  >
                    Parler de l&apos;offre Business
                  </a>
                </motion.div>
              </FadeIn>

              {/* Offre Sur Devis */}
              <FadeIn delay={0.3}>
                <motion.div
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-3 hover:border-violet-500/60 hover:shadow-2xl hover:shadow-violet-500/25 sm:p-10"
                >
                  {/* Glow background */}
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-violet-400/20 blur-3xl transition-all duration-300 group-hover:bg-violet-400/40" />
                  
                  {/* Header avec icône */}
                  <div className="relative mb-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/40">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Pro / E-commerce
                      </p>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                      Sur devis
                    </h3>
                  </div>

                  {/* Prix */}
                  <div className="relative mb-6">
                    <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
                      Sur devis
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      Projet personnalisé selon vos besoins
                    </p>
                  </div>

                  {/* Description */}
                  <p className="relative mb-8 text-base leading-relaxed text-slate-600">
                    Pour les projets complexes, E-commerce ou fonctionnalités
                    métiers spécifiques.
                  </p>

                  {/* Liste avec checkmarks */}
                  <ul className="relative mt-auto space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                      <span>Fonctionnalités avancées &amp; logiques métiers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                      <span>Intégration API, CRM, paiement, réservation, etc.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                      <span>E-commerce, catalogues produits &amp; tunnels de vente.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                      <span>Accompagnement produit &amp; stratégie digitale.</span>
                    </li>
                  </ul>

                  {/* Note */}
                  <p className="relative mt-8 rounded-xl bg-slate-50/80 px-4 py-3 text-xs leading-relaxed text-slate-500 backdrop-blur-sm">
                    Nous définissons ensemble le périmètre précis, les
                    priorités et la roadmap.
                  </p>
                </motion.div>
              </FadeIn>
            </div>
        </div>
        </section>
      </main>
    </div>
  );
}
