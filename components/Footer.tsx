export const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-slate-200/60 bg-slate-50/80 py-8 text-xs text-slate-500"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-slate-700">Ilyx Labs</p>
          <p className="max-w-md text-xs text-slate-500">
            Nous mettons la technologie des grandes entreprises au service des
            PME, cabinets, cliniques, restaurants, industriels et startups
            ambitieuses.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <p className="text-[11px]">
            © {new Date().getFullYear()} Ilyx Labs. Tous droits réservés.
          </p>
          <div className="flex gap-3 text-[11px]">
            <span className="text-slate-400">Next.js · Vercel · Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

