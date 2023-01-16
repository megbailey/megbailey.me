import React, { useState, useEffect } from "react";
import { Container, Grid, Item } from "@mui/material";
import AboutMe from "../../../components/AboutMe";
import ProjectCard from "../../../components/ProjectCard";
import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

function Home () {
    return (
        <React.Fragment>
            <section>
                <Container className="home-section" id="home">
                    <Container className="home-content">
                    <Header />
                    </Container>
                </Container>
            </section>
            <AboutMe />
            <Grid container spacing={2} columns={16}>
                <Grid item xs={5}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={5}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={5}>
                    <ProjectCard />
                </Grid>
            </Grid>
            <ContactForm />
            <Footer />
        </React.Fragment>
    )
}

export default Home;