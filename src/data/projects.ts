export type Project = {
  title: string;
  type: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "EcoTracker",
    type: "Android App",
    description:
      "An Android app that scans product barcodes and estimates environmental impact using product databases, Firebase, and AI-assisted fallback logic.",
    techStack: ["Kotlin", "Android", "Firebase", "Firestore", "MVVM", "Gemini API"],
    githubUrl: "https://github.com/Thaelith/EcoTracker",
    demoUrl: null,
    featured: true,
  },
  {
    title: "99%",
    type: "Game",
    description:
      "A hostile desktop calibration game built with Godot and published on itch.io.",
    techStack: ["Godot", "GDScript", "Game Design"],
    githubUrl: null,
    demoUrl: "https://thaelith.itch.io/99",
    featured: true,
  },
  {
    title: "ArchLens",
    type: "Architecture Tool",
    description:
      "An interactive system design visualizer for building, editing, explaining, and presenting software architecture diagrams.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Flow"],
    githubUrl: "https://github.com/Thaelith/ArchLens",
    demoUrl: null,
    featured: true,
  },
  {
    title: "LinkRoom-Desktop",
    type: "Desktop App",
    description:
      "A lightweight Discord-style desktop application for private groups with chat, voice rooms, and screen sharing.",
    techStack: ["Tauri", "React", "TypeScript", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/Thaelith/LinkRoom-Desktop",
    demoUrl: null,
    featured: false,
  },
  {
    title: "QueueForge",
    type: "Backend System",
    description:
      "A production-style distributed job queue with safe worker leasing, retries, dead-letter handling, and observability.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Prometheus"],
    githubUrl: "https://github.com/Thaelith/QueueForge",
    demoUrl: null,
    featured: false,
  },
  {
    title: "TenantKit-Lite",
    type: "SaaS Starter",
    description:
      "A lightweight multi-tenant SaaS starter with tenant isolation, RBAC, invitations, audit logging, and local SQLite development.",
    techStack: ["Next.js", "TypeScript", "Prisma", "SQLite", "Auth.js"],
    githubUrl: "https://github.com/Thaelith/TenantKit-Lite",
    demoUrl: null,
    featured: false,
  },
  {
    title: "CSE320-Congestion-Control-Routing",
    type: "Academic Networking",
    description:
      "An academic C simulation for TCP congestion control and link-state routing concepts, including TCP Reno and Dijkstra routing.",
    techStack: ["C", "TCP Reno", "Dijkstra", "Networking"],
    githubUrl: "https://github.com/Thaelith/CSE320-Congestion-Control-Routing",
    demoUrl: null,
    featured: false,
  },
];
