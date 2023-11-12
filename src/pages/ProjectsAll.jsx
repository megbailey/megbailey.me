import React from "react";
import {  Row, Col, Divider, List } from 'antd';

import { Title, Paragraph } from "../components/Text";
import ProjectCard from "../components/ProjectCard";

const ProjectsAll = ({ viewAll: { title, text }, posts }) => {

    return (
        <>
        <Row>
            <Col>
                <Title>{title}</Title>
            </Col>
        </Row>
        <Divider />
        <Row>
            <Col>
               <Paragraph>{text}</Paragraph>
            </Col>
        </Row>
       <List
            style={{ margin: '2%' }}
            grid={{
                gutter: [48, 16],
                    xs: 1,
                    sm: 2,
                    med: 3,
                    lg: 4
            }}
            dataSource={posts}
            renderItem={(item, key) => (
                <ProjectCard 
                    id={key}
                    { ...item }
                />
            )}
        />
        </>
    )
}

export default ProjectsAll;