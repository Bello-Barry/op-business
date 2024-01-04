import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Découvrir" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs {" "}
          <strong className="font-semibold text-neutral-950">besoins </strong> 
          Et objectifs, en nous intégrant dans leurs opérations quotidiennes pour comprendre
          ce qui fait fonctionner leur entreprise. 
        </p>
        <p>
          Notre équipe de détectives privés suit le chef d’entreprise pour
          plusieurs semaines pendant que nos gestionnaires de comptes se concentrent sur l’examen de leurs
          ordures. Nos experts en sécurité procèdent ensuite à l’ingénierie sociale
          pirates pour accéder à leur{" "}
          <strong className="font-semibold text-neutral-950">business</strong>
          — la transmission de ces renseignements à notre juricomptabilité
          équipe.
        </p>
        <p>
          Une fois l’audit complet terminé, nous vous rendons compte d’un rapport complet
          <strong className="font-semibold text-neutral-950">plan</strong> et
          Plus important encore, un budget.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Inclus dans cette phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Questionnaires approfondis</TagListItem>
        <TagListItem>Étude de faisabilité</TagListItem>
        <TagListItem>Prélèvements sanguins</TagListItem>
        <TagListItem>Sondages auprès des employés</TagListItem>
        <TagListItem>Preuves de concept</TagListItem>
        <TagListItem>Audit juricomptable</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
