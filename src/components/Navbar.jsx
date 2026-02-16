import "./Navbar.css";
import logo from "../assets/images/logo-2.png";
import { useEffect, useState } from "react";

export default function Navbar({setActiveSection}) {
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
      <button
        onClick={() => {
          setActiveSection("home");
          window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 hace scroll arriba
        }}
      >
          Home
        </button>
        <button onClick={() => setActiveSection("bio")}>About me</button>
        <button onClick={() => setActiveSection("intervencion")}>Intervención</button>
        <button onClick={() => setActiveSection("formaciones")}>Formaciones</button>
        <button onClick={() => setActiveSection("asesoramiento")}>Asesoramiento</button>
        <button onClick={() => setActiveSection("contacto")}>Contacto</button>
      </nav>


      </div>
    </header>
  );
}
