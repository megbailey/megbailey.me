import React, { useState, useEffect } from "react";
import { 
    Row, Col, Typography, Divider, Card, Button
} from 'antd';

import Template from "../../../components/template/Template";

const { Title, Paragraph } = Typography


const ProjectsAll = () => {

    return (
        <Template 
            content={ <ProjectsAllContent /> }
        />
    )
}

const ProjectsAllContent = () => {

    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title>Projects - All</Title>
            </Col>
        </Row>
        <Divider />
        <Row 
            justify={"left"}
        >
            <Col>
               <Paragraph>
               You’ve opted to see the good AND the bad. Cultivating good software practices and skills takes time and experiences. Big and small, each project is a lesson learned.
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
        </>
    )
}

export default ProjectsAll;