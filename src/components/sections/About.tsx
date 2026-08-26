import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { investigationSteps } from "@/data/personality";

const journey = [
  {
    stage: "Software Engineering",
    detail: "BSc, First Class — architecture, databases, full-stack build",
  },
  {
    stage: "AI & Cybersecurity",
    detail: "MSc — applied ML, NLP, security, adaptive systems",
  },
  {
    stage: "Enterprise Consulting",
    detail: "IBM Maximo — configuration, workflow, security at scale",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="01 — About"
          title="From writing software to running the systems businesses depend on."
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I started as a software engineer — the kind who wants to know
                exactly how a system works, not just that it works. That
                curiosity is what pulled me toward AI and cybersecurity for my
                master&apos;s, and it&apos;s the same instinct I use now,
                every day, inside enterprise systems that organisations
                actually run their operations on.
              </p>
              <p>
                Today I work as a{" "}
                <span className="text-foreground">
                  Business Solution Consultant specialising in IBM Maximo
                </span>
                , configuring enterprise asset management systems, designing
                workflows, and shaping the security models that decide who
                can do what. It&apos;s consulting work grounded in real
                engineering — reading business requirements, understanding
                the process behind them, and building a system that actually
                reflects how the organisation operates.
              </p>
              <p>
                Outside client work, I build things: AI-powered applications,
                computer-vision experiments, automation tools. Different
                context, same approach — figure out what&apos;s actually
                happening under the surface, then build the thing that
                solves it properly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
                The path
              </p>
              <ol className="space-y-0">
                {journey.map((item, i) => (
                  <li key={item.stage} className="relative pl-8 pb-8 last:pb-0">
                    {i !== journey.length - 1 && (
                      <span className="absolute left-[7px] top-4 h-full w-px bg-gradient-to-b from-accent/50 to-border" />
                    )}
                    <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-background" />
                    <p className="font-medium text-foreground">{item.stage}</p>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
                How I actually solve problems
              </p>
              <p className="hidden font-mono text-xs text-muted-2 sm:block">
                not just &ldquo;it&apos;s broken&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {investigationSteps.map((step) => (
                <div key={step.step}>
                  <span className="font-mono text-sm text-accent">
                    {step.step}
                  </span>
                  <p className="mt-2 font-medium text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
