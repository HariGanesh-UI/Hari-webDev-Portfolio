import { Avatar} from "@mui/material"
import {Button} from "@mui/material"
import './navbar.css'

export function Navbar(){
   return(
      <>
         <div className="sticky">
            <header className="container-fluid d-flex justify-content-between align-items-center p-2">
               
               <div className="d-flex align-items-center ">
               <Avatar src="/public/images/WhatsApp Image 2025-11-14 at 10.29.26 PM.jpeg" />
               <span className="m-2">Hari Ganesh - Web Developer</span>
               </div>
               <nav className="d-flex align-items-center">
               <a href="#home" className="mx-2">Home</a>
               <a href="#about" className="mx-2">About</a>
               <a href="#skills" className="mx-2">Skills</a>
               <a href="#projects" className="mx-2">Projects</a>
               <a href="#contact" className="mx-2">Contact</a>
               <Button
                  sx={{fontSize: { xs: "12px", sm: "14px", md: "12px", lg: "14px" },padding: { xs: "6px 12px", sm: "8px 16px", md: "10px 20px", lg: "8px 16px" }, width: { xs: "100%", sm: "auto" },}}href="/src/assets/Hari-web-developer.pdf"
                  variant="contained"
                  download="Hari-web-Developer.pdf"
               >
                  Resume
               </Button>
               </nav>
            </header>
         </div>
         </>
   )}