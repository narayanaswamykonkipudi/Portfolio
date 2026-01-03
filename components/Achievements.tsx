"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Code, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "Coding Problems",
    value: "181+",
    description: "LeetCode, CodeChef, GFG, HackerRank",
    color: "text-blue-400",
    link: "https://codolio.com/profile/BuildWithNithin",
  },
  {
    icon: Trophy,
    title: "CodeChef Rating",
    value: "930+",
    description: "Starters 204 Rank 14,488 (Sep 2025)",
    color: "text-yellow-400",
    link: "https://www.codechef.com/users/narayanaswamy3",
  },
  {
    icon: Award,
    title: "Codolio Global Rank",
    value: "#15,615",
    description: "C Score | 3 awards",
    color: "text-purple-400",
  },
  {
    icon: Star,
    title: "HackerRank",
    value: "3-Star",
    description: "C++, C, Python",
    color: "text-emerald-400",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const CardWrapper = achievement.link ? motion.a : motion.div;
            const wrapperProps = achievement.link
              ? {
                  href: achievement.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "block",
                }
              : {};
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardWrapper {...wrapperProps}>
                  <Card
                    className={`h-full text-center gradient-glow ${
                      achievement.link ? "cursor-pointer hover:scale-105 transition-transform" : ""
                    }`}
                  >
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center space-y-4">
                        <div className={`p-4 rounded-full bg-white/5 border border-white/20 ${achievement.color}`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-emerald-400 mb-2">
                            {achievement.value}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-300 mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">31+</div>
                  <div className="text-sm text-gray-400 mt-1">Active Days</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">181+</div>
                  <div className="text-sm text-gray-400 mt-1">Problems Solved</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

