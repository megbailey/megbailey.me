import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import ProjectCard from "../../../components/project/ProjectCard";
function Projects () {

    const projectItems = [
        {
            name: "",
            shortDescription: "",
            longDescription: "",
            images: {
                grid: "https://via.placeholder.com/250x150.png",
                header: "https://via.placeholder.com/1045x250.png"
            },
            technologyStack: [
                {
                    name: "",
                    label: "",
                    icon: ""
                }
            ],
            blogPost: "router link to blog post",
            github: "",
            liveDemo: ""
        },
        {
            name: "",
            shortDescription: "",
            longDescription: "",
            images: {
                grid: "https://via.placeholder.com/250x150.png",
                header: "https://via.placeholder.com/1045x250.png"
            },
            technologyStack: [
                {
                    name: "",
                    label: "",
                    icon: ""
                }
            ],
            blogPost: "router link to blog post",
            github: "",
            liveDemo: ""
        },
        {
            name: "",
            shortDescription: "",
            longDescription: "",
            images: {
                grid: "https://via.placeholder.com/250x150.png",
                header: "https://via.placeholder.com/1045x250.png"
            },
            technologyStack: [
                {
                    name: "",
                    label: "",
                    icon: ""
                }
            ],
            blogPost: "router link to blog post",
            github: "",
            liveDemo: ""
        },
        {
            name: "",
            shortDescription: "",
            longDescription: "",
            images: {
                grid: "https://via.placeholder.com/250x150.png",
                header: "https://via.placeholder.com/1045x250.png"
            },
            technologyStack: [
                {
                    name: "",
                    label: "",
                    icon: ""
                }
            ],
            blogPost: "router link to blog post",
            github: "",
            liveDemo: ""
        },
        {
            name: "",
            shortDescription: "",
            longDescription: "",
            images: {
                grid: "https://via.placeholder.com/250x150.png",
                header: "https://via.placeholder.com/1045x250.png"
            },
            technologyStack: [
                {
                    name: "",
                    label: "",
                    icon: ""
                }
            ],
            blogPost: "router link to blog post",
            github: "",
            liveDemo: ""
        },
        {
            name: "",
            shortDescription: "",
            longDescription: "",
            images: {
                grid: "https://via.placeholder.com/250x150.png",
                header: "https://via.placeholder.com/1045x250.png"
            },
            technologyStack: [
                {
                    name: "",
                    label: "",
                    icon: ""
                }
            ],
            blogPost: "router link to blog post",
            github: "",
            liveDemo: ""
        },
        {
            name: "",
            shortDescription: "",
            longDescription: "",
            images: {
                grid: "https://via.placeholder.com/250x150.png",
                header: "https://via.placeholder.com/1045x250.png"
            },
            technologyStack: [
                {
                    name: "",
                    label: "",
                    icon: ""
                }
            ],
            blogPost: "router link to blog post",
            github: "",
            liveDemo: ""
        }
    ]

    return (
        <React.Fragment>
            <Container className="about-container outlined" maxWidth="lg">
                <Box className="about-box outlined">
                    <Typography gutterBottom variant="h1" component="div">
                        Check out my work
                    </Typography>
                    <Grid container className="project-spotlight outlined" justifyContent="center" spacing={1} columns={16}>
                        <Grid item xs={8}>
                            <ProjectCard />
                        </Grid>
                        <Grid item xs={8}>
                            <ProjectCard />
                        </Grid>
                    </Grid>
                    <Typography gutterBottom variant="h2" component="div">
                         All Projects
                    </Typography>
                    <Grid container className="project-grid outlined" justifyContent="center" spacing={1} columns={16}>
                        { projectItems.map(( items, index ) => {
                            return (
                                <Grid item xs={4}>
                                    <ProjectCard />
                                </Grid>
                            )
                          
                            }) 
                        }
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Projects;