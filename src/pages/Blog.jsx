import React from "react";
import { 
    Row, Col, Divider, Card, List, Button, Image
} from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { Text, Title } from "../components/Text";
import { themeStyle } from "../utils/style.js";

const BlogCard = (props) => {
    const { id, name, description, image: { src, width, height }, theme } = props
    return (
        <Card
            headStyle={ themeStyle(theme) } 
            bodyStyle={ themeStyle(theme) }
            title={name} 
            bordered={true}
            size={"small"}
            style={{ 
                margin: '3%'
            }}
        >             
            <Image
                preview={false}
                src={src}
                width={width ? width : '100%'}
                height={height ? height : '100%'}
            />
            <Text>{description}</Text>
            <Col xs={{ span: 6 }}>
                <Button 
                    size={'small'}
                    type="link"
                    shape="circle"
                    href={`/blog/post?id=${id}`}
                    icon={<FormOutlined />}
                    block
                />
            </Col>
        </Card>
    )
}

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