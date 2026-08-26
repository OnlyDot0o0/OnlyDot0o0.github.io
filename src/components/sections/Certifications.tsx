"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { certificationCategories, learningStats } from "@/data/certifications";
import { cn } from "@/lib/utils";

export function Certifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="06 — Continuous Learning"
          title="Learning didn't stop at graduation."
        />

        <Reveal>
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface/60 p-8">
              <p className="text-4xl font-semibold text-foreground sm:text-5xl">
                {learningStats.courses}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-2">
                Accredited courses completed
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-8">
              <p className="text-4xl font-semibold text-accent sm:text-5xl">
                {learningStats.hours}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-2">
                Certified learning hours
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-sm text-muted-2">
            Where that learning has been focused — full certificate list
            available on request.
          </p>
          <div className="divide-y divide-border rounded-2xl border border-border bg-surface/40">
            {certificationCategories.map((cat, i) => {
              const open = openIndex === i;
              return (
                <div key={cat.label}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-medium text-foreground">
                      {cat.label}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-2 transition-transform duration-300",
                        open && "rotate-180 text-accent"
                      )}
                      strokeWidth={1.75}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-300 ease-in-out",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-muted">
                      {cat.description}
                      {cat.items.length > 0 && (
                        <ul className="mt-3 list-inside list-disc space-y-1">
                          {cat.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
