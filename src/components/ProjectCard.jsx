import React from "react";
import { useSelector } from 'react-redux';
import { Card, Button, Image, Avatar, Space } from 'antd';
import { DesktopOutlined, FormOutlined } from '@ant-design/icons';

import { Title, Text } from "../components/Text";
import useImage from "../utils/useImage.js";

import OctocatLight from '../../assets/img/github-48-light.png'
import OctocatDark from '../../assets/img/github-48-dark.png'
import blogLight from '../../assets/img/MeganLogo_icons-48.png'
import blogDark from '../../assets/img/MeganLogo_icons-45.png'

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
            className={`ant-card--${theme.mode}`}
            title={ <Title size={2}>{name}</Title> } 
            bordered={true}
            size={"small"}
            styles={{
                header: theme.style,
                body: theme.style
            }}
            style={{ 
                margin: '5%',
            }}
        >     
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <div className="card-image-container">
                <Image
                    preview={false}
                    src={src.includes('http') ? src : asyncImage.image}
                />
            </div>
            <div>
                <Text>{description}</Text>
                <hr 
                    style={{ 
                        border: `1px double ${theme.mode === 'dark' ? 'white': 'black'}`
                    }}
                />
                <Space 
                    direction="horizontal" 
                    size="middle" 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                >
                    <Button 
                        size={'middle'}
                        type="link"
                        shape="circle"
                        href={githubURL}
                        target={'_blank'}
                        icon={<Avatar 
                            size={32} 
                            src={theme.mode === "light" ? OctocatLight: OctocatDark} 
                        />}
                    />
                    {liveDemoURL && (
                        <Button 
                            size={'middle'}
                            type="link"
                            shape="circle"
                            href={liveDemoURL}
                            target={'_blank'}
                            icon={<DesktopOutlined style={{ fontSize: '18px' }}/>}
                        />
                    )}
                    <Button 
                        size={'middle'}
                        type="link"
                        shape="circle"
                        href={`/projects/post?id=${id}`}
                        icon={<Avatar 
                            size={32} 
                            src={theme.mode === 'dark' ? blogLight : blogDark} 
                        />}
                    />
                </Space>
                </div>
            </Space>
        </Card>
        </a>
    )
}

export default ProjectCard;