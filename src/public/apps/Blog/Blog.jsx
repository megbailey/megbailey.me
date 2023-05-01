import React, { useState, useEffect } from "react";
import { 
    Row, Col, Typography, Divider, Card, Button
} from 'antd';

import Template from "../../../components/template/Template";

const { Title } = Typography

const Blog = ()  => {
    return (
        <Template 
            content={ <BlogContent /> }
        />
    )
}

const BlogContent = () => {
    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title>Blog</Title>
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