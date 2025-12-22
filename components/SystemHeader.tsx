"use client";
import React, { useState, useEffect } from "react";
import { Wifi, Globe, Clock } from "lucide-react";

export const SystemHeader = () => {
    const [time, setTime] = useState("");
    const [ping, setPing] = useState(24);

    useEffect(() => {
        // Clock Logic
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', {
                hour: '2-digit', minute: '2-digit', hour12: false
            }));
            // Fake Ping fluctuation
            setPing(Math.floor(Math.random() * (45 - 20 + 1) + 20));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-500 font-bold">SYSTEM ONLINE</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                    <Wifi size={12} />
                    <span>{ping}ms</span>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center gap-2">
                    <Globe size={12} />
                    <span>SAN FRANCISCO, CA</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                    <Clock size={12} />
                    <span>{time} UTC-7</span>
                </div>
            </div>
        </div>
    );
};