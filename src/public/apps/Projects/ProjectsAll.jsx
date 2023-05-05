import React, { useState, useEffect } from "react";
import { 
    Row, Col, Divider, Card, Button
} from 'antd';

import { Title, Paragraph } from "../../../components/text/Text";


const ProjectsAll = ({theme}) => {

    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title 
                    theme={theme}
                    text={"Projects - All"} 
                />
            </Col>
        </Row>
        <Divider />
        <Row 
            justify={"left"}
        >
            <Col>
               <Paragraph
                    theme={theme}
                    text="You’ve opted to see the good AND the bad. Cultivating good software practices and skills takes time and experiences. Big and small, each project is a lesson learned."
               />   
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