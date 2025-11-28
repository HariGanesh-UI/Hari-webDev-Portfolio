import { Button } from "@mui/material";
import './contact.css';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-text">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <div className="contact-actions">
        <Button
          variant="contained"
          color="primary"
          href="mailto:kolahariganesh.5@gmail.com"
        >
          Email Me
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="https://www.linkedin.com/in/kola-hari-ganesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </div>
    </section>
  );
}