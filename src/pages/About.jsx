import React from "react";
import { Row, Col, Divider } from 'antd';
import { useSelector } from 'react-redux';

import { Title, Paragraph } from "../components/Text.jsx";
import RadarChart from "../components/RadarChart.jsx";
import Experience from "../components/Experience.jsx";


const About = ({ title, text, skillsAndTools, experience }) => { 
    const theme = useSelector(state => state.theme.value)
    const { color } = theme.style

    return (
        <>
         <Row >
            <Col>
                <Title>{title}</Title> 
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row>
            <Col flex="1 0 25%" >
                <Paragraph>
                    {text}
                </Paragraph>
            </Col>
            <Col flex="1 0 25%">
                <RadarChart {...skillsAndTools.chart} />
            </Col>
        </Row>
        <Row  >
            <Col>
                <Title size={2}>{experience.title}</Title>
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row >
            <Col>
              <Experience {...experience} />
            </Col>
        </Row>
        </>
    )
}

export default About;