

const toolsData = {
    /* Langauges */
    'Java': {
        type: 'Languages',
        name: 'Java',
        tag: [ 'Backend' ],
        level: 7,
        imageSrc: 'java-logo.png'
    },
    'PHP': {
        type: 'Languages',
        name: 'PHP',
        tag: [ 'Backend', 'Scripting' ],
        level: 9,
        imageSrc: 'php-logo.png'
    },
    'Javascript': {
        type: 'Languages',
        name: 'Javascript',
        tag: [ 'Frontend' ],
        level: 8,
        imageSrc: 'javascript-logo.png'
    },
    'Python': {
        type: 'Languages',
        name: 'Python',
        tag: [ 'Scripting' ],
        level: 6,
        imageSrc: 'python-logo.png'
    },
    'SQL': {
        type: 'Languages',
        name: 'SQL',
        tag: [ 'Backend' ],
        level: 8,
        imageSrc: 'sql-logo.png'
    },
    'Bash': {
        type: 'Languages',
        name: 'Bash / ZSH',
        tag: [ 'Scripting' ],
        level: 5,
        imageSrc: 'cmdline-logo.png'
    },
    /* Tools */
    'Jira': {
        type: 'Tools',
        name: 'Jira',
        tag: [ ],
        imageSrc: 'jira-logo.png'
    },
    'Gitlab Jobs': {
        type: 'Tools',
        name: 'Gitlab Jobs',
        tag: [ 'CI/CD' ],
        level: 6,
        imageSrc: 'gitlab-logo.png'
    },
    'Github Actions': {
        type: 'Tools',
        name: 'Github Actions',
        tag: [ 'CI/CD' ],
        level: 5,
        imageSrc: 'github-lord-logo.png'
    },
    'Apache JMeter': {
        type: 'Tools',
        name: 'Apache JMeter',
        tag: [ 'Backend', 'Infrastructure' ],
        level: 7,
        imageSrc: 'apache-logo.png'
    },
    'Postman': {
        type: 'Tools',
        name: 'Postman',
        tag: [ 'Backend' ],
        level: 8,
        imageSrc: 'postman-logo.png'
    },
    'Packer': {
        type: 'Tools',
        name: 'Packer',
        tag: [ 'Infrastructure' ],
        level: 7,
        imageSrc: 'hashicorp-packer-logo.png'
    },
    'Ansible': {
        type: 'Tools',
        name: 'Ansible',
        tag: [ 'Infrastructure', 'Scripting' ],
        level: 6,
        imageSrc: 'ansible-logo.png'
    },
    /* Libraries */
    'React': {
        type: 'Libraries',
        name: 'React',
        tag: [ 'Frontend' ],
        level: 9,
        imageSrc: 'react-logo.png'
    },
    'GraphQL': {
        type: 'Libraries',
        name: 'GraphQL',
        tag: [ 'Backend' ],
        level: 10,
        imageSrc: 'graphql-logo.png'
    },
    'Storybook': {
        type: 'Libraries',
        name: 'Storybook',
        tag: [ 'Frontend' ],
        level: 9,
        imageSrc: 'storybook-logo.png'
    },
    'Google Protobuf': {
        type: 'Libraries',
        name: 'Google Protobuf',
        tag: [ 'Backend' ],
        level: 7,
        imageSrc: 'google-logo.png'
    },
    /* Running environments */
    'Docker': {
        type: 'Platforms',
        name: 'Docker',
        tag: [ 'Infrastructure' ],
        level: 8,
        imageSrc: 'docker-logo.png'
    },
    'AWS EC2': {
        type: 'Platforms',
        name: 'AWS EC2',
        tag: [ 'Infrastructure' ],
        level: 6,
        imageSrc: 'aws-logo.png'
    },
    'VMWare VSphere / ESXI': {
        type: 'Platforms',
        name: 'VMWare VSphere / ESXI',
        tag: [ 'Infrastructure' ],
        level: 7,
        imageSrc: 'vmware-logo.png'
    },
    'Linux / Unix': {
        type: 'Platforms',
        name: 'Linux / Unix',
        tag: [ 'Infrastructure' ],
        level: 10,
        imageSrc: 'linux-logo.png'
    },
    'Teamwork': {
        name: 'Teamwork',
        tag: [ 'Teamwork' ],
        level: 10,
    },
}


