import React, { Component } from "react";
import { Box, Container, Typography } from "@mui/material";


const AboutMe = () => {
    return  (
        <React.Fragment>
            <Container className="about-container outlined" maxWidth="sm">
                <Box className="about-box outlined">
                <h2>About me</h2> 
                <p> This is some content about me </p>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default AboutMe;