import "./Services.css";
import { FaChild, FaUserCheck, FaUsers } from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "Evaluación funcional", description: "Enfoque personalizado basado en objetivos reales y cotidianos.", icon: <FaUserCheck size={40}  /> },
    { title: "Intervención individual", description: "Apoyo adaptado a cada persona según sus necesidades.", icon: <FaChild size={40}  /> },
    { title: "Acompañamiento familiar", description: "Guiamos a familias para mejorar la autonomía y bienestar.", icon: <FaUsers size={40} /> },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Servicios</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
