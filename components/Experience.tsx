"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

interface Bullet {
  text: string;
  metrics?: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: Bullet[];
  tech: string[];
  impact: { value: string; label: string }[];
}

const experiences: Experience[] = [
  {
    company: "Bank of America",
    role: "Software Engineer",
    period: "Jul 2025 — Present",
    location: "San Jose, CA",
    bullets: [
      {
        text: "Decomposed a monolithic payments module into 6 Java/Spring Boot microservices with Docker/Kubernetes containers and gRPC + REST API contracts",
        metrics: ["3wk → 4d releases", "3x traffic spikes handled"],
      },
      {
        text: "Designed a Redis distributed caching layer with consistent hashing across 4 shards, write-through persistence to PostgreSQL, and TTL-based eviction",
        metrics: ["p95: 1.8s → 45ms", "70% read offload"],
      },
      {
        text: "Stood up 3 Kafka consumer groups (exactly-once semantics) replacing a nightly batch job, enabling near-real-time fraud alerting",
        metrics: ["12hr → <2min detection", "100K+ events/day"],
      },
      {
        text: "Instrumented services with OpenTelemetry distributed tracing, built Grafana/Prometheus SLO dashboards with p50/p95/p99 latency tracking",
        metrics: ["MTTD: 25min → 4min", "MTTR: -35%"],
      },
      {
        text: "Built 3-tier test automation suite — JUnit 5, Spring MockMvc, Karate API contract tests — enforced via Jenkins CI/CD quality gates",
        metrics: ["52% → 88% coverage", "14 regressions caught"],
      },
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Redis", "AWS", "Kubernetes", "Docker", "gRPC", "PostgreSQL", "OpenTelemetry"],
    impact: [
      { value: "40x", label: "Faster Lookups" },
      { value: "360x", label: "Faster Alerts" },
      { value: "6", label: "Microservices" },
    ],
  },
  {
    company: "Real Variable Digital Asset Services",
    role: "Software Engineer",
    period: "Aug 2021 — Aug 2023",
    location: "Hyderabad, India",
    bullets: [
      {
        text: "Optimized the order-matching algorithm from O(n²) to O(n log n) using a TreeMap-based priority queue",
        metrics: ["p95: 320ms → 85ms", "5K+ TPS"],
      },
      {
        text: "Redesigned PostgreSQL schema — partitioned transactions table, added composite indexes, rewrote N+1 ORM queries into batch joins",
        metrics: ["2.1s → 90ms lookups", "10K+ DAU"],
      },
      {
        text: "Configured Kafka with exactly-once semantics for deposit/withdrawal pipeline with idempotency keys and dead-letter queues",
        metrics: ["$12K/quarter savings", "Zero duplicate credits"],
      },
      {
        text: "Wrote 420+ automated tests across 3 microservices, integrated into GitLab CI with Docker-compose test environments",
        metrics: ["Sev-2: 7 → 1/quarter", "48% → 85% coverage"],
      },
    ],
    tech: ["Python", "Java", "Redis", "PostgreSQL", "Kafka", "Docker", "FastAPI", "Jest", "Cypress"],
    impact: [
      { value: "3.8x", label: "Faster Matching" },
      { value: "23x", label: "Faster Lookups" },
      { value: "420+", label: "Auto Tests" },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-medium text-violet-400 tracking-[0.2em] uppercase mb-4">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
            Where I&apos;ve made impact.
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[13px] top-2 w-3 h-3 rounded-full bg-violet-500 border-2 border-[#050505] animate-pulse-glow hidden md:block" />

                {/* Card */}
                <div className="group p-8 md:p-10 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:border-white/[0.1] transition-all duration-500 relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                            <Building2 size={16} className="text-violet-400" />
                          </div>
                          <h4 className="text-xl font-bold text-white tracking-tight">
                            {exp.company}
                          </h4>
                        </div>
                        <p className="text-zinc-400 ml-12">{exp.role}</p>
                      </div>
                      <div className="flex flex-col gap-1 items-start md:items-end ml-12 md:ml-0">
                        <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-zinc-600">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Impact metrics row */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {exp.impact.map((m) => (
                        <div
                          key={m.label}
                          className="text-center py-3 px-2 rounded-xl bg-white/[0.025] border border-white/[0.04]"
                        >
                          <div className="text-xl font-bold text-white tracking-tight">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-zinc-500 mt-0.5 uppercase tracking-wider">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bullet points with inline metrics */}
                    <div className="space-y-4 mb-8">
                      {exp.bullets.map((bullet, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + i * 0.2 + j * 0.08,
                          }}
                          className="flex gap-3"
                        >
                          <span className="w-1 h-1 rounded-full bg-violet-500/60 mt-2.5 shrink-0" />
                          <div>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                              {bullet.text}
                            </p>
                            {bullet.metrics && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {bullet.metrics.map((m) => (
                                  <span
                                    key={m}
                                    className="px-2.5 py-1 text-[11px] font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-md"
                                  >
                                    {m}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.04]">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-white/[0.03] rounded-full border border-white/[0.05] hover:border-violet-500/30 hover:text-zinc-300 transition-all duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
