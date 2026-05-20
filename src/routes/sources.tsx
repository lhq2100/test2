import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Sources & Works Cited" },
      { name: "description", content: "Research and references behind the Doomscrolling feature." },
      { property: "og:title", content: "Sources & Works Cited" },
      { property: "og:description", content: "References behind the data and claims." },
    ],
  }),
  component: Page,
});

const SOURCES = [
  'American Psychological Association. "Students Experiencing Anxiety." American Psychological Association, 25 Feb. 2025, www.apa.org/ed/schools/primer/anxiety.',
  'Gardener, Deidre-Ann K. "EQAO Preparation and the Effects on In-Classroom Instruction." Scholaris, University of Toronto, Apr. 2017, utoronto.scholaris.ca/server/api/core/bitstreams/b8b295fe-7b98-43de-a83b-07baffc5e07a/content.',
  'Government of Ontario. "School Information and Student Demographics." Ontario Data Catalogue, 6 Mar. 2026. Accessed 11 May 2026.',
  'School Mental Health Ontario. "About Student Mental Health in Ontario." School Mental Health Ontario, 1 Jan. 2025, smho-smso.ca/about-student-mental-health-in-ontario/.',
  'Van De Wal, Lianne. Student Perceptions of Literacy after the Ontario Secondary School Literacy Course: A Qualitative Inquiry. Library and Archives Canada / Bibliothèque et Archives Canada, 2013.',
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
