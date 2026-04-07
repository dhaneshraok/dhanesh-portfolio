"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Activity,
  Zap,
  Trophy,
  Shield,
  Building2,
  MapPin,
  Briefcase,
} from "lucide-react";

/* ── Counter hook ── */
function useCounter(end: number, dur = 2200) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const go = useRef(false);
  useEffect(() => {
    if (!inView || go.current) return;
    go.current = true;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, dur]);
  return { n, ref };
}

/* ── Orbital rings SVG ── */
function OrbitalRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 800 800" className="w-[1000px] h-[1000px] opacity-[0.07]" fill="none">
        <circle cx="400" cy="400" r="150" stroke="url(#g1)" strokeWidth="0.5"
          style={{ animation: "ring-spin 50s linear infinite" }} />
        <circle cx="400" cy="400" r="240" stroke="url(#g2)" strokeWidth="0.5" strokeDasharray="8 6"
          style={{ animation: "ring-spin-reverse 38s linear infinite" }} />
        <circle cx="400" cy="400" r="340" stroke="url(#g3)" strokeWidth="0.5" strokeDasharray="3 10"
          style={{ animation: "ring-spin 55s linear infinite" }} />
        <defs>
          <linearGradient id="g1"><stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#3b82f6" /></linearGradient>
          <linearGradient id="g2"><stop stopColor="#6366f1" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient>
          <linearGradient id="g3"><stop stopColor="#3b82f6" /><stop offset="1" stopColor="#6366f1" /></linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ── Morphing gradient orb ── */
function GradientOrb() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div
        className="w-[500px] h-[500px] md:w-[650px] md:h-[650px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.25) 40%, rgba(99,102,241,0.1) 60%, transparent 75%)",
          animation: "morph 15s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)",
          animation: "morph-inner 12s ease-in-out infinite",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}

