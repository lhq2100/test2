import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/perspectives")({
  head: () => ({
    meta: [
      { title: "Perspectives — Voices on Standardized Testing" },
      { name: "description", content: "First-hand accounts from educators and students on the impact of standardized testing in Ontario." },
      { property: "og:title", content: "Perspectives — Voices on Standardized Testing" },
      { property: "og:description", content: "The people behind the statistics." },
    ],
  }),
  component: Page,
});

const REASONS = [
  { title: "Fear of missing out", body: "If everyone is online, logging off feels like falling behind socially. Scrolling becomes a way to stay in the room — even when the room is exhausting." },
  { title: "Distraction", body: "The feed is the easiest way to leave a hard moment. Homework, family stress, a bad day — one swipe and the brain is somewhere else." },
  { title: "Stress relief", body: "Scrolling feels like rest. It isn't — but the lack of effort is so seductive that teens reach for it the way someone else might reach for a snack." },
  { title: "Staying informed", body: "Real news lives next to outrage and panic. Trying to stay current pulls teens into an endless stream of crisis they can't actually act on." },
  { title: "Avoiding school pressure", body: "Studying for EQAO, OSSLT, or finals is uncomfortable. The phone offers immediate relief from that discomfort — and a guaranteed worse outcome later." },
  { title: "Loneliness", body: "Feeds simulate company. The notifications, the comments, the parasocial connections — they fill a quiet room without actually filling the loneliness." },
];

function Page() {
  return (
    <div className="space-y-24">
      <header>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Voices</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">In their own words</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Numbers describe the problem. The people inside it describe what it
          actually feels like. Below are the voices we keep coming back to —
          one from the front of the classroom, one from a desk inside it.
        </p>
      </header>

      {/* Featured quotations — the most important part of the page */}
      <section className="space-y-10">
        <figure className="card-glow rounded-3xl p-10 sm:p-14 border-2 border-primary/40 shadow-[0_0_60px_-20px_var(--primary)]">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-8">Featured Quotation · Educator</p>
          <blockquote className="font-display text-2xl sm:text-4xl leading-[1.35] text-foreground">
            <span className="stat-number text-5xl leading-none mr-2 align-top">“</span>
            In my experience teaching the OSSLC, the students enrolled do not
            enter the course as eager students who are excited about learning;
            they enter as wounded and hurt students who proclaim themselves and
            their classmates to be too stupid, not smart at all, or too dumb to
            <em> "get it"</em> because their mistakes have been stigmatized.
            <span className="stat-number text-5xl leading-none ml-1">”</span>
          </blockquote>
          <figcaption className="mt-10 space-y-2 border-t border-border pt-6">
            <p className="font-display text-xl text-foreground">Lianne Van De Wal</p>
            <p className="text-sm text-muted-foreground">Educator, Nipissing-Parry Sound Catholic District School Board, Ontario</p>
            <p className="font-display text-xl text-foreground pt-3">Thomas G. Ryan</p>
            <p className="text-sm text-muted-foreground">Faculty, Nipissing University, Ontario</p>
          </figcaption>
        </figure>

        <figure className="card-glow rounded-3xl p-10 sm:p-14 border-2 border-primary/40 shadow-[0_0_60px_-20px_var(--primary)]">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-8">Featured Quotation · Student</p>
          <blockquote className="font-display text-2xl sm:text-4xl leading-[1.35] text-foreground">
            <span className="stat-number text-5xl leading-none mr-2 align-top">“</span>
            I remember mine — a standardized test — I was freaking out. I had
            no idea what was going on, everything was ridiculous. I was like
            <em> "Oh my God,"</em> we have this test and if I don't pass, I'm
            gonna be in sixth grade, and everyone's gonna leave me. It was
            really scary for me.
            <span className="stat-number text-5xl leading-none ml-1">”</span>
          </blockquote>
          <figcaption className="mt-10 space-y-2 border-t border-border pt-6">
            <p className="font-display text-xl text-foreground">Briana Cabarcas</p>
            <p className="text-sm text-muted-foreground">Student, featured speaker on TEDxYouth</p>
          </figcaption>
        </figure>
      </section>

      {/* Secondary context — visually quieter so the quotes lead */}
      <section className="space-y-8 opacity-90">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Context</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3">Why teens scroll instead of study</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The same anxiety the quotes above describe often gets routed into
            the phone. Doomscrolling usually isn't about the content — it's
            about what teens are trying to escape, soothe, or feel less alone in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {REASONS.map((r) => (
            <article key={r.title} className="card-glow rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-primary">{r.title}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{r.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
