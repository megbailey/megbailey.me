import React from "react";
import {  Row, Col, Divider, List } from 'antd';
import { Title } from "../components/Text";
import { themeStyle } from "../utils/style.js";
import BlogCard from "../components/BlogCard";

const Blog = ({ title, posts, theme }) => {
    const { color } = themeStyle(theme)
    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title>{title}</Title>
                <Divider style={{backgroundColor: color }} />
            </Col>
        </Row>
        <List
            style={{ margin: '2%' }}
            grid={{
                gutter: [48, 16],
                    xs: 1,
                    sm: 2,
                    med: 3,
                    lg: 4
            }}
            dataSource={posts}
            renderItem={(item) => (
                <BlogCard 
                    theme={theme} 
                    { ...item }
                />
            )}
        />
        </>
    )
}

export default Blog;