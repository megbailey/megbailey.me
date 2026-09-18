import React from "react";
import { Divider, List } from 'antd';

import { Title, Paragraph } from "../components/Text.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = ({ title, text, projectSpotlight, posts }) => {
    let spotlightedProjects = []

    /* for (const id of projectSpotlight) {
        if (posts[id])
            spotlightedProjects.push({
                id: id,
                ...posts[id]
            })
    } */

    return (
        <div className="page-stack">
            <section className="page-stack__section">
                <div className="page-stack__header">
                    <Title>{title}</Title>
                    <Divider />
                </div>
                <Paragraph className="page-stack__intro">{text}</Paragraph>
                <List
                    className="page-stack__list"
                    grid={{
                        gutter: [24, 24],
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 3
                    }}
                    dataSource={posts}
                    renderItem={(item) => (
                        <List.Item style={{ height: '100%' }}>
                            <ProjectCard 
                                { ...item }
                            />
                        </List.Item>
                    )}
                />
            </section>
        </div>
    )
}

export default Projects;