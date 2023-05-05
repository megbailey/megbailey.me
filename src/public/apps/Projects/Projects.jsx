import React, { useState, useEffect } from "react";
import { 
    Row, Col, Divider, Card, Button
} from 'antd';

import { Title, Paragraph } from "../../../components/text/Text";


const Projects = ({ theme }) => {

    return (
        <>
        <Row justify={"left"}>
            <Col>
                <Title 
                    text="Projects"
                    theme={theme}
                />
            </Col>
        </Row>
        <Divider />
        <Row 
            justify={"left"} 
        >
            <Col>
                <Paragraph 
                    text="The best part about being a software engineer is dreaming of an idea and having the tools to bring it to life. Below is a showcase of my public projects I’m the proudest of."
                    theme={theme}
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