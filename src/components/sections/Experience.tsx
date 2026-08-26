import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="02 — Experience"
          title="Enterprise systems, in production."
        />

        <Reveal>
          <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-10">
            <div className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {experience.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{experience.company}</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {experience.period}
              </span>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
              {experience.summary}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {experience.capabilities.map((group) => (
                <div key={group.group}>
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-2">
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-2">
                Sectors I&apos;ve worked across
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {experience.sectors.map((sector) => (
                  <div
                    key={sector.name}
                    className="rounded-xl border border-border bg-background/40 px-4 py-3"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {sector.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{sector.context}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-2">
                {experience.note}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
