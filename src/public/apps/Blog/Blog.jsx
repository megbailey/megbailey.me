import React, { useState, useEffect } from "react";
import { 
    Row, Col, Typography, Divider, Card, Button, List
} from 'antd';

import { Text, Title, Paragraph } from "../../components/text/Text";
import { themeStyle } from "../../../assets/styles/global.css"

export const posts = [
    {
        "title": "title",
        "description": "description",
        "image": "imagesrc",
        "text": "text",
        "url": "url",
    },
    {
        "title": "title",
        "description": "description",
        "image": "imagesrc",
        "text": "text",
        "url": "url",
    },
    {
        "title": "title",
        "description": "description",
        "image": "imagesrc",
        "text": "text",
        "url": "url",
    },
    {
        "title": "title",
        "description": "description",
        "image": "imagesrc",
        "text": "text",
        "url": "url",
    },
    {
        "title": "title",
        "description": "description",
        "image": "imagesrc",
        "text": "text",
        "url": "url",
    },
]

const BlogCard = ({ theme, title, description, image, text, url }) => {
    return (
        <Card
            headStyle={ themeStyle(theme) } 
            bodyStyle={ themeStyle(theme) }
            title={title} 
            bordered={true}
            size={"small"}
        >     
            <Text theme={theme} text={title}></Text>
            <Text theme={theme} text={image}></Text>
            <Text theme={theme} text={description}></Text>
            <Text theme={theme} text={text}></Text>
            <Text theme={theme} text={url}></Text>
        </Card>
    )
}

const Blog = ({ theme }) => {
    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title 
                    theme={theme}
                    text={"Blog"} 
                />
                <Divider />
            </Col>
        </Row>
        <List
            style={{ margin: '10%' }}
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