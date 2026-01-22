"use client";

import Link from "next/link";
import { Menu, X, Lock } from "lucide-react";
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
    { href: "/solutions", label: "Solutions" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/tarifs", label: "Tarifs" },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        {/* Capsule flottante - Command Center */}
        <nav className="relative flex w-full max-w-5xl items-center justify-between rounded-full border border-white/40 bg-white/70 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-6 sm:py-3.5">
          {/* Logo - Gauche */}
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105"
          >
            {/* Logo Typographique - ILYXLABS */}
            <div className="font-display text-xl font-bold tracking-tight">
              <span className="text-slate-900">IL</span>
              <span className="text-blue-600">YX</span>
              <span className="text-slate-500 font-medium">LABS</span>
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

          {/* Actions - Droite (Desktop) */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-transparent px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:bg-slate-50 active:scale-95"
            >
              <Lock className="h-3.5 w-3.5" />
              Espace Client
            </Link>
          </div>

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
                  className="flex items-center"
                >
                  <div className="font-display text-xl font-bold tracking-tight">
                    <span className="text-slate-900">IL</span>
                    <span className="text-blue-600">YX</span>
                    <span className="text-slate-500 font-medium">LABS</span>
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

                {/* Actions dans le menu */}
                <div className="mt-4 space-y-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-center text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100/80"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-transparent px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:scale-105 hover:border-slate-400 hover:bg-slate-50 active:scale-95"
                  >
                    <Lock className="h-3.5 w-3.5" />
                    Espace Client
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
