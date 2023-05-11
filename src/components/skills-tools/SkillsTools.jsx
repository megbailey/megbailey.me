import React, { useState } from "react";
import { PropTypes } from "prop-types";
import {
    Col, Row, Space, Avatar, Image, Divider, Tooltip, Card, List
} from 'antd';
import { Segmented } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

import { Title, Paragraph, Text } from "../text/Text";


const skillCards = [
    {
        title: "Languages",
        dataSource: [ "Java", "PHP", "Javascript", "Python", "SQL", "Bash"],
    },
    {
        title: "Tools",
        dataSource: ['Gitlab CI', 'Github Actions', 'Apache JMeter', 'Postman', 'Packer']
    },
    {
        title: "Libraries & Frameworks",
        dataSource: [ 'React', 'Google Protobuf', 'Storybook' ]
    },
    {
        title: "Platforms",
        dataSource: [ 'Docker', 'AWS EC2', 'ESXI', 'Linux', 'MacOS' ]
    }
]

const darkTheme = {
    color: '#fff',
    backgroundColor: '#001529'
}

const lightTheme = {
    color: '#001529',
    backgroundColor: '#fff'
}



const SkillsCard = ({ theme, title, dataSource }) => {
    return (
        <Card
            headStyle={ theme === 'light' ? lightTheme : darkTheme } 
            bodyStyle={ theme === 'light' ? lightTheme : darkTheme }
            title={title} 
            bordered={true}
            size={"small"}
        >
            <List
                grid={{
                    gutter: [16, 8],
                    xs: 1,
                    sm: 2,
                    med: 3,
                    lg: 4
                }}
                dataSource={dataSource}
                renderItem={(item) => (
                    <List.Item>
                        <Text theme={theme} text={item}></Text>
                    </List.Item>
                )}
            />
        </Card>
    )
}

const SkillsTools = ({ theme }) => {

    return (
        <Row >
        <List
            grid={{
                gutter: [48, 16],
                    xs: 1,
                    sm: 2,
                    med: 3,
                    lg: 4
            }}
            dataSource={skillCards}
            renderItem={(item) => (
                <SkillsCard 
                    theme={theme}
                    title={item.title}
                    dataSource={item.dataSource}
                />
            )}
        />
        </Row>
    );

}

SkillsTools.propTypes = {

}

export default SkillsTools;