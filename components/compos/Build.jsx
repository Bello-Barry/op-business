import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Construire" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Sur la base de la phase de découverte, nous élaborons une feuille de route complète
          pour chaque produit et commencer à travailler en vue de la livraison. La feuille de route est un
          un enchevêtrement complexe d’absurdités techniques conçues pour faire traîner le
          projeter le plus longtemps possible.
        </p>
        <p>
          Chaque client se voit attribuer un responsable grands comptes pour tenir les lignes de
          communication ouverte et obscurcissent l’avancement réel du projet.
          Ils agissent comme un tampon entre les harcèlements incessants du client et la
          Une équipe de développement qui travaille d’arrache-pied pour éplucher des projets open source
          pour que le code soit réutilisé.
        </p>
        <p>
          Nos gestionnaires de compte sont formés pour ne répondre aux e-mails des clients qu’après
          21h, plusieurs jours après l’e-mail initial. Cela renforce l’opinion générale
          que nous sommes très occupés et dissuade les clients de demander
          changements.
        </p>
      </div>
      <Blockquote
        author={{ name: "Barry bello", role: "CEO of Unseal" }}
        className="mt-12"
      >
        Nous étions si réguliers avec leurs mises à jour de progression que nous avons presque commencé
        penser qu’ils étaient automatisés !
      </Blockquote>
    </Section>
  );
};

export default Build;
