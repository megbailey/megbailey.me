import React from "react";
import { Box, Container, Typography } from "@mui/material";


const BlogPost = (props) => {
    return  (
        <React.Fragment>
            <Container className="post-container outlined" maxWidth="lg">
                <Box className="post-box outlined">
                    <Typography gutterBottom variant="h2" component="div">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle" component="div">
                        {props.date}
                    </Typography>
                    <Typography variant="body" color="text">
                        {props.fullText}
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default BlogPost;