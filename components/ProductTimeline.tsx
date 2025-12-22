"use client";
import { motion } from "framer-motion";
import { Briefcase, Cpu, Layers, Globe, Shield, Zap } from "lucide-react";

const experiences = [
    {
        company: "Bank of America",
        role: "Software Engineer",
        date: "May 2025 – Present",
        desc: "Architecting high-availability payment systems. Focused on reducing p99 latency and optimizing distributed state across Kubernetes clusters.",
        metrics: ["25k+ Req/Sec", "40ms Latency Reduction", "3x Deployment Frequency"],
        tech: [
            { name: "Java", icon: Cpu },
            { name: "AWS", icon: Globe },
            { name: "Kubernetes", icon: Layers },
            { name: "Kafka", icon: Zap },
            { name: "mTLS", icon: Shield }
        ]
    },
    {
        company: "Real Variable Digital Asset Services",
        role: "Software Engineer",
        date: "Aug 2021 – Aug 2023",
        desc: "Engineered multi-tenant digital asset platforms. Designed event-driven architectures to handle real-time data streaming and complex alerting.",
        metrics: ["99.9% Uptime", "50% Read Optimization", "70% Faster CI/CD"],
        tech: [
            { name: "Python", icon: Cpu },
            { name: "Redis", icon: Zap },
            { name: "Postgres", icon: Layers },
            { name: "Docker", icon: Shield }
        ]
    }
];

export function ProductTimeline() {
    return (
        <div className="max-w-4xl mx-auto py-20 px-6">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-16 flex items-center gap-4">
                <Briefcase className="text-emerald-500" /> Professional Roadmap
            </h3>

            <div className="relative space-y-1">
                {/* The Vertical Line */}
                <div className="absolute left-[18px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-500/20 to-transparent" />

                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative pl-12 pb-20 last:pb-0"
                    >
                        {/* The Dot */}
                        <div className="absolute left-0 top-1 w-[38px] h-[38px] rounded-xl bg-[#020617] border border-emerald-500/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                                <h4 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h4>
                                <p className="text-emerald-400 font-medium">{exp.company}</p>
                            </div>
                            <span className="text-xs font-mono text-slate-500 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                                {exp.date}
                            </span>
                        </div>

                        <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">
                            {exp.desc}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {exp.metrics.map(metric => (
                                <div key={metric} className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3 text-center">
                                    <span className="text-emerald-400 font-bold text-sm tracking-tight">{metric}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack Icons */}
                        <div className="flex flex-wrap gap-3">
                            {exp.tech.map((t) => (
                                <div key={t.name} className="group relative flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-all">
                                    <t.icon size={14} className="text-slate-400 group-hover:text-emerald-400" />
                                    <span className="text-[11px] font-mono text-slate-300 group-hover:text-white">{t.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}