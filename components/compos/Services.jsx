import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeI from "./FadeI";
import StylizedImage from "./StylizedImage";
import imageLaptop from "@/images/laptop.jpg";
import List, { ListItem } from "./List";
import ProjectCard from "../sub/ProjectCard";
const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 "
      >
        <p >
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-8">
      <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes service
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/gestion_des_clien.png"
          title= "Web development"
          description="We specialise in crafting beautiful, high quality marketing pages.
            The rest of the website will be a shell that uses lorem ipsum
            everywhere"
            />
        <ProjectCard
          src="/ventes_des_articles_en_ligne.png"
          title= "Application development"
          description=" We have a team of skilled developers who are experts in the latest
          app frameworks like Angular 1 and Google Web Toolkit "
          
        />
        <ProjectCard
          src="/Agence_immobilière_en_ligne.png"
          title= "marketing digital"
          description="C’est une agence immobilière en ligne qui possède des fonctionnalités très intéressantes, telles que la recherche rapide de biens immobiliers et la possibilité pour un particulier de publier des maisons à vendre ou à louer. Pour en savoir plus, vous pouvez visiter le site web de l’agence ."
          
        />
      </div>
    </div>
         
      </Container>
    </>
  );
};

export default Services;
