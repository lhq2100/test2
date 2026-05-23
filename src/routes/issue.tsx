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
  { name: "EQAO", detail: "Province-wide assessments in Grades 3, 6, and 9 covering math and literacy. Results are published and used to compare schools across Ontario.", featured: true },
  { name: "OSSLT", detail: "The Grade 10 Ontario Secondary School Literacy Test. Students must pass it to earn the OSSD diploma — a single test standing between them and graduation." },
  { name: "FINALS", detail: "Grade 11 and 12 final exams are worth 30% of the course mark. One bad morning can move a final grade by a full letter." },
];

const SYMPTOMS = [
  "Elevated cortisol (the body's main stress hormone)",
  "Disrupted sleep in the weeks before testing",
  "Panic symptoms during the test itself",
  "Lower concentration and impaired memory recall",
  "Persistent fear of failure",
  "Lower self-esteem long after the test ends",
];

const BELIEFS = [
  "Good students get high scores. The quiet message that achievement equals worth turns every test into a referendum on the student themselves.",
  "High scores mean intelligence. Society treats a single number as a measure of a mind — so students stop learning for curiosity and start performing for survival.",
  "Schools with better EQAO scores are better schools. Published rankings turn individual students into proxies for their whole community.",
  "Students who fail are behind. Parents, teachers, and governments can reinforce this unintentionally, especially for ELL students and students from lower-income households.",
];

const CYCLE = [
  "Belief: a score reflects who you are.",
  "Dread builds for weeks — sleep, appetite, and focus all suffer.",
  "Cortisol spikes on test day and physically impairs memory.",
  "The student underperforms relative to what they actually know.",
  "The lower score reinforces the belief — and the cycle tightens.",
];

const CLASSROOM_GAINS = [
  "More practice tests",
  "Repeated literacy and math drills",
  "Narrower, test-aligned curriculum",
];

const CLASSROOM_LOSSES = [
  "Creative projects",
  "Inquiry-based learning",
  "Critical thinking and debate",
  "Arts, discussion, and exploration",
];

const UNEQUAL = [
  "English language learners",
  "Students with learning disabilities",
  "Neurodivergent students",
  "Students from lower socioeconomic backgrounds",
  "Students already facing mental-health challenges",
  "Racialized students whose experiences research has repeatedly flagged",
];

const BENEFITS = [
  "Identifies learning gaps across the province",
  "Tracks long-term literacy and numeracy trends",
  "Helps governments allocate resources",
  "Creates a layer of accountability for schools",
];

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">The Issue</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">What Is The Issue?</h1>
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
        <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
          Ontario emphasizes accountability through testing. Frequency is lower
          than many U.S. systems, but the stakes attached to each individual
          test are higher.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Mental-health effects</h2>
        <p className="max-w-3xl text-muted-foreground mb-8">
          One of the strongest criticisms of standardized testing is test
          anxiety. Research on adolescents consistently shows it produces:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {SYMPTOMS.map((s) => (
            <div key={s} className="card-glow rounded-xl p-5 flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-muted-foreground">{s}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-muted-foreground leading-relaxed">
          Ontario-specific experiences show students often associate literacy
          testing with feeling unintelligent. A student who repeatedly
          struggles with EQAO may stop thinking
          <span className="italic"> "I did poorly on a test" </span>
          and start thinking
          <span className="text-highlight font-semibold"> "I'm bad at school." </span>
          That shift is linked with lower motivation and poorer mental health.
        </p>
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
        <h2 className="text-3xl font-bold mb-8">The anxiety cycle</h2>
        <ol className="space-y-6">
          {CYCLE.map((a, i) => (
            <li key={i} className="card-glow rounded-xl p-6 flex gap-5">
              <span className="stat-number text-3xl shrink-0 w-10">{i + 1}</span>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-muted-foreground italic">
          Stress → worse performance → lower confidence → more anxiety →
          worse performance. Students may know the material and still
          underperform during testing.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Teaching to the test</h2>
        <p className="max-w-3xl text-muted-foreground mb-8">
          Research on Ontario EQAO found schools sometimes orient instruction
          around improving test outcomes rather than broader learning. What
          students gain in test prep, they often lose in everything else.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card-glow rounded-xl p-6">
            <p className="text-xs uppercase tracking-widest text-primary">More of</p>
            <ul className="mt-4 space-y-3">
              {CLASSROOM_GAINS.map((g) => (
                <li key={g} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-glow rounded-xl p-6">
            <p className="text-xs uppercase tracking-widest text-primary">Less of</p>
            <ul className="mt-4 space-y-3">
              {CLASSROOM_LOSSES.map((g) => (
                <li key={g} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">✗</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Identity and self-esteem</h2>
        <p className="max-w-3xl text-muted-foreground leading-relaxed">
          Repeated testing affects identity formation in adolescents. Students
          begin to categorize themselves — "smart," "average," "bad at
          school" — and those labels can persist for years. Research on
          Ontario literacy support courses describes students entering
          already feeling defeated, which suggests standardized testing
          shapes how students see themselves, not just their transcripts.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Unequal effects</h2>
        <p className="max-w-3xl text-muted-foreground mb-8">
          Standardized testing does not affect every student equally. Some
          groups carry consistently more pressure and risk:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {UNEQUAL.map((u) => (
            <div key={u} className="card-glow rounded-xl p-5 flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-muted-foreground">{u}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          Testing may measure more than knowledge — it can reflect access to
          support, resources, and accommodations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">What supporters say</h2>
        <p className="max-w-3xl text-muted-foreground mb-8">
          Balanced research has to include the case for EQAO. Supporters argue
          standardized testing:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {BENEFITS.map((b) => (
            <div key={b} className="card-glow rounded-xl p-5 flex gap-3">
              <span className="text-primary font-bold">+</span>
              <span className="text-muted-foreground">{b}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-muted-foreground italic">
          The real debate: do the benefits outweigh the mental-health costs?
        </p>
      </section>

      <section className="card-glow rounded-2xl p-10">
        <p className="text-xs uppercase tracking-widest text-primary">Bigger Picture</p>
        <h2 className="mt-3 text-3xl font-bold">A wider mental-health context</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">
          School Mental Health Ontario reports rising concern about student
          mental health overall. Testing is unlikely to be the sole cause,
          but it stacks on top of social media, university competition,
          extracurricular expectations, grades, and future-employment worries.
          Between 40 and 60% of Ontario students are negatively affected by
          test anxiety, high-anxiety students score 12–15 points lower on
          average, and 45% of Canadian students report above-average
          academic stress.
        </p>
      </section>
    </div>
  );
}
