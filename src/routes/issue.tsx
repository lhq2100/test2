import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/issue")({
  head: () => ({
    meta: [
      { title: "The Issue — Standardized Testing in Ontario" },
      { name: "description", content: "EQAO, OSSLT, and final exams: the high-stakes tests Ontario students face and the societal beliefs that fuel test anxiety." },
      { property: "og:title", content: "The Issue — Standardized Testing in Ontario" },
      { property: "og:description", content: "How a single score became a verdict on a student." },
    ],
  }),
  component: Page,
});

const TESTS = [
  { name: "EQAO", detail: "Grades 3 and 6 in math and literacy, plus a Grade 9 math assessment. Results are published and used to rank schools provincially.", featured: true },
  { name: "OSSLT", detail: "The Grade 10 literacy test. Students must pass it to earn the OSSD diploma — a single test standing between them and graduation." },
  { name: "FINALS", detail: "Grade 11 and 12 final exams are worth 30% of the course mark. One bad morning can move a final grade by a full letter." },
];

const BELIEFS = [
  "Tests equal intelligence. When society treats a score as a measure of a person's worth, students stop learning for curiosity and start performing for survival.",
  "The OSSLT controls your future. Knowing that a single literacy test stands between you and your diploma amplifies anxiety in a way few other school experiences can match.",
  "EQAO scores define the school. When results are published and used to rank schools publicly, individual students feel the weight of their entire community on their shoulders.",
  "Parents expect top results. Well-meaning parental pressure compounds the anxiety students already feel — especially for ELL students and those from lower-income households.",
];

const BUILDUP = [
  "The belief that EQAO and OSSLT scores reflect a student's intelligence creates a dread that builds weeks before test day, disrupting sleep, appetite, and focus.",
  "Once a student sits down to write, elevated cortisol physically impairs memory retrieval. The anxiety the test produces makes it harder to demonstrate what the student actually knows.",
  "Students who are still learning English or come from lower-income households carry an extra layer of pressure. Their EQAO scores often reflect those circumstances more than their ability.",
  "Over time, chronic test anxiety erodes a student's relationship with school entirely. Curiosity gets replaced by survival mode — the opposite of what quality education should feel like.",
];

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">The Issue</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">High-stakes tests, heavy social weight</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Ontario students face a series of standardized tests that have become
          cultural moments — EQAO in Grades 3, 6, and 9; the OSSLT in Grade 10;
          and final exams worth 30% of a course mark in Grades 11 and 12.
          Together, they create the sense that <span className="text-highlight font-semibold">a student's
          worth, not just their knowledge, is on the line</span>.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-8">The three key tests</h2>
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
        <h2 className="text-3xl font-bold mb-8">Societal beliefs driving the pressure</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {BELIEFS.map((b, i) => (
            <div key={i} className="card-glow rounded-xl p-6">
              <p className="stat-number text-2xl">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">How anxiety builds</h2>
        <ol className="space-y-6">
          {BUILDUP.map((a, i) => (
            <li key={i} className="card-glow rounded-xl p-6 flex gap-5">
              <span className="stat-number text-3xl shrink-0 w-10">{i + 1}</span>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-muted-foreground italic">
          Belief → dread → cortisol spike → impaired recall → worse score →
          reinforced belief. The cycle tightens with every test.
        </p>
      </section>

      <section className="card-glow rounded-2xl p-10">
        <p className="text-xs uppercase tracking-widest text-primary">By the Numbers</p>
        <h2 className="mt-3 text-3xl font-bold">What the data shows</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">
          Between 40 and 60% of Ontario students are negatively affected by test
          anxiety. High-anxiety students score, on average, 12–15 points lower
          than their lower-anxiety peers. And 45% of Canadian students report
          above-average academic stress — a quiet majority carrying the cost of
          the system they're inside.
        </p>
      </section>
    </div>
  );
}
