import React, { useState } from "react";
import PropTypes from "prop-types";
import { 
    Row, Col, Divider
} from 'antd';

import { Title, Paragraph } from "../../components/text/Text";

const Post = ({ theme }) => { 
    return (
        <>
         <Row justify={"left"}>
               <Title 
                    theme={theme}
                    text="Post title" 
               />
        </Row>
        <Divider />
        <Row 
            justify={"left"} 
        >
            <Col>
                <Paragraph 
                    theme={theme}
                    text={"Post text here?"}
                />
            </Col>
        </Row>
        </>
    )
}

export default Post;