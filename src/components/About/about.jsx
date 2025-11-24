import './about.css'
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"
export function About(){
    return(
        <section id="about" className="container-fluid">
            <div>
                <h2 id="title">About Me</h2>
            </div>
            <div className="row justify-content-center align-items-start gap-3 p-4">
                <div className="col-12 col-md-7 justify-content-center align-items-center gap-3 p-4">
                    <p>I'm a passionate MERN stack developer with a strong foundation in
                        building modern, responsive, and user-friendly web applications. My
                        journey into development began with a curiosity for how things work on
                        the web, which quickly evolved into a drive to create seamless digital
                        experiences.</p>
                        <p>
                             I thrive on solving complex problems and am constantly learning new
                            technologies to enhance my skillset. From crafting intuitive front-end
                            interfaces with React to building robust back-end APIs with Node.js and
                            Express, I enjoy every aspect of the development lifecycle.
                        </p>
                </div>
                <div className="col-12 col-md-4 justify-content-center align-items-start gap-3 p-4 contact-column">
                    <h4 className="contact-title">Let's Connect</h4>
                    <div className="contact-item d-flex align-items-center gap-2">
                      <Mail color="primary" />
                      <a href="mailto:kolahariganesh.5@gmail.com" className="contact-link">kolahariganesh.5@gmail.com</a>
                    </div>
                    <div className="contact-item d-flex align-items-center gap-2">
                      <GitHub color="action" />
                      <a id="link" target="_blank" rel="noreferrer" href="https://github.com/HariGanesh-UI" className="contact-link">github.com/HariGanesh-UI</a>
                    </div>
                    <div className="contact-item d-flex align-items-center gap-2">
                      <LinkedIn color="primary" />
                      <a id="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kola-hari-ganesh" className="contact-link">linkedin.com/in/kola-hari-ganesh</a>
                    </div>
                </div>
            </div>
        </section>
    )
}