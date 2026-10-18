export type Achievement = {
  title: string;
  context: string;
  description: string;
  /** Optional link to the certificate, served from /public/certificates. */
  certificate?: string;
};

export const achievements: Achievement[] = [
  {
    title: "First Class Honours",
    context: "BSc Software Engineering, University of Leicester",
    description:
      "Graduated at the top classification, building the software-engineering foundation everything since has been built on.",
  },
  {
    title: "MSc Cybersecurity & AI",
    context: "University of Sheffield, 2026",
    description:
      "Completed a master's degree combining applied AI/ML with cybersecurity, capped by an adaptive-learning dissertation.",
  },
  {
    title: "Hackathon Finalist",
    context: "Game development competition",
    description:
      "Reached the final stage of a game-development hackathon, competing against roughly 100 teams, building in Unity/C# under time pressure.",
  },
  {
    title: "Best Software Engineering Group Project",
    context: "University of Leicester — Group Leader",
    description:
      "Led the team that won Best Group Project, competing against 250+ students. Our placement management system was selected by the university administration for institution-wide implementation.",
    certificate: "/certificates/best-se-group-project.pdf",
  },
  {
    title: "2nd Place — The Wonder Project",
    context: "University of Leicester — Student Learning Community",
    description:
      "Awarded second place in The Wonder Project, presented by the Student Learning Community team.",
    certificate: "/certificates/wonder-project-2nd-place.png",
  },
  {
    title: "Teaching & Student Leadership",
    context: "University of Leicester, 2021 – 2024",
    description:
      "Supported students as a Teaching Assistant across five modules, plus roles as an Induction Leader and Student Learning Community Leader.",
  },
];
