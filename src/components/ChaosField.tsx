type Note = {
  text: string;
  top: string;
  left?: string;
  right?: string;
  delay: string;
  mono?: boolean;
};

const notes: Note[] = [
  { text: "Missed call — 7:42pm", top: "4%", left: "1.5%", delay: "0s" },
  { text: "\u201cI want to rescedule?\u201d", top: "10%", right: "2%", delay: "1.2s", mono: true },
  { text: "\u201cAre you still open?\u201d", top: "38%", left: "1%", delay: "2.1s" },
  { text: "new_patients_Q2.xlsx", top: "31%", right: "1.5%", delay: "0.6s", mono: true },
  { text: "No one picking up the call", top: "62%", left: "2%", delay: "1.7s" },
  { text: "#UNSCHEDULED TX", top: "70%", right: "3%", delay: "2.6s", mono: true },
];

export function ChaosField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
      {notes.map((n) => (
        <span
          key={n.text}
          style={{ top: n.top, left: n.left, right: n.right, animationDelay: n.delay }}
          className={`hd-drift absolute rounded-full border border-border bg-surface/60 px-3 py-1.5 text-[11px] whitespace-nowrap text-muted-foreground/60 backdrop-blur-sm ${
            n.mono ? "font-mono tracking-[0.12em] uppercase" : ""
          }`}
        >
          {n.text}
        </span>
      ))}
    </div>
  );
}
