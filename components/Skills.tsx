"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Eye,
  Boxes,
  type LucideIcon,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; primary?: boolean }[];
  accent: string;
  gradient: string;
  accentBorder: string;
  iconColor: string;
  tagActive: string;
  count: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Java", primary: true },
      { name: "Python", primary: true },
      { name: "Go", primary: true },
      { name: "C++" },
      { name: "TypeScript", primary: true },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Dart" },
    ],
    accent: "violet",
    gradient: "from-violet-500/15 to-violet-500/0",
    accentBorder: "hover:border-violet-500/25",
    iconColor: "text-violet-400",
    tagActive: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    count: "8",
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Spring Boot", primary: true },
      { name: "Node.js", primary: true },
      { name: "FastAPI", primary: true },
      { name: "gRPC", primary: true },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "Kafka", primary: true },
      { name: "Microservices" },
    ],
    accent: "blue",
    gradient: "from-blue-500/15 to-blue-500/0",
    accentBorder: "hover:border-blue-500/25",
    iconColor: "text-blue-400",
    tagActive: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    count: "8",
  },
  {
    title: "System Design",
    icon: Boxes,
    skills: [
      { name: "Distributed Systems", primary: true },
      { name: "Consistent Hashing", primary: true },
      { name: "Sharding" },
      { name: "Replication" },
      { name: "Caching", primary: true },
      { name: "Load Balancing" },
      { name: "Event-Driven", primary: true },
      { name: "Circuit Breakers" },
    ],
    accent: "cyan",
    gradient: "from-cyan-500/15 to-cyan-500/0",
    accentBorder: "hover:border-cyan-500/25",
    iconColor: "text-cyan-400",
    tagActive: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    count: "8",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", primary: true },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis", primary: true },
      { name: "Cassandra", primary: true },
      { name: "DynamoDB" },
      { name: "FAISS" },
      { name: "Supabase" },
    ],
    accent: "emerald",
    gradient: "from-emerald-500/15 to-emerald-500/0",
    accentBorder: "hover:border-emerald-500/25",
    iconColor: "text-emerald-400",
    tagActive: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    count: "8",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", primary: true },
      { name: "Docker", primary: true },
      { name: "Kubernetes", primary: true },
      { name: "Terraform", primary: true },
      { name: "Jenkins" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "ECS" },
    ],
    accent: "purple",
    gradient: "from-purple-500/15 to-purple-500/0",
    accentBorder: "hover:border-purple-500/25",
    iconColor: "text-purple-400",
    tagActive: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    count: "8",
  },
  {
    title: "Observability",
    icon: Eye,
    skills: [
      { name: "OpenTelemetry", primary: true },
      { name: "Grafana", primary: true },
      { name: "Prometheus", primary: true },
      { name: "ELK" },
      { name: "TDD" },
      { name: "Agile" },
      { name: "On-Call" },
      { name: "Git" },
    ],
    accent: "rose",
    gradient: "from-rose-500/15 to-rose-500/0",
    accentBorder: "hover:border-rose-500/25",
    iconColor: "text-rose-400",
    tagActive: "bg-rose-500/10 border-rose-500/20 text-rose-300",
    count: "8",
  },
];

/* ── Skill category card with mouse glow ── */
function SkillCard({
  category,
  delay,
  inView,
}: {
  category: SkillCategory;
  delay: number;
  inView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }, []);

  const Icon = category.icon;
  const primaryCount = category.skills.filter((s) => s.primary).length;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseMove={onMove}
      onMouseLeave={() => setGlow({ x: 50, y: 50 })}
      className={`group relative p-6 rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-sm overflow-hidden transition-all duration-500 ${category.accentBorder}`}
    >
      {/* Top accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.gradient} opacity-50`}
      />

      {/* Mouse glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at ${glow.x}% ${glow.y}%, rgba(139,92,246,0.05), transparent 50%)`,
        }}
      />

      {/* Hover bg */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.15] transition-colors duration-500">
              <Icon size={16} className={category.iconColor} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-tight">
                {category.title}
              </h4>
              <span className="text-[10px] text-zinc-600">
                {primaryCount} core · {category.skills.length} total
              </span>
            </div>
          </div>
        </div>

        {/* Skill proficiency bar */}
        <div className="w-full h-1 rounded-full bg-white/[0.04] mb-5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${(primaryCount / category.skills.length) * 100}%` } : {}}
            transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
            className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
            style={{ minWidth: "20%" }}
          />
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-1.5">
          {category.skills.map((skill, j) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.25, delay: delay + 0.1 + j * 0.03 }}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-lg border transition-all duration-300 cursor-default ${
                skill.primary
                  ? category.tagActive
                  : "text-zinc-500 bg-white/[0.02] border-white/[0.04] hover:border-white/[0.1] hover:text-zinc-400"
              }`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const totalSkills = skillCategories.reduce(
    (acc, c) => acc + c.skills.length,
    0
  );
  const coreSkills = skillCategories.reduce(
    (acc, c) => acc + c.skills.filter((s) => s.primary).length,
    0
  );

  return (
    <section id="skills" className="py-32 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-sm font-medium text-violet-400 tracking-[0.2em] uppercase mb-4">
              Skills
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Technologies I work with.
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-2xl font-bold text-white tabular-nums">
                {totalSkills}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                Total Skills
              </div>
            </div>
            <div className="w-px h-8 bg-white/[0.06]" />
            <div className="text-right">
              <div className="text-2xl font-bold text-violet-400 tabular-nums">
                {coreSkills}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                Core Stack
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.title}
              category={cat}
              delay={0.1 + i * 0.07}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
