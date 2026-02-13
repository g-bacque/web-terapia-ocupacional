import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>ROSARIO VIGLIOCCO</h1>
        <h2>Terapia Ocupacional centrada en la persona</h2>
        <p>
          Acompañamiento profesional para mejorar la autonomía,
          el bienestar y la calidad de vida.
        </p>
        <div className="hero-buttons">
          <button className="primary">Pedir cita</button>
          <button className="secondary">Contacto</button>
        </div>
      </div>
    </section>
  );
}
