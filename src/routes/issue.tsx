import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/issue")({
  head: () => ({
    meta: [
      { title: "The Issue — Doomscrolling" },
      { name: "description", content: "What doomscrolling is, why teens are vulnerable, and how it harms mental health, sleep, and school performance." },
      { property: "og:title", content: "The Issue — Doomscrolling" },
      { property: "og:description", content: "Negative content, dopamine loops, and a developing brain — a bad combination." },
    ],
  }),
  component: Page,
});

const IMPACTS = [
  {
    name: "ANXIETY",
    detail: "Teens with 4+ hours of daily screen time have 45% higher odds of anxiety. Doomscrolling studies show a strong correlation (r = 0.62) with anxiety symptoms.",
    featured: true,
  },
  {
    name: "DEPRESSION",
    detail: "4+ hours/day of screen time is linked with 65% higher likelihood of depression in youth, plus hopelessness, emotional exhaustion, and existential anxiety.",
  },
  {
    name: "SLEEP",
    detail: "Only 22% of older teens get 7+ hours of sleep. 70% check social media in bed; 38% of young adults say doomscrolling before bed worsens their sleep.",
  },
];

const LOOP = [
  "Social media algorithms surface emotionally intense, negative content because it keeps users watching longer — a system optimized for engagement, not wellbeing.",
  "The teen brain treats a stream of online threats like real ones. Cortisol rises, the nervous system stays alert, and anxiety becomes a baseline rather than an event.",
  "Stressful content keeps the brain wired late at night, while blue light delays melatonin. Sleep gets shorter and shallower, which weakens memory and mood the next day.",
  "Less sleep, more anxiety, and reduced focus then bleed directly into school — poorer studying, weaker recall, and lower performance on EQAO, OSSLT, and final exams.",
];

const EFFECTS = [
  { title: "Concentration", body: "Adolescent studies link doomscrolling with measurable difficulty concentrating in class and while studying." },
  { title: "Memory", body: "Poor sleep weakens attention span, retention, and recall during exams — the exact skills tests measure." },
  { title: "Engagement", body: "Reviews find doomscrolling associated with reduced focus, lower productivity, and worse academic performance overall." },
  { title: "Self-Image", body: "TikTok and Instagram comparison loops feed body dissatisfaction, lower self-esteem, and FOMO — amplifying anxiety and depression." },
  { title: "Body", body: "Fatigue, headaches, eye strain, elevated stress hormones, less physical activity, and irregular eating habits." },
  { title: "Compulsion", body: "Unpredictable algorithmic rewards mirror gambling reinforcement; social media addiction predicts increased doomscrolling over time." },
];

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">The Issue</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">What is doomscrolling?</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Doomscrolling is the compulsive consumption of negative, stressful, or
          emotionally overwhelming content online — news, TikToks, reels, shorts,
          comment sections — often for long stretches at a time. Teens are
          uniquely vulnerable: their brains are still developing self-control
          and reward systems, while <span className="text-highlight font-semibold">algorithms
          prioritize the most emotionally intense content</span> because it keeps
          users engaged longer.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-8">Three main impacts</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {IMPACTS.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl p-8 card-glow ${t.featured ? "ring-2 ring-primary" : ""}`}
            >
              <p className="stat-number text-3xl">{t.name}</p>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">The doomscroll loop</h2>
        <ol className="space-y-6">
          {LOOP.map((a, i) => (
            <li key={i} className="card-glow rounded-xl p-6 flex gap-5">
              <span className="stat-number text-3xl shrink-0 w-10">{i + 1}</span>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-muted-foreground italic">
          Negative content → stress response → anxiety → more scrolling →
          increased anxiety. The loop tightens with every refresh.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Where it shows up</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {EFFECTS.map((e) => (
            <div key={e.title} className="card-glow rounded-xl p-6">
              <p className="text-xs uppercase tracking-widest text-primary">{e.title}</p>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card-glow rounded-2xl p-10">
        <p className="text-xs uppercase tracking-widest text-primary">Testing Pathway</p>
        <h2 className="mt-3 text-3xl font-bold">From feed to failing grade</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">
          Doomscrolling → less sleep → more anxiety + reduced focus → poorer
          studying → lower performance on EQAO, OSSLT, exams, and standardized
          testing. The line between a midnight scroll and a missed question on
          test day is shorter than it looks.
        </p>
      </section>
    </div>
  );
}
