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

const Post = (props) => {
    return  (
        <Template 
            content={ <PostContent /> }
        />
    )
}

const PostContent = () => { 
    return (
        <>
         <Row justify={"left"}>
               <Title>Post title</Title>
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
                    Post text here?
                </Paragraph>
            </Col>
        </Row>
        </>
    )
}

export default About;