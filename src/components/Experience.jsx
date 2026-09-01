import React from 'react';
import { Tabs } from 'antd';
import { isMatch, parse, format } from 'date-fns'
import { useSelector } from 'react-redux';

import { Title, Paragraph } from './Text';
import useImage from "../utils/useImage.js";
import useDevice from '../utils/useDevice';
import '../../assets/styles/experience.css'

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

const SkillItem = ({ name, imageSrc }) => {
    const asyncImage = useImage(imageSrc)

    return (
        <div className="experience-skill">
            <div className="experience-skill__icon">
                {asyncImage.image && (
                    <img src={asyncImage.image} alt="" />
                )}
            </div>
            <span className="experience-skill__label">{name}</span>
        </div>
    )
}

const IconList = ({ items }) => {
   return (
        <div className="experience-skill-grid">
            {items.map((item) => (
                <SkillItem
                    key={item.name}
                    name={item.name}
                    imageSrc={item.imageSrc}
                />
            ))}
        </div>
   )
}

const TabContent = (items) => {
    const formatDate = (date) => format( parse( date, 'yyyy-mm-dd', new Date() ), 'MMMM yyyy');
    const isValid = (dateStr) => isMatch(dateStr, 'yyyy-mm-dd');

    //console.log(items)
    return (
        <>
            { Object.keys(items).map(( index ) => {
               const { position, employer, startDate, endDate, languageList, libraryFrameworkList, 
                    toolsList, environmentList, descriptionList } = items[index]
               return (
                    <div key={`${employer}-item-${index}`} className="experience-role">
                        <Title className="experience-role__title" size={3}>{position}</Title>
                        { isValid(startDate) && isValid(endDate) && (
                            <Paragraph className="experience-role__dates">{`${formatDate(startDate)} - ${formatDate(endDate)}`}</Paragraph>
                        )}
                        { isValid(startDate) && !isValid(endDate) && (
                            <Paragraph className="experience-role__dates">{ `Since ${formatDate(startDate)}` }</Paragraph>
                        )}
                        { descriptionList.length !== 0 && (
                            <Paragraph className="experience-role__description">
                                <ul>
                                { descriptionList.map((item, descriptIndex ) => {
                                    return (
                                        <li 
                                            key={`${employer}-description-item-${descriptIndex}`}
                                            dangerouslySetInnerHTML={{__html: item}}/>
                                    )
                                })}
                                </ul>
                            </Paragraph>
                        )}
                        { languageList && (
                            <section className="experience-role__skills">
                                <Title className="experience-role__skills-title" size={4}>Languages</Title>
                                <IconList items={languageList}/>
                            </section>
                        )}
                        { toolsList && (
                            <section className="experience-role__skills">
                                <Title className="experience-role__skills-title" size={4}>Tools</Title>
                                <IconList items={toolsList}/>
                            </section>
                        )}
                        { libraryFrameworkList && (
                            <section className="experience-role__skills">
                                <Title className="experience-role__skills-title" size={4}>Libraries & Frameworks</Title>
                                <IconList items={libraryFrameworkList}/>
                            </section>
                        )}
                        { environmentList && (
                            <section className="experience-role__skills">
                                <Title className="experience-role__skills-title" size={4}>Environments</Title>
                                <IconList items={environmentList}/>
                            </section>
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
            className={`experience-tabs experience-tabs--${theme.mode}`}
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