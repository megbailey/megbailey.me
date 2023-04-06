import React from "react";
import { Box, Container, Typography } from "@mui/material";


const AboutMe = (props) => {
    return  (
        <React.Fragment>
            <Container className="about-container outlined" maxWidth="lg">
                <Box className="about-box outlined">
                    <Typography gutterBottom variant="h2" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body" color="text">
                        {props.text}
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default AboutMe;