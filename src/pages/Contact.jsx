import "../styles/Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        I am open to job opportunities and collaborations. 
        Feel free to reach out through any of the following.
      </p>

      <div className="contact-container">

        <a href="mailto:gurramsravankr@gmail.com" className="contact-card">
          <FaEnvelope className="contact-icon" />
          <span>gurramsravankr@gmail.com</span>
        </a>

        <a 
          href="https://wa.me/919398543230?text=Hello%20Sravan%20Kumar,%20I%20want%20to%20connect%20with%20you." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card"
        >
          <FaPhoneAlt className="contact-icon" />
          <span>+91 9398543230</span>
        </a>


        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Hyderabad, India</span>
        </div>

        <a href="https://www.linkedin.com/in/sravan-kumar-gurram-933946310" target="_blank" rel="noreferrer" className="contact-card">
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn Profile</span>
        </a>

        <a href="https://github.com/GurramSravankumar" target="_blank" rel="noreferrer" className="contact-card">
          <FaGithub className="contact-icon" />
          <span>GitHub Profile</span>
        </a>

      </div>
    </section>
  );
}

export default Contact;
