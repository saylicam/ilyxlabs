"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  closeMobileMenu?: () => void
) => {
  // Si c'est une ancre (commence par #), faire le smooth scroll
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Fermer le menu mobile uniquement si on est sur mobile
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  } else {
    // Si c'est une route, laisser Next.js gérer la navigation
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  }
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { href: "/#philosophie", label: "Philosophie" },
    { href: "/solutions", label: "Solutions" },
    { href: "/#processus", label: "Processus" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        {/* Capsule flottante - Command Center */}
        <nav className="relative flex w-full max-w-5xl items-center justify-between rounded-full border border-white/40 bg-white/70 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-6 sm:py-3.5">
          {/* Logo - Gauche */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-500 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
              IL
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-semibold tracking-tight text-slate-900">
                Ilyx Labs
              </span>
              <span className="text-[11px] text-slate-500">
                Agence Web nouvelle génération
              </span>
            </div>
          </Link>

          {/* Navigation Desktop - Centrée */}
          <div className="hidden flex-1 items-center justify-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-slate-900"
              >
                {/* Fond animé qui suit le survol */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-slate-100/80 backdrop-blur-sm"
                  initial={false}
                  animate={{
                    opacity: hoveredLink === link.href ? 1 : 0,
                    scale: hoveredLink === link.href ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Bouton Gradient - Droite (Desktop) */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 active:scale-95 md:inline-flex"
          >
            Démarrer
          </Link>

          {/* Bouton Menu Mobile - Droite (Mobile uniquement) */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/50 text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/70 active:scale-95 md:hidden"
            aria-label="Ouvrir le menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </nav>
      </header>

      {/* Menu Mobile - Sheet avec animation fluide */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay avec blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sheet Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] border-l border-white/20 bg-white/80 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-6 pt-16">
                {/* Logo dans le menu */}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
                    IL
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold tracking-tight text-slate-900">
                      Ilyx Labs
                    </span>
                    <span className="text-xs text-slate-500">
                      Agence Web nouvelle génération
                    </span>
                  </div>
                </Link>

                {/* Liens de navigation */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) =>
                        handleSmoothScroll(e, link.href, () =>
                          setIsMobileMenuOpen(false)
                        )
                      }
                      className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-all hover:bg-slate-100/80 hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* CTA dans le menu */}
                <Link
                  href="/contact"
                  onClick={(e) =>
                    handleSmoothScroll(e, "/contact", () =>
                      setIsMobileMenuOpen(false)
                    )
                  }
                  className="mt-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50 active:scale-95"
                >
                  Démarrer
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
