import { Button } from "@mui/material";
import './home.css';

export function Home() {
  return (
    <section id="home">
      <div className="home-content">
        <h1 id="name">Hari Ganesh</h1>
        <h5 className="home-subtitle">
          Creative MERN Stack Developer, Building Interactive Experiences Where Design Meets Code
        </h5>
        <Button
          variant="contained"
          className="home-button"
        >
          View My Work
        </Button>
      </div>
    </section>
  );
}