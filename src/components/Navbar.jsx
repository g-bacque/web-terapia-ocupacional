import "./Navbar.css";
import logo from "../assets/images/logo-2.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo Rosario Vigliocco" />
        </div>

        {/* MENU */}
        <nav className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#intervencion">Intervención</a>
          <a href="#formaciones">Formaciones</a>
          <a href="#asesoramiento">Asesoramiento</a>
          <a href="#contacto">Contacto</a>
        </nav>

      </div>
    </header>
  );
}
