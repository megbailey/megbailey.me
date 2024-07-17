import React from "react";
import { Row, Col, Divider, Button, List } from 'antd';
import { useSelector } from 'react-redux';

import { Title, Paragraph } from "../components/Text.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = ({ title, text, projectSpotlight, posts }) => {
    
    const theme = useSelector(state => state.theme.value)
    const { color } = theme.style

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
                    lg: 3,
                    xl: 3,
                    xxl: 4
            }}
            dataSource={spotlightedProjects}
            renderItem={(item, index) => (
                <ProjectCard 
                    id={index}
                    { ...item }
                />
            )}
        />
        <Button 
            size={'small'}
            type="link"
            href={'/projects/all'}
            style={{ 
                justifySelf: 'right',
                padding: 16,
                border: 1,
                borderColor: "black",
                ...theme.style
            }}
        >...View All</Button>
        </>
    )
}

export default Projects;