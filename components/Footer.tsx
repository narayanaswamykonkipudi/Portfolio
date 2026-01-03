"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} NARAYANA SWAMY K. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

