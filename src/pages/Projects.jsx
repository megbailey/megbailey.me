import React from "react";
import { Row, Col, Divider, Button, List } from 'antd';
import { Title, Paragraph } from "../components/Text";
import { themeStyle } from "../utils/style.js";
import ProjectCard from "../components/ProjectCard";

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