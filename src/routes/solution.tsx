import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solution")({
  head: () => ({
    meta: [
      { title: "Solutions — Breaking the Doomscroll Loop" },
      { name: "description", content: "Evidence-based ways to reduce doomscrolling: screen limits, sleep hygiene, replacement habits, and support." },
      { property: "og:title", content: "Solutions — Breaking the Doomscroll Loop" },
      { property: "og:description", content: "Practical, research-backed strategies for teens to take back the feed." },
    ],
  }),
  component: Page,
});

const STRATEGIES = [
  { title: "Set screen-time limits", body: "Use built-in iOS/Android limits to cap the apps that pull you in hardest. A daily ceiling — even a generous one — interrupts the autopilot." },
  { title: "No phones 1 hour before sleep", body: "Blue light delays melatonin and stressful content keeps the brain alert. Charging the phone outside the bedroom protects the single biggest lever on mood and grades." },
  { title: "Disable notifications", body: "Each ping is a fresh invitation to scroll. Turning off non-essential notifications removes the trigger before it starts." },
  { title: "Replace, don't just remove", body: "Substitute scrolling with exercise, reading, music, or time with friends. The brain still wants stimulation — give it a healthier source." },
  { title: "Schedule news checking", body: "Pick one or two times a day to catch up on the news. You stay informed without marinating in it for hours." },
  { title: "Use digital wellbeing tools", body: "Greyscale mode, app timers, and focus modes make the feed less appealing and less accessible during study or sleep windows." },
  { title: "Seek support when it's persistent", body: "If anxiety, depression, or sleep issues last more than a few weeks, talk to a parent, school counsellor, or therapist. Doomscrolling can worsen existing conditions — professional support helps." },
];

const QUICK = [
  "Charge your phone outside the bedroom tonight.",
  "Turn off notifications for one app right now.",
  "Pick a 30-minute window tomorrow that's screen-free.",
  "Unfollow three accounts that make you feel worse.",
];

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Solutions</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">Breaking the loop</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Doomscrolling is engineered to be hard to stop — but it's not unbeatable.
          These strategies are drawn from sleep research, adolescent psychology,
          and clinical guidance for anxiety and depression. None of them require
          deleting every app. Most of them just need <span className="text-highlight font-semibold">one
          intentional friction point</span> between you and the feed.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-8">Evidence-based strategies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {STRATEGIES.map((s, i) => (
            <article key={s.title} className="card-glow rounded-xl p-8">
              <p className="stat-number text-3xl">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card-glow rounded-2xl p-10">
        <p className="text-xs uppercase tracking-widest text-primary">Start Tonight</p>
        <h2 className="mt-3 text-3xl font-bold">Four small moves</h2>
        <ul className="mt-8 space-y-4">
          {QUICK.map((q) => (
            <li key={q} className="flex gap-4 text-lg">
              <span className="text-primary font-bold">✓</span>
              <span className="text-foreground">{q}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
