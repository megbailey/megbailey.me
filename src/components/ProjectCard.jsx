import React from "react";
import {  Card, Button, Image, Avatar, Space } from 'antd';
import { DesktopOutlined, FormOutlined } from '@ant-design/icons';
import { Text } from "../components/Text";
import { themeStyle } from "../utils/style.js";

import OctocatLight from '../assets/img/github-48-light.png'
import OctocatDark from '../assets/img/github-48-dark.png'

const ProjectCard = ( props ) => { 
    const { id, name, description, image: { src, width, height }, githubURL, liveDemoURL, theme } = props
    return (
        <Card
            headStyle={ themeStyle(theme) } 
            bodyStyle={ themeStyle(theme) }
            title={name} 
            bordered={true}
            size={"small"}
            style={{ 
                margin: '3%',
            }}
        >     
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Image
                preview={false}
                src={src}
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
                        icon={<Avatar size={24} src={theme === "light" ? OctocatLight: OctocatDark} />}
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
    )
}

export default ProjectCard;