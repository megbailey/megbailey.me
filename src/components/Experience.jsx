import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { isMatch, parse, format } from 'date-fns'

import { Tabs } from 'antd';
import { Title, Text, Paragraph } from './Text';
import { ThemeContext } from '../context/context';
import { themeStyle } from '../assets/styles/global.css';


const jobPositions = [
    {
        position: 'Web Developer / Programmer',
        employer: 'University of San Diego',
        startDate: '2022-10-01',
        endDate: null,
        languageList: [ 'PHP', 'Javascript', 'SQL' ],
        libraryFrameworkList: [ 'React', 'Storybook' ],
        environmentList: [ 'Docker', 'MacOS', 'Linux' ],
        descriptionList: [
            'Maintain and contribute to the Camino library of React components.',
            'Utilize & maintain are use of open source projects such as Storybook.',
            'Scope, plan, and implement custom web applications for departments.',
            'Architect and develop web applications that are used by all maintainers like the MP2 system',
            'Contributed to developing a set of containers that reflect build, staging, and production environments'
        ]
    },
    {
        position: 'Web Developer, Contractor',
        employer: 'University of San Diego',
        startDate: '2022-06-10',
        endDate: '2022-10-01',
        languageList: [ 'PHP', 'Javascript', 'SQL', 'GraphQL' ],
        libraryFrameworkList: [ 'React' ],
        toolsList: [ 'Github', 'postman', 'Jenkins' ],
        environmentList: [ 'Docker', 'MacOS', 'Linux' ],
        descriptionList: [  ]
    },
    {
        position: 'Solutions Architect, Research Scientist I',
        employer: 'Georgia Tech Research Institute',
        startDate: '2020-06-20',
        endDate: '2022-6-10',
        languageList: [ 'Ansible', 'bash', 'Java', 'Python', 'Rego' ],
        libraryFrameworkList: [ 'KIE', 'Apache JMeter', 'protobuf' ],
        toolsList: [ 'Gitlab', 'Gitlab Actions', 'Apache JMeter', 'packer' ],
        environmentList: [ 'Docker', 'Podman', 'VMWare VSphere', 'AWS EC2', 'MacOS', 'Linux (RH)', 'Windows', 'KVM' ],
        descriptionList: [ ]
    },
    {
        position: 'Visting Research Student / Tech Temp',
        employer: 'Georgia Tech Research Institute',
        startDate: '2019-06-01',
        endDate: '2020-06-20',
        languageList: [ 'Ansible', 'Python', 'Powershell' ],
        toolsList: [ 'Bitbucket', 'Jira' ],
        environmentList: [ 'MacOS', 'Linux', 'Windows' ],
        descriptionList: [ ]
    },
    {
        position: 'Assistant Student Web Developer',
        employer: 'University of San Diego',
        startDate: '2017-06-10',
        endDate: '2022-10-1',
        languageList: [ 'PHP', 'Javascript', 'SQL' ],
        toolsList: [ 'Jira' ],
        environmentList: [ 'MacOS', 'Linux' ],
        descriptionList: [ ]
    },
    {
        position: 'Student, Computer Science',
        employer: 'University of San Diego',
        startDate: '2016-06-10',
        endDate: '2020-5-30',
        languageList: [ 'Java', 'Python', 'C', 'C++' ],
        environmentList: [ 'Docker', 'MacOS', 'Linux (RH)' ],
        descriptionList: [
            'Summer Undergrad Reseach Expereince (S.U.R.E) Scholar. Deep dive into GDPR, its effect on users and design an \
            application that allows users to analyze the data that makes up their online footprint.',
            'Vice President (2019) and marketing (2018) of USD local student chapter of ACM.',
            '3.9 major GPA'
        ]
    },
]

const group = () => {
    let groupedByEmployer = []
    jobPositions.map(( item, index ) => {
        if (groupedByEmployer[item.employer] === undefined) {
            groupedByEmployer[item.employer] = []
        }
        
        groupedByEmployer[item.employer] = [
            ...groupedByEmployer[item.employer],
            item
        ]
    })
    return groupedByEmployer;
}

const TabContent = (items) => {
    const theme = useContext(ThemeContext)
    const formatDate = (date) => format( parse( date, 'yyyy-mm-dd', new Date() ), 'MMM yyyy');
    const isValid = (dateStr) => isMatch(dateStr, 'yyyy-mm-dd');

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
                                { descriptionList.map((item) => {
                                    return <li>{item}</li>
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

const Experience = (props) => {  
     const theme = useContext(ThemeContext)
     const grouped = group()

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