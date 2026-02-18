import {
  FaJava,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiApachemaven,
  SiPostman
} from "react-icons/si";

import { MdSecurity } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { useState } from "react";

import "../styles/Skill.css";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const skillsData = [
    { name: "React JS", icon: <FaReact />, category: "FRONTEND" },
    { name: "HTML5", icon: <FaHtml5 />, category: "FRONTEND" },
    { name: "CSS3", icon: <FaCss3Alt />, category: "FRONTEND" },
    { name: "JavaScript", icon: <FaJs />, category: "FRONTEND" },

    { name: "Spring Boot", icon: <SiSpringboot />, category: "BACKEND" },
    { name: "Spring Security", icon: <MdSecurity />, category: "BACKEND" },
    { name: "REST API", icon: <TbApi />, category: "BACKEND" },
    { name: "Java", icon: <FaJava />, category: "BACKEND" },

    { name: "MySQL", icon: <SiMysql />, category: "DATABASE" },

    { name: "Git", icon: <FaGitAlt />, category: "TOOLS" },
    { name: "Maven", icon: <SiApachemaven />, category: "TOOLS" },
    { name: "Postman", icon: <SiPostman />, category: "TOOLS" }
  ];

  const filteredSkills =
    activeCategory === "ALL"
      ? skillsData
      : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section className="skills" id="skills">

      <h2 className="skills-title">SKILLS</h2>

      <div className="filter-buttons">
        {["ALL", "FRONTEND", "BACKEND", "DATABASE", "TOOLS"].map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-container">
        {filteredSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;