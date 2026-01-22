"use client";

import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import {
  Check,
  X,
  ChevronDown,
  Zap,
  Shield,
  Code,
  Clock,
  Headphones,
  Award,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export default function TarifsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Pourquoi un modèle avec abonnement ?",
      answer:
        "L'abonnement couvre l'hébergement sur Vercel (infrastructure premium), les mises à jour de sécurité, les petites évolutions et le support technique. C'est un modèle transparent qui évite les surprises et vous permet de faire évoluer votre site progressivement.",
    },
    {
      question: "Suis-je propriétaire de mon site ?",
      answer:
        "Absolument. Vous êtes propriétaire à 100% du code source, du design et de tous les contenus. Nous vous fournissons l'accès complet à votre projet. Vous pouvez même changer de prestataire si vous le souhaitez.",
    },
    {
      question: "Que se passe-t-il si je veux arrêter l'abonnement ?",
      answer:
        "Vous gardez votre site tel quel. Nous vous fournissons une export complète de votre code et de vos données. Vous pouvez continuer à utiliser votre site en hébergeant ailleurs, ou simplement l'archiver.",
    },
    {
      question: "Les prix incluent-ils les contenus (textes, images) ?",
      answer:
        "L'offre Essentiel inclut la structure et le design. L'offre Business inclut la rédaction des pages clés. Pour les images, nous utilisons vos visuels existants ou des banques d'images premium (incluses dans Business).",
    },
    {
      question: "Combien de temps prend la création d'un site ?",
      answer:
        "Essentiel : ⚡ Livré en 7 jours. Business : 3-5 semaines (selon la complexité du design sur-mesure). Sur devis : délai défini selon le périmètre précis du projet.",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Fond Aurora fixe global */}
      <AuroraBackground />

      {/* Hero Compact + Cartes Tarifs - Above the Fold */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* Header Compact */}
          <FadeIn>
            <div className="mb-12 flex flex-col items-center text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Nos Tarifs &amp; Offres
              </h1>
              <p className="mt-4 text-lg text-slate-600 sm:text-xl">
                Investissez dans votre croissance avec des forfaits clairs.
              </p>
            </div>
          </FadeIn>

          {/* Grille de cartes - Visible immédiatement */}
          <div className="grid gap-6 pt-20 md:grid-cols-3 lg:gap-8 lg:pt-24">
            {/* Offre Essentiel */}
            <FadeIn delay={0.1}>
              <motion.div
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/25 sm:p-10"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/40" />
                
                <div className="relative mb-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40">
                      <Zap className="h-6 w-6 text-white" />
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
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    À partir de
                  </p>
                  <p className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">
                    290€
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    (setup) + <span className="text-slate-900 font-semibold">79€/mois</span>
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>⚡ Livré en 7 jours</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Headphones className="h-3.5 w-3.5" />
                      <span>Support inclus</span>
                    </div>
                  </div>
                </div>

                {/* Pour qui ? */}
                <p className="relative mb-6 rounded-xl bg-cyan-50/80 px-4 py-3 text-sm leading-relaxed text-slate-700 backdrop-blur-sm">
                  <strong className="font-semibold text-cyan-700">Pour qui ?</strong>{" "}
                  Idéal pour les artisans et libéraux qui veulent une présence pro
                  immédiate sans complexité.
                </p>

                {/* Liste avec checkmarks */}
                <ul className="relative mt-auto space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <span>Site vitrine sur base de Template.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <span>Hébergement haute performance inclus.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                    <span>Sécurisé &amp; Rapide.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 ring-1 ring-red-200">
                      <X className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-slate-500">Textes &amp; Images à fournir par vous.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 ring-1 ring-red-200">
                      <X className="h-4 w-4 text-red-500" />
                    </span>
                    <span className="text-slate-500">Pas de personnalisation avancée.</span>
                  </li>
                </ul>

                {/* Badges valeur & garanties */}
                <div className="mt-6 space-y-2">
                  <div className="rounded-lg bg-cyan-50/80 px-4 py-2.5 text-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-cyan-600" />
                      <span className="font-semibold text-cyan-700">
                        Idéal pour démarrer rapidement
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-green-200/60 bg-green-50/60 px-4 py-2.5 text-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-700">
                        Garantie satisfaction 30 jours
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Offre Business (POPULAIRE) */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute -top-5 left-1/2 z-30 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-2xl shadow-blue-600/50 ring-1 ring-white/20">
                  Populaire
                </div>
                <motion.div
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-blue-500/40 bg-slate-950 p-8 text-slate-50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] ring-1 ring-blue-500/50 transition-all duration-300 hover:-translate-y-3 hover:border-blue-400/80 hover:shadow-[0_30px_80px_-24px] hover:shadow-blue-500/60 sm:p-10 md:translate-y-[-8px]"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-600/30 to-violet-600/30 blur-2xl" />
                  <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-500/50 blur-3xl transition-all duration-300 group-hover:bg-blue-500/70" />

                  <div className="relative mb-6 mt-6">
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
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-100/80">
                    À partir de
                  </p>
                  <p className="mt-1 text-3xl font-bold text-slate-50 sm:text-4xl">
                    1490€
                  </p>
                  <p className="mt-1 text-sm font-medium text-blue-100/80">
                    (setup) + <span className="text-slate-50 font-semibold">49€/mois</span>
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-blue-100/80">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>3-5 semaines</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Headphones className="h-3.5 w-3.5" />
                      <span>Support prioritaire</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>ROI garanti</span>
                    </div>
                  </div>
                </div>

                {/* Pour qui ? */}
                <p className="relative mb-6 rounded-xl bg-blue-900/40 px-4 py-3 text-sm leading-relaxed text-blue-50/95 backdrop-blur-sm">
                  <strong className="font-semibold text-blue-200">Pour qui ?</strong>{" "}
                  Le standard pour les PME ambitieuses qui veulent générer des leads
                  et dominer leur marché local.
                </p>

                {/* Liste avec checkmarks */}
                <ul className="relative mt-auto space-y-3 text-sm text-blue-50/95">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span>Design 100% Unique &amp; Sur-mesure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span><strong className="font-bold">Rédaction Copywriting INCLUSE</strong> (On écrit pour vous).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span>Stratégie SEO Avancée &amp; Mots-clés.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span>Intégration CRM &amp; Automatisations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span>Module avis clients &amp; preuves sociales.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span>Optimisation continue &amp; petites évolutions.</span>
                  </li>
                </ul>

                {/* Badges valeur & garanties */}
                <div className="mt-6 space-y-2">
                  <div className="rounded-lg bg-blue-900/40 px-4 py-2.5 text-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-200" />
                      <span className="font-semibold text-blue-50">
                        Meilleur rapport qualité/prix
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-green-400/40 bg-green-500/20 px-4 py-2.5 text-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-300" />
                      <span className="font-medium text-green-50">
                        Garantie satisfaction + ROI garanti
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-cyan-400/40 bg-cyan-500/20 px-4 py-2.5 text-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-cyan-300" />
                      <span className="font-medium text-cyan-50">
                        +30% de trafic organique en moyenne
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-blue-500/50 transition-all hover:scale-105 hover:bg-slate-100 hover:shadow-2xl active:scale-95"
                >
                  Parler de l&apos;offre Business
                  <ArrowRight className="h-4 w-4" />
                </a>
                </motion.div>
              </div>
            </FadeIn>

            {/* Offre Sur Devis */}
            <FadeIn delay={0.3}>
              <motion.div
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-3 hover:border-violet-500/60 hover:shadow-2xl hover:shadow-violet-500/25 sm:p-10"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-violet-400/20 blur-3xl transition-all duration-300 group-hover:bg-violet-400/40" />
                
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
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Devis personnalisé
                  </p>
                  <p className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">
                    Sur devis
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    Projet personnalisé selon vos besoins
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>Délai sur mesure</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Headphones className="h-3.5 w-3.5" />
                      <span>Support dédié</span>
                    </div>
                  </div>
                </div>

                {/* Pour qui ? */}
                <p className="relative mb-6 rounded-xl bg-violet-50/80 px-4 py-3 text-sm leading-relaxed text-slate-700 backdrop-blur-sm">
                  <strong className="font-semibold text-violet-700">Pour qui ?</strong>{" "}
                  Pour les projets E-commerce, SaaS ou les besoins
                  d&apos;intégration spécifiques.
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
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                    <span>Développement sur-mesure &amp; intégrations tierces.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                    <span>Formation équipe &amp; documentation technique.</span>
                  </li>
                </ul>

                {/* Badges valeur & garanties */}
                <div className="mt-6 space-y-2">
                  <div className="rounded-lg bg-violet-50/80 px-4 py-2.5 text-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-violet-600" />
                      <span className="font-semibold text-violet-700">
                        Solution adaptée à vos enjeux
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-green-200/60 bg-green-50/60 px-4 py-2.5 text-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-700">
                        Accompagnement dédié & ROI sur mesure
                      </span>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <p className="relative mt-8 rounded-xl bg-slate-50/80 px-4 py-3 text-xs leading-relaxed text-slate-500 backdrop-blur-sm">
                  Nous définissons ensemble le périmètre précis, les priorités et la
                  roadmap.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tableau Comparatif */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeIn>
            <div className="rounded-3xl border border-white/40 bg-white/40 p-8 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl sm:p-12">
              <h2 className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Comparatif des offres
              </h2>

              {/* Tableau */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/30">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                        Fonctionnalités
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                        Essentiel
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">
                        Business
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                        Sur Mesure
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/20">
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        Prix setup
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                        290€
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">
                        1490€
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-slate-600">
                        Sur devis
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        Abonnement mensuel
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                        79€/mois
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">
                        49€/mois
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-slate-600">
                        Sur devis
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        Nombre de pages
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-cyan-500" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-blue-500" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-violet-500" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        Design sur-mesure
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="mx-auto h-5 w-5 text-slate-400" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-blue-500" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-violet-500" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        SEO avancé
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="mx-auto h-5 w-5 text-slate-400" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-blue-500" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-violet-500" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        Rédaction incluse
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="mx-auto h-5 w-5 text-slate-400" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-blue-500" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-violet-500" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        Module avis clients
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="mx-auto h-5 w-5 text-slate-400" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-blue-500" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-violet-500" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        Fonctionnalités sur-mesure
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="mx-auto h-5 w-5 text-slate-400" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="mx-auto h-5 w-5 text-slate-400" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="mx-auto h-5 w-5 text-violet-500" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <FadeIn>
            <h2 className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Questions Fréquentes
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-lg shadow-blue-900/5 overflow-hidden"
                  initial={false}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/20"
                  >
                    <span className="font-semibold text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-600 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
