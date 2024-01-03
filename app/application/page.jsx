import Clients from "@/components/compos/Clients";
import ContactSection from "@/components/compos/ContactSection";
import Container from "@/components/compos/Container";

import Services from "@/components/compos/Services";
import Testimonials from "@/components/compos/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Homepage() {
  return (
    <main className="text-black">
     
     
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        N’hésitez pas à nous contacter pour discuter de vos projets et obtenir un devis. Nous serons ravis de vous répondre et de vous accompagner.
        </Testimonials>
      
      <ContactSection />
    </main>
  );
}
