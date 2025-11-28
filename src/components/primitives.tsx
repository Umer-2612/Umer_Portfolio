import { ReactNode } from "react";

export const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_16px_30px_rgba(15,23,42,0.05)] ${className}`}>{children}</div>
);

export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <div className="space-y-2">
    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">
      <span className="h-px w-8 bg-slate-300" />
      <span>{eyebrow}</span>
    </div>
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      {description && <p className="text-sm text-slate-600">{description}</p>}
    </div>
  </div>
);

export const Pill = ({ children, href }: { children: ReactNode; href?: string }) =>
  href ? (
    <a
      href={href}
      className="rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:shadow-[0_18px_30px_rgba(15,23,42,0.18)]"
    >
      {children}
    </a>
  ) : (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">{children}</span>
  );
