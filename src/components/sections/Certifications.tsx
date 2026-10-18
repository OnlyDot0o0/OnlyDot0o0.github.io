"use client";

import { useMemo, useState } from "react";
import { ChevronDown, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { learningStats } from "@/data/certifications";
import {
  certificateCategories,
  certificates,
  type Certificate,
} from "@/data/certificates";
import { cn } from "@/lib/utils";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(date?: string) {
  if (!date) return null;
  const [year, month] = date.split("-");
  const m = month ? MONTHS[Number(month) - 1] : null;
  return m ? `${m} ${year}` : year;
}

function formatMinutes(minutes?: number) {
  if (!minutes) return null;
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

function CertificateRow({ cert }: { cert: Certificate }) {
  const meta = [cert.issuer, formatDate(cert.date), formatMinutes(cert.minutes)]
    .filter(Boolean)
    .join(" · ");
  const files = cert.files ?? [];
  const single = files.length === 1 ? files[0] : null;

  return (
    <li className="flex flex-col gap-1.5 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0">
        {single ? (
          <a
            href={single.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-start gap-2 font-medium text-foreground transition-colors hover:text-accent"
            aria-label={`Open certificate: ${cert.title}`}
          >
            <FileText
              className="mt-0.5 h-4 w-4 shrink-0 text-muted-2 transition-colors group-hover:text-accent"
              strokeWidth={1.75}
            />
            <span>{cert.title}</span>
          </a>
        ) : (
          <p className="font-medium text-foreground">{cert.title}</p>
        )}
        <p className={cn("mt-0.5 text-xs text-muted-2", single && "pl-6")}>
          {meta}
        </p>
      </div>

      {files.length > 1 && (
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {files.map((file) => (
            <a
              key={file.href}
              href={file.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
              aria-label={`Open ${file.label}: ${cert.title}`}
            >
              <FileText className="h-3 w-3" strokeWidth={1.75} />
              {file.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}

export function Certifications() {
  const [open, setOpen] = useState<Set<string>>(new Set());

  // Newest first inside each category; certificates without a date go last.
  const grouped = useMemo(
    () =>
      certificateCategories.map((cat) => ({
        ...cat,
        items: certificates
          .filter((c) => c.category === cat.key)
          .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "")),
      })),
    []
  );

  const allOpen = open.size === grouped.length;

  function toggle(key: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

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
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-2">
              {certificates.length} certificates, grouped by topic. Select one
              to open the certificate itself.
            </p>
            <button
              type="button"
              onClick={() =>
                setOpen(
                  allOpen ? new Set() : new Set(grouped.map((g) => g.key))
                )
              }
              className="w-fit rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>

          <div className="divide-y divide-border rounded-2xl border border-border bg-surface/40">
            {grouped.map((cat) => {
              const isOpen = open.has(cat.key);
              const panelId = `certs-${cat.key}`;
              return (
                <div key={cat.key}>
                  <button
                    type="button"
                    onClick={() => toggle(cat.key)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-medium text-foreground">
                      {cat.label}
                      <span className="ml-3 font-mono text-xs text-muted-2">
                        {cat.items.length}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-2 transition-transform duration-300",
                        isOpen && "rotate-180 text-accent"
                      )}
                      strokeWidth={1.75}
                    />
                  </button>
                  <div
                    id={panelId}
                    className={cn(
                      "grid overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden px-6 text-sm leading-relaxed text-muted">
                      <p className={cn(isOpen && "pb-1")}>{cat.description}</p>
                      <ul
                        className={cn(
                          "divide-y divide-border",
                          isOpen && "pb-3"
                        )}
                      >
                        {cat.items.map((cert) => (
                          <CertificateRow key={cert.title} cert={cert} />
                        ))}
                      </ul>
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
