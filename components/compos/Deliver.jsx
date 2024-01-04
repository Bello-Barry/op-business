import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Livrer" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          À peu près à mi-chemin de la phase de construction, nous poussons chaque projet de 6
          semaines en raison d’un changement de{" "}
          <strong className="font-semibold text-neutral-950">
            Exigences
          </strong>
          . Cela nous permet d’augmenter le budget une dernière fois avant le lancement.
        </p>
        <p>
          Bien qu’ils utilisent en grande partie des composants préfabriqués, la plupart des{" "}
          <strong className="font-semibold text-neutral-950">progrès</strong>{" "}
          sur chaque projet a lieu dans les dernières 24 heures. Le développement
          le temps alloué à chaque client est en fait consacré à la réalisation d’augmentations
          des démos de télé-réalité qui deviennent virales sur Twitter.
        </p>
        <p>
          Nous veillons à ce que les pages principales du site soient{" "}
          <strong className="font-semibold text-neutral-950">
            Entièrement fonctionnel
          </strong>{" "}
          Au lancement, les pages auxiliaires seront, bien sûr, des coquilles d’IPUSM de Lorem
          qui sont mis à jour dans le cadre de notre{" "}
          <strong className="font-semibold text-neutral-950">
            entretien
          </strong>{" "}
          serviteur.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Inclus dans cette phase
      </h3>
      <List>
        <ListItem title="Testing">
          Nos projets ont toujours une couverture de test de 100 %, ce qui serait impressionnant
          si nos tests n’étaient pas aussi poreux qu’un tamis.
        </ListItem>
        <ListItem title="Infrastructure">
          Pour garantir la fiabilité, nous n’utilisons que les meilleures gouttelettes Digital Ocean qui
          4 $ par mois peuvent acheter.
        </ListItem>
        <ListItem title="Support">
          Parce que nous détenons les clés API pour chaque service critique de votre entreprise
          utilisations, vous pouvez vous attendre à une vie d’assistance et de factures, de notre part.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
