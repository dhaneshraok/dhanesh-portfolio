"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Zap } from "lucide-react";

type Category = "All" | "Full-Stack" | "System Design" | "AI / ML" | "Mobile";

interface Project {
  title: string;
  description: string;
  tech: string[];
  categories: Category[];
  github?: string;
  live?: string;
  featured?: boolean;
  metrics?: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Real-Time Matching Engine",
    description:
      "Low-latency matching system using Kafka event-driven architecture with consistent hashing for horizontal scaling. Sustained 8K+ match requests/sec at p99 <120ms with automatic failover.",
    tech: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
    categories: ["System Design", "Full-Stack"],
    github: "https://github.com/dhaneshraok",
    featured: true,
    metrics: ["8K+ req/sec", "p99 <120ms", "99.95% uptime"],
    gradient: "from-violet-600/30 via-violet-600/5 to-transparent",
  },
  {
    title: "SaverHunts",
    description:
      "Premium price comparison & social commerce platform with AR showrooms, AI gift concierge powered by Gemini, and TikTok-style deal feed with group discount functionality.",
    tech: ["TypeScript", "React Native", "FastAPI", "Redis", "Supabase", "Gemini AI", "Expo"],
    categories: ["Full-Stack", "Mobile"],
    github: "https://github.com/dhaneshraok/SaverHunts",
    featured: true,
    metrics: ["Full-Stack", "AI-Powered", "Mobile"],
    gradient: "from-blue-600/30 via-blue-600/5 to-transparent",
  },
  {
    title: "Hybrid Feed Engine",
    description:
      "Social feed system implementing hybrid fanout architecture used by Twitter & Instagram — push for regular users, pull for celebrities, merged for optimal read/write latency at scale.",
    tech: ["Java", "Kafka", "Redis", "Cassandra"],
    categories: ["System Design"],
    github: "https://github.com/dhaneshraok/Hybrid-feed-System",
    featured: true,
    metrics: ["Fan-out", "Low Latency", "At Scale"],
    gradient: "from-emerald-600/30 via-emerald-600/5 to-transparent",
  },
  {
    title: "RAG Knowledge Base",
    description:
      "AI-powered document analysis with personalized chat, PDF analysis, and JD matching using retrieval-augmented generation. Configurable RAG parameters with FAISS vector store.",
    tech: ["Python", "FAISS", "LangChain", "Streamlit", "Perplexity AI"],
    categories: ["AI / ML"],
    github: "https://github.com/dhaneshraok/streamlit-rag-assistant",
    live: "https://dhanesh-rag.streamlit.app/",
    featured: true,
    metrics: ["RAG Pipeline", "Live Demo", "AI Chat"],
    gradient: "from-purple-600/30 via-purple-600/5 to-transparent",
  },
  {
    title: "Food Delivery System",
    description:
      "Domain-driven food delivery platform with state machine order management, strategy pattern payments supporting UPI/Card/Wallet/COD, and decoupled delivery coordination.",
    tech: ["Java", "DDD", "Strategy Pattern", "State Machine"],
    categories: ["System Design"],
    github: "https://github.com/dhaneshraok/food-system-",
    gradient: "from-orange-600/20 via-transparent to-transparent",
  },
  {
    title: "Campus Ride",
    description:
      "Multi-platform ride-sharing app for campus communities with real-time tracking, built with Flutter and Firebase Cloud Functions backend.",
    tech: ["Dart", "Flutter", "Firebase", "Cloud Functions"],
    categories: ["Mobile"],
    github: "https://github.com/dhaneshraok/campus_ride",
    gradient: "from-cyan-600/20 via-transparent to-transparent",
  },
  {
    title: "Job Portal",
    description:
      "Full-stack job placement platform with separate backend/frontend architectures for employer and candidate management workflows.",
    tech: ["JavaScript", "Node.js", "React", "CSS"],
    categories: ["Full-Stack"],
    github: "https://github.com/dhaneshraok/job-portal",
    gradient: "from-rose-600/20 via-transparent to-transparent",
  },
  {
    title: "Parking Lot System",
    description:
      "Multi-floor parking lot LLD with nearest-spot allocation, dynamic pricing, ticketing system, and PlantUML architecture documentation.",
    tech: ["Java", "OOP", "Strategy Pattern", "PlantUML"],
    categories: ["System Design"],
    github: "https://github.com/dhaneshraok/parking-lot",
    gradient: "from-amber-600/20 via-transparent to-transparent",
  },
  {
    title: "Elevator System",
    description:
      "Object-oriented elevator scheduling system implementing efficient multi-car dispatch algorithms with clean separation of concerns.",
    tech: ["Java", "OOP", "LLD"],
    categories: ["System Design"],
    github: "https://github.com/dhaneshraok/Elevator",
    gradient: "from-teal-600/20 via-transparent to-transparent",
  },
  {
    title: "Employee Management",
    description:
      "Containerized employee management system with RESTful APIs, Spring Boot backend, Maven build, and Docker deployment.",
    tech: ["Java", "Spring Boot", "Maven", "Docker"],
    categories: ["Full-Stack"],
    github: "https://github.com/dhaneshraok/employees",
    gradient: "from-indigo-600/20 via-transparent to-transparent",
  },
];

const categories: Category[] = [
  "All",
  "Full-Stack",
  "System Design",
  "AI / ML",
  "Mobile",
];

/* ── 3D Tilt + Glow Card ── */
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setGlow({ x: x * 100, y: y * 100 });
      setTilt({ x: (y - 0.5) * -6, y: (x - 0.5) * 6 });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setGlow({ x: 50, y: 50 });
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className={`group relative flex flex-col rounded-2xl border border-white/[0.04] bg-[#0a0a0a] overflow-hidden ${
        project.featured ? "shimmer-border" : ""
      }`}
    >
      {/* Mouse-tracking glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, rgba(139, 92, 246, 0.08), transparent 40%)`,
        }}
      />

      {/* Top gradient accent */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${project.gradient} opacity-60`}
      />

      <div className="relative z-10 p-6 flex flex-col flex-grow">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors duration-300 tracking-tight pr-4">
            {project.title}
          </h4>
          {project.featured && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/20 shrink-0">
              <Zap size={10} className="text-violet-400" />
              <span className="text-[10px] font-semibold text-violet-400 uppercase tracking-wider">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Metrics badges */}
        {project.metrics && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 text-[11px] font-semibold text-violet-300/80 bg-violet-500/[0.08] border border-violet-500/15 rounded-md"
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-medium text-zinc-500 bg-white/[0.03] rounded-md border border-white/[0.04]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04] mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors duration-300"
            >
              <Github size={14} />
              Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors duration-300"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-medium text-violet-400 tracking-[0.2em] uppercase mb-4">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            What I&apos;ve built.
          </h3>
          <p className="text-zinc-500 mb-10 max-w-xl">
            From real-time matching engines to AI-powered platforms — projects
            spanning distributed systems, full-stack, and mobile.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2.5 text-sm rounded-full transition-all duration-300 ${
                active === cat
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300 bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 bg-violet-600 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
