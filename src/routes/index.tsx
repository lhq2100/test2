import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Standardized Testing & Student Anxiety in Ontario" },
      { name: "description", content: "How societal beliefs about Ontario's EQAO, OSSLT, and final exams shape student well-being and academic performance." },
      { property: "og:title", content: "Standardized Testing & Student Anxiety in Ontario" },
      { property: "og:description", content: "Exploring how testing culture impacts students, through student and teacher eyes." },
    ],
  }),
  component: Home,
});

const STATS = [
  { label: "Test Anxiety Prevalence", value: "40–60%", caption: "of Ontario students negatively affected by test anxiety" },
  { label: "Performance Gap", value: "12–15", caption: "percentile points lower scored by high-anxiety students" },
  { label: "Post-Secondary Stress", value: "45%", caption: "of Canadian students report above-average academic stress" },
];

function Home() {
  return (
    <div className="space-y-24">
      <section className="pt-8">
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-6">Perspectives · Issue 03</p>
        <h1 className="text-5xl sm:text-7xl font-bold leading-[1.05] max-w-4xl">
          Standardized Testing<br />
          & Student <span className="text-primary">Anxiety</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          How societal beliefs about Ontario's EQAO, OSSLT, and final exams shape
          student well-being and academic performance — seen through student and
          teacher eyes.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/the-issue" className="rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition">
            Read the issue
          </Link>
          <Link to="/perspectives" className="rounded-md border border-border px-5 py-3 font-semibold hover:bg-secondary transition">
            Hear the voices
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
          { to: "/the-issue", title: "What is this issue?", body: "Three high-stakes tests sit at the heart of Ontario schooling — EQAO, OSSLT, and final exams." },
          { to: "/quality-education", title: "Quality Education", body: "Inclusive, equitable education and lifelong learning opportunities for all (UN SDG 4)." },
          { to: "/beliefs-values", title: "Beliefs & Values", body: "Why society's faith in test scores quietly reshapes what students believe about themselves." },
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
