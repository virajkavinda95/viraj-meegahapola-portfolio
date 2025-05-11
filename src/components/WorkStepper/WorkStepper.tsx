"use client";

import Image from "next/image";
import qd from "../../../public/webImages/qd.webp";
import ahds from "../../../public/webImages/ahds.webp";
import hrc from "../../../public/webImages/hrc.webp"; // Update your image imports
import { motion } from "framer-motion";

interface Step {
  title: string;
  company: string;
  description: string[];
  date: string;
  image: string;
}

const steps: Step[] = [
  {
    title: "Full-Stack Developer",
    company: "Quick Digital Solutions - Dubai, UAE",
    description: [
      "Provided technical support and troubleshooting for end-users, ensuring smooth functionality and optimal performance of deployed applications.",
      "Collaborated with cross-functional teams to design and integrate multiple systems through robust APIs, enhancing system interoperability and efficiency.",
      "Integrated third-party services, including Bitrix24 and Slack API, to enhance project functionality and user experience.",
      "Managed cloud infrastructure with hands-on experience in Digital Ocean Droplets and proficient use of Linux commands for server deployment, configuration, and maintenance.",
      "Administered databases, ensuring data consistency, optimizing queries, and performing regular backups and security checks.",
      "Managed cPanel for efficient website deployment, domain management, and server configurations.",
    ],
    date: "July 2024 - Present",
    image: qd,
  },
  {
    title: "Software Engineer",
    company: "Apple Holidays Destinations (PVT) LTD, Colombo, LK",
    description: [
      "Participated in regular meetings with stakeholders to discuss project progress and plan future roadmap items, aligning development with business objectives.",
      "Performed debugging and troubleshooting using JIRA and GitLab, ensuring rapid identification and resolution of software issues.",
      "Conducted testing and optimization of existing programs to improve performance, scalability,and functionality.",
      "Authored comprehensive technical documentation detailing system architecture, development processes, and user guidelines.",
      "Optimized code performance using Python, enhancing application speed and scalability and Implemented security protocols, including OAuth 2.0, to ensure robust authentication and authorization mechanisms.",
      "Performed data analysis to generate actionable insights, supporting data-driven decisionmaking and strategic initiatives.",
    ],
    date: "Feb 2023 - Feb 2024",
    image: ahds,
  },
  {
    title: "Associate Software Engineer",
    company: "HealthReconConnect (PVT) LTD - Colombo, LK",
    description: [
      "Analyzed user needs and developed software solutions to meet requirements while adhering to established quality standards.",
      "Produced comprehensive documentation, including application features, processes, dependencies, and installation instructions.",
      "Performed database management tasks, including writing optimized SQL queries and stored procedures for enhanced performance.",
      "Collaborated with business analysts to gather customer requirements and translate them into detailed technical specifications.",
      "Worked closely with software engineers to design, develop, and implement efficient software solutions.",
      "Wrote clean, well-structured, and testable code to ensure maintainability and scalability.",
    ],
    date: "Apr 2022 - Feb 2023",
    image: hrc,
  },
  {
    title: "Trainee Software Engineer",
    company: "HealthReconConnect (PVT) LTD - Colombo, LK",
    description: [
      "Collaborated with software engineers to develop and implement software solutions.",
      "Wrote clean, well-structured, and testable code to ensure maintainability and scalability.",
      "Developing software solutions using python scripts, power automate tool.",
      "Analyzed user needs and developed software solutions to meet requirements while adhering to established quality standards.",
    ],
    date: "Oct 2021 - Apr 2022",
    image: hrc,
  },
];

export default function WorkStepper() {
  return (
    <section className="relative w-full bg-[#1B1E24] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="uppercase text-white text-[1.5rem] font-normal mb-4 text-center">
          What I Have Done So Far
        </p>
        <h2 className="text-center font-extrabold capitalize text-white text-3xl sm:text-4xl md:text-[4rem] mb-20">
          Work Experience
        </h2>

        <div className="relative flex flex-col items-center">
          {/* Animated Center vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute w-1 bg-gray-300 dark:bg-gray-700 top-0 left-1/2 transform -translate-x-1/2 z-0"
          />

          <ol className="relative z-10 flex flex-col gap-24 w-full">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative flex justify-between items-center w-full"
                >
                  {/* Left Side */}
                  {isLeft ? (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="flex justify-end w-1/2 pr-8 relative"
                    >
                      {/* Card */}
                      <div className="bg-[#104572] p-6 rounded-lg shadow-lg max-w-xs text-right relative">
                        <h3 className="text-xl text-left font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm text-left text-white font-light">
                          {step.company}
                        </p>
                        <ul className="text-left text-sm pt-2 list-disc list-inside text-white font-light leading-tight">
                          {Array.isArray(step.description) &&
                            step.description.map((_v, idx) => (
                              <li key={idx} className="mt-2">
                                {_v}
                              </li>
                            ))}
                        </ul>

                        {/* Left arrow */}
                        <div className="absolute top-1/2 right-[-8px] transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-[#104572]" />
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex justify-end w-1/2 pr-8">
                      {/* Date */}
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-white text-xl"
                      >
                        {step.date}
                      </motion.div>
                    </div>
                  )}

                  {/* Center Image */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center justify-center w-16 h-16 bg-white rounded-full ring-4 ring-white dark:ring-gray-900 z-10"
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={60}
                      height={60}
                      className="object-contain rounded-full"
                    />
                  </motion.div>

                  {/* Right Side */}
                  {!isLeft ? (
                    <motion.div
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="flex justify-start w-1/2 pl-8 relative"
                    >
                      {/* Card */}
                      <div className="bg-[#104572] p-6 rounded-lg shadow-lg max-w-xs text-left relative">
                        <h3 className="text-xl text-left font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm text-left text-white font-light">
                          {step.company}
                        </p>
                        <ul className="text-left text-sm pt-2 list-disc list-inside text-white font-light leading-tight">
                          {Array.isArray(step.description) &&
                            step.description.map((_v, idx) => (
                              <li key={idx} className="mt-2">
                                {_v}
                              </li>
                            ))}
                        </ul>
                        {/* Right arrow */}
                        <div className="absolute top-1/2 left-[-8px] transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#104572]" />
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex justify-start w-1/2 pl-8">
                      {/* Date */}
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-white text-xl"
                      >
                        {step.date}
                      </motion.div>
                    </div>
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
