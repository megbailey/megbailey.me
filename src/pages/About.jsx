import React from "react";
import { Row, Col, Divider } from 'antd';
import { useSelector } from 'react-redux';

import { Title, Paragraph } from "../components/Text.jsx";
import RadarChart from "../components/RadarChart.jsx";
import Experience from "../components/Experience.jsx";

import '../../assets/styles/about.css'


const About = ({ title, text, skillsAndTools, experience }) => { 
    const theme = useSelector(state => state.theme.value)
    const { color } = theme.style

    return (
        <div className={`about-page about-page--${theme.mode}`}>
            <section className="about-page__section">
                <div className="about-page__section-title">
                    <Title>{title}</Title>
                    <Divider style={{ backgroundColor: color }} />
                </div>
            </section>

            <section className="about-page__intro">
                <div className="about-page__intro-copy">
                    <Paragraph>
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </Paragraph>
                </div>
                <div className="about-page__chart">
                    <RadarChart {...skillsAndTools.chart} />
                </div>
            </section>

            <section className="about-page__section">
                <div className="about-page__section-title">
                    <Title size={2}>{experience.title}</Title>
                    <Divider style={{ backgroundColor: color }} />
                </div>
                <Experience {...experience} />
            </section>
        </div>
    )
}

export default About;