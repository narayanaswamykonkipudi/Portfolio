"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "SQL (MySQL)", "C", "HTML", "CSS (Basic)"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "PyCharm", "Jupyter Notebook"],
  },
  {
    title: "Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
  },
  {
    title: "Exploring",
    skills: ["Data Science", "Machine Learning", "Advanced DSA"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 rounded-full glass border border-emerald-400/30 text-sm text-gray-300 gradient-glow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          borderColor: "rgba(16, 185, 129, 0.6)",
                          boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

