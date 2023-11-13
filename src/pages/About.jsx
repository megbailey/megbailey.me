import React from "react";
//import PropTypes from "prop-types";
import { 
    Row, Col, Divider
} from 'antd';

import { themeStyle } from "../utils/style.js";

import { Title, Paragraph } from "../components/Text.jsx";
import SkillsAndTools from "../components/SkillsAndTools.jsx";
import Experience from "../components/Experience.jsx";


const About = ({ title, text, skillsAndTools, experience, theme }) => { 

    const { color } = themeStyle(theme)

    return (
        <>
         <Row >
            <Col>
                <Title>{title}</Title> 
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row >
            <Col>
                <Paragraph>
                    {text}
                </Paragraph>
            </Col>
        </Row>
        <Row >
            <Col>
                <Title size={2}>{skillsAndTools.title}</Title>
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row >
            <Col>
                <SkillsAndTools {...skillsAndTools} />
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