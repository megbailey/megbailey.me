import React, { useContext } from "react";
import { 
    Row, Col, Divider, Card, List, Button, Image
} from 'antd';
import { FormOutlined } from '@ant-design/icons';


import { Text, Title } from "../../components/Text";
import { themeStyle } from "../../assets/styles/global.css"
import { ThemeContext } from "../../context/context";

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

const BlogCard = ({ title, description, image, url, theme }) => {
//onst theme = useContext(ThemeContext);
    return (
        <Card
            headStyle={ themeStyle(theme) } 
            bodyStyle={ themeStyle(theme) }
            title={title} 
            bordered={true}
            size={"small"}
            style={{ 
                margin: '3%'
            }}
        >             
            <Image
                preview={false}
                src="http://placehold.it/200x100"
                width={'100%'}
            />
            <Text >{description}</Text>
            <Col xs={{ span: 6 }}>
                <Button 
                    size={'small'}
                    type="link"
                    shape="circle"
                    href={url}
                    icon={<FormOutlined />}
                    block
                />
            </Col>
        </Card>
    )
}

const Blog = ({ theme }) => {
    const { color } = themeStyle(theme)
    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title>Blog</Title>
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
                <BlogCard theme={theme} { ...item } />
            )}
        />
        </>
    )
}

export default Blog;