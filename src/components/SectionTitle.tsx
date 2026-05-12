type SectionTitleProps = {
  eyebrow: string;
  title: string;
  compact?: boolean;
};

export function SectionTitle({ eyebrow, title, compact }: SectionTitleProps) {
  return (
    <div className={compact ? "mb-6" : "mb-10"}>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 border-b border-outline-variant pb-4 font-display text-2xl font-semibold text-on-surface md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
