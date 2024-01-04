import Build from "@/components/compos/Build";
import ContactSection from "@/components/compos/ContactSection";
import Deliver from "@/components/compos/Deliver";
import Discover from "@/components/compos/Discover";
import PageIntro from "@/components/compos/PageIntro";
import Values from "@/components/compos/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our process" title="Comment travaillons-nous ?">
        <p>
          Nous croyons en l’efficacité et en la maximisation de nos ressources pour fournir le
          meilleur rapport qualité-prix pour nos clients. La principale façon d’y parvenir est de réutiliser
          Les cinq mêmes projets que nous développons depuis une dizaine d’années.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
