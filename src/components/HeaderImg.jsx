import sravanimg from "../assets/sravanimg.jpeg";
import useScrollToSection from "../customeHooks/useScrollToSection";
import "./HeaderImg.css";
import { useState } from "react";

function HaderImg() {
  const scrollToSection = useScrollToSection();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="name-place">
      <div className="header-section">
        <div className="header-image">
          <img src={sravanimg} alt="Sravan" />
        </div>

        <div className="name">
          <h4>GURRAM SRAVAN KUMAR</h4>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`button-section ${menuOpen ? "show-menu" : ""}`}>
          <button
            className="header-btn"
            onClick={() => scrollToSection("home")}
          >
            HOME
          </button>

          <button
            className="header-btn"
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </button>

          <button
            className="header-btn"
            onClick={() => scrollToSection("skills")}
          >
            SKILLS
          </button>

          <button
            className="header-btn"
            onClick={() => scrollToSection("projects")}
          >
            PROJECTS
          </button>

          <button
            className="header-btn"
            onClick={() => scrollToSection("certificates")}
          >
            CERTIFICATES
          </button>

          <button
            className="header-btn"
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
}

export default HaderImg;
