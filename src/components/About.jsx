import "./About.css";
import profilePic from "../assets/images/imagen-about.jpeg";

export default function About() {
  return (
    <section className="about">
      <div className="container about-content">
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Terapeuta ocupacional con experiencia en intervención centrada en la persona,
            infancia y adultos. Trabajo desde una mirada cercana, respetuosa y basada en la evidencia,
            buscando siempre generar un ambiente seguro y confiable.
          </p>
        </div>
        <div className="about-image">
          <img src={profilePic} alt="Rosario Vigliocco" />
        </div>
      </div>
    </section>
  );
}
