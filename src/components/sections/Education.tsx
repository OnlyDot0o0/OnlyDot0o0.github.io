import { GraduationCap, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { education, teaching } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="04 — Education" title="Formal grounding, applied since." />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent">
                    <GraduationCap className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted">{edu.institution}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-2">
                    {edu.period}
                  </span>
                  {edu.honors && (
                    <span className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
                      {edu.honors}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {edu.areas.map((a) => (
                    <Tag key={a}>{a}</Tag>
                  ))}
                </div>

                <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted">
                  {edu.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border bg-surface/40 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-foreground">
              <Users className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-medium text-foreground">
                {teaching.title}{" "}
                <span className="font-mono text-xs font-normal text-muted-2">
                  — {teaching.period}
                </span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {teaching.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {teaching.roles.map((r) => (
                  <Tag key={r} variant="accent">
                    {r}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
