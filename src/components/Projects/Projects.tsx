"use client";

import { projectOne } from "@/data/images";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import projects from "@/data/project.json";

export default function Project() {
  return (
    <section className="w-full relative bg-[#1B1E24] py-20" id="project">
      <div className="container w-full mx-auto px-4">
        <motion.p
          className="uppercase text-white text-[1.5rem] font-normal mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.p>

        <motion.h2
          className="text-center font-extrabold capitalize text-white text-3xl sm:text-4xl md:text-[4rem] mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Animated grid container */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Each ProjectCard wrapped in motion.div */}
          {projects.map((_, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectCard
                title={_.title}
                image={_.image}
                liveUrl={_.uri}
                description={_.desc}
                stack={_.tech.split(",")}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
