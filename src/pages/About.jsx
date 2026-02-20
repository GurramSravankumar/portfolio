import "../styles/About.css";
import about from "../assets/about.jpg"
function About() {
    return (
        <section id="about" className="about-section">
        <div className="about-me"> 
                  <h1>ABOUT ME</h1>
             <div className="about">
                <div className="about-image">
                    <img src={about} alt="About Me" />
                </div>
                <div className="about-container">
                    <h2>LET'S</h2>
                    <h2>INTRODUCE ABOUT</h2>
                    <h2>MYSELF</h2> 
                    
                    <p>
                        I am a motivated Java Full Stack Developer with a strong foundation in Spring 
                        Boot and React.js. I enjoy building secure, scalable, and user-friendly web applications.

                        With hands-on experience in developing RESTful APIs and integrating frontend and 
                        backend systems, I focus on writing clean, maintainable code and continuously 
                        improving my technical skills. 
                    </p> 
                    <a href="/portfolio/Sravan.pdf" download>
                            <button className="about-btn">
                                Download CV
                            </button>
                       </a>
                </div>
            </div> 

        </div>
        </section>
       
       
      );
}

export default About;