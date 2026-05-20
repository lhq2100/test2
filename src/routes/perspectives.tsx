import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/perspectives")({
  head: () => ({
    meta: [
      { title: "Perspectives — Why Teens Doomscroll" },
      { name: "description", content: "FOMO, loneliness, stress relief, and the reasons teens keep scrolling even when it hurts." },
      { property: "og:title", content: "Perspectives — Why Teens Doomscroll" },
      { property: "og:description", content: "The feelings behind the feed." },
    ],
  }),
  component: Page,
});

const REASONS = [
  { title: "Fear of missing out", body: "If everyone is online, logging off feels like falling behind socially. Scrolling becomes a way to stay in the room — even when the room is exhausting." },
  { title: "Distraction", body: "The feed is the easiest way to leave a hard moment. Homework, family stress, a bad day — one swipe and the brain is somewhere else." },
  { title: "Stress relief", body: "Scrolling feels like rest. It isn't — but the lack of effort is so seductive that teens reach for it the way someone else might reach for a snack." },
  { title: "Staying informed", body: "Real news lives next to outrage and panic. Trying to stay current pulls teens into an endless stream of crisis they can't actually act on." },
  { title: "Avoiding school pressure", body: "Studying for EQAO, OSSLT, or finals is uncomfortable. The phone offers immediate relief from that discomfort — and a guaranteed worse outcome later." },
  { title: "Loneliness", body: "Feeds simulate company. The notifications, the comments, the parasocial connections — they fill a quiet room without actually filling the loneliness." },
];

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Voices</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">Why teens scroll</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Numbers describe the problem. Feelings explain it. Doomscrolling
          usually isn't about the content — it's about what teens are trying to
          escape, soothe, or feel less alone in. Ironically, the scroll almost
          always worsens the feeling it was meant to fix.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {REASONS.map((r) => (
          <article key={r.title} className="card-glow rounded-2xl p-8">
            <p className="text-xs uppercase tracking-widest text-primary">{r.title}</p>
            <p className="mt-4 font-display text-xl leading-relaxed">{r.body}</p>
          </article>
        ))}
      </section>

      <section className="card-glow rounded-2xl p-10 max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-primary">The Irony</p>
        <p className="mt-6 font-display text-2xl leading-relaxed">
          "Doomscrolling is most often an attempt to feel less anxious, less
          lonely, or less overwhelmed — and it reliably produces more of each."
        </p>
        <footer className="mt-8 text-sm text-muted-foreground">
          A throughline across adolescent mental health research, 2020–2025.
        </footer>
      </section>
    </div>
  );
}
