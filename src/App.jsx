import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Intervencion from "./components/Intervencion";
import IntervencionMosaico from "./components/IntervencionMosaico";
import Formaciones from "./components/Formaciones";
import Asesoramiento from "./components/Asesoramiento";




export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />      
      <Intervencion />
      
      <Formaciones />
      <Asesoramiento />

      <ContactForm />
    </>
  );
}
