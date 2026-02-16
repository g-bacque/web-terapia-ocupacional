import "./Asesoramiento.css";
import asesoramientoImg from "../assets/images/asesoramiento.png";

export default function Asesoramiento() {
  return (
    <section
      className="asesoramiento"
      id="asesoramiento"
      style={{ backgroundImage: `url(${asesoramientoImg})` }}
    >
      <div className="asesoramiento">

        <div className="asesoramiento-card">
          <h2>Asesoramiento</h2>

          <p>
            Espacios de orientación dirigidos a familias y profesionales que
            buscan acompañamiento para comprender situaciones específicas y
            tomar decisiones desde una mirada respetuosa y personalizada.
          </p>

          <p>
            El asesoramiento ofrece herramientas prácticas y estrategias
            adaptadas a cada contexto, promoviendo el bienestar y la
            participación en la vida cotidiana.
          </p>
        </div>

      </div>
    </section>
  );
}
