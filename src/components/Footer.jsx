import "./Footer.css";
import logo from "../assets/images/logo-white.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* INFO */}
        <div className="footer-info">
          <p><strong>Teléfono:</strong> +34 600 000 000</p>
          <p><strong>Email:</strong> contacto@tusitio.com</p>
          <p><strong>Ubicación:</strong> Barcelona, España</p>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Tu Nombre / Marca — Todos los derechos reservados
          </p>
        </div>

      </div>
    </footer>
  );
}
