"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Phone } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "dhaneshrao12@gmail.com",
    href: "mailto:dhaneshrao12@gmail.com",
    external: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dhaneshraok",
    href: "https://github.com/dhaneshraok",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dhanesh-rao",
    href: "https://www.linkedin.com/in/dhanesh-rao/",
    external: true,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-medium text-violet-400 tracking-[0.2em] uppercase mb-4">
            Contact
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              great.
            </span>
          </h3>
          <p className="text-zinc-400 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
            Open to discussing new opportunities, interesting projects, or ways
            to make an impact through technology.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-2xl mx-auto"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="group flex items-center gap-4 px-6 py-5 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:border-violet-500/20 hover:bg-white/[0.03] transition-all duration-500 flex-1"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/15 transition-colors duration-500 shrink-0">
                <link.icon size={18} className="text-violet-400" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-[11px] text-zinc-600 uppercase tracking-wider">
                  {link.label}
                </div>
                <div className="text-sm text-white truncate">{link.value}</div>
              </div>
              <ArrowUpRight
                size={14}
                className="text-zinc-700 group-hover:text-violet-400 ml-auto shrink-0 transition-colors duration-300"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="mailto:dhaneshrao12@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full transition-all duration-300 text-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <Mail size={16} />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
