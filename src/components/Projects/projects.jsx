import { Element } from "react-scroll";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./projects.css";

export function Projects(){
    return(
        <section className="container-fluid" id="projects">
            <h2 className="text-centre title1">Projects</h2>
            <div className="d-flex flex-wrap gap-4 m-4 p-4">
                <Card sx={{ maxWidth: 350, height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                    <CardMedia component="img" image="/images/shopkart.png" alt="Project 1" sx={{ height: 180, objectFit: 'cover', width: '100%' }}/>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="body1" gutterBottom>
                            ShopKart - E-commerce Website
                        </Typography>
                        <Typography variant="caption">
                            Developed a full-stack e-commerce web application using MERN stack, featuring user authentication, product management, shopping cart, and order processing functionalities.
                        </Typography>
                    </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" href="https://github.com/HariGanesh-UI/ShopKart-web-app" target="_blank">
                            View Code
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 350, height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                    <CardMedia component="img" image="/images/todo.png" alt="Project 1" sx={{ height: 180, objectFit: 'cover', width: '100%' }}/>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="body1" gutterBottom>
                            To-do List Application
                        </Typography>
                        <Typography variant="caption">
                            Created a responsive to-do list application using React for the front-end and Node.js with Express for the back-end, allowing users to manage tasks with CRUD operations and persistent storage in MongoDB.
                        </Typography>
                    </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" href="https://github.com/HariGanesh-UI/React-Typescript-to-do-app" target="_blank">
                                View Code
                            </Button>
                        </CardActions>
                    </Card>
            </div>
        </section>
    )
}