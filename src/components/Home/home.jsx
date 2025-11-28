import { Button } from "@mui/material";
import './home.css'
export function Home(){
    return(
        <section id="home" className="justifu-content-center align-content-center">
            <div className="text-center m-4 p-4">
            <h1 id="name">Hari Ganesh</h1>
            <h5>Creative MERN Stack Developer, Building Interactive Experience Where Design Meets Code</h5>
            <Button variant="contained" className="m-4 p-2">View My Work</Button>
        </div>
        </section>
    )
}