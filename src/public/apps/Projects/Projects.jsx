import React, { useState, useEffect } from "react";
import { 
    Row, Col, Typography, Divider, Card, Button
} from 'antd';

import Template from "../../../components/template/Template";

const { Title, Paragraph } = Typography

const Projects = () => {

    return (
        <Template 
            content={ <ProjectContent /> }
        />
    )
}

const ProjectContent = () => {

    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title>Projects</Title>
            </Col>
        </Row>
        <Divider />
        <Row 
            justify={"left"} 
        >
            <Col>
                <Paragraph>
                    The best part about being a software engineer is dreaming of an idea and having the tools to bring it to life. Below is a showcase of my public projects I’m the proudest of.
                </Paragraph>
            </Col>
        </Row>
        <Row 
            justify={"center"} 
            gutter={16}
        >
            <Col span={6}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
        <Row 
            justify={"right"} 
        >
            <Button 
                size={'small'}
                type="link"
                href={'/projects/all'}
            >...View All</Button>
        </Row>
        </>
    )
}

export default Projects;