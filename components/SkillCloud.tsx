"use client";
import { motion } from "framer-motion";

const skills = [
    { name: "React/Next.js", color: "bg-blue-500" },
    { name: "Java Spring", color: "bg-green-600" },
    { name: "AWS", color: "bg-orange-400" },
    { name: "TypeScript", color: "bg-blue-400" },
    { name: "Python/GenAI", color: "bg-purple-500" },
    { name: "PostgreSQL", color: "bg-indigo-500" },
];

export const SkillCloud = () => (
    <div className="flex flex-wrap gap-3 justify-center max-w-xl mx-auto">
        {skills.map((skill, i) => (
            <motion.div
                key={skill.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className={`px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 text-sm font-semibold cursor-default`}
            >
                <span className={`w-2 h-2 inline-block rounded-full mr-2 ${skill.color}`} />
                {skill.name}
            </motion.div>
        ))}
    </div>
);