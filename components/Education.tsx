"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Rowan University",
    location: "New Jersey",
    period: "Sep 2023 — May 2025",
  },
  {
    degree: "Bachelor of Technology in ECE",
    school: "CBIT",
    location: "Hyderabad, India",
    period: "Aug 2018 — May 2022",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-medium text-violet-400 tracking-[0.2em] uppercase mb-4">
            Education
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
            Academic foundation.
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:border-white/[0.1] transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-500/15 transition-colors duration-500">
                <GraduationCap size={18} className="text-violet-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1 tracking-tight">
                {edu.degree}
              </h4>
              <p className="text-violet-300/80 font-medium mb-3">
                {edu.school}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
