import React from "react";
import ContactForm from "./components/ContactForm";
import { FaChild, FaUserCheck, FaUsers } from "react-icons/fa";
import "./App.css";

export default function App() {
  const services = [
    { title: "Evaluación funcional", description: "Enfoque personalizado basado en objetivos reales y cotidianos.", icon: <FaUserCheck size={40} color="#2563eb" /> },
    { title: "Intervención individual", description: "Apoyo adaptado a cada persona según sus necesidades.", icon: <FaChild size={40} color="#2563eb" /> },
    { title: "Acompañamiento familiar", description: "Guiamos a familias para mejorar la autonomía y bienestar.", icon: <FaUsers size={40} color="#2563eb" /> },
  ];

  const aboutText = "Terapeuta ocupacional con experiencia en intervención centrada en la persona, infancia y adultos. Trabajo desde una mirada cercana, respetuosa y basada en la evidencia, buscando siempre generar un ambiente seguro y confiable.";

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>ROSARIO VIGLIOCCO</h1><h1>Terapia Ocupacional centrada en la persona</h1>
          <p>Acompañamiento profesional para mejorar la autonomía, el bienestar y la calidad de vida.</p>
          <div className="hero-buttons">
            <button className="primary">Pedir cita</button>
            <button className="secondary">Contacto</button>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="services">
        <h2>Servicios</h2>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="about">
        <h2>Sobre mí</h2>
        <p>{aboutText}</p>
      </section>

      {/* CONTACTO */}
      <section className="contact">
        <h2>Contacto</h2>
        <p>¿Hablamos? Escríbeme y te responderé lo antes posible.</p>
        <ContactForm />
      </section>
    </div>
  );
}
