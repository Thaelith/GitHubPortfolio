type SkillTagProps = {
  children: React.ReactNode;
  accent?: boolean;
};

export function SkillTag({ children, accent }: SkillTagProps) {
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-1 font-mono text-xs leading-none ${
        accent
          ? "border-primary/35 bg-primary/10 text-primary"
          : "border-outline-variant bg-surface-high text-on-surface-variant"
      }`}
    >
      {children}
    </span>
  );
}
