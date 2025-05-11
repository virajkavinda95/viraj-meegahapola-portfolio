"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./components/ExperienceCard";

export default function About() {
  return (
    <div className="relative w-full bg-[#1B1E24] py-12s" id="about">
      {/* Background Circle */}
      <motion.div
        className="absolute top-20 right-8 sm:right-40 w-32 h-32 sm:w-55 sm:h-55 blur-[5rem] bg-[#007EE5] rounded-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Content */}
      <section className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="top_Content mb-12">
            <motion.h2
              className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              A bit <span className="text-[#007EE5]">about me</span>
            </motion.h2>

            <motion.p
              className="text-white text-justify leading-relaxed mt-4 text-base sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              I am a highly motivated software engineering professional with
              extensive experience in the development, deployment, and
              maintenance of web, mobile, and desktop applications. Proficient
              in leveraging a diverse set of technologies, including Python,
              Laravel, Ajax, JQuery, JavaScript, HTML, CSS, and SQL, I have a
              strong background in delivering high-quality software solutions.
            </motion.p>
            <br />
            <motion.p
              className="text-white text-justify leading-relaxed mt-4 text-base sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I have successfully contributed to team-oriented software
              development projects, employing agile methodologies to ensure the
              efficient and timely delivery of solutions. My passion lies in
              creating innovative and effective software that aligns with client
              requirements and delivers tangible value.
            </motion.p>
          </div>

          <div className="lower_Content w-full flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 mt-8">
            <ExperienceCard title="4+" text="Years Experience" />

            <ExperienceCard title="20+" text="Projects Completed" />
            <ExperienceCard title="5+" text="Stacks Knowledge" />
          </div>
        </div>
      </section>
    </div>
  );
}
