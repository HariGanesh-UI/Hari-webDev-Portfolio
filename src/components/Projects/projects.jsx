import { Element } from "react-scroll";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./projects.css";

export function Projects(){
    return(
        <section className="container-fluid" id="projects">
            <h2 className="text-centre title1">Projects</h2>
            <div className="d-flex flex-wrap gap-4 m-4 p-4">
                <Card sx={{ maxWidth: 300, height: '100%' }}>
                    <CardMedia component="img" image="/images/shopkart.png" alt="Project 1"/>
                    <CardContent>
                        <Typography variant="body1">ShopKart - E-commerce Website</Typography>
                        <Typography   sx={{whiteSpace: "normal",wordWrap: "break-word",wordBreak: "break-word",overflowWrap: "anywhere",}} variant="caption">Developed a full-stack e-commerce web application using MERN stack, featuring user authentication, product management, shopping cart, and order processing functionalities.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" href="https://github.com/HariGanesh-UI/ShopKart-web-app" target="_blank">View Code</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300, height: '100%' }}>
                    <CardMedia component="img" image="/images/todo.png" alt="Project 1"/>
                    <CardContent>
                        <Typography variant="body1">Todo App</Typography>
                        <Typography   sx={{whiteSpace: "normal",wordWrap: "break-word",wordBreak: "break-word",overflowWrap: "anywhere",}} variant="caption">Developed a full-stack todo application using MERN stack, featuring user authentication, task management, and real-time synchronization between users.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" href="https://github.com/HariGanesh-UI/React-Typescript-to-do-app" target="_blank">View Code</Button>
                    </CardActions>
                </Card>
            </div>
        </section>
    )
}