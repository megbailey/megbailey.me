import React from "react";
import { Col, Card, Button, Image } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import { Text } from "../components/Text";


const BlogCard = (props) => {
    const { id, name, description, image: { src, width, height } } = props
    const theme = useSelector(state => state.theme.value)

    return (
        <Card
            headStyle={theme.style} 
            bodyStyle={theme.style}
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