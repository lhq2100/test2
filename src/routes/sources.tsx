import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Sources & Works Cited" },
      { name: "description", content: "Works cited for the Perspectives feature on standardized testing in Ontario." },
      { property: "og:title", content: "Sources & Works Cited" },
      { property: "og:description", content: "References behind the data and quotes." },
    ],
  }),
  component: Page,
});

const SOURCES = [
  "Library and Archives Canada, 2012: Student Perceptions of Literacy After the Ontario Secondary School Literacy Course: A Qualitative Inquiry, by Lianne Van De Wal.",
  "American Psychological Association, 2022: Students Experiencing Anxiety.",
  "School of Mental Health Ontario, 2026: About student mental health in Ontario.",
  "Government of Ontario Data Catalogue, 2017–2025: School information and student demographics.",
  "EQAO Preparation and the Effects on In-Classroom Instruction, by Deidre-Ann K. Gardener, 2017.",
];

function Page() {
  return (
    <div className="space-y-12">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">References</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">Works cited</h1>
      </header>

      <ol className="space-y-4">
        {SOURCES.map((s, i) => (
          <li key={i} className="card-glow rounded-xl p-6 flex gap-5">
            <span className="stat-number text-2xl shrink-0 w-8">{i + 1}</span>
            <p className="text-muted-foreground leading-relaxed">{s}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
