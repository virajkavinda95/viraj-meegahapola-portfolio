"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import BlogCard from "./components/BlogCard";

const Blog = () => {
  return (
    <section className="w-full relative bg-[#1B1E24] py-20" id="">
      <div className="container w-full mx-auto px-4">
        {/* <motion.h2
          className="text-center font-extrabold capitalize text-white text-3xl sm:text-4xl md:text-[4rem] mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Blogs
        </motion.h2> */}

        {/* Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard image="/" title="/" desc="/" tag="/" />
          <BlogCard image="/" title="/" desc="/" tag="/" />
          <BlogCard image="/" title="/" desc="/" tag="/" />
        </div> */}

        <hr className="mx-auto w-full sm:w-3/4 md:w-[600px] border-t border-[#9B9B9B] mb-10" />

        <div className="w-full flex justify-center items-center px-4">
          <a
            href="https://www.linkedin.com/in/viraj-meegahapola-4ba3a623a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm sm:text-base text-white font-semibold cursor-pointer bg-gradient-to-r from-black to-[#007EE5] hover:brightness-110 transition-all duration-300 border-2 border-[#007EE5] rounded-full px-5 py-2 sm:px-6 sm:py-3 items-center gap-2"
          >
            Send me a LinkedIn Message
            <MdOutlineArrowRightAlt className="text-lg sm:text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
