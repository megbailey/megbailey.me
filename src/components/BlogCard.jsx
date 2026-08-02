import React from "react";
import { Card, Image, Space } from 'antd';
import { useSelector } from 'react-redux';

import { Title, Text } from "../components/Text";
import useImage from "../utils/useImage.js";

import '../../assets/styles/cards.css'

const BlogCard = (props) => {
    const { slug, name, description, image: { src, width, height } } = props
    const theme = useSelector(state => state.theme.value)
    const asyncImage = useImage(src)

    return (
        <a href={`/knowledge/${slug}`}>
            <Card
                className={`ant-card--${theme.mode}`}
                title={ <Title size={2}>{name}</Title> } 
                bordered={true}
                size={"medium"}
                styles={{
                    header: theme.style,
                    body: theme.style
                }}
                style={{ 
                    margin: '5%',
                }}
            >      
                <Space direction="vertical" size="middle">  
                    <div className="card-image-container">
                        <Image
                            preview={false}
                            src={src.includes('http') ? src : asyncImage.image}
                        />
                    </div>
                    <Text>{description}</Text>
                </Space>  
            </Card>
        </a>
    )
}

export default BlogCard;