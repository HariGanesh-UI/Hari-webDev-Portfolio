import { Avatar } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import '../Navbar/navbar.css'

export function Navbar(){
  return(
    <header>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3" id="nav">
        <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
          <Avatar src="/images/WhatsApp%20Image%202025-11-14%20at%2010.29.26%20PM.jpeg" />
          <span className="fw-bold">Hari Ganesh | Web Developer</span>
        </div>
        <nav className="mb-2 mb-md-0">
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </nav>
        <a href="/src/assets/Hari-web-developer.pdf" download="Hari-web-developer.pdf" className="btn btn-outline-primary">
          <DownloadIcon /> Download My Resume
        </a>
      </div>
    </header>
  )
}
