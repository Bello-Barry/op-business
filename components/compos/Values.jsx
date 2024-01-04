import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Nos valeurs"
        title="L’équilibre entre fiabilité et innovation"
      >
        <p>
          Nous nous efforçons de rester à l’avant-garde des tendances émergentes et
          technologies, tout en les ignorant complètement et en bifurquant ces vieilles
          Projet de rails que nous nous sentons à l’aise d’utiliser. Nous restons fidèles à nos valeurs fondamentales
          pour justifier cette décision.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Méticuleux">
            La première partie de tout partenariat consiste à faire en sorte que notre concepteur mette en place
            votre logo dans notre modèle. La deuxième étape consiste à les amener à faire le
            Couleurs.
          </GridListItem>
          <GridListItem title="Efficace">
            Nous sommes fiers de ne jamais manquer une échéance, ce qui est facile parce que
            La plupart du travail a été fait il y a des années.
          </GridListItem>
          <GridListItem title="Adaptable">
            Chaque entreprise a des besoins uniques et notre plus grand défi est
            Intégrer ces besoins dans quelque chose que nous avons déjà construit.
          </GridListItem>
          <GridListItem title="Honnête">
            Nous sommes transparents sur l’ensemble de nos processus, en misant sur la simplicité
            En fait, nos clients ne lisent jamais rien.
          </GridListItem>
          <GridListItem title="Loyal">
            Nous entretenons avec nos clients des relations à long terme qui vont au-delà de
            Il ne s’agit que de livrer un produit, ce qui nous permet de les facturer pendant des décennies.
          </GridListItem>
          <GridListItem title="Innovateur">
            Le paysage technologique est en constante évolution et nous aussi. Nous sommes
            constamment à la recherche de nouveaux projets open source à cloner.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
