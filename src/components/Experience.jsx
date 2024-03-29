import React, { useContext } from 'react';
//import PropTypes from 'prop-types';
import { isMatch, parse, format } from 'date-fns'

import { Tabs } from 'antd';
import { Title, Paragraph } from './Text';
import { ThemeContext } from '../utils/context';
import { themeStyle } from "../utils/style.js";

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

const TabContent = (items) => {
    //const theme = useContext(ThemeContext)
    const formatDate = (date) => format( parse( date, 'yyyy-mm-dd', new Date() ), 'MMM yyyy');
    const isValid = (dateStr) => isMatch(dateStr, 'yyyy-mm-dd');

    console.log(items)
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
                        { languageList && <Paragraph>Languages:  {languageList.join(", ")}</Paragraph> }
                        { toolsList && <Paragraph>Tools: {toolsList.join(", ")}</Paragraph>}
                        { libraryFrameworkList && <Paragraph>Libraries & Frameworks: {libraryFrameworkList.join(", ")}</Paragraph>}
                        { environmentList && <Paragraph>Environments:  {environmentList.join(", ")}</Paragraph>}
                    </div>
                )
            })}
        </>
    )

}

const Experience = ({ data }) => {  
     const theme = useContext(ThemeContext)
     const grouped = group(data)

     return (
        <Tabs
            tabPosition={"left"}
            tabBarStyle={ themeStyle(theme) }
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