import { Element } from 'react-scroll';
import './tech-stack.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export function Techstack() {
  const techItems = [
    { src: "/images/html5.png", label: "HTML5" },
    { src: "/images/css.png", label: "CSS3" },
    { src: "/images/java.png", label: "JavaScript" },
    { src: "/images/react.png", label: "React" },
    { src: "/images/ts.png", label: "TypeScript" },
    { src: "/images/node.png", label: "Node js" },
    { src: "/images/exp.png", label: "Express js" },
    { src: "/images/mongo.png", label: "MongoDB" },
    { src: "/images/github-mark.png", label: "Github" },
    { src: "/images/m.png", label: "MUI" },
    { src: "/images/boot.png", label: "Bootstrap" },
  ];


  const trackItems = [...techItems, ...techItems];

  return (
    <section className="container-fluid p-4 m-4" id="skills" offset={-70}>
      <h2 className="text-center title1">My Tech Stack</h2>

      <div className="tech-stack-slider">
        <div className="slide-track">
          {trackItems.map((item, idx) => (
            <Card key={idx} className="tech-card" sx={{ maxWidth: 150, textAlign: 'center' }}>
              <CardMedia
                component="img"
                image={item.src}
                alt={item.label}
                sx={{ height: 100, width: 150, objectFit: 'contain', margin: '0.75rem auto 0' }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}