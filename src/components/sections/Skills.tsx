import { Binary, Server, BrainCircuit, Building2, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";

const icons = [Binary, Server, BrainCircuit, Building2, Wrench];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="05 — Skills"
          title="Tools I reach for, grouped by what they're for."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.label} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/30 bg-accent-soft text-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <p className="font-medium text-foreground">{group.label}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
