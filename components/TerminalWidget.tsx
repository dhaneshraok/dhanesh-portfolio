"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react";

export const TerminalWidget = () => {
    const [input, setInput] = useState("");
    // Start empty for typing effect
    const [history, setHistory] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const bootSequence = [
        "Initializing DhaneshOS v1.0.4...",
        "Loading kernel modules... OK",
        "Mounting file systems... OK",
        "System check: 25k TPS Pipeline... ONLINE",
        "Type 'help' to begin exploration.",
        ""
    ];

    // Auto-typing effect on mount
    useEffect(() => {
        let delay = 0;
        bootSequence.forEach((line, index) => {
            delay += 400 + Math.random() * 300; // Randomize typing speed
            setTimeout(() => {
                setHistory((prev) => [...prev, line]);
            }, delay);
        });
    }, []);

    const commands: Record<string, string> = {
        help: "Available: about, stack, contact, clear, sudo",
        about: "Engineer specializing in High-Scale Architecture & Distributed Systems.",
        stack: "Java (Spring), Kafka, AWS, K8s, Redis, Postgres, React.",
        contact: "Opening mail client...",
        sudo: "Access Denied: User is not in the sudoers file. This incident will be reported.",
    };

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();

            if (cmd === 'clear') {
                setHistory([]);
            } else if (cmd === 'contact') {
                window.location.href = "mailto:dhaneshrao12@gmail.com";
                setHistory([...history, `➜ ${input}`, "Opening mail client...", ""]);
            } else {
                const output = commands[cmd] || `Command not found: ${cmd}. Type 'help'.`;
                setHistory([...history, `➜ ${input}`, output, ""]);
            }
            setInput("");
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-[#0a0a0a] rounded-2xl p-4 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* CRT Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-10 opacity-20" />

            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2 relative z-20">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>
                <div className="flex items-center gap-2 text-slate-500 ml-2">
                    <TerminalIcon size={12} />
                    <span className="text-[10px] uppercase tracking-widest font-semibold">guest@dhanesh_rao:~</span>
                </div>
            </div>

            <div ref={containerRef} className="flex-1 overflow-y-auto font-mono space-y-1 relative z-20">
                {history.map((line, i) => (
                    <div key={i} className={`${line.startsWith('➜') ? "text-emerald-400 font-bold" : "text-slate-300"}`}>
                        {line}
                    </div>
                ))}
                <div className="flex items-center gap-2 group mt-2">
                    <ChevronRight size={14} className="text-emerald-500" />
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="bg-transparent border-none outline-none flex-1 text-emerald-100 placeholder-white/20 focus:ring-0 p-0"
                        placeholder="Type 'help'..."
                        spellCheck={false}
                    />
                    <div className="w-2 h-4 bg-emerald-500 animate-pulse ml-1" />
                </div>
            </div>
        </div>
    );
};