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
  "American Academy of Pediatrics, 2023: Screen time and adolescent mental health — associations with anxiety and depression at 4+ hours daily.",
  "Journal of Affective Disorders, 2022: Doomscrolling and psychological wellbeing — correlation with anxiety symptoms (r ≈ 0.62).",
  "Sleep Health (National Sleep Foundation), 2021: Bedtime social media use and adolescent sleep outcomes; 70% in-bed phone use.",
  "Health Behavior and Policy Review, 2023: Longitudinal study linking social media addiction with increased doomscrolling in adolescents.",
  "American Psychological Association, 2022: Stress in America — adolescent and young adult mental health.",
  "Common Sense Media, 2023: The Common Sense Census — Media Use by Tweens and Teens.",
  "Canadian Paediatric Society, 2023: Digital media: Promoting healthy screen use in school-aged children and adolescents.",
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
