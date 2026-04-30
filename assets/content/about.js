

const toolsData = {
    /* Languages */
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
        startDate: '2022-06-10',
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
            'I contribute to our React monorepo, Camino, which provides React components for the sandiego.edu domain. I\'m responsible for half of our 60 components and handle feature requests and bug fixes.',
            'I collaborate with my team to maintain open-source technologies like Storybook and Webpack, performing updates, fixes, and staying current with GitHub communities.',
            'I assist in integrating Camino and custom web applications with Hannon Hill\'s Cascade CMS, using Velocity scripts for user-side integration and Hannon Hill\'s Java features.',
            'I design, develop, and maintain custom web applications for the USD community, handling frontend React, APIs, and database design. Notable projects include:' +
                '<ul>' +
                '<li><a href="https://www.sandiego.edu/osp/research-expertise/">Expertise Database</a>: Enables USD staff and faculty to create profiles promoting research collaboration. It received high praise; Dr. Truc Ngo and I submitted an abstract to NORDP, though not selected.</li>' +
                '<li>Component Inventory app: Uses Hannon Hill\'s APIs to scrape the sandiego.edu website (160 sites) and collect data on Camino components (~60,000). This internal tool has transformed quality assurance and decision-making.</li>' +
                '<li>Sidebar redesign: Implemented the Disclosure pattern for intuitive navigation after user research. It\'s a reusable component and app for CMS users.</li>' +
                '<li>MyPostings 2.0 (in progress): A unified publish-subscribe app for posting news, events, etc., across sites. Replacing a 10-year-old system with features like live preview, drag-and-drop modules, notifications, and a new Newscenter.</li>' +
                '</ul>',
            'I spearheaded and maintain development containers mirroring our build, staging, and production environments for project use.'
        ]
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
        descriptionList: [ 
            'I contributed to a San Diego Field Office project building and maintaining a multi-level security (MLS) environment for USAF live training data. This MLS environment supports WarRoom software tools, funded by the LMOC Program Office.',
            'I designed and implemented networks, configuring routers, adapters, subnets and subinterfaces.',
            'I contributed to a monorepo of Ansible playbooks and Bash scripts for Linux and Windows configuration. Notable contributions:' 
            + '<ul>' 
            + '<li>Ansible playbook for configuring a Linux host as a KVM Hypervisor.</li>'
            + '<li>Ansible playbook for setting up a Linux host with Nexus OSS Repository Manager for yum, PyPI, Docker, and custom repositories.</li>'
            + '<li>Ansible playbook for scanning for and remediating security vulnerabilities.</li>'
            + '<li>Ansible playbook to systematically snapshot and update Windows machines in a virtual environment.</li>'
            + '</ul>',
            'I developed a Docker-in-Docker build pipeline that creates custom images in a containerized GitLab runner and pushes them to a private repository on success.',
            'I participated in a Red Team for the IRAD project \'Red Lighting,\' exploring the effects and military implications of Terrestrial Gamma-Ray Flashes (TGFs).',
            'I led development of the live classification engine for the MLS environment, creating a method to translate Security Classification Guides into machine-readable formats.',
            'I met frequently with stakeholders from USAF, Navy, and other agencies, leading technical discussions to develop requirements for a government-owned, re-configurable, re-deployable MLS Cross Domain Solution.'
        ]
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
        descriptionList: [ 
            'I developed custom PowerShell scripts such as one to analyze company users in Windows Active Directory against a Box-shared spreadsheet generating reports on discrepancies in data like-phone and like-email for rectification.',
            'As a research temp, I assisted FTEs with OS updates for 150 VMs in an on-prem environment, contributing to and creating Ansible scripts to accelerate tasks.',
            'I assisted in deploying new workstations to FTEs and resolved office technology issues.'
        ]
    },
    {
        position: 'Assistant Student Web Developer',
        employer: 'University of San Diego',
        startDate: '2017-06-10',
        endDate: '2020-5-30',
        languageList: [ toolsData['PHP'], toolsData['Javascript'], toolsData['SQL'] ],
        toolsList: [ toolsData['Jira'] ],
        environmentList: [ toolsData['Linux / Unix'] ],
        descriptionList: [ 
            'I assisted USD site maintainers via tickets with content updates, workflows, and redesigns.',
            'I developed an app interfacing with vendor APIs to fetch user activity data for the CMS.',
            'I developed the Summer and Intersession Office\'s database-driven Courses application using internal enterprise APIs.'
        ]
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
            '3.9 major GPA and 3.7 overall GPA',
            'Minors in Mathematics and Classical Studies (Latin and Ancient Western history)',
            'I participated in the Summer Undergraduate Research Experience (S.U.R.E.) Scholar program. I met with Dr. Saturnino Garcia to explore GDPR\'s impact on US users and began developing a web app to analyze users\' online footprints for digital privacy education.',
            'I served as Vice President (2019) and Marketing Chair (2018) of USD\'s ACM student chapter.',
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
    text: "I’m a software engineer, and I specialize in backend services and web application development. \n \
    I am a life-long learner, and I enjoy utilizing software to solving complex problems and expressing my creativity through my work. \n \
    I graduated from the University of San Diego, and I lived in San Diego for about 5-years post-college. \n \
    Now, I'm giving Bay-area a try! I enjoy walking around my bustling neighborhood and <a href='https://en.wikipedia.org/wiki/Guadalupe_River_(California)' target='_blank'>Guadalupe River</a>, antique shopping, learning more about the local culture and history, and enjoying all the things the Bay has to offer!",
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