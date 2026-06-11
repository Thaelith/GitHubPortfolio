type Props = { featured?: boolean };

export function DefaultVisual({ featured: _featured }: Props) {
  const maxW = _featured ? "max-w-[360px]" : "max-w-[320px]";

  return (
    <div className={`w-full ${maxW} p-3`}>
      <div className="grid aspect-video place-items-center rounded border border-outline-variant bg-surface-lowest">
        <div className="relative h-36 w-60 max-w-full">
          <div className="absolute left-4 top-3 h-11 w-22 rounded border border-primary/60 bg-primary/8" />
          <div className="absolute right-4 top-5 h-11 w-22 rounded border border-on-surface-variant/40 bg-surface-high" />
          <div className="absolute bottom-4 left-16 h-11 w-22 rounded border border-on-surface-variant/40 bg-surface-high" />
          <div className="absolute left-[84px] top-[50px] h-px w-14 rotate-[24deg] bg-primary/60" />
          <div className="absolute left-[70px] top-[50px] h-px w-14 -rotate-[35deg] bg-primary/60" />
        </div>
      </div>
    </div>
  );
}
