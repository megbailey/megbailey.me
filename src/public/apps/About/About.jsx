import React, { useState } from "react";
import PropTypes from "prop-types";
import { 
    Row, Col, Typography, Divider
} from 'antd';

import Template from "../../../components/template/Template";

const { Title, Paragraph } = Typography
  
  const styles = {
    paragraphBackgroundColor: '#a785db',
    skillsBackgroundColor: '#ccb6ec',
    expBackgroundColor: '#b19fcb'
  };

const About = (props) => {
    return  (
        <Template 
            content={ <AboutContent /> }
        />
    )
}

const AboutContent = () => { 
    return (
        <div>
         <Row justify={"left"}>
            <Col>
                <Title>About me</Title>
            </Col>
        </Row>
        <Divider />
        <Row 
            justify={"left"} 
            style={{
                backgroundColor: styles.paragraphBackgroundColor 
            }}
        >
            <Col>
                <Paragraph>
                    I’m a software engineer, and I specialize in back-end architecture and web application development. I have wide range of skills ranging from CI/CD, infrastructure, to web applications. I am a life-long learner, and I enjoy utilizing software to solving complex problems and expressing my creativity through my work.
                    Originally from Phoenix, Arizona, I graduated from the University of San Diego, and I never left the area. I enjoy walking around my bustling neighborhood. When the weather is good on the weekends, you can find me walking through the many San Diego parks.
                </Paragraph>
            </Col>
        </Row>
        <Row 
            justify={"left"} 
            style={{
                backgroundColor:styles.skillsBackgroundColor
            }}
        >
            <Col>
               <Paragraph>
                    This will be a component that can toggle between a custom skill map 
                    and some sort of list w/ groups
                </Paragraph>
            </Col>
        </Row>
        <Row 
            justify={"left"} 
            style={{
                backgroundColor:styles.expBackgroundColor
            }} 
        >
            <Col>
               <Paragraph>
                    This will be a component that can toggle between a tabs component and a 
                    likely timeline component
                </Paragraph>
            </Col>
        </Row>
        </div>
    )
}

export default About;