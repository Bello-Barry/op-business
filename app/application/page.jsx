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
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
        </Testimonials>
      
      <ContactSection />
    </main>
  );
}
