import sravanimg from "../assets/sravanimg.jpeg"
import useScrollToSection from "../customeHooks/useScrollToSection";
import "./HeaderImg.css"
function HaderImg() {
    const scrollToSection = useScrollToSection();

    return (
        <div className="name-place">
            <div className="header-section">
                    <div className="left-section">

                    </div>
                            <div className="header-image">
                                <img src={sravanimg}></img>
                            </div>
                    <div className="right-section">
                        <div className="button-section">
                            <button className="header-btn" onClick={() => scrollToSection("home")}>
                            HOME
                            </button>

                            <button className="header-btn" onClick={() => scrollToSection("about")}>
                            ABOUT
                            </button>

                            <button className="header-btn" onClick={() => scrollToSection("skills")}>
                            SKILLS
                            </button>

                            <button className="header-btn" onClick={() => scrollToSection("projects")}>
                            PROJECTS
                            </button>

                            <button className="header-btn" onClick={() => scrollToSection("certificates")}>
                            CERTIFICATES
                            </button>

                            <button className="header-btn" onClick={() => scrollToSection("contact")}>
                            CONTACT
                            </button>
                        </div>
                    </div>
            </div>
            <div className="name">
                  <h4>GURRAM SRAVAN KUMAR</h4>
            </div>

        </div> 
        
        
    );
}
export default HaderImg;

