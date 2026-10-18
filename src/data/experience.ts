export const experience = {
  title: "Business Solutions Consultant — IBM Maximo",
  company: "eSolution",
  period: "April 2026 – Present",
  summary:
    "I work as a Business Solutions Consultant specialising in IBM Maximo EAM, partnering with asset-intensive organisations to design, configure, and optimise enterprise maintenance and asset management processes. The role sits between business requirements and technical implementation — gathering what stakeholders actually need and translating it into system configurations and workflows that hold up in daily operations.",
  capabilities: [
    {
      group: "Configuration & Design",
      items: [
        "Application Designer",
        "Relationships & Domains",
        "Classifications",
        "Migration Manager",
        "Conditional UI Behaviour",
      ],
    },
    {
      group: "Security & Access",
      items: [
        "Security Groups",
        "Application Authorization",
        "Global Data Restrictions",
      ],
    },
    {
      group: "Process & Automation",
      items: [
        "Workflow Design",
        "Automation Scripts (Jython)",
        "Preventive Maintenance",
        "Job Plans & Meters",
      ],
    },
    {
      group: "Operations",
      items: [
        "Work Order Lifecycle Management",
        "Linear Asset Management",
        "Non-Conformance Report (NCR) Workflows",
        "Graphical Scheduling",
        "Contracts & Purchasing",
        "Enterprise Asset Management",
      ],
    },
    {
      group: "Consulting",
      items: [
        "BRD Analysis",
        "System Troubleshooting",
        "AI / Maximo Experimentation",
      ],
    },
  ],
  note: "I've worked on large-scale infrastructure and road asset management engagements — including systems where roads and related infrastructure are tracked and maintained as managed assets — across sectors such as transport and financial services. Specific client, architecture, and configuration details stay confidential; this section is intentionally high-level.",
  sectors: [
    { name: "Ministry of Transport", context: "Road & infrastructure asset management" },
    { name: "Amanat Riyadh", context: "Municipal & urban infrastructure" },
    { name: "Saudi National Bank", context: "Enterprise asset & facilities management" },
  ],
};

export type RoleReference = { label: string; href: string };

export type EarlierRole = {
  title: string;
  organisation: string;
  period: string;
  summary: string;
  tags?: string[];
  references?: RoleReference[];
};

// Roles before eSolution, newest first. Reference letters are served from
// /public/references.
export const earlierRoles: EarlierRole[] = [
  {
    title: "Teaching Assistant",
    organisation: "University of Leicester · School of Computing and Mathematical Sciences",
    period: "Oct 2022 – Apr 2024",
    summary:
      "Teaching assistant across five modules, supporting students in labs and tutorials and acting as a point of reference when other TAs couldn't resolve a student's problem. Peer Assisted Learning sessions for first-year Computer Architecture, supervising Software Engineering Project lab sessions, and advising prospective applicants at Open Days.",
    tags: [
      "CO1104 Computer Architecture",
      "CO1101 Computing Fundamentals",
      "CO2102 Databases and Domain Modelling",
      "CO2101 Operating Systems and Networking",
      "CO2201 Software Engineering Project",
    ],
    references: [
      { label: "CO1104 PAL & Open Days", href: "/references/co1104-pal-open-days-letter.pdf" },
      { label: "CO1101 Computing Fundamentals", href: "/references/co1101-ta-letter.pdf" },
      { label: "Databases & Software Engineering", href: "/references/database-and-se-ta-letter.pdf" },
      { label: "Software Engineering Project", href: "/references/se-project-ta-letter.pdf" },
    ],
  },
  {
    title: "Mentor",
    organisation: "Student Union · University of Leicester",
    // Dates as on LinkedIn. The Peer Mentoring reference letter gives
    // "Aug 2023 – current" instead, so these need confirming.
    period: "Aug 2022 – Jul 2023",
    summary:
      "Managed information relay across communication channels so mentor recruitment ran efficiently, and delivered presentations to student audiences. The Peer Mentoring team's reference also mentions hosting the mentor and mentee meet and greet and creating social media content for the team.",
    references: [
      { label: "Peer Mentoring reference", href: "/references/peer-mentoring-reference.pdf" },
    ],
  },
  {
    title: "STEM activities",
    organisation: "MCS Projects Ltd",
    period: "June 2023 · March 2024",
    summary:
      "Led an electric car activity (plus an E-FIT activity in March 2024, at Gartree High School) and gave young people guidance about future careers in STEM.",
    references: [
      { label: "June 2023", href: "/references/mcs-projects-june-2023.pdf" },
      { label: "March 2024", href: "/references/mcs-projects-march-2024.pdf" },
    ],
  },
  {
    title: "Computer Science Teacher (Internship)",
    organisation: "Beauchamp City Sixth Form · Lion Heart Trust",
    period: "Jun 2023 – Jul 2023",
    summary:
      "Internship with the Lion Heart Trust at Beauchamp College, working with students from Year 7 up to college level and supporting those preparing for GCSE and A-level computer science. Organised and ran specialised Year 12 sessions introducing object-oriented programming, with a designed series of lab tasks.",
    tags: ["GCSE & A-level Computer Science", "Object-Oriented Programming"],
  },
  {
    title: "Team Lead",
    organisation: "University of Leicester",
    period: "Mar 2022 – Oct 2022",
    summary:
      "With my team, spent summer 2022 developing and delivering a three-session workshop for more than 600 first-year students: organisational behaviour and teamwork, problem-solving and decision-making, then time management and study techniques. Sessions mixed lecture slides, group activities, case studies and Q&A.",
  },
];
