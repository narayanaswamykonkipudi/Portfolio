"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Trophy, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

function Counter({ end, duration = 2, suffix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const currentCount = progress * end;
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
}

const stats = [
  { icon: Code, value: 181, label: "Coding Problems", suffix: "+" },
  { icon: GraduationCap, value: 9.23, label: "CGPA", suffix: "/10", decimals: 2 },
  { icon: Trophy, value: 930, label: "CodeChef Rating", suffix: "+" },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 blur-xl opacity-50 animate-pulse"></div>
                <div className="relative rounded-full p-1 glass border-2 border-emerald-400/50">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400/20 to-teal-500/20">
                    <Image
                      src="/nithinProfile.jpg"
                      alt="Narayana Swamy K"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                NARAYANA SWAMY K
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Aspiring Software Engineer & AI/ML Practitioner
            </motion.p>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Tuni, Andhra Pradesh, India
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Button asChild size="lg" className="gradient-glow">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="glass rounded-lg p-6 gradient-glow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

