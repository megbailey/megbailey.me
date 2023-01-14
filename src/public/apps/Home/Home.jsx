import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../../components/Banner";
import AboutMe from "../../../components/AboutMe";
import ProjectCard from "../../../components/ProjectCard";
import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer";

function Home () {
    return (
        <React.Fragment>
            <NavBar />
            <section>
                <Container fluid className="home-section" id="home">
                    <Container className="home-content">
                    <div className="row">
                        <div className="column">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi!
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Megan</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                
                            </div>
                        </div>
                    </div>
                    </Container>
                </Container>
    </section>
            <AboutMe />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ContactForm />
            <Footer />
        </React.Fragment>
    )
}

export default Home;