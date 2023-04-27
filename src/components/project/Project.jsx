import React from "react";
import { Box, Container, Typography } from "@mui/material";


const Project = (props) => {
    return  (
        <React.Fragment>
            <Container className="project-container outlined" maxWidth="lg">
                <Box className="project-box outlined">
                    <Typography gutterBottom variant="h3" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body" color="text">
                        {props.description}
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Project;