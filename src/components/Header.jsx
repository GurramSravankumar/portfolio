import "./Header.css";
import useScrollToSection from "../customeHooks/useScrollToSection";
import { useState } from "react";

function Header() {
  const scrollToSection = useScrollToSection();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="right-section">
        <h5 className="header-heading">Sravan</h5>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
        ☰
      </div>

      <div className={`left-section ${menuOpen ? "show-menu" : ""}`}>
        <button className="header-btn1" onClick={() => scrollToSection("home")}>
          HOME
        </button>

        <button
          className="header-btn1"
          onClick={() => scrollToSection("about")}
        >
          ABOUT
        </button>

        <button
          className="header-btn1"
          onClick={() => scrollToSection("skills")}
        >
          SKILLS
        </button>

        <button
          className="header-btn1"
          onClick={() => scrollToSection("projects")}
        >
          PROJECTS
        </button>

        <button
          className="header-btn1"
          onClick={() => scrollToSection("certificates")}
        >
          CERTIFICATES
        </button>

        <button
          className="header-btn1"
          onClick={() => scrollToSection("contact")}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
}

export default Header;
