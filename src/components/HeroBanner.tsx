"use client";

import bgOne from "../../public/webImages/bgOne.webp";
import hero from "../../public/webImages/hero.webp";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full top-0 pt-24 overflow-hidden min-h-screen">
      {/* Background Image with opacity */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgOne}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <div className="flex flex-row items-center justify-center md:justify-start gap-2">
            {/* <div className="flex flex-col items-center">
              <div className="w-20 h-2 rounded-full bg-blue-500"></div>
              <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent mt-1"></div>
            </div> */}

            <div>
              <h1 className="text-xl md:text-[4.5rem] font-bold leading-tight text-white">
                Hi! I&apos;m <span className="text-[#007EE5]">Viraj</span>{" "}
                <br />
                <span className="text-white">Meegahapola</span>
              </h1>

              <h2 className="text-2xl md:text-[4.5rem] font-semibold text-[#007EE5]">
                Software Engineer
              </h2>
            </div>
          </div>

          <p className="text-base md:text-lg text-white">
            My favorite tech includes PHP (Laravel), Frontend (Next.js),
            Database (MySQL), and Cloud (DigitalOcean).
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={hero}
            alt="Hero Image"
            className="w-5xl h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
