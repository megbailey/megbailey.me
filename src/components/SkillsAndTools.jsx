import React, { useContext } from "react";
import { Row, Col } from 'antd';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import {
    Card, List,
} from 'antd';

import { Text } from "./Text";

import { themeStyle } from "../utils/style.js";
import { ThemeContext } from "../utils/context";

import '../assets/styles/skillsNtools.css';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );


const SkillsCard = ({ title, items }) => {
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
                dataSource={items}
                renderItem={(item) => (
                    <List.Item>
                        <Text>{item}</Text>
                    </List.Item>
                )}
            />
        </Card>
    )
}

const SkillsRadarChart = ({ label, showLabel, dataLabels, data, tooltip: { afterBodyContent } }) => {
    const theme = useContext(ThemeContext);
    
    return (
        <div>
            <Radar
                style={{
                    width: '550px'
                }}
                options={{
                    plugins: {
                        legend: {
                            display: showLabel
                        },
                        tooltip: {
                            callbacks: {
                                afterBody: function(tooltipItem) {
                                    const hoveredItem = tooltipItem[0]
                                    if ( afterBodyContent[hoveredItem['label']])
                                        return afterBodyContent[hoveredItem['label']]
                                    return ''
                                }
                            }
                        }
                    },
                    scales: {
                        r :{
                            beginAtZero: true,
                            grid: {
                                color: theme === 'light' ? 'black': 'white'
                            },
                            angleLines: {
                                color: theme === 'light' ? 'black': 'white'
                            },
                            pointLabels: {
                                color: theme === 'light' ? 'black': '#FF00FF'
                            },
                            ticks: {
                                color: 'black'
                            }
                        }
                    }, 
                }}
                data={{
                    labels: dataLabels,
                    datasets: [
                    {
                        label: label,
                        data: data,
                        //['8', '7', '5', '6', '6', '10'],
                        backgroundColor: 'rgba(153, 102, 255, 0.4)',
                        borderColor: 'rgba(255, 0, 255, 1)',
                        borderWidth: 1,
                        fill: true
                    },
                    ],
                }}
            />
        </div>
    )
}


const SkillsAndTools = (props) => {
    const { 
        list: { data : listData, ...otherList }, 
        chart
    } = props

    return (
        <>
        <Row>
            <Col>
                <List
                    {...otherList}
                    style={{ margin: '10%' }}
                    dataSource={listData}
                    renderItem={(item) => (
                        <SkillsCard { ...item} />
                    )}
                />
            </Col>
            <Col>
                <SkillsRadarChart {...chart} /> 
            </Col>
        </Row>
    </>
    )

}

SkillsAndTools.propTypes = {
   /*  data: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        tag: PropTypes.arrayOf(PropTypes.string),
        level: PropTypes.number
    })) */
}

export default SkillsAndTools;