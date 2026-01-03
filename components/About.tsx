"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-emerald-400">
                    Objective
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Aspiring software engineer and AI/ML practitioner pursuing B.Tech in 
                    Artificial Intelligence and Machine Learning. Strong interest in competitive 
                    programming and algorithmic problem-solving. Aiming to deepen data science/ML 
                    expertise through real-world projects.
                  </p>
                  <div className="pt-4 space-y-2">
                    <p className="text-gray-300">
                      <span className="text-emerald-400 font-semibold">Email:</span>{" "}
                      <a
                        href="mailto:konkipudinarayanaswamy@gmail.com"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        konkipudinarayanaswamy@gmail.com
                      </a>
                    </p>
                    <p className="text-gray-300">
                      <span className="text-emerald-400 font-semibold">Location:</span>{" "}
                      Tuni, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

