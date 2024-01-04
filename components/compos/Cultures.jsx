import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Notre culture"
        title="Équilibrez votre passion avec votre passion pour la vie."
        invert
      >
        <p>
          Nous sommes un groupe de personnes partageant les mêmes idées et les mêmes valeurs fondamentales.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyauté" invert>
            Notre équipe est avec nous depuis le début parce qu’aucun d’entre eux n’a
            sont autorisés à avoir des profils LinkedIn.
          </GridListItem>
          <GridListItem title="Confiance" invert>
            Nous ne nous soucions pas de savoir si notre équipe travaille aussi longtemps qu’elle travaille
            chaque seconde d’éveil.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            On ne sait jamais ce que quelqu’un vit à la maison et nous faisons
            sûr de ne jamais le savoir.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
