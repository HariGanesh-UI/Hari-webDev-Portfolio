import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


export function Projects(){
    return(
        <section   id="projects">
            <div id="head1">Projects</div>
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 p-4">
                <Card sx={{textAlign:"center", width:{sm:'120px', lg:'440px'}, height:{sm:'140px',lg:'500px'},borderRadius:'10px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <CardMedia sx={{ height: 240, width: 440, objectFit:'contain'}} image="/public/images/shopkart.png" />
                    <CardContent>
                        <Typography>
                            SopKart - E commerce
                        </Typography>
                        <Typography>
                            Technologies Used:Mustache js, js, Node.js, Express.js, MongoDB, Bootstrap
                            Developed a full-stack e-commerce web application with user authentication, product management, shopping cart, and order processing functionalities.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:'center', gap:2}}>
                        <Button size="small" href="https://github.com/HariGanesh-UI/ShopKart-web-app" target="_blank" rel="noopener noreferrer" variant="contained">View Project Repo</Button>
                        <Button size="small" href="#home" target="_blank" rel="noopener noreferrer" variant="outlined">View Live</Button>
                    </CardActions>
                </Card>
                <Card sx={{textAlign:"center", width:{sm:'120px', lg:'440px'}, height:{sm:'120px',lg:'500px'},borderRadius:'10px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <CardMedia sx={{ height: 240, width: 440, objectFit: "cover"}} image="/public/images/todo.png" />
                    <CardContent>
                        <Typography>
                           Todo App
                        </Typography>
                        <Typography>
                            Technologies Used: React.js, Node.js, Express.js, MongoDB, MUI
                            Built a MERN stack todo application with user authentication, allowing users to create, read, update, and delete tasks with a responsive UI.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:'center', gap:2}}>
                        <Button size="small" href="https://github.com/HariGanesh-UI/React-Typescript-to-do-app" target="_blank" rel="noopener noreferrer" variant="contained">View Project Repo</Button>
                        <Button size="small" href="#home" target="_blank" rel="noopener noreferrer" variant="outlined">View Live</Button>
                    </CardActions>
                </Card>
            </div>
        </section>
    )
}