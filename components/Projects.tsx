"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Database, Globe, Trophy, CloudSun } from "lucide-react";

const projects = [
  {
    title: "AI Study Assistant (RAG System)",
    description:
      "Built an end-to-end RAG pipeline using LangChain and FAISS for context-aware Q&A on PDFs. Integrated LLaMA 3.3 via Groq API to generate MCQs with answers and explanations, and automated daily quiz emails.",
    tech: ["Python", "LangChain", "FAISS", "LLaMA 3", "Groq API", "HuggingFace", "Streamlit"],
    icon: Code2,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
    github: "https://github.com/narayanaswamykonkipudi/AI-Study-Assistant",
    demo: "#",
  },
  {
    title: "AI Resume Screener (ATS Analyzer)",
    description:
      "Developed an NLP-based resume scoring system using TF-IDF and cosine similarity. Applied spaCy for keyword analysis and deployed with an interactive Plotly dashboard on Streamlit.",
    tech: ["Python", "scikit-learn", "spaCy", "TF-IDF", "NLP", "Streamlit", "Plotly"],
    icon: Database,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20",
    github: "https://github.com/narayanaswamykonkipudi",
    demo: "#",
  },
  {
    title: "Atmos Weather App",
    description:
      "Built a Flask-based weather app with real-time OpenWeatherMap API data, 24-hour & 5-day forecasts, SVG charts, unit conversion, and search history tracking.",
    tech: ["Python", "Flask", "OpenWeatherMap API", "HTML", "CSS"],
    icon: CloudSun,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-orange-500/20",
    github: "https://github.com/narayanaswamykonkipudi/Weather-App",
    demo: "#",
  },
  {
    title: "Full-Stack Portfolio Website",
    description:
      "Designed a modern portfolio website showcasing projects and skills with responsive UI and smooth animations.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    icon: Globe,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/20",
    github: "https://github.com/narayanaswamykonkipudi/Portfolio",
    demo: "https://narayanaswamyk-portfolio.vercel.app/",
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
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
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

