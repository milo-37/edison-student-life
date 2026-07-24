interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`section-label mb-4 flex items-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="inline-block h-px w-8 bg-orange/60" />
      {children}
    </p>
  );
}
