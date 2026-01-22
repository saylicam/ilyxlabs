import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Col 1 — Identité */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-baseline gap-0.5 font-display text-2xl font-bold tracking-tight">
              <span className="text-slate-900">IL</span>
              <span className="text-blue-600">YX</span>
              <span className="font-medium text-slate-500">LABS</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Nous transformons les PME ambitieuses en leaders digitaux grâce à
              une technologie de pointe.
            </p>
          </div>

          {/* Col 2 — Explorer */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-900">Agence</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="text-slate-500 transition-colors hover:text-blue-600">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-slate-500 transition-colors hover:text-blue-600">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-slate-500 transition-colors hover:text-blue-600">
                  Tarifs
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-500 transition-colors hover:text-blue-600">
                  À Propos
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-slate-500 transition-colors hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Légal & Aide */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-900">Informations</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-500 transition-colors hover:text-blue-600">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 transition-colors hover:text-blue-600">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 transition-colors hover:text-blue-600">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Contact Direct */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-900">Nous trouver</p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                  <MapPin className="h-4 w-4 text-slate-600" />
                </span>
                <span>Bruxelles, Belgique</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                  <Phone className="h-4 w-4 text-slate-600" />
                </span>
                <a href="tel:+32486696722" className="transition-colors hover:text-blue-600">
                  +32 486 69 67 22
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                  <Mail className="h-4 w-4 text-slate-600" />
                </span>
                <a href="mailto:contact@ilyxlabs.com" className="transition-colors hover:text-blue-600">
                  contact@ilyxlabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Ilyx Labs. Tous droits réservés.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-colors hover:text-blue-600 hover:border-blue-200"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-colors hover:text-blue-600 hover:border-blue-200"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-colors hover:text-blue-600 hover:border-blue-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Designed &amp; Coded in Belgium 🇧🇪
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