const positionsHeld = [
    {
        position: 'Web Developer / Programmer',
        employer: 'University of San Diego',
        startDate: '2022-10-01',
        endDate: null,
        languageList: [ 
            toolsData['PHP'], 
            toolsData['Javascript'], 
            toolsData['SQL'] 
        ],
        libraryFrameworkList: [ 
            toolsData['React'], 
            toolsData['Storybook'], 
            toolsData['GraphQL'] 
        ],
        toolsList: [ 
            toolsData['Postman'],
            { name: 'Rich Results Test', imageSrc: 'google-logo.png' }
        ],
        environmentList: [ 
            toolsData['Docker'], 
            toolsData['Linux / Unix'] 
        ],
        descriptionList: [
            'Maintain and contribute to the Camino library of React components.',
            'Utilize & maintain team\'s use of open source projects such as Storybook.',
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
        languageList: [ 
            toolsData['PHP'], 
            toolsData['Javascript'], 
            toolsData['SQL'] 
        ],
        libraryFrameworkList: [ 
            toolsData['React'], 
            toolsData['Storybook'] 
        ],
        environmentList: [ 
            toolsData['Docker'], 
            toolsData['Linux / Unix'] 
        ],
        descriptionList: [  ]
    },
    {
        position: 'Solutions Architect, Research Scientist I',
        employer: 'Georgia Tech Research Institute',
        startDate: '2020-06-20',
        endDate: '2022-6-10',
        languageList: [ 
            toolsData['Bash'], 
            toolsData['Java'], 
            toolsData['Python'] 
        ],
        libraryFrameworkList: [ 
            toolsData['Ansible'],
            toolsData['Apache JMeter'], 
            toolsData['Google Protobuf'] 
        ],
        toolsList: [ 
            toolsData['Gitlab Jobs'], 
            toolsData['Github Actions'], 
            toolsData['Apache JMeter'], 
            toolsData['Packer'] 
        ],
        environmentList: [ 
            toolsData['Docker'], 
            toolsData['VMWare VSphere / ESXI'], 
            toolsData['AWS EC2'], 
            toolsData['Linux / Unix'], 
            { name: 'Windows', imageSrc: 'windows-logo.png'},
            { name: 'KVM', imageSrc: 'linux-logo.png'} 
        ],
        descriptionList: [ ]
    },
    {
        position: 'Visting Research Student / Tech Temp',
        employer: 'Georgia Tech Research Institute',
        startDate: '2019-06-01',
        endDate: '2020-06-20',
        languageList: [ 
            toolsData['Ansible'], 
            toolsData['Python'], 
            { name: 'Powershell', imageSrc: 'powershell-logo.png' } 
        ],
        toolsList: [ 
            toolsData['Jira'],
        ],
        environmentList: [ 
            toolsData['Linux / Unix'], 
            { name: 'Windows', imageSrc: 'windows-logo.png' }
        ],
        descriptionList: [ ]
    },
    {
        position: 'Assistant Student Web Developer',
        employer: 'University of San Diego',
        startDate: '2017-06-10',
        endDate: '2022-10-1',
        languageList: [ toolsData['PHP'], toolsData['Javascript'], toolsData['SQL'] ],
        toolsList: [ toolsData['Jira'] ],
        environmentList: [ toolsData['Linux / Unix'] ],
        descriptionList: [ ]
    },
    {
        position: 'Student, Computer Science',
        employer: 'University of San Diego',
        startDate: '2016-06-10',
        endDate: '2020-5-30',
        languageList: [ 
            toolsData['Java'], 
            toolsData['Python'], 
            { name: 'C', imageSrc: 'c-logo.png' }, 
            { name: 'C++', imageSrc: 'c++-logo.png' } 
        ],
        environmentList: [ 
            toolsData['Docker'], 
            toolsData['Linux / Unix'] 
        ],
        descriptionList: [
            'Summer Undergrad Reseach Expereince (S.U.R.E) Scholar. Deep dive into GDPR, its effect on users and design an application that allows users to analyze the data that makes up their online footprint.',
            'Vice President (2019) and marketing (2018) of USD local student chapter of ACM.',
            '3.9 major GPA'
        ]
    },
]

function groupItemsByType( items ) {
    let cardData = []
    
    Object.values(items).forEach((item) => {
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
    Object.values(items).forEach((item) => {
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