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
        eyebrow="2b-sk"
        title="Nous vous aidons à identifier, explorer et répondre à de nouvelles opportunités."
        className=" font-semibold  bg-gradient-to-r from-purple-500 to-cyan-500 "
      >
        <p >
          nous sommes à l’écoute de vos besoins et de vos attentes. Nous vous garantissons un travail de qualité, un respect des délais, et une satisfaction totale.
        </p>
      </SectionIntro>
      <Container className="mt-2">
      <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes service
      </h1>
      </div>
      
      <div className="border-2  border-indigo-600 shadow-lg p-2 m-4 ">
        <ProjectCard
          src="/ORDINATEUR.jpeg"
          title= "Site web moderne"
          description="nous concevons et réalisons des sites web et des applications mobiles à la fois esthétiques, fonctionnels, et ergonomiques. Nous utilisons des frameworks performants et des langages de programmation modernes, tels que React, Next.js, Remix, Node.js, MongoDB, Firebase, etc."
            />
            </div>
        <div className="border-2  border-indigo-600 shadow-lg p-2 m-4 ">
        <ProjectCard
          src="/OIG2.png"
          title= "Application mobile"
          description=" Nous avons une équipe de développeurs qualifiés et experts dans les dernières des frameworks d'applications comme react-native zustend et firebase  "
          
        />
        </div>
        <div className="border-2  border-indigo-600 shadow-lg p-2 m-4 ">
        <ProjectCard
          src="/MARKETING.jpeg"
          title= "Formation et conseil"
          description="nous vous formons et vous conseillons sur les aspects techniques et stratégiques du développement web et du marketing digital. Nous vous transmettons les connaissances et les compétences nécessaires pour gérer et faire évoluer vos projets numériques."
          
        />
        </div>
     
      <div className="border-2  border-indigo-600 shadow-lg p-2 m-4 ">
      <ProjectCard
          src="/SEO.jpeg"
          title= "Marketing et référencement"
          description="nous vous aidons à optimiser la visibilité et le trafic de vos sites web et de vos applications mobiles. Nous mettons en place des stratégies de marketing digital efficaces, telles que le SEO, le SEA, le SMO, le content marketing, l’email marketing, etc. ."
          
        />
      </div>
   
         
      </Container>
    </>
  );
};

export default Services;
