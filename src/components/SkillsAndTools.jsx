import React, { useEffect, useState } from "react";
//import { Row, Col, Card, List } from 'antd';
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
import { useSelector } from 'react-redux';

//import { Text } from "./Text";

import '../assets/styles/skillsNtools.css';
//import useDevice from "../utils/useDevice";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );


/* const SkillsCard = ({ title, items }) => {
    const theme = useSelector(state => state.theme.value)

    return (
        <Card
            styles={{
                header: theme.style,
                body: theme.style
            }}
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
} */

export const SkillsRadarChart = ({ label, showLabel, dataLabels, data, tooltip: { afterBodyContent } }) => {
    const theme = useSelector(state => state.theme.value)
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

      useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        }
        window.addEventListener('resize', handleResize)
    }, [])
    
    return (
        <div  
            style={{
                width: dimensions.width *.4 + 'px'
            }} 
         >
            <Radar
                key={dimensions.width}
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
                                color: theme.mode === 'light' ? 'black': 'white'
                            },
                            angleLines: {
                                color: theme.mode === 'light' ? 'black': 'white'
                            },
                            pointLabels: {
                                color: theme.mode === 'light' ? 'black': '#FF00FF'
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


/* export const SkillsAndTools = (props) => {
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

} */