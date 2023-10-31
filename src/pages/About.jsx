import React from "react";
//import PropTypes from "prop-types";
import { 
    Row, Col, Divider
} from 'antd';

import { themeStyle } from "../utils/style.js";

import { Title, Paragraph } from "../components/Text.jsx";
import SkillsAndTools from "../components/SkillsAndTools.jsx";
import Experience from "../components/Experience.jsx";


const About = ({ theme }) => { 

    const { color } = themeStyle(theme)

    return (
        <>
         <Row >
            <Col>
                <Title>{"About me"}</Title> 
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row >
            <Col>
                <Paragraph>
                    {"I’m a software engineer, and I specialize in backend services and web application development. I am a life-long learner, and I enjoy utilizing software to solving complex problems and expressing my creativity through my work.\
                    I graduated from the University of San Diego, and I never left the area. I enjoy walking around my bustling neighborhood and through the many San Diego parks on the weekends."}
                </Paragraph>
            </Col>
        </Row>
        <Row >
            <Col>
                <Title size={2}>{"Skills & Tools"}</Title>
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row >
            <Col>
                <SkillsAndTools />
            </Col>
        </Row>
        <Row  >
            <Col>
                <Title size={2}>{"Experience"}</Title>
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row >
            <Col>
              <Experience />
            </Col>
        </Row>
        </>
    )
}

export default About;