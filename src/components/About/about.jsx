import './about.css'
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"
export function About(){
    return(
<section id='about'>
                <div className='text-center about p-4'>About me</div>
            <div className='about-container'>
                    <img src="/public/images/WhatsApp Image 2025-11-14 at 10.29.26 PM.jpeg" alt="" height={250} width={250}/>
                <div>
  
                              <p id='para'>A passionate and creative MERN stack developer with a knack for building
                    beautiful, functional, and user-centric web applications. My journey in tech
                    is driven by a love for clean code, elegant design, and solving complex
                    problems to create seamless digital experiences.</p>
                    <p id='para'>
                        When I'm not coding, I enjoy exploring new design trends, contributing to
open-source projects, and experimenting with new technologles to
continuously grow my skillset. Let's build something amazing together.
                    </p>
                </div>
                <div className='m-2'>
                    <h2>Get in Touch</h2>
                    <LinkedIn sx={{fontSize:40, marginRight:2}} onClick={() => window.open("https://www.linkedin.com/in/kola-hari-ganesh", "_blank")}/>
                    <GitHub sx={{fontSize:40, marginRight:2}} onClick={() => window.open("https://github.com/HariGanesh-UI", "_blank")}/>
                    <Mail sx={{fontSize:40}} onClick={() => window.location = 'mailto:kolahariganesh.com' }/>
                </div>
            </div>
</section>
    )
}