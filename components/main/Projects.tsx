import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <>
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
    </div>
      <div className="border-2  border-indigo-600 shadow-lg p-2 m-4 ">

        <ProjectCard
          src="/gestion_des_clien.png"
          title= "gestion_des_clien"
          description=
            "Cette application de gestion de clients est un clone de l’application de tableau de bord Next.js 14, créée pour démontrer mes compétences dans cette technologie"
            />
         </div>
        <div className="border-2  border-indigo-600 shadow-lg p-2 m-4 ">
        <ProjectCard
          src="/ventes_des_articles_en_ligne.png"
          title= "ventes_des_articles_en_ligne"
          description= "C’est un projet de site de vente d’articles de mode en ligne. Il y a deux manières de s’inscrire : en tant que client ou en tant que vendeur. Bien sûr, ne mettez pas vos articles car il s’agit juste d’une application pour démontrer mes compétences la voicie "
          
        />
        </div>
    <div className="border-2  border-indigo-600 shadow-lg p-2 m-4 ">
        <ProjectCard
          src="/Agence_immobilière_en_ligne.png"
          title= "Agence_immobilière_en_ligne"
          description="C’est une agence immobilière en ligne qui possède des fonctionnalités très intéressantes, telles que la recherche rapide de biens immobiliers et la possibilité pour un particulier de publier des maisons à vendre ou à louer. Pour en savoir plus, vous pouvez visiter le site web de l’agence ."
          
        />
       </div>
       </>
  );
};

export default Projects;