"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
//import { useSectionInView } from "@/lib/hooks";

export default function About() {
 // const { ref } = useSectionInView("A propos");

  return (
    <motion.section
     
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>A propos de nous</SectionHeading>
      <p className="mb-3">
        
        <span className="font-medium">OP&BUSINESS</span>, est une agence spécialisée dans la création de sites web modernes et d’applications mobiles{" "}
        <span className="font-medium">le marketing et le référencement. Nous vous accompagnons dans la conception, le développement, et la promotion de vos projets numériques.</span>.{" "}
       
        nous sommes à l’écoute de vos besoins et de vos attentes. Nous vous garantissons un travail de qualité, un respect des délais, et une satisfaction totale.
      </p>

      <p>
        <span className="italic">N’hésitez pas à nous contacter pour discuter de vos projets et obtenir un devis gratuit. Nous serons ravis de vous répondre et de vous accompagner.</span>
      </p>
    </motion.section>
  );
}
