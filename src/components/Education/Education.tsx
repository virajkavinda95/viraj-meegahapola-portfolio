"use client";

import EducationCard from "./components/EducationCard";

import cal from "../../../public/webImages/cal.webp";
import kul from "../../../public/webImages/kul.webp";
import pearson from "../../../public/webImages/pearson.webp";
import esoft from "../../../public/webImages/esoft.webp";

export default function Education() {
  return (
    <section className="relative w-full py-12 bg-[#1B1E24]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="w-full mb-12">
          <h2 className="text-center font-extrabold capitalize text-white text-3xl sm:text-4xl md:text-[4rem]">
            Education
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
          <EducationCard
            date="2021-2023"
            calendar={cal}
            uniLogo={kul}
            title="BSc (Hons) in Computer Science (Software Engineering)"
            lowerText="Kingston University - London, United Kingdom"
          />
          <EducationCard
            date="2019-2021"
            calendar={cal}
            uniLogo={pearson}
            title="Higher National Diploma in Software Engineering"
            lowerText="Pearson College - London, United Kingdom"
          />
          <EducationCard
            date="2015-2016"
            calendar={cal}
            uniLogo={esoft}
            title="Diploma in Information and Communication Technology"
            lowerText="Esoft Metro Campus - Colombo, Sri Lanka"
          />
        </div>
      </div>
    </section>
  );
}
