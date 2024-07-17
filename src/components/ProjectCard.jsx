import React from "react";
import { useSelector } from 'react-redux';
import { Card, Button, Image, Avatar, Space } from 'antd';
import { DesktopOutlined, FormOutlined } from '@ant-design/icons';

import { Title, Text } from "../components/Text";
import useImage from "../utils/useImage.js";

import OctocatLight from '../../assets/img/github-48-light.png'
import OctocatDark from '../../assets/img/github-48-dark.png'

import '../../assets/styles/cards.css'


const ProjectCard = ( props ) => { 
    const { 
        id, 
        name, 
        description, 
        image: { src, width, height }, 
        githubURL, 
        liveDemoURL,
    } = props
    
    const theme = useSelector(state => state.theme.value)
    const asyncImage = useImage(src)

    return (
        <a href={`/projects/post?id=${id}`}>
        <Card
            title={ <Title size={2}>{name}</Title> } 
            bordered={true}
            size={"small"}
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
                width={width}
                height={height}
            ></Image>
            <Text >{description}</Text>
                 <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                    <Button 
                        size={'small'}
                        type="link"
                        shape="circle"
                        href={githubURL}
                        target={'_blank'}
                        icon={<Avatar size={24} src={theme.mode === "light" ? OctocatLight: OctocatDark} />}
                        block
                    />
                {liveDemoURL && (
                    <Button 
                        size={'small'}
                        type="link"
                        shape="circle"
                        href={liveDemoURL}
                        target={'_blank'}
                        icon={<DesktopOutlined/>}
                        block
                    />
                )}
                <Button 
                    size={'small'}
                    type="link"
                    shape="circle"
                    href={`/projects/post?id=${id}`}
                    icon={<FormOutlined />}
                    block
                />
                </Space>
            </Space>
        </Card>
        </a>
    )
}

export default ProjectCard;