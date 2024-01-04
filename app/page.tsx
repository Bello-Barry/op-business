//import About from "@/components/about/about";
//import Contact from "@/components/contact/contact";
//import Experience from "@/components/experience/experience";
//import Intro from "@/components/intro";
//import Projects from "@/components/projet/projects";
import SectionDivider from "@/components/section-divider";
//import Skills from "@/components/competences/skills";
import Grid from "@/components/grid";
import ThemeSwitcher from "@/components/ThemeSwitcher"
import { Appear, FadeIn, FadeOut, ZoomIn, ZoomOut } from "@/components/animation/Basics"
import Homepage from "./application/page"
import Intro from "@/components/intro";
import FadeI from "@/components/compos/FadeI";
import Services from "@/components/compos/Services";

export default function Home() {
  return (
    <main  className=' flex min-h-screen overflow-hidden flex-col items-center justify-center p-3 gap-16 max-w-5xl mx-auto'>
       
           <div className="fixed z-50 h-9 w-9 rounded-full top-1 right-0 ">
		     <span ><ThemeSwitcher/></span>
		  </div>
	  
      <Appear delay={3}   duration={5} >
	  

				<Intro/>

			</Appear>
			
			
			<ZoomIn delay={3}  scale={7} duration={5} >
				<p className='text-lg font-display'>
					
						<small>by</small> <strong>Op&business </strong>
					
				</p>
				
			</ZoomIn>

			<FadeI className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Faites votre présence en ligne une réalité avec nous !
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Nous sommes un groupe de développeurs travaillant à l'intersection du disign  et la technologie moderne.
          </p>
          </FadeI>
		  <ZoomIn delay={3}  scale={7} duration={5} >
		  <Services />
		  </ZoomIn>
      <div className="transform-translate-x-1/2">
	  <Homepage />
	  </div>
	
    </main>
  );
}
//* <About />
//* <Projects />
//* <Skills />
//* <Experience />
//* <Contact />