import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import ContactUs from "@/components/ContactUs/ContactUs";
import Education from "@/components/Education/Education";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import LanguageSwitch from "@/components/LanguageSwitch";
import Project from "@/components/Projects/Projects";
import WorkStepper from "@/components/WorkStepper/WorkStepper";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* <LanguageSwitch /> */}

        <Header />
        <HeroBanner />
        <About />
        <Education />
        <WorkStepper />
        <Project />
        <Blog />
      </main>
      <ContactUs />
    </div>
  );
}
