import { Award, Trophy, Medal, Users2, GraduationCap, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { achievements } from "@/data/achievements";

const icons = [GraduationCap, Award, Trophy, Medal, Users2];

export function Achievements() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="07 — Achievements" title="A few milestones along the way." />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-border-strong">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-2">
                    {item.context}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open certificate: ${item.title}`}
                      className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-muted-2 transition-colors hover:text-accent"
                    >
                      <FileText className="h-3.5 w-3.5" strokeWidth={1.75} />
                      View certificate
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
