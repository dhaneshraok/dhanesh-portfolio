"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Trophy } from "lucide-react";
import { ExperienceProps } from "@/types";

export const ExperienceItem = ({ company, role, date, desc, metrics, tech }: ExperienceProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="group relative pl-8 md:pl-12 pb-16 last:pb-0"
    >
        {/* Connector Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 group-last:bottom-auto group-last:h-2" />
        <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-slate-900 border border-slate-600 group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:scale-150 transition-all duration-500 shadow-[0_0_0_4px_rgba(2,6,23,1)]" />

        <div className="relative z-10 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-300 group-hover:translate-x-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                    <h4 className="text-xl font-bold text-slate-100 flex items-center gap-3">
                        {role}
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider font-mono">
                            {company}
                        </span>
                    </h4>
                </div>
                <span className="text-xs font-mono text-slate-500">{date}</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-slate-700 pl-4">
                {desc}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {metrics.map((m: string, i: number) => (
                    <div key={m} className="flex items-center gap-3 p-2 bg-black/20 rounded border border-white/5">
                        {i === 0 ? <Trophy size={14} className="text-yellow-500" /> : <Users size={14} className="text-blue-500" />}
                        <span className="text-xs font-bold text-slate-300">{m}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                    <div key={t.name} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full border border-white/5">
                        <t.icon size={10} className="text-slate-500" />
                        <span className="text-[10px] font-mono text-slate-400">{t.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);