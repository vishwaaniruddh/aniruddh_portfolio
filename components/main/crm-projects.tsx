"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { CRM_PROJECTS } from "@/constants";

export const CrmProjects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      id="crm-projects"
      className="flex flex-col items-center justify-center py-20 px-10 bg-[#030014]/50"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
      >
        CRM & ERP Systems
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 text-center max-w-3xl mb-16 text-sm"
      >
        Enterprise-level CRM and ERP solutions built for complex business workflows, 
        large-scale data management, and real-time monitoring systems.
      </motion.p>
      
      {/* Demo credentials notice */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-[#0300145e] border border-[#7042f861] rounded-lg p-6 mb-10 max-w-2xl"
      >
        <h3 className="text-xl font-semibold text-white mb-3 text-center">Demo Access Available</h3>
        <p className="text-gray-300 text-center mb-2 text-sm">
          Project Management Portal demo credentials:
        </p>
        <div className="flex justify-center gap-6 text-purple-400 font-mono text-sm">
          <span>Username: <span className="text-cyan-400">admin</span></span>
          <span>Password: <span className="text-cyan-400">AVav@@2026</span></span>
        </div>
      </motion.div>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {CRM_PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
