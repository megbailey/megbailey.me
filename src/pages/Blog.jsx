import React from "react";
import { Row, Col, Divider, List } from 'antd';
import { useSelector } from 'react-redux';

import { Title } from "../components/Text.jsx";
import BlogCard from "../components/BlogCard.jsx";

const Blog = ({ title, posts }) => {
    const theme = useSelector(state => state.theme.value)
    const { color } = theme.style

    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title>{title}</Title>
                <Divider style={{ backgroundColor: color }} />
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
            renderItem={(item, index) => (
                <BlogCard 
                    id={index}                    
                    { ...item }
                />
            )}
        />
        </>
    )
}

export default Blog;