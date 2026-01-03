"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    institution: "Aditya University – Surampalem",
    degree: "B.Tech AIML",
    period: "2024–2028",
    cgpa: "9.23/10",
    icon: GraduationCap,
  },
  {
    institution: "Sri Chaitanya Jr College – Tuni",
    degree: "MPC",
    period: "2022–2024",
    cgpa: "8.23/10",
    icon: Award,
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-emerald-400/10 border border-emerald-400/30">
                        <Icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-semibold text-emerald-400">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-300">{edu.institution}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="w-4 h-4" />
                            <span className="text-emerald-400 font-semibold">
                              CGPA: {edu.cgpa}
                            </span>
                          </div>
                        </div>
                      </div>
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

