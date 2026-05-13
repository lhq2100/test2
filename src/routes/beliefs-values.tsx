import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/beliefs-values")({
  head: () => ({
    meta: [
      { title: "Beliefs, Values & Education" },
      { name: "description", content: "The societal beliefs that drive pressure around standardized testing in Ontario." },
      { property: "og:title", content: "Beliefs, Values & Education" },
      { property: "og:description", content: "What we believe about tests becomes what students believe about themselves." },
    ],
  }),
  component: Page,
});

const BELIEFS = [
  {
    title: "Tests equal intelligence",
    body: "When society treats a score as a measure of a person's worth, students stop learning for curiosity and start performing for survival.",
  },
  {
    title: "The OSSLT controls your future",
    body: "Knowing that a single literacy test stands between you and your diploma amplifies anxiety in a way that few other experiences in school can match.",
  },
  {
    title: "EQAO scores define the school",
    body: "When results are published and used to rank schools publicly, individual students feel the weight of their entire community on their shoulders.",
  },
  {
    title: "Parents expect top results",
    body: "Well-meaning parental pressure often compounds the anxiety students already feel, particularly for students who are still learning English or navigating systemic barriers.",
  },
];

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Theme</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">Beliefs, values & education</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          The hardest part of standardized testing in Ontario isn't the test
          itself — it's the cluster of beliefs the culture wraps around it.
          Each belief, repeated quietly enough times, becomes a value. And
          values shape what students think they are allowed to feel about
          themselves.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-8">Societal beliefs driving the pressure</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {BELIEFS.map((b) => (
            <div key={b.title} className="card-glow rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary">{b.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card-glow rounded-2xl p-10 sm:p-14">
        <p className="font-display text-2xl sm:text-3xl leading-relaxed max-w-3xl">
          "They enter as wounded and hurt students who proclaim themselves and
          their classmates to be too stupid, not smart at all, or too dumb to
          'get it' because their mistakes have been stigmatized."
        </p>
        <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
          — Lianne Van De Wal & Thomas G. Ryan
        </p>
      </section>
    </div>
  );
}
