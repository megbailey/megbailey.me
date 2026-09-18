import React from "react";
import { Row, Col, Divider, List } from 'antd';

import { Title } from "../components/Text.jsx";
import BlogCard from "../components/BlogCard.jsx";

const Blog = ({ title, posts }) => {
    return (
        <>
        <Row>
            <Col>
                <Title>{title}</Title>
                <Divider />
            </Col>
        </Row>
        <List
            style={{ margin: '1.5% 0' }}
            grid={{
                gutter: [24, 24],
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 3
            }}
            dataSource={posts}
            renderItem={(item) => (
                <List.Item style={{ height: '100%' }}>
                    <BlogCard 
                        { ...item }
                    />
                </List.Item>
            )}
        />
        </>
    )
}

export default Blog;