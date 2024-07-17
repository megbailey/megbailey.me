import React from "react";
import { Card, Image, Space } from 'antd';
import { useSelector } from 'react-redux';

import { Title, Text } from "../components/Text";
import useImage from "../utils/useImage.js";

import '../../assets/styles/cards.css'

const BlogCard = (props) => {
    const { id, name, description, image: { src, width, height } } = props
    const theme = useSelector(state => state.theme.value)
    const asyncImage = useImage(src)

    return (
        <a href={`/blog/post?id=${id}`}>
            <Card
                title={ <Title size={2}>{name}</Title> } 
                bordered={true}
                size={"medium"}
                styles={{
                    width: 300,
                    height: 400,
                    header: theme.style,
                    body: theme.style
                }}
                style={{ 
                    margin: '5%',
                }}
            >      
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>  
                    <Image
                        preview={false}
                        src={src.includes('http') ? src : asyncImage.image}
                        width={width ? width : '100%'}
                        height={height ? height : '100%'}
                    />
                <Text>{description}</Text>
                </Space>  
            </Card>
        </a>
    )
}

export default BlogCard;