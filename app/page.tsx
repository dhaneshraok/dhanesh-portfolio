"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import {
  Github, Linkedin, Mail, Check, ChevronRight,
  Cpu, Globe, Layers, Zap, Terminal, Box, Play, Award, BadgeCheck, FileText, User, Code2, MapPin
} from "lucide-react";

import { HeroCanvas } from "@/components/HeroCanvas";
import { TerminalWidget } from "@/components/TerminalWidget";
import { SystemHeader } from "@/components/SystemHeader";
import { ExperienceItem } from "@/components/ExperienceItem";

// --- DATA ---
const CERTIFICATIONS = [
  { name: "OCI Generative AI Professional", issuer: "Oracle Cloud", date: "2025", id: "PRO-GENAI-25" },
  { name: "OCI Data Science Professional", issuer: "Oracle Cloud", date: "2025", id: "PRO-DS-25" },
  { name: "OCI GenAI Foundations", issuer: "Oracle Cloud", date: "2025", id: "ASSOC-GENAI-25" },
];

const TECH_STACK = ["Java", "Spring Boot", "Kafka", "AWS", "Kubernetes", "Redis", "React", "Python", "Docker", "PostgreSQL", "Terraform"];

// --- COMPONENTS ---

const Toast = ({ message, visible }: { message: string, visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 bg-emerald-500 text-black font-bold rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)]"
      >
        <Check size={18} />
        <span>{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.1}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      className="cursor-grab perspective-1000"
    >
      <div className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-orange-500/50 hover:to-orange-900/50 transition-all duration-500 overflow-hidden shadow-xl">
        {children}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
};

