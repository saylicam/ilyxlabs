"use client";

import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { useMemo, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Demande de contact — Ilyx Labs");
    const lines = [
      `Prénom: ${form.firstName}`.trim(),
      `Nom: ${form.lastName}`.trim(),
      `Email: ${form.email}`.trim(),
      `Entreprise: ${form.company || "-"}`.trim(),
      "",
      "Message :",
      form.message,
    ];
    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:contact@ilyxlabs.com?subject=${subject}&body=${body}`;
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <AuroraBackground />

      <section className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* LEFT — Invitation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              <FadeIn>
                <div className="space-y-5">
                  <h1 className="font-display text-5xl font-extrabold tracking-tighter text-slate-900 sm:text-6xl">
                    Parlons de votre futur.
                  </h1>
                  <p className="max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl">
                    Vous avez un projet ambitieux ? Nous avons l&apos;équipe pour le
                    réaliser.
                  </p>
                </div>
              </FadeIn>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:contact@ilyxlabs.com"
                  className="group rounded-2xl border border-white/50 bg-white/40 p-5 shadow-xl shadow-blue-900/10 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/15"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/50 backdrop-blur-md">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Email
                      </p>
                      <p className="mt-1 truncate text-base font-semibold text-slate-900">
                        contact@ilyxlabs.com
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Cliquez pour envoyer un mail
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+33600000000"
                  className="group rounded-2xl border border-white/50 bg-white/40 p-5 shadow-xl shadow-blue-900/10 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/15"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/50 backdrop-blur-md">
                      <Phone className="h-5 w-5 text-violet-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Téléphone
                      </p>
                      <p className="mt-1 text-base font-semibold text-slate-900">
                        +33 6 00 00 00 00
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Appel rapide, sans pression
                      </p>
                    </div>
                  </div>
                </a>

                <div className="rounded-2xl border border-white/50 bg-white/40 p-5 shadow-xl shadow-blue-900/10 backdrop-blur-xl sm:col-span-2">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/50 backdrop-blur-md">
                      <MapPin className="h-5 w-5 text-slate-700" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Localisation
                      </p>
                      <p className="mt-1 text-base font-semibold text-slate-900">
                        France — Remote & présentiel selon projet
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Intervention nationale (PME, startups, cabinets, cliniques)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-emerald-200/60 bg-emerald-50/60 px-5 py-4 text-sm text-emerald-900 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="font-medium">Réponse garantie sous 24h.</span>
              </div>

              {/* Book a call */}
              <div className="rounded-3xl border border-white/50 bg-white/40 p-6 shadow-xl shadow-blue-900/10 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Pas envie d&apos;écrire ?
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Réservez un appel découverte de 15 minutes et on clarifie
                      votre besoin en direct.
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/50 backdrop-blur-md">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <a
                  href="mailto:contact@ilyxlabs.com?subject=Appel%20d%C3%A9couverte%2015%20min%20%E2%80%94%20Ilyx%20Labs"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/30 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:bg-white/50 hover:shadow-lg active:scale-95"
                >
                  Réserver un appel découverte (15 min)
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Form Glass */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="rounded-3xl border border-white/50 bg-white/40 p-8 shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:p-10">
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Envoyez-nous un message
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    5 champs, aucune friction. On vous répond vite.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Prénom
                      </span>
                      <input
                        value={form.firstName}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, firstName: e.target.value }))
                        }
                        required
                        className="w-full bg-transparent px-0 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none border-b border-slate-300/60 focus:border-blue-600 transition-colors"
                        placeholder="Votre prénom"
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Nom
                      </span>
                      <input
                        value={form.lastName}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, lastName: e.target.value }))
                        }
                        required
                        className="w-full bg-transparent px-0 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none border-b border-slate-300/60 focus:border-violet-600 transition-colors"
                        placeholder="Votre nom"
                      />
                    </label>
                  </div>

                  <label className="space-y-2 block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </span>
                    <input
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                      type="email"
                      className="w-full bg-transparent px-0 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none border-b border-slate-300/60 focus:border-blue-600 transition-colors"
                      placeholder="vous@entreprise.com"
                    />
                  </label>

                  <label className="space-y-2 block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Entreprise{" "}
                      <span className="normal-case font-medium text-slate-400">
                        (optionnel)
                      </span>
                    </span>
                    <input
                      value={form.company}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, company: e.target.value }))
                      }
                      className="w-full bg-transparent px-0 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none border-b border-slate-300/60 focus:border-violet-600 transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </label>

                  <label className="space-y-2 block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Message
                    </span>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      required
                      rows={6}
                      className="w-full resize-none bg-transparent px-0 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none border-b border-slate-300/60 focus:border-blue-600 transition-colors"
                      placeholder="Parlez-nous de votre projet, de vos objectifs, et de votre timing."
                    />
                  </label>

                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 active:scale-95"
                  >
                    Envoyer
                    <span className="transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    En envoyant, vous acceptez d&apos;être recontacté par Ilyx Labs.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

