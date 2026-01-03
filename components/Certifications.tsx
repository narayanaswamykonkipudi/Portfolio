"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7B56A196A960EE08E14202D4F0E45E53A7E9C54C1EBBB69AE252F94C0A1F5E43",
  },
  {
    title: "Programming for Everybody (Python)",
    issuer: "University of Michigan",
    date: "Jul 2025",
    verifyUrl: "https://coursera.org/share/52a997f5f0bfb489ee3b9961f7e16233",
  },
  {
    title: "C++ Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "Oct 2025",
    hours: "42 hours",
    verifyUrl: "https://www.credly.com/badges/ddd63bf8-f28d-424e-bb53-fe9af014ed84",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="pt-6 relative z-10">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-yellow-400/20 border border-yellow-400/30">
                      <Award className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-emerald-400 mb-2 group-hover:text-yellow-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-300">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                      {cert.hours && <span className="ml-2">• {cert.hours}</span>}
                    </div>
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xs">Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
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

