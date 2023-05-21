import React, { useContext } from "react";
//import PropTypes from "prop-types";
import { 
    Row, Col, Divider
} from 'antd';

import { Title, Paragraph } from "../../components/text/Text";
import { ThemeContext } from "../../context/context";

const Post = () => { 
    const theme = useContext(ThemeContext)
    
    return (
        <>
         <Row justify={"left"}>
               <Title>{"Post title"}</Title>
        </Row>
        <Divider />
        <Row 
            justify={"left"} 
        >
            <Col>
                <Paragraph>{"Post text here?"}</Paragraph>
            </Col>
        </Row>
        </>
    )
}

export default Post;