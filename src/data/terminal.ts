export type TerminalCommand = {
  output: string[];
};

export const terminalCommands: Record<string, TerminalCommand> = {
  help: {
    output: [
      "available commands:",
      "  whoami        who is this",
      "  stack         core technologies",
      "  focus         what I work on day to day",
      "  investigate   how I approach a broken system",
      "  contact       ways to reach me",
      "  sudo hire-me  ;)",
      "  clear         clear the terminal",
    ],
  },
  whoami: {
    output: [
      "Moaz Alnageeb",
      "Software Engineer · AI & Cybersecurity · Enterprise Solutions",
      "BSc Software Engineering (First Class), MSc Cybersecurity & AI",
      "Currently: IBM Maximo Business Solution Consultant",
    ],
  },
  stack: {
    output: [
      "languages : JavaScript, Python, C#, C++, Java, SQL",
      "backend   : Node.js, Express.js, REST APIs, PostgreSQL, SQLite",
      "ai/data   : ML, NLP, Computer Vision, OCR, OpenCV",
      "enterprise: IBM Maximo, Jython, Workflow & Security Config",
    ],
  },
  focus: {
    output: [
      "day to day: configuring enterprise asset management systems,",
      "designing workflows and security models in IBM Maximo,",
      "and experimenting with where AI can remove manual effort",
      "from large-scale infrastructure and operations.",
    ],
  },
  investigate: {
    output: [
      "> this doesn't work.",
      "> why doesn't it work?",
      "> checking: security restrictions... relationships...",
      "> checking: conditional UI... automation scripts... queries...",
      "> found root cause. fixing the cause, not the symptom.",
    ],
  },
  contact: {
    output: [
      "email    : moazalnageeb@gmail.com",
      "linkedin : see the Contact section below",
      "github   : see the Contact section below",
    ],
  },
  "sudo hire-me": {
    output: [
      "[sudo] password for visitor: ********",
      "permission granted.",
      "initiating contact sequence... see the Contact section ↓",
    ],
  },
};

export const terminalWelcome = [
  "moaz@systems:~$ welcome. type `help` to see available commands.",
];
