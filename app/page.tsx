import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projet/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/competences/skills";
import Grid from "@/components/grid";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Appear, FadeIn, FadeOut, ZoomIn, ZoomOut } from "@/components/animation/Basics";
import Homepage from "./application/page";
import Intro from "@/components/intro";
import FadeI from "@/components/compos/FadeI";
import Services from "@/components/compos/Services";
//import Background from "@/components/background";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 gap-16 bg-gray-50 overflow-hidden">
      {/* Thème Switcher */}
      <div className="fixed z-50 top-4 right-4">
        <ThemeSwitcher />
      </div>

      {/* En-tête avec fond dégradé */}
      <div className="w-full h-20 bg-gradient-to-r border-b-2 border-indigo-600">
        
      </div>

      {/* Section d'introduction avec animation */}
      <FadeI className="max-w-3xl text-center">
        <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Faites votre présence en ligne une réalité avec nous !
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700">
          Nous sommes un groupe de développeurs à l'intersection du design et de la technologie moderne.
        </p>
      </FadeI>

      {/* Section Services avec animation */}
      <ZoomIn delay={3} scale={1.2} duration={0.5}>
        <Services />
      </ZoomIn>

      {/* Section d'accueil ou autres composants */}
      <div className="transform translate-x-0">
        <Homepage />
      </div>

      {/* Sections supplémentaires (commentées pour l'instant) */}
      {/* 
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact /> 
      */}

      {/* Divider pour séparer les sections */}
      <SectionDivider />
    </main>
  );
      }
