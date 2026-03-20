"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    })
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
      >
        Websites & Web Applications
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 text-center max-w-3xl mb-16 text-sm"
      >
        E-commerce platforms, corporate websites, and specialized web applications 
        built for clients across FinTech, HealthTech, Fashion, and Media industries.
      </motion.p>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {PROJECTS.map((project, index) => (
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
