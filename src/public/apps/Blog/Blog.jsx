import React, { useState, useEffect } from "react";
import { 
    Row, Col, Typography, Divider, Card, Button
} from 'antd';


import Template from "../../../components/template/Template";
import { Title, Paragraph } from "../../../components/text/Text";

const Blog = ({ theme }) => {
    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title 
                    theme={theme}
                    text={"Blog"} 
                />
            </Col>
        </Row>
        <Divider />
        <Row 
            justify={"center"} 
            gutter={16}
        >
            <Col span={6}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default Blog;