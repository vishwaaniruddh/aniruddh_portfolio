"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center px-10 md:px-20 py-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl relative z-10"
      >
        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 text-gray-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">💻</div>
              <p className="text-sm leading-relaxed">
                I&apos;m a full stack developer with a strong focus on backend architecture, 
                performance, and scalability. I build systems that handle large datasets, 
                real-time monitoring, and complex business workflows.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">🚀</div>
              <p className="text-sm leading-relaxed">
                I&apos;ve worked on applications managing 20–30 million records, built APIs 
                using Fastify and Laravel, and designed database structures optimized for speed and reliability.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">🌐</div>
              <p className="text-sm leading-relaxed">
                My experience spans across multiple industries including FinTech, HealthTech, 
                E-commerce, and Media, delivering enterprise-level solutions for clients worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">⚡</div>
                <h3 className="text-xl font-semibold text-white">Core Expertise</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 text-xl group-hover:scale-125 transition-transform">▹</span>
                  <span className="text-sm group-hover:text-white transition-colors">Large-scale data handling (20-30M+ records)</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 text-xl group-hover:scale-125 transition-transform">▹</span>
                  <span className="text-sm group-hover:text-white transition-colors">REST API development (Node.js, Fastify, PHP, Laravel)</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 text-xl group-hover:scale-125 transition-transform">▹</span>
                  <span className="text-sm group-hover:text-white transition-colors">Database optimization (PostgreSQL, MySQL)</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 text-xl group-hover:scale-125 transition-transform">▹</span>
                  <span className="text-sm group-hover:text-white transition-colors">E-commerce platforms & payment integration</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 text-xl group-hover:scale-125 transition-transform">▹</span>
                  <span className="text-sm group-hover:text-white transition-colors">Real-time monitoring (Python, Flask)</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 text-xl group-hover:scale-125 transition-transform">▹</span>
                  <span className="text-sm group-hover:text-white transition-colors">Enterprise solutions & RBAC systems</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 text-xl group-hover:scale-125 transition-transform">▹</span>
                  <span className="text-sm group-hover:text-white transition-colors">FinTech & HealthTech compliance</span>
                </li>
              </ul>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">10+</div>
                <div className="text-xs text-gray-400 mt-1">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500 transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">30M+</div>
                <div className="text-xs text-gray-400 mt-1">Records Managed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
