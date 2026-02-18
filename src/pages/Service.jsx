import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaServer, FaLaptopCode, FaTools } from "react-icons/fa";
import "../styles/Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="section-title">SERVICES</h2>

      <div className="services-container">

        <div className="service-card">
          <TbDeviceDesktopCode className="icon" />
          <h3>Frontend Developer</h3>
        </div>

        <div className="service-card">
          <FaLaptopCode className="icon" />
          <h3>Full Stack Developer</h3>
        </div>

        <div className="service-card">
          <FaServer className="icon" />
          <h3>Backend Developer</h3>
        </div>

        <div className="service-card">
          <FaTools className="icon" />
          <h3>Development Tools</h3>
        </div>

      </div>
    </section>
  );
}

export default Services;
