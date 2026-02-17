import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Intervencion from "./components/Intervencion";
import Formaciones from "./components/Formaciones";
import Asesoramiento from "./components/Asesoramiento";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "home" && (
        <>
          <Hero />
          <About />
          <Intervencion />
          <Formaciones />
          <Asesoramiento />
          <ContactForm />

          
        </>
      )}



      {activeSection === "bio" && <About />}
      {activeSection === "intervencion" && <Intervencion />}
      {activeSection === "formaciones" && <Formaciones />}
      {activeSection === "asesoramiento" && <Asesoramiento />}
      {activeSection === "contacto" && <ContactForm />}
      <Footer />      
    </>
  );
}
