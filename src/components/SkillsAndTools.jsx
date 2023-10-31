import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { Row, Col } from 'antd';
//import { RadarChartOutlined, UnorderedListOutlined } from '@ant-design/icons';
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
import { ThemeContext } from "../context/context";

import '../assets/styles/skillsNtools.css';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

const toolsData = [
    {
        type: 'Languages',
        name: 'Java',
        tag: [ 'Backend' ],
        level: 7
    },
    {
        type: 'Languages',
        name: 'PHP',
        tag: [ 'Backend', 'Scripting' ],
        level: 9
    },
    {
        type: 'Languages',
        name: 'Javascript',
        tag: [ 'Frontend' ],
        level: 8
    },
    {
        type: 'Languages',
        name: 'Python',
        tag: [ 'Scripting' ],
        level: 6
    },
    {
        type: 'Languages',
        name: 'SQL',
        tag: [ 'Backend' ],
        level: 8
    },
    {
        type: 'Languages',
        name: 'Bash',
        tag: [ 'Scripting' ],
        level: 5
    },
    {
        type: 'Tools',
        name: 'Gitlab CI',
        tag: [ 'CI/CD' ],
        level: 6
    },
    {
        type: 'Tools',
        name: 'Github Actions',
        tag: [ 'CI/CD' ],
        level: 5
    },
    {
        type: 'Tools',
        name: 'Apache JMeter',
        tag: [ 'Backend', 'Infrastructure' ],
        level: 7
    },
    {
        type: 'Tools',
        name: 'Postman',
        tag: [ 'Backend' ],
        level: 7
    },
    {
        type: 'Tools',
        name: 'Packer',
        tag: [ 'Infrastructure' ],
        level: 7
    },
    {
        type: 'Libraries',
        name: 'React',
        tag: [ 'Frontend' ],
        level: 8
    },
    {
        type: 'Libraries',
        name: 'Storybook',
        tag: [ 'Frontend' ],
        level: 9
    },
    {
        type: 'Libraries',
        name: 'Google Protobuf',
        tag: [ 'Backend' ],
        level: 7
    },
    {
        type: 'Platforms',
        name: 'Docker',
        tag: [ 'Infrastructure' ],
        level: 9
    },
    {
        type: 'Platforms',
        name: 'AWS EC2',
        tag: [ 'Infrastructure' ],
        level: 6
    },
    {
        type: 'Platforms',
        name: 'VMWare ESXI',
        tag: [ 'Infrastructure' ],
        level: 7
    },
    {
        type: 'Platforms',
        name: 'Linux / Unix',
        tag: [ 'Infrastructure' ],
        level: 10
    },
    {
        name: 'Teamwork',
        tag: [ 'Teamwork' ],
        level: 10
    },
]


function groupItemsByType( items ) {
    let cardData = []
    items.forEach( (item, index) => {
        const type = item.type
        if ( type && cardData[type] ) 
            cardData[type] = {
                title: type,
                items: [
                    ...cardData[type].items,
                    item.name
                ]
            }
        else if ( type )
            cardData[type] = {
                title: type,
                items: [
                    item.name
                ]
            }
    })
    return Object.values(cardData);
}

function groupItemsByTag( items ) {
    let chartData = { }
    items.forEach( item => {
        item.tag.forEach( tagItem => {
            if ( chartData[tagItem] === undefined ) {
                chartData[tagItem] = [ ]
            } 
            chartData[tagItem].push(item )
            
        })
    })
    return chartData;
}

function calculateSkillLevel ( items ) {
    const calculatedSkill =  []
    Object.keys(items).forEach( key => {
        const numOfItems = items[key].length;
        let totalSkill = 0;
        items[key].forEach( item => {
            totalSkill += item.level
        })
        if ( numOfItems !== 0 ) {
            calculatedSkill.push(totalSkill / numOfItems)
        } else {
            calculatedSkill.push(0)
        }
    })
    return calculatedSkill;
}

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

const SkillsRadarChart = ({ items }) => {
    const theme = useContext(ThemeContext);
    
    const skillLevels = calculateSkillLevel(items)    
    

    return (
        <div
           /*  style={{
                position: 'relative',
                width: '700px'
            }} */
        >
            <Radar
                style={{
                    width: '550px'
                }}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                afterBody: function(tooltipItem) {
                                    const relatedData = [ ]
                                    const hoveredItem = tooltipItem[0]
                                    items[hoveredItem['label']].forEach( item => {
                                        relatedData.push(item.name)
                                    })
                                    return relatedData.join(', ')
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
                    labels: Object.keys(items),
                    datasets: [
                    {
                        label: 'Developer Skills',
                        data: skillLevels,
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
    //const [ displayState, setDisplayState ] = useState('chart');

    return (
        <>
      {/*  <Radio.Group 
            buttonStyle={'solid'}
            defaultValue={displayState} 
            size="large"
        >
            <Radio.Button 
                value="chart" 
                onClick={(e) => setDisplayState('chart')}
                style={{
                    border: 'none',
                    background: displayState === 'chart' ? 'blueviolet' : null
                }}
            ><RadarChartOutlined /></Radio.Button>
            <Radio.Button 
                value="list"
                onClick={(e) => setDisplayState('list')}
                style={{
                    border: 'none',
                    background: displayState === 'list' ? 'blueviolet' : null
                }}
            ><UnorderedListOutlined /></Radio.Button>
        </Radio.Group> */}
      <Row>
        <Col>
            <List
                style={{ margin: '10%' }}
                
                dataSource={ groupItemsByType( toolsData ) }
                renderItem={(item) => (
                   <SkillsCard { ...item} />
                )}
            />
            </Col>
            <Col>
                <SkillsRadarChart items={groupItemsByTag(toolsData)} /> 
            </Col>
      </Row>
   
    </>
    )

}

SkillsAndTools.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        tag: PropTypes.arrayOf(PropTypes.string),
        level: PropTypes.number
    }))
}

export default SkillsAndTools;