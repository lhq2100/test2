import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/perspectives")({
  head: () => ({
    meta: [
      { title: "Perspectives — Teachers & Students" },
      { name: "description", content: "Voices from inside the Ontario classroom: teachers, professors, and students on standardized testing." },
      { property: "og:title", content: "Perspectives — Teachers & Students" },
      { property: "og:description", content: "Two sides of the same test, in their own words." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-20">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Voices</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">Perspectives</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Numbers describe the problem. People explain it. Two voices — one from
          the front of the classroom, one from a desk inside it.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <article className="card-glow rounded-2xl p-10">
          <p className="text-xs uppercase tracking-widest text-primary">Teacher & Professor</p>
          <p className="mt-6 font-display text-xl leading-relaxed">
            "In my experience teaching the OSSLC, the students enrolled do not
            enter the course as eager students who are excited about learning;
            they enter as wounded and hurt students who proclaim themselves and
            their classmates to be too stupid, not smart at all, or too dumb to
            'get it' because their mistakes have been stigmatized."
          </p>
          <footer className="mt-8 text-sm text-muted-foreground">
            <p>Lianne Van De Wal — Nipissing-Parry Sound CDSB, Ontario</p>
            <p>Thomas G. Ryan — Nipissing University, Ontario</p>
          </footer>
        </article>

        <article className="card-glow rounded-2xl p-10">
          <p className="text-xs uppercase tracking-widest text-primary">Student</p>
          <p className="mt-6 font-display text-xl leading-relaxed">
            "I remember mine — a standardized test — I was freaking out. I had
            no idea what was going on, everything was ridiculous. I was like
            'Oh my God' we have this test and if I don't pass, I'm gonna be in
            sixth grade, and everyone's gonna leave me. It was really scary
            for me."
          </p>
          <footer className="mt-8 text-sm text-muted-foreground">
            <p>Briana Cabarcas — student featured on TEDxYouth</p>
          </footer>
        </article>
      </section>
    </div>
  );
}
