"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/ui/GridBackground";
import { Terminal } from "@/components/ui/Terminal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <GridBackground />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "show"}
          transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Currently: {site.currentFocus}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-balance text-lg font-medium text-accent sm:text-xl"
          >
            {site.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.tagline} Software Engineering graduate, MSc in Cybersecurity
            &amp; AI, and IBM Maximo consultant working on large-scale
            enterprise asset management systems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>

            <div className="ml-1 flex items-center gap-2">
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Terminal />
          <p className="mt-3 text-center font-mono text-xs text-muted-2">
            try it — type <span className="text-accent">help</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
