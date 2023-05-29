import React from "react";
import { 
    Row, Col, Divider, Card, Button, List, Image, Avatar, Space
} from 'antd';
import { DesktopOutlined, FormOutlined } from '@ant-design/icons';

import { Title, Paragraph, Text } from "../../components/Text";

import { themeStyle } from "../../utils/style.js";

import OctocatLight from '../../assets/img/github-48-light.png'
import OctocatDark from '../../assets/img/github-48-dark.png'

const postsConfig = require(`../../assets/posts.json`);
let projects = []
postsConfig['_projectSpotlight'].map(( item ) => {
    if (postsConfig[item])
    projects.push(postsConfig[item])
})

export const ProjectCard = ( props ) => { 
    const { name, description, image: { src, width, height }, githubURL, liveDemoURL, postURL, theme } = props
    console.log(src, height)
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
                        icon={<Avatar size={24} src={theme === "light" ? OctocatLight: OctocatDark} />}
                        block
                    />
                
                {liveDemoURL && (
                    <Button 
                        size={'small'}
                        type="link"
                        shape="circle"
                        href={liveDemoURL}
                        icon={<DesktopOutlined/>}
                        block
                    />
                )}
                {postURL && (
                    <Button 
                        size={'small'}
                        type="link"
                        shape="circle"
                        href={postURL}
                        icon={<FormOutlined />}
                        block
                    />
                )}
                </Space>
            </Space>
        </Card>
    )
}

const Projects = ({theme}) => {
    const { color } = themeStyle(theme)
    return (
        <>
        <Row >
            <Col>
                <Title>{"Projects"}</Title>
                <Divider style={{backgroundColor: color }}/>
            </Col>
        </Row>
        <Row >
            <Col>
                <Paragraph>
                    {"The best part about being a software engineer is dreaming of an idea and having the tools to bring it to life. Below is a showcase of my public projects I’m the proudest of."}
                </Paragraph>
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
            dataSource={projects}
            renderItem={(item) => (
                <ProjectCard 
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