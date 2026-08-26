"use client";

import { useState } from "react";
import { Check, Copy, FileDown, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GridBackground } from "@/components/ui/GridBackground";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <GridBackground />
      <Container className="relative text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            08 — Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Open to software engineering, AI, cybersecurity, and enterprise
            solution consulting opportunities — or just a good technical
            conversation.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02] sm:w-auto"
            >
              {copied ? (
                <Check className="h-4 w-4" strokeWidth={2} />
              ) : (
                <Mail className="h-4 w-4" strokeWidth={1.75} />
              )}
              {copied ? "Copied!" : site.email}
              {!copied && (
                <Copy
                  className="h-3.5 w-3.5 text-background/50 transition-colors group-hover:text-background"
                  strokeWidth={1.75}
                />
              )}
            </button>

            <div className="flex items-center gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={site.resumeUrl}
            download
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-2 transition-colors hover:text-accent"
          >
            <FileDown className="h-3.5 w-3.5" strokeWidth={1.75} />
            Download my résumé (PDF)
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
