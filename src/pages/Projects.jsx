import React from "react";
import { 
    Row, Col, Divider, Card, Button, List, Image, Avatar, Space
} from 'antd';
import { DesktopOutlined, FormOutlined } from '@ant-design/icons';
import { Title, Paragraph, Text } from "../components/Text";
import { themeStyle } from "../utils/style.js";

import OctocatLight from '../assets/img/github-48-light.png'
import OctocatDark from '../assets/img/github-48-dark.png'

export const ProjectCard = ( props ) => { 
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

const Projects = ({ theme, title, text, projectSpotlight, posts }) => {
    const { color } = themeStyle(theme)
    let spotlightedProjects = []

    for (const id of projectSpotlight) {
        if (posts[id])
            spotlightedProjects.push({
                id: id,
                ...posts[id]
            })
    }

    return (
        <>
        <Row >
            <Col>
                <Title>{title}</Title>
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row >
            <Col>
                <Paragraph>{text}</Paragraph>
            </Col>
        </Row >
        <List
            style={{ margin: '2%' }}
            grid={{
                gutter: [48, 16],
                    xs: 1,
                    sm: 2,
                    med: 3,
                    lg: 4
            }}
            dataSource={spotlightedProjects}
            renderItem={(item, key) => (
                <ProjectCard 
                    id={key}
                    theme={theme}
                    { ...item }
                />
            )}
        />
        <Button 
            size={'small'}
            type="link"
            href={'/projects/all'}
            style={{ float: 'right' }}
        >...View All</Button>
        </>
    )
}

export default Projects;