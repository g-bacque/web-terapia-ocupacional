import "./Formaciones.css";
import formacionesImg from "../assets/images/formaciones.png";

export default function Formaciones() {
  return (
    <section
      className="formaciones"
      id="formaciones"
      style={{ "--bg-image": `url(${formacionesImg})` }}
    >
      <div className="container formaciones-container">

        <div className="formaciones-content">
          <h2>Formaciones</h2>

          <p>
            Espacios de formación dirigidos a profesionales, familias e
            instituciones interesados en profundizar en estrategias de
            acompañamiento y comprensión del desarrollo infantil.
          </p>

          <p>
            Las propuestas combinan fundamentos teóricos y herramientas
            prácticas aplicables a contextos reales, promoviendo una mirada
            respetuosa e inclusiva.
          </p>
        </div>

      </div>
    </section>
  );
}
