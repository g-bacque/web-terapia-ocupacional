import "./IntervencionMosaico.css";

import img1 from "../assets/images/intervencion.png"; // vertical
import img2 from "../assets/images/intervencion-2.png"; // vertical
import img3 from "../assets/images/intervencion-3.png"; // vertical
import img4 from "../assets/images/intervencion-4.png"; // horizontal

export default function IntervencionMosaico() {
  return (
    <div className="mosaic-editorial">
      <img src={img1} alt="Intervención 1" className="big-horizontal" />
      <img src={img2} alt="Intervención 2" className="tall-vertical" />
      <img src={img3} alt="Intervención 3" className="medium-vertical" />
      <img src={img4} alt="Intervención 4" className="tall-vertical last-img" />
    </div>
  );
}
