import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/the-issue")({
  head: () => ({
    meta: [
      { title: "The Issue — Standardized Testing in Ontario" },
      { name: "description", content: "How Ontario's EQAO, OSSLT, and final exams build anxiety and shape student outcomes." },
      { property: "og:title", content: "The Issue — Standardized Testing in Ontario" },
      { property: "og:description", content: "Three tests, one heavy weight on Ontario students." },
    ],
  }),
  component: Page,
});

const TESTS = [
  { name: "EQAO", detail: "Grades 3 & 6 in math and literacy; Grade 9 math assessment." },
  { name: "OSSLT", detail: "Grade 10 literacy. Must pass to receive the OSSD diploma.", featured: true },
  { name: "EXAMS", detail: "Grades 11 & 12 finals worth 30% of the course mark." },
];

const ANXIETY = [
  "The belief that EQAO and OSSLT scores reflect a student's intelligence creates a kind of dread that builds weeks before test day — disrupting sleep, appetite, and the ability to focus.",
  "Once a student sits down to write, elevated cortisol levels physically impair memory retrieval. The very anxiety a high-stakes test produces makes it harder to demonstrate what the student actually knows.",
  "Students who are still learning English or who come from lower-income households carry an extra layer of pressure. Their EQAO scores often reflect those circumstances more than their ability.",
  "Over time, chronic test anxiety erodes a student's relationship with school entirely. Curiosity gets replaced by survival mode, and that is the opposite of what quality education should feel like.",
];

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">The Issue</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">What is this issue?</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Ontario students face a series of high-stakes standardized tests that
          carry enormous social weight. EQAO assessments in Grades 3, 6, and 9
          measure math and literacy skills provincially. The OSSLT in Grade 10
          is a literacy test students must pass to earn the OSSD diploma. Final
          exams in Grades 11 and 12 are worth <span className="text-highlight font-semibold">30% of a student's
          final mark</span>. Together, these tests have become cultural
          moments where a student's worth feels like it is on the line — not
          just their knowledge.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-8">The three key tests in Ontario</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {TESTS.map((t) => (
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
        <h2 className="text-3xl font-bold mb-8">How anxiety builds</h2>
        <ol className="space-y-6">
          {ANXIETY.map((a, i) => (
            <li key={i} className="card-glow rounded-xl p-6 flex gap-5">
              <span className="stat-number text-3xl shrink-0 w-10">{i + 1}</span>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
