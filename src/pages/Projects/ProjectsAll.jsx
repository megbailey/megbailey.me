import React from "react";
import { 
    Row, Col, Divider, List
} from 'antd';

import { Title, Paragraph } from "../../components/Text";

import { ProjectCard } from "./Projects";

const postsConfig = require(`../../assets/posts.json`);
let projects = []
Object.keys(postsConfig).map(( key ) => {
    const item = postsConfig[key]
    if ( item.type && item.type === 'project')
        projects.push(item)
})

const ProjectsAll = () => {

    return (
        <>
        <Row>
            <Col>
                <Title>{"Projects - All"}</Title>
            </Col>
        </Row>
        <Divider />
        <Row>
            <Col>
               <Paragraph>
                {"You’ve opted to see the good AND the bad. Cultivating good software practices and skills takes time and experiences. Big and small, each project is a lesson learned."}
               </Paragraph>
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
            dataSource={projects}
            renderItem={(item) => (
                <ProjectCard 
                    { ...item }
                />
            )}
        />
        </>
    )
}

export default ProjectsAll;