"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "OCI Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Advanced generative AI implementation on Oracle Cloud Infrastructure",
  },
  {
    title: "OCI Data Science Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Machine learning and data science workflows on OCI",
  },
  {
    title: "OCI GenAI Foundations",
    issuer: "Oracle",
    date: "2025",
    description: "Foundational concepts in generative AI and large language models",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-medium text-violet-400 tracking-[0.2em] uppercase mb-4">
            Certifications
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
            Validated expertise.
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group p-6 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:border-violet-500/20 hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-500/15 transition-colors duration-500">
                <Award size={18} className="text-violet-400" />
              </div>
              <h4 className="text-white font-semibold mb-1.5 tracking-tight">
                {cert.title}
              </h4>
              <p className="text-sm text-zinc-500 mb-3">{cert.description}</p>
              <div className="text-xs text-zinc-600">
                {cert.issuer} · {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
