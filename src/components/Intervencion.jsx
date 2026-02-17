import "./Intervencion.css";
import IntervencionMosaico from "./IntervencionMosaico.jsx";

export default function Intervencion() {
  return (
    <section className="intervencion" id="intervencion">
      <div className="intervencion-container">

        {/* FOTO */}
        <div className="intervencion-image">
          <IntervencionMosaico />
        </div>

        {/* TEXTO */}
        <div className="intervencion-content">
          
          <h2>Intervención</h2>

          <p>
            Acompañamiento terapéutico centrado en la persona y su entorno,
            orientado a potenciar la autonomía, la participación y el bienestar
            en las actividades de la vida diaria.
          </p>

          <p>
            El trabajo se adapta a las necesidades individuales, considerando
            los intereses, fortalezas y objetivos de cada persona y su familia.
          </p>

        </div>

      </div>
    </section>
  );
}
