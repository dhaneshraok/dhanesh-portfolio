"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  MapPin,
  Code2,
  Server,
  Cloud,
  Brain,
  Layers,
  Smartphone,
  GraduationCap,
  Building2,
  Briefcase,
} from "lucide-react";

/* ── "What I Do" card data ── */
const expertise = [
  {
    icon: Server,
    title: "Backend Engineering",
    desc: "Building high-throughput services with Java, Spring Boot, Python, FastAPI, Go, and gRPC — designed for 5K+ TPS at sub-100ms latency.",
    accent: "violet",
    gradient: "from-violet-500/20 to-violet-500/0",
    border: "hover:border-violet-500/25",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deploying on AWS with Docker, Kubernetes, Terraform. CI/CD with Jenkins & GitHub Actions. Blue-green deploys, zero-downtime releases.",
    accent: "blue",
    gradient: "from-blue-500/20 to-blue-500/0",
    border: "hover:border-blue-500/25",
  },
  {
    icon: Layers,
    title: "Distributed Systems",
    desc: "Kafka event-driven pipelines, Redis caching with consistent hashing, Cassandra at scale. Sharding, replication, leader election.",
    accent: "cyan",
    gradient: "from-cyan-500/20 to-cyan-500/0",
    border: "hover:border-cyan-500/25",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "RAG pipelines with LangChain & FAISS, AI assistants with Gemini & Perplexity, vector search with Pinecone. Production ML workflows on OCI.",
    accent: "purple",
    gradient: "from-purple-500/20 to-purple-500/0",
    border: "hover:border-purple-500/25",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "React, Next.js, TypeScript frontends with Node.js & GraphQL backends. End-to-end features from database schema to pixel-perfect UI.",
    accent: "emerald",
    gradient: "from-emerald-500/20 to-emerald-500/0",
    border: "hover:border-emerald-500/25",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform apps with React Native & Flutter. Firebase backends, Expo workflows, native performance on iOS and Android.",
    accent: "rose",
    gradient: "from-rose-500/20 to-rose-500/0",
    border: "hover:border-rose-500/25",
  },
];

const accentColors: Record<string, string> = {
  violet: "bg-violet-500",
  blue: "bg-blue-500",
  cyan: "bg-cyan-500",
  purple: "bg-purple-500",
  emerald: "bg-emerald-500",
  rose: "bg-rose-500",
};

const iconColors: Record<string, string> = {
  violet: "text-violet-400",
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  emerald: "text-emerald-400",
  rose: "text-rose-400",
};

/* ── Card with mouse-tracking glow ── */
function GlowCard({
  children,
  className = "",
  delay = 0,
  inView,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  inView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setGlow({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseMove={onMove}
      onMouseLeave={() => setGlow({ x: 50, y: 50 })}
      className={`relative rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Mouse glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(350px circle at ${glow.x}% ${glow.y}%, rgba(139,92,246,0.06), transparent 50%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-sm font-medium text-violet-400 tracking-[0.2em] uppercase mb-4">
            About
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Engineering systems that{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              scale to millions.
            </span>
          </h3>
        </motion.div>

        {/* ═══ BENTO GRID — Profile + Bio ═══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          {/* ── Photo Card ── */}
          <GlowCard className="group col-span-2 lg:col-span-1 lg:row-span-2" delay={0.1} inView={inView}>
            <div className="relative h-full min-h-[320px] lg:min-h-0 flex flex-col">
              {/* Photo background */}
              <div className="relative w-full flex-grow overflow-hidden">
                <Image
                  src="/dhanesh.png"
                  alt="Dhanesh Rao"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
              </div>
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Dhanesh Rao
                </h4>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-zinc-400">
                  <MapPin size={12} className="text-violet-400" />
                  San Jose, CA
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-zinc-400">
                  <Briefcase size={12} className="text-emerald-400" />
                  Software Engineer
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-zinc-400">
                  <Building2 size={12} className="text-blue-400" />
                  Bank of America
                </div>
              </div>
            </div>
          </GlowCard>

          {/* ── Bio Card ── */}
          <GlowCard className="group col-span-2 lg:col-span-3 p-8 md:p-10" delay={0.15} inView={inView}>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 opacity-50" />
            <div className="relative z-10 space-y-5 text-[15px] text-zinc-400 leading-relaxed">
              <p>
                Full-Stack Engineer with expertise in distributed systems and
                cloud-native architectures. At{" "}
                <span className="text-white font-medium">Bank of America</span>,
                I decomposed a monolithic payments module into{" "}
                <span className="metric-highlight">6 microservices</span>,
                reducing release cycles from{" "}
                <span className="metric-highlight">3 weeks to 4 days</span> and
                cutting account-lookup p95 latency from{" "}
                <span className="metric-highlight">1.8s to 45ms</span>.
              </p>
              <p>
                My work spans high-throughput backend systems, event-driven
                architectures (Kafka, Redis), cloud infrastructure (AWS,
                Kubernetes), and Generative AI. I&apos;ve solved{" "}
                <span className="metric-highlight">1000+ LeetCode problems</span>{" "}
                and apply algorithmic thinking daily — from TreeMap-based matching
                engines to consistent hashing for cache sharding.
              </p>
              <p>
                Previously at{" "}
                <span className="text-white font-medium">Real Variable Digital Asset Services</span>,
                I optimized an order-matching algorithm from{" "}
                <span className="metric-highlight">O(n²) to O(n log n)</span>,
                cutting p95 from{" "}
                <span className="metric-highlight">320ms to 85ms</span>{" "}
                at 5K+ TPS — and eliminated{" "}
                <span className="metric-highlight">$12K/quarter</span> in
                reconciliation discrepancies through Kafka exactly-once pipelines.
              </p>
            </div>
          </GlowCard>

          {/* ── Education Cards ── */}
          <GlowCard className="group col-span-1 p-5" delay={0.2} inView={inView}>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500 opacity-40" />
            <div className="relative z-10">
              <GraduationCap size={16} className="text-amber-400 mb-3" />
              <div className="text-sm font-bold text-white">MS Computer Science</div>
              <div className="text-xs text-zinc-400 mt-1">Rowan University, NJ</div>
              <div className="text-[11px] text-zinc-600 mt-1">Sep 2023 — May 2025</div>
            </div>
          </GlowCard>

          <GlowCard className="group col-span-1 p-5" delay={0.25} inView={inView}>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40" />
            <div className="relative z-10">
              <GraduationCap size={16} className="text-cyan-400 mb-3" />
              <div className="text-sm font-bold text-white">BTech in ECE</div>
              <div className="text-xs text-zinc-400 mt-1">CBIT, Hyderabad</div>
              <div className="text-[11px] text-zinc-600 mt-1">Aug 2018 — May 2022</div>
            </div>
          </GlowCard>
        </div>

        {/* ═══ WHAT I DO — Bento expertise cards ═══ */}
        <div className="mt-10">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm font-medium text-zinc-500 tracking-[0.2em] uppercase mb-5"
          >
            What I Do
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.06 }}
                className={`group relative p-6 rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-sm overflow-hidden transition-all duration-500 ${item.border}`}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient} opacity-50`} />

                {/* Hover bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.15] transition-colors duration-500`}>
                      <item.icon size={16} className={iconColors[item.accent]} />
                    </div>
                    <h4 className="text-white font-semibold text-sm tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
