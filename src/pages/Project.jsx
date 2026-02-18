import bank from '../assets/bank.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import '../styles/Project.css';
function Projects() {
    return ( 
        <section className="projects-section" id="projects">
        <div className="project-container">
            <h1>PROJECTS</h1>
            <div className="projects">
                <div className="project-1">
                    <div className='image-container-project'>
                        <img src={bank} alt="Project 1"/>
                    </div>
                      
                       <div className='text-container'> 
                        <h2>🏦 Bank Management System</h2>
                        <p>A secure full-stack banking application built using Spring Boot 
                            and React.js with role-based authentication and JWT-based authorization 
                            for protected API access.
                        </p>
                       </div>
                </div>
                <div className="project-2">
                    <div className='image-container-project'>
                        <img src={ecommerce} alt="Project 2"/>
                    </div>
                      <div className='text-container'>
                        <h2>🛒 E-Commerce Website</h2>
                        <p>A scalable full-stack e-commerce platform developed with Spring Boot 
                            and React.js, supporting product management, cart functionality, 
                            and order processing through RESTful APIs.
                        </p>
                      </div>
                </div>
            </div>
            
        </div>
        </section>
     );
}

export default Projects;