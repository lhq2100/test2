import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quality-education")({
  head: () => ({
    meta: [
      { title: "Quality Education — UN SDG 4" },
      { name: "description", content: "Ensuring inclusive, equitable quality education and lifelong learning opportunities for all." },
      { property: "og:title", content: "Quality Education — UN SDG 4" },
      { property: "og:description", content: "What changes if Ontario testing culture truly served every student." },
    ],
  }),
  component: Page,
});

const CHANGES = [
  { title: "Use multiple forms of assessment", body: "Portfolios, projects, and ongoing classroom observation give a much fuller and fairer picture of what a student knows and can do." },
  { title: "Teach students how to handle stress", body: "Ontario schools should introduce evidence-based coping strategies in the weeks leading up to the OSSLT and final exams, not leave students to figure it out alone." },
  { title: "Build real equity into the system", body: "ELL and lower-income students need meaningful accommodations. Until those exist, EQAO results will continue to measure circumstance as much as learning." },
  { title: "Change the story around scores", body: "Educators, parents, and policymakers all have a role in making sure students hear clearly that a test result is one small piece of information about one day, not a verdict on who they are or what they are capable of." },
];

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">UN SDG 4</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">Quality Education</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Ensure inclusive and equitable quality education and promote lifelong
          learning opportunities for all. When standardized testing becomes the
          single story of a student's worth, the system drifts away from this
          goal — especially for English language learners, lower-income
          families, and students navigating systemic barriers.
        </p>
      </header>

      <section className="card-glow rounded-2xl p-10 sm:p-14 bg-gradient-to-br from-primary/20 to-transparent">
        <p className="text-sm uppercase tracking-widest text-primary">Goal</p>
        <p className="mt-4 text-3xl sm:text-4xl font-display font-bold leading-snug max-w-3xl">
          Ensure inclusive and equitable quality education and promote lifelong
          learning opportunities for all.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">What should change</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CHANGES.map((c, i) => (
            <div key={c.title} className="card-glow rounded-xl p-8">
              <p className="stat-number text-2xl mb-3">0{i + 1}</p>
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
