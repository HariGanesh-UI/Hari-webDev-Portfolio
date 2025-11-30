import { Avatar, Button } from "@mui/material";
import './navbar.css';

export function Navbar() {
  return (
    <div className="sticky">
      <header className="navbar-container">
        {/* Left: Avatar + Name */}
        <div className="navbar-left">
          <Avatar src="/images/WhatsApp Image 2025-11-14 at 10.29.26 PM.jpeg" />
          <span className="navbar-name">Hari Ganesh - Web Developer</span>
        </div>
        <nav className="navbar-right">
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <Button sx={{fontSize: { xs: "12px", sm: "14px", md: "12px", lg: "14px" },padding: { xs: "6px 12px", sm: "8px 16px", md: "10px 20px", lg: "8px 16px" },width: { xs: "100%", sm: "auto" },marginTop: { xs: "8px", sm: 0 }}} href="/public/Hari-web-developer.pdf" variant="contained" download="Hari-web-Developer.pdf" >
            Resume
          </Button>
        </nav>
      </header>
    </div>
  );
}