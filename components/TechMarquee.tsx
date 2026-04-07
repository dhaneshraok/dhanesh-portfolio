"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  "Java",
  "Spring Boot",
  "Python",
  "Go",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "Cassandra",
  "Docker",
  "Kubernetes",
  "AWS",
  "Terraform",
  "gRPC",
  "GraphQL",
  "LangChain",
  "FAISS",
  "OpenTelemetry",
  "Grafana",
  "Prometheus",
  "Flutter",
];

export default function TechMarquee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="py-16 overflow-hidden relative"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      {/* Row 1 */}
      <div className="flex animate-marquee whitespace-nowrap mb-4">
        {[...techStack, ...techStack].map((tech, i) => (
          <span
            key={`a-${i}`}
            className="mx-6 text-xl md:text-2xl font-bold text-white/[0.04] hover:text-white/[0.12] transition-colors duration-500 select-none cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Row 2 - reversed */}
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 40s linear infinite reverse" }}
      >
        {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map(
          (tech, i) => (
            <span
              key={`b-${i}`}
              className="mx-6 text-xl md:text-2xl font-bold text-white/[0.04] hover:text-white/[0.12] transition-colors duration-500 select-none cursor-default"
            >
              {tech}
            </span>
          )
        )}
      </div>
    </motion.div>
  );
}
