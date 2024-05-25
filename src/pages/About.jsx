import React from "react";
import { Row, Col, Divider } from 'antd';
import { useSelector } from 'react-redux';


import { Title, Paragraph } from "../components/Text.jsx";
import {SkillsRadarChart} from "../components/SkillsAndTools.jsx";
import Experience from "../components/Experience.jsx";
import useDevice from "../utils/useDevice.js";


const About = ({ title, text, skillsAndTools, experience }) => { 
    const theme = useSelector(state => state.theme.value)
    const device = useDevice();
    const { color } = theme.style

    return (
        <>
         <Row >
            <Col>
                <Title>{title}</Title> 
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row gutter={device === "mobile" ? 10 : "tablet" ? 50 : 100}>
            <Col span={6} xs={12} >
                <Paragraph>
                    {text}
                </Paragraph>
            </Col>
            <Col span={6} xs={12}>
                <SkillsRadarChart {...skillsAndTools.chart} />
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