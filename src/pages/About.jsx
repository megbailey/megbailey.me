import React from "react";
import { Divider } from 'antd';
import { useSelector } from 'react-redux';

import { Title, Paragraph } from "../components/Text.jsx";
import AboutCarousel from "../components/AboutCarousel.jsx";
import Experience from "../components/Experience.jsx";

import '../../assets/styles/about.css'


const About = ({ title, text, photos, experience }) => { 
    const theme = useSelector(state => state.theme.value)

    return (
        <div className={`about-page about-page--${theme.mode}`}>
            <section className="about-page__section">
                <div className="about-page__section-title">
                    <Title>{title}</Title>
                    <Divider />
                </div>
            </section>

            <section className="about-page__intro">
                <div className="about-page__intro-copy">
                    <Paragraph>
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </Paragraph>
                </div>
                <div className="about-page__carousel">
                    <AboutCarousel photos={photos} />
                </div>
            </section>

            <section className="about-page__section">
                <div className="about-page__section-title">
                    <Title size={2}>{experience.title}</Title>
                    <Divider />
                </div>
                <Experience {...experience} />
            </section>
        </div>
    )
}

export default About;
