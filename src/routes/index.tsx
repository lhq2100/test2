import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doomscrolling & Teen Mental Health" },
      { name: "description", content: "How compulsive scrolling fuels anxiety, depression, sleep loss, and worse school performance in teens." },
      { property: "og:title", content: "Doomscrolling & Teen Mental Health" },
      { property: "og:description", content: "The cost of the infinite feed — and how to log off without losing out." },
    ],
  }),
  component: Home,
});

const STATS = [
  { label: "Anxiety Risk", value: "45%", caption: "higher odds of anxiety in teens with 4+ hours of daily screen time" },
  { label: "Depression Risk", value: "65%", caption: "higher likelihood of depression in youth with 4+ hours of screen time" },
  { label: "Sleep Lost", value: "70%", caption: "of people check social media in bed — more scrolling, worse sleep" },
];

function Home() {
  return (
    <div className="space-y-24">
      <section className="pt-8">
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-6">Perspectives · Issue 04</p>
        <h1 className="text-5xl sm:text-7xl font-bold leading-[1.05] max-w-4xl">
          The Cost of<br />
          <span className="text-primary">Doomscrolling</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Compulsively consuming negative, stressful content online is quietly
          reshaping teen anxiety, sleep, and school performance. Here's what
          the research says — and what teens can actually do about it.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/issue" className="rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition">
            Read the issue
          </Link>
          <Link to="/solution" className="rounded-md border border-border px-5 py-3 font-semibold hover:bg-secondary transition">
            See the solutions
          </Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-6">
        {STATS.map((s) => (
          <div key={s.label} className="card-glow rounded-xl p-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
            <p className="stat-number text-5xl mt-4">{s.value}</p>
            <p className="mt-3 text-sm text-muted-foreground">{s.caption}</p>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { to: "/issue", title: "What is doomscrolling?", body: "Compulsive consumption of negative content — and why teen brains are uniquely vulnerable to it." },
          { to: "/solution", title: "What helps", body: "Evidence-based strategies to break the loop: screen limits, sleep hygiene, and replacement habits." },
          { to: "/perspectives", title: "Why teens scroll", body: "FOMO, loneliness, stress relief — the reasons teens reach for the feed, even when it hurts." },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="card-glow rounded-xl p-8 group hover:border-primary transition">
            <h3 className="text-2xl font-bold">{c.title}</h3>
            <p className="mt-3 text-muted-foreground">{c.body}</p>
            <p className="mt-6 text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">Learn more →</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
