import React, { useContext } from "react";
import { 
    Row, Col, Divider, Card, Button, List
} from 'antd';

import { Title, Paragraph, Text } from "../../components/Text";

import { ThemeContext } from "../../context/context";
import { themeStyle } from "../../assets/styles/global.css"

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

export const ProjectCard = ({ name, description, image, githubURL, liveDemoURL }) => {
    const theme = useContext(ThemeContext);
    return (
        <Card
            headStyle={ themeStyle(theme) } 
            bodyStyle={ themeStyle(theme) }
            title={name} 
            bordered={true}
            size={"small"}
        >     
            <Text >{image}</Text>
            <Text >{description}</Text>
            <Text >{githubURL}</Text>
            <Text >{liveDemoURL}</Text>

        </Card>
    )
}

const Projects = () => {
    return (
        <>
        <Row >
            <Col>
                <Title>{"Projects"}</Title>
            </Col>
        </Row>
        <Divider />
        <Row >
            <Col>
                <Paragraph>
                    {"The best part about being a software engineer is dreaming of an idea and having the tools to bring it to life. Below is a showcase of my public projects I’m the proudest of."}
                </Paragraph>
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