/* ── Mini animated sparkline ── */
function Sparkline({ color = "#8b5cf6" }: { color?: string }) {
  return (
    <svg viewBox="0 0 80 24" className="w-full h-6 mt-2 opacity-40">
      <motion.path
        d="M0 20 Q10 18 15 14 T30 10 T45 6 T60 3 T80 2"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ════════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════════ */
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, -50]);
  const bgY = useTransform(scrollY, [0, 700], [0, 80]);
  const fade = useTransform(scrollY, [0, 600], [1, 0]);

  /* counters */
  const c1 = useCounter(40, 2400);
  const c2 = useCounter(360, 2400);
  const c3 = useCounter(1000, 2400);
  const c4 = useCounter(9995, 2400);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ── BG layers ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute top-[0%] left-[5%] w-[600px] h-[600px] bg-violet-600/25 rounded-full blur-[150px] animate-float-1" />
        <div className="absolute top-[15%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] animate-float-2" />
        <div className="absolute bottom-[5%] left-[20%] w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px] animate-float-3" />
      </motion.div>

      <GradientOrb />
      <OrbitalRings />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,transparent_0%,#050505_100%)]" />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-20 min-h-screen flex flex-col justify-center"
        style={{ y, opacity: fade }}
      >
        {/* ═══ BENTO GRID ═══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

          {/* ──────────── MAIN CARD ──────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0, 1] }}
            className="col-span-2 lg:col-span-3 relative p-8 md:p-10 rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-xl overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 opacity-60" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-sm text-zinc-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Opportunities
            </div>

            {/* Name */}
            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.9] text-glow mb-5">
              <span className="text-white">DHANESH</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_6s_ease-in-out_infinite]">
                RAO
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base md:text-lg text-zinc-400 max-w-md leading-relaxed mb-8">
              Full-Stack Engineer building{" "}
              <span className="text-white font-medium">distributed systems</span>{" "}
              that power millions of transactions. Microservices, event-driven
              architecture &amp; cloud-native infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#projects"
                className="group px-7 py-3 bg-white text-black font-semibold rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
              <a
                href="/resume.docx"
                className="px-7 py-3 border border-white/15 text-white font-semibold rounded-full text-sm hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300"
              >
                Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: Github, href: "https://github.com/dhaneshraok", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/dhanesh-rao/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:dhaneshrao12@gmail.com", label: "Email" },
              ].map((s) => (
                <a key={s.label} href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="group w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300"
                >
                  <s.icon size={15} className="text-zinc-600 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ──────────── FEATURED STAT (40x) ──────────── */}
          <motion.div
            ref={c1.ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-1 relative p-6 rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-xl overflow-hidden group hover:border-violet-500/20 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <Zap size={16} className="text-violet-400 mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tight tabular-nums leading-none">
                {c1.n}<span className="text-violet-400">x</span>
              </div>
              <div className="text-xs text-zinc-400 mt-2 font-medium uppercase tracking-wider">
                Faster Lookups
              </div>
              <div className="text-[11px] text-zinc-600 mt-0.5">1.8s → 45ms via Redis</div>
              <Sparkline color="#8b5cf6" />
            </div>
          </motion.div>

          {/* ──────────── ROW 2: 4 CARDS ──────────── */}

          {/* 360x */}
          <motion.div
            ref={c2.ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative p-5 rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-xl overflow-hidden group hover:border-blue-500/20 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <Activity size={14} className="text-blue-400 mb-3" />
              <div className="text-2xl font-bold text-white tracking-tight tabular-nums">
                {c2.n}<span className="text-blue-400">x</span>
              </div>
              <div className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider font-medium">Faster Fraud Alerts</div>
              <div className="text-[10px] text-zinc-600">12hr → 2min via Kafka</div>
            </div>
          </motion.div>

          {/* Bank of America */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-5 rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-xl overflow-hidden group hover:border-emerald-500/20 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-green-500 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <Building2 size={14} className="text-emerald-400 mb-3" />
              <div className="text-sm font-bold text-white">Bank of America</div>
              <div className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider font-medium">Software Engineer</div>
              <div className="flex items-center gap-1.5 mt-2">
                <MapPin size={10} className="text-zinc-600" />
                <span className="text-[10px] text-zinc-600">San Jose, CA</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <Briefcase size={10} className="text-zinc-600" />
                <span className="text-[10px] text-zinc-600">Jul 2025 — Present</span>
              </div>
            </div>
          </motion.div>

          {/* 1000+ LeetCode */}
          <motion.div
            ref={c3.ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative p-5 rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-xl overflow-hidden group hover:border-amber-500/20 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <Trophy size={14} className="text-amber-400 mb-3" />
              <div className="text-2xl font-bold text-white tracking-tight tabular-nums">
                {c3.n}<span className="text-amber-400">+</span>
              </div>
              <div className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider font-medium">LeetCode Problems</div>
              <div className="text-[10px] text-zinc-600">Arrays, DP, Trees, Graphs</div>
            </div>
          </motion.div>

          {/* 99.95% */}
          <motion.div
            ref={c4.ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-5 rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-xl overflow-hidden group hover:border-cyan-500/20 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <Shield size={14} className="text-cyan-400 mb-3" />
              <div className="text-2xl font-bold text-white tracking-tight tabular-nums">
                {(c4.n / 100).toFixed(2)}<span className="text-cyan-400">%</span>
              </div>
              <div className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider font-medium">System Availability</div>
              <div className="text-[10px] text-zinc-600">Production SLO target</div>
            </div>
          </motion.div>
        </div>

        {/* ═══ FLOATING TECH TAGS ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-3 p-4 rounded-3xl border border-white/[0.04] bg-[#0a0a0a]/50 backdrop-blur-sm"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Java", "Spring Boot", "Kafka", "Redis", "AWS", "Kubernetes",
              "Docker", "PostgreSQL", "Python", "Go", "React", "TypeScript",
              "gRPC", "Terraform", "OpenTelemetry",
            ].map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
                className="px-3 py-1.5 text-[11px] font-medium text-zinc-500 bg-white/[0.03] border border-white/[0.05] rounded-lg hover:border-violet-500/30 hover:text-zinc-300 hover:bg-violet-500/[0.05] transition-all duration-300 cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] text-zinc-700 uppercase tracking-[0.25em]">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown size={14} className="text-zinc-700" />
        </motion.div>
      </motion.div>
    </section>
  );
}
