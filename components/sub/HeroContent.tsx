"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="flex flex-col gap-5 justify-center text-center md:text-start max-w-lg w-full md:w-auto mx-auto">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center justify-center md:justify-start py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] bg-black/40 rounded-lg"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[14px] text-white">
            Portefeuille de développeur Fullstack
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 md:mt-6 text-3xl md:text-6xl font-bold text-white"
        >
          <span>
            Fournir
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Le meilleur{" "}
            </span>
            Expérience de projet
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-4 md:my-5 max-w-full md:max-w-[600px] mx-auto md:mx-0"
        >
          Je suis un développeur Full Stack avec de l’expérience dans le domaine
          des sites Web, mobiles, et du développement de logiciels. Découvrez
          mes projets et mes compétences.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#about"
          className="py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0"
        >
          En savoir plus!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={450}
          width={450}
          className="max-w-[80%] md:max-w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
