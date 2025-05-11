"use client";

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  const year = new Date();

  return (
    <footer className="w-full bg-[#1b1e24] pt-28 relative z-10" id="contact">
      <div className="absolute top-32 right-[300px] w-32 h-32 sm:w-55 sm:h-55 blur-[5rem] bg-[#007EE5] -z-10 rounded-full"></div>
      <div className="max-w-6xl w-full mx-auto bg-black px-20 pt-20 z-20 border-t border-[#007EE5]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Bio Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-white text-lg font-semibold">
              Viraj Meegahapola
            </h3>
            <p className="text-white text-sm">
              Software Engineer specializing in building scalable solutions and
              transforming business challenges into efficient technical
              implementations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-1 text-sm text-white">
              <li>
                <Link href="#" className="hover:text-[#007EE5]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#007EE5]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#007EE5]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#007EE5]">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-lg font-semibold">Connect</h3>
            <div className="flex flex-row gap-4">
              <Link
                href="https://www.linkedin.com/in/viraj-meegahapola-4ba3a623a/"
                className="text-[#9CA3AF] text-md hover:text-[#007EE5] rounded-full p-3 bg-[#1E293B]"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/virajkavinda95?tab=repositories"
                className="text-[#9CA3AF] text-md hover:text-[#007EE5] rounded-full p-3 bg-[#1E293B]"
              >
                <FaGithub />
              </Link>
              <Link
                href="#"
                className="text-[#9CA3AF] text-md hover:text-[#007EE5] rounded-full p-3 bg-[#1E293B]"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-[#007EE5] pb-2 pt-1 text-left">
          <span className="text-white text-[12px] font-light">
            &copy; {new Date().getFullYear()} Viraj Meegahapola | All Rights
            Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