// UPDATED PROJECT CARD TO ACCEPT LINKS
const ProjectCard = ({ title, type, problem, solution, stack, linkLabel, demoLink, imageUrl }: any) => {
  const [activeTab, setActiveTab] = useState<"overview" | "specs">("overview");

  return (
    <div className="bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500 group shadow-xl">
      <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 bg-black/20">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${type === 'AI' ? 'bg-blue-500' : 'bg-emerald-500'} animate-pulse`} />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{type} ARCHITECTURE</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{title}</h3>
        </div>
        <div className="flex bg-black/40 rounded-lg p-1 border border-white/5 self-start">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === 'overview' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === 'specs' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Tech Specs
          </button>
        </div>
      </div>

      <div className="relative h-56 w-full overflow-hidden border-b border-white/5 group-hover:opacity-90 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20 mix-blend-overlay" />
        <img src={imageUrl} alt={title} className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" />
      </div>

      <div className="p-6 min-h-[220px] relative">
        <AnimatePresence mode="wait">
          {activeTab === "overview" ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <p className="text-slate-400 text-sm leading-relaxed"><strong className="text-white">The Challenge:</strong> {problem}</p>
                <div className="h-px w-full bg-white/5" />
                <p className="text-slate-400 text-sm leading-relaxed"><strong className="text-white">The Solution:</strong> {solution}</p>
              </div>

              {/* LINK BUTTON */}
              <a
                href={demoLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-6 hover:gap-4 transition-all cursor-pointer w-fit"
              >
                {linkLabel} <ChevronRight size={14} />
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="specs"
              initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
              className="grid grid-cols-2 gap-4"
            >
              {stack.map((item: any, i: number) => (
                <div key={i} className="bg-black/20 p-3 rounded-lg border border-white/5 flex items-center gap-3 hover:bg-white/5 transition-colors">
                  <div className="p-2 bg-white/5 rounded border border-white/5">
                    <item.icon size={14} className="text-slate-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">{item.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{item.role}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [toast, setToast] = useState({ show: false, msg: "" });

  const showToast = (msg: string) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("dhaneshrao12@gmail.com");
    showToast("Email copied to clipboard");
  };

  return (
    <main className="relative min-h-screen bg-[#020617] text-slate-50 overflow-x-hidden selection:bg-emerald-500/30">
      <SystemHeader />
      <Toast message={toast.msg} visible={toast.show} />

      <motion.div className="fixed top-[45px] left-0 right-0 h-[1px] bg-emerald-500/50 z-50 origin-left" style={{ scaleX }} />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <HeroCanvas />
        <div className="z-10 w-full max-w-5xl px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md text-[10px] font-mono text-emerald-400 mb-4 animate-pulse">
                ● STATUS: OPEN TO WORK
              </motion.div>

              <div className="relative group cursor-default">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] group-hover:animate-pulse">
                  DHANESH<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">RAO.</span>
                </h1>
              </div>

              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                <strong className="text-white">Full-Stack Engineer</strong> specializing in distributed systems. I build applications that scale with the business.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button onClick={copyEmail} className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <Mail size={16} /> Contact Me
                </button>

                {/* RESUME BUTTON: Works if 'resume.pdf' is in 'public' folder */}
                <a
                  href="/resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-emerald-500/30 transition-all"
                >
                  <FileText size={16} className="text-emerald-400" /> Resume
                </a>

                <div className="flex gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md ml-2">

                  {/* GITHUB LINK */}
                  <a
                    href="https://github.com/dhaneshraok"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="text-slate-400 hover:text-white cursor-pointer transition-colors p-1 box-content" size={18} />
                  </a>

                  {/* Divider Line */}
                  <div className="w-px h-6 bg-white/10" />

                  {/* LINKEDIN LINK */}
                  <a
                    href="https://www.linkedin.com/in/dhanesh-rao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-slate-400 hover:text-white cursor-pointer transition-colors p-1 box-content" size={18} />
                  </a>

                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="hidden lg:block h-[400px] w-full bg-black/80 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <div className="pt-10 px-4 h-full">
                <TerminalWidget />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      {/* 2. ABOUT ME SECTION */}
      <section className="relative z-10 bg-[#03081a]/50 py-24 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Bio Text */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <User className="text-blue-400" size={20} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white">The Operator</h3>
              </div>

              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I build <strong className="text-white">high-velocity distributed systems</strong> that don't just work—they scale.
                  My focus is on engineering fault-tolerant architectures
                  capable of handling massive throughput with sub-millisecond latency.
                </p>
                <p>
                  At the intersection of <strong className="text-white">Cloud Native Infrastructure</strong> and <strong className="text-white">Generative AI</strong>,
                  I solve complex concurrency problems and optimize data pipelines. Whether it's sharding databases for scale or finetuning RAG retrieval paths,
                  I write code that powers business-critical operations.
                </p>
              </div>

              {/* Tech Stack Marquee */}
              <div className="pt-4">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Core Arsenal</p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-emerald-400 hover:border-emerald-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Stats Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-[60x] rounded-full pointer-events-none" />
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-emerald-500 overflow-hidden relative">
                    <img src="/dhanesh.png" alt="Profile" className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Dhanesh Rao</h4>
                    <p className="text-sm text-slate-500 font-mono">System Architect // SDE</p>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-slate-500 flex items-center gap-2"><MapPin size={12} /> Location</span>
                    <span className="text-white">San Francisco, CA</span>
                  </div>
                  {/* LEETCODE RANKING ADDED HERE */}
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-slate-500 flex items-center gap-2"><Code2 size={12} /> Global Rank</span>
                    <span className="text-yellow-400 font-bold flex items-center gap-1">
                      Top 30,000 <span className="text-slate-600 text-[9px] uppercase font-normal">(LeetCode)</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-slate-500 flex items-center gap-2"><Zap size={12} /> Focus</span>
                    <span className="text-white">Backend & Scale</span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex gap-4">
                  <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-[10px] text-slate-500 uppercase">Years Exp</div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">25k</div>
                    <div className="text-[10px] text-slate-500 uppercase">Max TPS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIVE PROJECTS DASHBOARD */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Deployed Systems</h2>
            <p className="text-slate-500">Selected production-grade architectures.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-emerald-500 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/20 animate-pulse">
            <Play size={10} fill="currentColor" /> SYSTEMS ONLINE
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {/* PROJECT 1: RAG (First) */}
          <ProjectCard
            title="RAG Knowledge Base"
            type="AI"
            imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
            linkLabel="View Demo"
            // REPLACE THIS WITH YOUR REAL LINK
            demoLink="https://dhanesh-rag.streamlit.app/"
            problem="Internal documentation was fragmented, leading to slow onboarding and 30% hallucination rate in basic LLM queries."
            solution="Built a Vector Retrieval pipeline using Pinecone. Implemented semantic caching to reduce OpenAI API costs by 40% and improve response time."
            stack={[
              { name: "Pinecone", role: "Vector DB", icon: Layers },
              { name: "LangChain", role: "Orchestration", icon: Cpu },
              { name: "FastAPI", role: "Backend API", icon: Globe },
              { name: "React", role: "Frontend", icon: Box },
            ]}
          />

          {/* PROJECT 2: Hybrid Feed (Second) */}
          <ProjectCard
            title="Hybrid Feed Engine"
            type="DISTRIBUTED"
            imageUrl="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000&auto=format&fit=crop"
            linkLabel="View Architecture Doc"
            // REPLACE THIS WITH YOUR REAL LINK
            demoLink="https://github.com/dhaneshraok/Hybrid-feed-System"
            problem="Users with 10M+ followers caused massive latency spikes (Celebrity Problem) during post broadcasting."
            solution="Implemented a hybrid Fan-out strategy. Standard users push to timelines (write-optimized), while celebrities use a pull-model (read-optimized) with Redis caching."
            stack={[
              { name: "Redis Cluster", role: "Cache Layer", icon: Zap },
              { name: "Apache Kafka", role: "Event Stream", icon: Layers },
              { name: "Cassandra", role: "NoSQL DB", icon: Box },
              { name: "GoLang", role: "Worker Service", icon: Terminal },
            ]}
          />
        </div>
      </section>

      {/* 5. EXPERIENCE LOG */}
      <section className="relative z-10 bg-[#050a1f] py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-slate-700" /> Professional Log
          </h3>
          <div className="space-y-8">
            <ExperienceItem
              company="Bank of America"
              role="Software Engineer"
              date="2023 - Present"
              desc="Optimizing high-availability payment systems. Moved legacy monoliths to event-driven microservices."
              metrics={["25k+ TPS handled", "99.99% Availability", "CI/CD Modernization"]}
              tech={[{ name: "Java", icon: Cpu }, { name: "Kafka", icon: Zap }, { name: "AWS", icon: Globe }]}
            />
            <ExperienceItem
              company="Real Variable"
              role="Software Engineer"
              date="2021 - 2023"
              desc="Core developer for a multi-tenant digital asset platform. Focused on ledger synchronization and security."
              metrics={["50% Faster Reads", "Zero Downtime Deploys", "Ledger Sync"]}
              tech={[{ name: "Python", icon: Cpu }, { name: "Redis", icon: Zap }, { name: "Postgres", icon: Layers }]}
            />
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
            <Award className="text-orange-500" size={24} />
          </div>
          <div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">
              Certifications & Credentials
            </h3>
            <p className="text-slate-500 text-sm mt-1">Validated expertise in cloud and AI infrastructure.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <TiltCard key={cert.id}>
              <div className="relative h-full bg-[#0a0a0a] rounded-2xl p-6 flex flex-col justify-between gap-6 group-hover:bg-[#0a0a0a]/90 transition-colors z-10 min-h-[160px]">
                <div className="flex items-start justify-between">
                  <BadgeCheck className="text-orange-400/80 group-hover:text-orange-400 transition-colors" size={24} />
                  <span className="px-2 py-1 rounded text-[10px] font-bold font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20">{cert.date}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight mb-2 group-hover:text-orange-200 transition-colors">{cert.name}</h4>
                  <p className="text-xs text-slate-400">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                  <Terminal size={10} /> ID: {cert.id}
                </div>
              </div>
              <div className="absolute inset-0 bg-orange-500/5 blur-xl group-hover:bg-orange-500/10 transition-colors pointer-events-none" />
            </TiltCard>
          ))}
        </div>
      </section>



      {/* 6. FOOTER */}
      <footer className="py-12 text-center border-t border-white/5 bg-[#020617]">
        <button onClick={copyEmail} className="text-slate-500 hover:text-emerald-400 text-sm transition-colors mb-4 font-mono">
          dhaneshrao12@gmail.com
        </button>
        <p className="text-[10px] text-slate-700 font-mono uppercase">System version 3.3.0 // Dhanesh Rao</p>
      </footer>
    </main>
  );
}