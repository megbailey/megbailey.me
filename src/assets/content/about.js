

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

const positionsHeld = [
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
            'Summer Undergrad Reseach Expereince (S.U.R.E) Scholar. Deep dive into GDPR, its effect on users and design an application that allows users to analyze the data that makes up their online footprint.',
            'Vice President (2019) and marketing (2018) of USD local student chapter of ACM.',
            '3.9 major GPA'
        ]
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

function afterBodyContent( items ) {
    let chartData = { }
    let content = { }
    Object.keys(items).forEach(( key ) => {
        if ( chartData[key] === undefined ) {
            chartData[key] = [ ]
        }
        chartData[key].push(items[key].name)     
        
    })
    Object.keys(chartData).forEach(( key) => {
        content[key] = chartData[key].join(', ')
    })

    return content;
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

const itemsGroupedByType = groupItemsByType( toolsData )
const itemsGroupedByTag = groupItemsByTag( toolsData )

const aboutContent = {
    title: "About Me",
    text: "I’m a software engineer, and I specialize in backend services and web application development. I am a life-long learner, and I enjoy utilizing software to solving complex problems and expressing my creativity through my work. I graduated from the University of San Diego, and I never left the area. I enjoy walking around my bustling neighborhood and through the many San Diego parks on the weekends.",
    skillsAndTools: {
        title: "Skills & Tools",
        list: {
            data: Object.values( itemsGroupedByType )
        },
        chart: {
            label: 'Developer Skills',
            showLabel: false,
            dataLabels: Object.keys( itemsGroupedByTag ),
            data: calculateSkillLevel( itemsGroupedByTag ),
            tooltip: {
                afterBodyContent: afterBodyContent( itemsGroupedByTag )
            }
        }
    },
    experience: {
        title: "Experience",
        data: positionsHeld
    }
}

export default aboutContent;