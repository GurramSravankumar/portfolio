
import sravan from '../assets/sravanimg.jpeg'
import useScrollToSection from "../customeHooks/useScrollToSection";
import "../styles/Home.css"
function Home() {
     const scrollToSection = useScrollToSection();
    return ( 
        <section id="home" className="home">
        <div className="home-container">
            <div className="text-container">
                <h2> HELLO______________________</h2>
                <h1 className='typing'>I AM SRAVAN KUMAR</h1>
                <p>Full Stack Developer specializing in Java, web technologies, and database management. Passionate about building scalable applications and solving complex problems.</p>

                <div className='btn-container'>
                        <button className='home-btn' onClick={() => scrollToSection("contact")}>HERE ME</button>
                        <a href="/Resume.pdf"download>
                            <button className="home-btn">
                                Download Resume
                            </button>
                       </a>

                </div>
            </div>  
            <div className="image-container">
                <img src={sravan} alt="Sravan" className='image' />
            </div>
        </div>
        </section>
     );
}

export default Home;