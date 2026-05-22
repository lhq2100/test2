import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Standardized Testing & Ontario Students" },
      { name: "description", content: "How EQAO, OSSLT, and final exams shape societal beliefs, student well-being, and academic performance in Ontario." },
      { property: "og:title", content: "Standardized Testing & Ontario Students" },
      { property: "og:description", content: "The pressure behind the scores — and what should change." },
    ],
  }),
  component: Home,
});

const STATS = [
  { label: "Test Anxiety", value: "40–60%", caption: "of Ontario students are negatively affected by test anxiety" },
  { label: "Performance Gap", value: "12–15", caption: "points lower scored on average by high-anxiety students" },
  { label: "Academic Stress", value: "45%", caption: "of Canadian students report above-average academic stress" },
];

function Home() {
  return (
    <div className="space-y-24">
      <section className="pt-8">
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-6">Perspectives · Issue 04</p>
        <h1 className="text-5xl sm:text-7xl font-bold leading-[1.05] max-w-4xl">
          The Weight of<br />
          <span className="text-primary">One Score</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          EQAO, the OSSLT, and Grade 11–12 finals carry enormous social weight in
          Ontario — shaping how students see themselves long after the test
          ends. Here's what the research says, what students and teachers
          report, and what should change.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/issue" className="rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition">
            Read the issue
          </Link>
          <Link to="/solution" className="rounded-md border border-border px-5 py-3 font-semibold hover:bg-secondary transition">
            See what should change
          </Link>
        </div>
      </section>

      <section>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Watch · Intro</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 max-w-3xl">
          A quick look at why this matters
        </h2>
        <div className="card-glow rounded-xl overflow-hidden">
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto block bg-black"
          >
            <source src="/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl">
          A short introduction to the topic before you dig into the research below.
        </p>
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

      <section className="card-glow rounded-2xl p-10">
        <p className="text-xs uppercase tracking-widest text-primary">The Argument</p>
        <h2 className="mt-3 text-3xl font-bold max-w-3xl">Our thesis</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Although standardized testing in Ontario aims to improve
          accountability and measure achievement,
          <span className="text-highlight font-semibold"> societal beliefs that
          test scores define intelligence and success</span> contribute to
          increased anxiety, lower self-esteem, and performance pressure among
          students — potentially undermining both mental health and authentic
          learning.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { to: "/issue", title: "What is the issue?", body: "EQAO, OSSLT, and 30%-weighted finals — and the societal beliefs that turn a score into a verdict on a student." },
          { to: "/solution", title: "What should change", body: "Multiple forms of assessment, real coping support, equity for ELL and lower-income students, and a new story around scores." },
          { to: "/perspectives", title: "Voices from inside", body: "An OSSLC teacher and a student describe what high-stakes testing actually feels like — in their own words." },
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
