/** Decorative audio waveform bars for the "listen to a real AI call" panel. */
export function CallWaveform({ bars = 44 }: { bars?: number }) {
  return (
    <div className="flex h-10 items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="hd-wave w-[3px] flex-1 rounded-full bg-primary/70"
          style={{
            height: `${Math.round(28 + Math.sin(i * 1.7) * 22 + (i % 5) * 6)}%`,
            animationDelay: `${(i % 11) * 90}ms`,
          }}
        />
      ))}
    </div>
  );
}
