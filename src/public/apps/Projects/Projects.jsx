import React, { useState, useEffect } from "react";
import { 
    Row, Col, Divider, Card, Button, List
} from 'antd';

import { Title, Paragraph, Text } from "../../components/text/Text";
import { themeStyle } from "../../../assets/styles/global.css"

export const projects = [
    {
        "name": "name",
        "description": "description",
        "image": "imagesrc",
        "githubURL": "http://github",
        "liveDemoURL": "liveDemoURL",
        "blogPost": "blogPost",
    },
    {
        "name": "name",
        "description": "description",
        "image": "imagesrc",
        "githubURL": "http://github",
        "liveDemoURL": "liveDemoURL",
        "blogPost": "blogPost",
    },
    {
        "name": "name",
        "description": "description",
        "image": "imagesrc",
        "githubURL": "http://github",
        "liveDemoURL": "liveDemoURL",
        "blogPost": "blogPost", 
    },
    {
        "name": "name",
        "description": "description",
        "image": "imagesrc",
        "githubURL": "http://github",
        "liveDemoURL": "liveDemoURL",
        "blogPost": "blogPost",
    },
    {
        "name": "name",
        "description": "description",
        "image": "imagesrc",
        "githubURL": "http://github",
        "liveDemoURL": "liveDemoURL",
        "blogPost": "blogPost", 
    }
]

export const ProjectCard = ({ theme, name, description, image, githubURL, liveDemoURL }) => {
    return (
        <Card
            headStyle={ themeStyle(theme) } 
            bodyStyle={ themeStyle(theme) }
            title={name} 
            bordered={true}
            size={"small"}
        >     
            <Text theme={theme} text={image}></Text>
            <Text theme={theme} text={description}></Text>
            <Text theme={theme} text={githubURL}></Text>
            <Text theme={theme} text={liveDemoURL}></Text>

        </Card>
    )
}

const Projects = ({ theme }) => {

    return (
        <>
        <Row >
            <Col>
                <Title 
                    text="Projects"
                    theme={theme}
                />
            </Col>
        </Row>
        <Divider />
        <Row >
            <Col>
                <Paragraph 
                    text="The best part about being a software engineer is dreaming of an idea and having the tools to bring it to life. Below is a showcase of my public projects I’m the proudest of."
                    theme={theme}
                />
            </Col>
        </Row >
        <List
            style={{ margin: '10%' }}
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
            style={{ justifyContent: 'end' }}
        >...View All</Button>
        </>
    )
}

export default Projects;