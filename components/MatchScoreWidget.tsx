"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const MatchScoreWidget = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900/50 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                <Shield size={40} className="text-emerald-500" />
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase border border-emerald-500/20 px-2 py-1 rounded bg-emerald-950/30">
                    System Readiness
                </div>
                <div className="flex gap-1">
                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-800" />
                        <motion.circle
                            cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="6" fill="transparent"
                            strokeDasharray="226"
                            initial={{ strokeDashoffset: 226 }}
                            whileInView={{ strokeDashoffset: 226 - (226 * 0.98) }}
                            className="text-emerald-500"
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>
                    <span className="absolute text-xl font-bold text-white">98%</span>
                </div>
                <div>
                    <div className="text-sm text-slate-400 mb-1">Architecture Health</div>
                    <div className="text-xs text-emerald-400 font-mono">ALL SYSTEMS OPERATIONAL</div>
                </div>
            </div>
        </motion.div>
    );
}