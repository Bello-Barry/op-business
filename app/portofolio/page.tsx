import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col gap-20 md:gap-28 px-6 md:px-16 py-10">
        <Hero />

        {/* Skills section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Encryption/Services section */}
        <section id="services" className="bg-[#1e1e2f] py-10 rounded-lg shadow-lg">
          <Encryption />
        </section>

        {/* Projects section */}
        <section id="projects">
          <Projects />
        </section>
      </div>
    </main>
  );
}
