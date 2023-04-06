import React from "react";
import { Box, Container, Typography } from "@mui/material";


const Experience = (props) => {
    return  (
        <React.Fragment>
            <Container className="experience-container outlined" maxWidth="lg">
                <Box className="experience-box outlined">
                    <Typography gutterBottom variant="h2" component="div">
                        Experience
                    </Typography>
                    <Typography variant="body" color="text">
                        {props.text}
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Experience;