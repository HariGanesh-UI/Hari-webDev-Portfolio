import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import './projects.css';

export function Projects() {
  return (
    <section id="projects">
      <div id="head1">Projects</div>

      <div className="projects-container">
        {/* Project 1 */}
        <Card className="project-card">
          <CardMedia
            component="img"
            image="/images/shopkart.png"
            alt="ShopKart Project"
            className="project-img"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              ShopKart - E-commerce
            </Typography>
            <Typography variant="body2">
              Technologies Used: Mustache.js, JavaScript, Node.js, Express.js, MongoDB, Bootstrap.
              Developed a full-stack e-commerce web application with user authentication, product
              management, shopping cart, and order processing functionalities.
            </Typography>
          </CardContent>
          <CardActions className="project-actions">
            <Button
              size="small"
              href="https://github.com/HariGanesh-UI/ShopKart-web-app"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              View Project Repo
            </Button>
            <Button
              size="small"
              href="#home"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
            >
              View Live
            </Button>
          </CardActions>
        </Card>

        {/* Project 2 */}
        <Card className="project-card">
          <CardMedia
            component="img"
            image="/images/todo.png"
            alt="Todo App Project"
            className="project-img"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Todo App
            </Typography>
            <Typography variant="body2">
              Technologies Used: React.js, Node.js, Express.js, MongoDB, MUI.
              Built a MERN stack todo application with user authentication, allowing users to create,
              read, update, and delete tasks with a responsive UI.
            </Typography>
          </CardContent>
          <CardActions className="project-actions">
            <Button
              size="small"
              href="https://github.com/HariGanesh-UI/React-Typescript-to-do-app"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              View Project Repo
            </Button>
            <Button
              size="small"
              href="#home"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
            >
              View Live
            </Button>
          </CardActions>
        </Card>
      </div>
    </section>
  );
}