import React, { Component } from "react";
import { Box, Container, Typography } from "@mui/material";


const AboutMe = () => {
    return  (
        <React.Fragment>
            <Container className="about-container outlined" maxWidth="lg">
                <Box className="about-box outlined">
                    <Typography gutterBottom variant="h2" component="div">
                        About Me
                    </Typography>
                    <Typography variant="body" color="text">
                        This is some content about me
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default AboutMe;