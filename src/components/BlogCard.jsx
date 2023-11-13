import React from "react";
import { Col, Card, Button, Image } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { Text } from "../components/Text";
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

export default BlogCard;