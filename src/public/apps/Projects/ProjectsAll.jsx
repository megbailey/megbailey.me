import React, { useState, useEffect } from "react";
import { 
    Row, Col, Divider, Card, Button, List
} from 'antd';

import { Title, Paragraph } from "../../components/text/Text";

import { projects, ProjectCard } from "./Projects";

const ProjectsAll = ({theme}) => {

    return (
        <>
        <Row>
            <Col>
                <Title 
                    theme={theme}
                    text={"Projects - All"} 
                />
            </Col>
        </Row>
        <Divider />
        <Row>
            <Col>
               <Paragraph
                    theme={theme}
                    text="You’ve opted to see the good AND the bad. Cultivating good software practices and skills takes time and experiences. Big and small, each project is a lesson learned."
               />   
            </Col>
        </Row>
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
        </>
    )
}

export default ProjectsAll;