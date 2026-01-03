"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Database, Globe, Trophy } from "lucide-react";

const projects = [
  {
    title: "LeetCode Practice Tracker",
    description: "Comprehensive tracking system for 181+ coding problems across multiple platforms with progress analytics and performance metrics.",
    tech: ["Python", "Data Analysis", "GitHub"],
    icon: Code2,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "AI/ML Data Analysis Dashboard",
    description: "Interactive dashboard for data analysis and visualization using Streamlit, NumPy, Pandas, and advanced ML techniques.",
    tech: ["Python", "Streamlit", "NumPy", "Pandas", "ML"],
    icon: Database,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Weather app",
    description: "Collection of optimized solutions and algorithms for competitive programming challenges across CodeChef, LeetCode, and HackerRank.",
    tech: ["C++", "Java", "Python", "DSA"],
    icon: Trophy,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Full-Stack Web Development Portfolio",
    description: "Modern, responsive portfolio website showcasing projects, skills, and achievements with cutting-edge UI/UX design.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    icon: Globe,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-white/5 border border-white/20 ${project.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full glass border border-white/20 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

