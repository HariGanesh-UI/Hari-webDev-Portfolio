import { Card, CardContent, CardMedia, LinearProgress, Typography, Grid } from "@mui/material";
import { useState } from "react";
import './tech-stack.css';

export function Techstack() {
  const [img] = useState([
    { name: 'HTML', img: '/images/html5.png', value: 95 },
    { name: 'CSS', img: '/images/css.png', value: 90 },
    { name: 'JavaScript', img: '/images/java.png', value: 85 },
    { name: 'React', img: '/images/react.png', value: 80 },
    { name: 'TypeScript', img: '/images/ts.png', value: 75 },
    { name: 'Node js', img: '/images/node.png', value: 70 },
    { name: 'Express js', img: '/images/exp.png', value: 65 },
    { name: 'MongoDB', img: '/images/mongo.png', value: 70 },
    { name: 'MUI', img: '/images/m.png', value: 60 },
    { name: 'Bootstrap v5.0', img: '/images/boot.png', value: 70 },
    { name: 'Github', img: '/images/github-mark.png', value: 80 },
  ]);

  return (
    <section id="skills">
      <div id="head1">My Tech Stack</div>
      <Grid container spacing={2} justifyContent="center">
        {img.map((item) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={item.name}>
            <Card sx={{ textAlign: "center", p: 1 }}>
              <CardMedia
                component="img"
                image={item.img}
                alt={item.name}
                sx={{ height: 80, width: 80, objectFit: "contain", mx: "auto" }}
              />
              <CardContent>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {item.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={item.value}
                  color="success"
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}