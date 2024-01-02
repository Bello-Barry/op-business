import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Agence_immobilière_en_ligne from "@/public/Agence_immobilière_en_ligne.png";
import ventes_des_articles_en_ligne from "@/public/ventes_des_articles_en_ligne.png";
import gestion_des_clien from "@/public/gestion_des_clien.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Services",
    hash: "#Services",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Agence_immobilière_en_ligne",
    description:
      "C’est une agence immobilière en ligne qui possède des fonctionnalités très intéressantes, telles que la recherche rapide de biens immobiliers et la possibilité pour un particulier de publier des maisons à vendre ou à louer. Pour en savoir plus, vous pouvez visiter le site web de l’agence https://ndakonamobi.onrender.com/.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript"],
    imageUrl: Agence_immobilière_en_ligne,
  },
  {
    title: "ventes_des_articles_en_ligne",
    description:
      "C’est un projet de site de vente d’articles de mode en ligne. Il y a deux manières de s’inscrire : en tant que client ou en tant que vendeur. Bien sûr, ne mettez pas vos articles car il s’agit juste d’une application pour démontrer mes compétences la voicie https://commerce-next-coral.vercel.app.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind",],
    imageUrl: ventes_des_articles_en_ligne,
  },
  {
    title: "gestion_des_clien",
    description:
      "Cette application de gestion de clients est un clone de l’application de tableau de bord Next.js 14, créée pour démontrer mes compétences dans cette technologie",
    tags: ["React", "Next.js", "SQL", "Tailwind", ],
    imageUrl: gestion_des_clien,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  
] as const;
