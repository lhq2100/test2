import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solution")({
  head: () => ({
    meta: [
      { title: "Solutions — Rethinking Standardized Testing" },
      { name: "description", content: "How Ontario can reduce test anxiety: multiple forms of assessment, coping strategies, equity, and a new story around scores." },
      { property: "og:title", content: "Solutions — Rethinking Standardized Testing" },
      { property: "og:description", content: "Practical, evidence-based changes for students, schools, and policymakers." },
    ],
  }),
  component: Page,
});

const STRATEGIES = [
  { title: "Use multiple forms of assessment", body: "Portfolios, projects, and ongoing classroom observation give a much fuller and fairer picture of what a student knows and can do than a single test ever can." },
  { title: "Teach students how to handle stress", body: "Ontario schools should introduce evidence-based coping strategies in the weeks leading up to the OSSLT and final exams — not leave students to figure it out alone." },
  { title: "Build real equity into the system", body: "ELL and lower-income students need meaningful accommodations. Until those exist, EQAO results will continue to measure circumstance as much as learning." },
  { title: "Change the story around scores", body: "Educators, parents, and policymakers all have a role in making sure students hear clearly that a test result is one piece of information about one day — not a verdict on who they are." },
  { title: "Stop ranking schools by EQAO", body: "Publishing EQAO scores as school rankings turns individual students into proxies for their community. Reporting trends without rankings keeps the data useful without weaponizing it." },
  { title: "Lower the stakes of the OSSLT", body: "Pairing the literacy test with alternate routes to graduation (such as the OSSLC) reduces the single-point-of-failure pressure that fuels the most acute anxiety." },
  { title: "Resource student mental health", body: "School Mental Health Ontario already provides frameworks — but counsellors, quiet spaces, and check-ins need to be fully staffed and accessible before, during, and after testing windows." },
];

const QUICK = [
  "Treat a single test score as one data point, not a verdict.",
  "Talk to your child about effort and process — not just results.",
  "Ask your school what mental-health supports run during testing weeks.",
  "Push for assessment portfolios alongside high-stakes tests.",
];

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Solutions</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">What Can We Do?</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Standardized testing isn't inherently the problem — the
          <span className="text-highlight font-semibold"> societal beliefs that
          turn a score into a measure of a person's worth</span> are. These
          changes come from Ontario classroom research, adolescent
          psychology, and equity work, and most of them don't require
          dismantling EQAO or the OSSLT. They require changing what we make
          the scores mean.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-8">Evidence-based changes</h2>
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
        <p className="text-xs uppercase tracking-widest text-primary">Start This Week</p>
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
