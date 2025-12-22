"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const BentoCard = ({ children, className, delay = 0 }: BentoCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] // Custom "springy" ease
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={cn(
                // Base Styling: Dark Glass look
                "relative group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a]",
                "hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]",
                "p-8 transition-all duration-500 ease-out flex flex-col justify-between",
                className
            )}
        >
            {/* 1. The Subtle Grid Pattern (Engineers love this) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[matrix] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* 2. The Interactive Glow Effect (Follows the group hover) */}
            <div className="absolute -inset-px z-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* 3. The Content Slot */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );
};