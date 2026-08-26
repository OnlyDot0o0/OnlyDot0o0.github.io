export type Project = {
  slug: string;
  name: string;
  period: string;
  tagline: string;
  description: string;
  problem: string;
  contribution: string;
  tech: string[];
  metrics?: { value: string; label: string }[];
  category: "Full-Stack / AI" | "AI Research" | "AI / Computer Vision" | "Automation";
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "interactai",
    name: "InteractAI",
    period: "Dec 2023 – May 2024 · Final-Year Project, University of Leicester",
    tagline: "AI-assisted quiz platform with real analytics behind it",
    description:
      "A full-stack, AI-powered MCQ and quiz web application built as my undergraduate final-year project, researching how AI-generated feedback affects learning outcomes. Users attempt question banks while a ChatGPT-powered layer generates contextual feedback, and admins get analytics on performance and engagement.",
    problem:
      "Most quiz tools give a score and nothing else. InteractAI needed to explain the 'why' behind an answer, support quiz customisation and user registration, and stay usable for both learners and admins managing content through a drag-and-drop interface.",
    contribution:
      "Designed and built the entire three-tier stack solo: an HTML/CSS/JavaScript frontend, a Node.js/SQL backend, and AI-feedback generation via the OpenAI API. Delivered user registration, quiz customisation, and a drag-and-drop admin system, plus interactive analytics views with D3.js and Chart.js. The data layer evolved through three iterations — localStorage prototype, SQLite for structured persistence, then PostgreSQL for production-grade storage — as the requirements matured.",
    tech: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "PostgreSQL",
      "SQLite",
      "OpenAI API",
      "D3.js",
      "Chart.js",
      "Bootstrap",
      "jQuery",
    ],
    category: "Full-Stack / AI",
    featured: true,
  },
  {
    slug: "skillsdotai",
    name: "SkillsDotAI",
    period: "Dec 2024 – Sep 2025 · MSc Dissertation, University of Sheffield",
    tagline: "Adaptive, gamified learning driven by AI personalisation",
    description:
      "My master's dissertation project: “Enhancing Learner Engagement and Personalisation in AI-Powered Quiz Applications through Adaptive Learning, Gamification, and Mobile Optimisation.” It pushes InteractAI's core idea further — a multi-stage adaptive-difficulty engine that adjusts in real time to the learner, with Claude 3 Haiku generating the personalised feedback.",
    problem:
      "Static quiz difficulty doesn't hold attention or match individual ability. The research question was whether adaptive difficulty, gamification, and mobile-first design could measurably improve engagement and personalisation in an AI-powered learning tool — and whether users would even notice the adaptation.",
    contribution:
      "Architected the full stack (Node.js/Express backend, PostgreSQL, responsive frontend), built the adaptive-difficulty algorithm and AI feedback integration, and layered in gamification — achievement badges, global leaderboards, and Chart.js progress analytics. Hardened the app with Bcrypt, Helmet.js, and rate limiting, then containerised and deployed it with Docker on Render. Evaluated the result with 100 participants as part of the dissertation research.",
    tech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Claude 3 API",
      "Docker",
      "Chart.js",
      "Bootstrap 5",
      "Bcrypt",
      "Helmet.js",
    ],
    metrics: [
      { value: "100", label: "study participants" },
      { value: "4.44/5", label: "avg. satisfaction" },
      { value: "77%", label: "recognised adaptive difficulty" },
    ],
    category: "AI Research",
    featured: true,
  },
  {
    slug: "vision-ai-asset-automation",
    name: "Vision AI for Asset Automation",
    period: "Independent R&D",
    tagline: "Exploring computer vision to automate enterprise asset workflows",
    description:
      "An applied exploration into using computer vision and OCR to assist enterprise asset management processes — the kind of manual asset identification and data entry that shows up constantly in large-scale EAM systems like IBM Maximo.",
    problem:
      "Enterprise asset registers often depend on manual identification and transcription from labels, tags, and site photos — slow and error-prone at scale.",
    contribution:
      "Prototyped an image-processing pipeline using OpenCV and OCR to recognise and extract asset-identifying information from sample asset and location datasets, evaluating how AI-assisted recognition could reduce manual effort in asset-heavy workflows. This is R&D-stage work, not a shipped product.",
    tech: ["Python", "OpenCV", "OCR", "Computer Vision", "Image Processing"],
    category: "AI / Computer Vision",
    featured: true,
  },
  {
    slug: "manga-deal-radar",
    name: "Manga Deal Radar",
    period: "Personal Project",
    tagline: "Automated listing monitor with OCR and instant alerts",
    description:
      "A personal Python automation project that watches manga listings, reads pricing and title information straight out of images and text, and pushes a Telegram notification the moment something worth buying shows up.",
    problem:
      "Good deals disappear fast and most listing data lives inside images rather than structured text, so manual monitoring doesn't scale.",
    contribution:
      "Built the end-to-end pipeline solo: scraping, an OCR layer combining pytesseract and EasyOCR for text extraction from listing images, image pre-processing with PIL/OpenCV, and a Telegram bot for real-time alerts.",
    tech: [
      "Python",
      "Web Scraping",
      "pytesseract",
      "EasyOCR",
      "PIL",
      "OpenCV",
      "Telegram API",
    ],
    category: "Automation",
    featured: true,
  },
];
