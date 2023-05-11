import React, { useState } from "react";
import { PropTypes } from "prop-types";
import {
    Col, Row, Space, Avatar, Image, Divider, Tooltip, Card, List
} from 'antd';
import { Segmented } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

import { Title, Paragraph, Text } from "../text/Text";
import { themeStyle } from "../../assets/styles/global.css"

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


const SkillsCard = ({ theme, title, dataSource }) => {
    return (
        <Card
            headStyle={ themeStyle(theme) } 
            bodyStyle={ themeStyle(theme) }
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
        <List
            style={{ margin: '10%' }}
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
    );

}

SkillsTools.propTypes = {

}

export default SkillsTools;