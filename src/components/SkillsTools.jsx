import React, { useContext } from "react";
//import { PropTypes } from "prop-types";
import {
    Card, List,
} from 'antd';

import { Text } from "./Text";

import { themeStyle } from "../utils/style.js";
import { ThemeContext } from "../context/context";

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


const SkillsCard = ({ title, dataSource }) => {
    const theme = useContext(ThemeContext);
    return (
        <Card
            headStyle={ themeStyle(theme) } 
            bodyStyle={ themeStyle(theme) }
            style={{ margin: '2%' }}
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
                        <Text>{item}</Text>
                    </List.Item>
                )}
            />
        </Card>
    )
}

const SkillsTools = () => {

    return (
        <List
            style={{ margin: '2%' }}
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