import React, { useState } from "react";
import PropTypes from "prop-types";
import { 
    Row, Col, Divider
} from 'antd';

import { Title, Paragraph } from "../../components/Text";
import SkillsTools from "../../components/SkillsTools";
import { themeStyle } from "../../assets/styles/global.css";


const About = ({ theme }) => { 

    const { color } = themeStyle(theme)

    return (
        <>
         <Row justify={"left"}>
            <Col>
                <Title>{"About me"}</Title> 
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row justify={"left"} >
            <Col>
                <Paragraph>
                    {"I’m a software engineer, and I specialize in back-end architecture and web application development. I have wide range of skills ranging from CI/CD, infrastructure, to web applications. I am a life-long learner, and I enjoy utilizing software to solving complex problems and expressing my creativity through my work.\
                    Originally from Phoenix, Arizona, I graduated from the University of San Diego, and I never left the area. I enjoy walking around my bustling neighborhood. When the weather is good on the weekends, you can find me walking through the many San Diego parks."}
                </Paragraph>
            </Col>
        </Row>
        <Row justify={"left"} >
            <Col>
                <Title size={2}>{"Skills & Tools"}</Title>
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row justify={"left"} >
            <Col>
                <SkillsTools />
            </Col>
        </Row>
        <Row justify={"left"}  >
            <Col>
                <Title size={2}>{"Experience"}</Title>
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row justify={"left"}  >
            <Col>
               <Paragraph>
                {"This will be a component that can toggle between a tabs component and a \
                 likely timeline component"}
                </Paragraph>
            </Col>
        </Row>
        </>
    )
}

export default About;