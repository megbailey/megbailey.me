import React, { Component } from "react";
import { Box, Container, Typography } from "@mui/material";


const ProjectCard = () => {
    return  (
        <Container className="project-card-container outlined" maxWidth="sm">
            <p> I will be an h3 or relative header </p>
            <p> I will be an image  </p>
            <p> I will be a short project description to get the audience interested in clicking</p>
            <p> I will be some links to github and live demio</p>
        </Container>
    )
}

export default ProjectCard;