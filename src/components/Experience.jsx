import React from 'react';
import { Tabs, List, Avatar } from 'antd';
import { isMatch, parse, format } from 'date-fns'
import { useSelector } from 'react-redux';

import { Text, Title, Paragraph } from './Text';
import useImage from "../utils/useImage.js";
import useDevice from '../utils/useDevice';
import '../assets/styles/experience.css'

const group = ( data ) => {
    let groupedByEmployer = []
    for (const item of data) {
        
        if ( groupedByEmployer[item.employer] === undefined )
            groupedByEmployer[item.employer] = []
        groupedByEmployer[item.employer] = [
            ...groupedByEmployer[item.employer],
            item
        ]
    }
   
    return groupedByEmployer;
}

const IconList = ({ items }) => {
   return (
        <List
            grid={{
                gutter: [16, 8],
                xs: 1,
                sm: 2,
                med: 3,
                lg: 4
            }}
            dataSource={items}
            renderItem={(item) => {
                const asyncImage = useImage(item.imageSrc)
                return (
                    <List.Item 
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Avatar 
                            size={48} 
                            src={asyncImage.image} 
                        />
                        <Text>{item.name}</Text>
                    </List.Item>
                )
            }}
        />
   )
    
}

const TabContent = (items) => {
    const formatDate = (date) => format( parse( date, 'yyyy-mm-dd', new Date() ), 'MMM yyyy');
    const isValid = (dateStr) => isMatch(dateStr, 'yyyy-mm-dd');

    //console.log(items)
    return (
        <>
            { Object.keys(items).map(( index ) => {
               const { position, employer, startDate, endDate, languageList, libraryFrameworkList, 
                    toolsList, environmentList, descriptionList } = items[index]
               return (
                    <div key={`${employer}-item-${index}`}>
                        <Title size={3}>{position}</Title>
                        { isValid(startDate) && isValid(endDate) && (
                            <Paragraph>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</Paragraph>
                        )}
                        { isValid(startDate) && !isValid(endDate) && (
                            <Paragraph>{ `Since ${formatDate(startDate)}` }</Paragraph>
                        )}
                        { descriptionList.length !== 0 && (
                            <Paragraph>
                                <ul>
                                { descriptionList.map((item, descriptIndex ) => {
                                    return <li key={`${employer}-description-item-${descriptIndex}`}>{item}</li>
                                })}
                                </ul>
                            </Paragraph>
                        )}
                        { languageList && (
                            <>
                            <Title size={4}>Languages</Title>
                            <IconList items={languageList}/>
                            </>
                        )}
                        { toolsList && (
                            <>
                            <Title size={4}>Tools</Title>
                            <IconList items={toolsList}/>
                            </>
                        )}
                        { libraryFrameworkList && (
                            <>
                            <Title size={4}>Libraries & Frameworks</Title>
                            <IconList items={libraryFrameworkList}/>
                            </>
                        )}
                        { environmentList && (
                            <>
                            <Title size={4}>Environments</Title>
                            <IconList items={environmentList}/>
                            </>
                        )}
                    </div>
                )
            })}
        </>
    )

}

const Experience = ({ data }) => {  
    const theme = useSelector(state => state.theme.value)
    const grouped = group(data)
    const device = useDevice();

    return (
        <Tabs
            className={`tabs--${theme.mode}`}
            tabPosition={device === 'mobile' ? 'top' : 'left'}
            items={Object.keys(grouped).map(index => {
                return {
                    label: `${index}`,
                    key: index,
                    children: <TabContent {...grouped[index]} />,
                };
            })}
        />
    )
}
   
export default Experience;