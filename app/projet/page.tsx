"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./projet";
//import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
 // const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section  className="scroll-mt-28 mb-28">
      <SectionHeading>Mes projets</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
