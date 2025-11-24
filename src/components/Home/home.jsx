import { Button } from "@mui/material"
import { scroller } from "react-scroll"
import './home.css'
export function Home(){
  function handlelink(){
      window.open('https://github.com/HariGanesh-UI', '_blank')
    }
  
  function handleContact(){
      scroller.scrollTo('contact', {
        duration: 500,
        smooth: true,
        offset: -80
      })
    }
  
  return(
    <section id="home" className="container-fluid home-section">
      <div className="row justify-content-center align-items-center g-5 home-row p-5">
         <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start">
                <div>
                    <h2>Hari Ganesh</h2>
                    <p>Full-Stack MERN Web Developer Passionate About Building Modern Web-Applications</p>
                </div>
                <div className="d-flex gap-3 home-buttons">
                    <Button onClick={handlelink} variant="contained" size="medium">View My Work</Button>
                    <Button onClick={handleContact} variant="outlined" size="medium">Contact Me</Button>
                </div>
           </div>
           <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
                <img src="/images/WhatsApp%20Image%202025-11-14%20at%2010.29.26%20PM.jpeg" alt="Hari" className="homeprofile"/>
           </div>
        </div>
    </section>
  )
}