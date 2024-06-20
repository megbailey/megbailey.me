

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
            'I contribute to our React monorepo, <a href="https://camino.sandiego.edu/storybook/">Camino</a>, that contains the library of React components used throughout the <a href="https://sandiego.edu">sandiego.edu domain</a>. I am responsible for about half of our 60 components, and I address any feature requests or bugs found.', 
            'I work with my team to maintain our usage of open source technology such as Storybook and Webpack including performing version updates, bug fixes, and staying up-to-date with the open source community on Github.',
            'I assist in the integration of Camino and custom applications with our vendor, Hannon Hill, and their Content Management System, Cascade. We utilize <a href="https://velocity.apache.org/engine/1.7/user-guide.html">Velocity scripts</a> for most of the user-side integration and <a href="https://www.hannonhill.com/cascadecms/latest/developing-in-cascade/script-formats/velocity-tools.html">Java features that Hannon Hill provides.</a>',
            'I design, develop, and maintain custom web applications, both public and private, for the USD community. I am responsible for both frontend React work as well as APIs and database design. My notable projects include' + 
                '<ul>' +
                '<li><a href="https://www.sandiego.edu/osp/research-expertise/">Expertise Database</a>\'s gives the ability for USD Staff and Faculty to create a profile to promote collaboration for research at USD.' +
                    ' It has receive highly compliments, and Dr. Truc Ngo and I authored and submitted an abstract of our development plan to <a href="https://nordp.org/?">NRODP</a>, but it was not selected.</li>' +
                '<li>Component Inventory app which utilizes Hannon Hill\'s APIs to scrape the entire <a href="https://sandiego.edu">sandiego.edu</a> website ( about 160 individual sites ) and coalesce data on the Camino components used on each page ( ~60,000 components ). The inventory application is an internal tool for the team, but its been game changing for quality assurance and data-backed decision making</li>' + 
                '<li>The Sidebar redesign where I implemented the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/">Disclosure pattern</a> to allow for users to navigate any given USD site more intiutaively so that users can find like-pages. The pattern was chosen and tested after weeks of user research. The sidebar is both a Camino component and an app. As a component, it is used by other web applications we make. As an app, it can be turned on or off by CMS users and will show either sibling or children pages of the current page as an interactive tree.</li>' +
                '<li>MyPostings 2.0 (in progress) is an unified publish and subscribe application that enables News, Events, Announcements, etc ( i.e. Posts ) to be posted on any page on any sites by any USD One user. The MyPostings system in production now is at least 10 years old and in need of a full re-development. We meet frequently with our stakeholders, and there have been many lessons learned that the new system will address including but not limited to a live preview, diverse drag-n-drop content modules, robust management features, timely notifications, re-skin of all \'feeds\', a new <a href="https://www.sandiego.edu/news/">Newscenter</a>, and so much more. Stay tuned for launch details. </li>' + 
                '</ul>',
            'I spearheaded the development and continue to maintain a set of development containers that reflect our build, staging, and production environments that myself and others use for projects.'
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
        descriptionList: [ 
            'In a moderate career change, I was rehired to re-vamp and add new features to the Summer and Intersession Office\'s Courses application that I built as a student. It was surreal having to breakdown the code I had written 3 years prior and see how far I had come as a developer.' ,
            'I worked with our server admin to develop a set of containers that reflect our build, staging, and production environments so that I could develop more easily.',
            'I learned React!'
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
            'Most of my time was spent contributing to a project out of San Diego Field Office. The project\'s mission is to build, deploy and maintain a multi-level security (MLS) environment to protect and streamline data produced at USAF live training events. The MLS environment is the backbone of a larger set of warfighter software tools called WarRoom. The MLS project and WarRoom is funded by Live Mission Operations Capabilities (LMOC) Program Office.',
            'I designed and implemented networks of machines configuring routers and adpaters with subnets and subinterfaces.',
            'I contributed to a monorepo of Ansible Playbooks and Bash scripts to configure linux and Windows machines. My more notable contributions were:' 
            + '<ul>' 
            + '<li>Ansible Playbook to configure a linux host as a KVM (Kernal Virtual Machine) Hypervisor </li>'
            + '<li>Ansible Playbook to configure a linux host with Nexus OSS Repository Manager with local yum (Linux), pypi (Python), containers (Docker) and custom executable package repositories</li>'
            + '</ul>',
            'I developed a Docker-In-Docker build pipeline that builds custom Docker images inside a containerized Gitlab runner andpushes the new image to a private repository on success.',
            'I partipated in a Red Team for an Independent Research and Development (IRAD) project, aptly nammed Red Lighting, that explored the effects and militiary implications of Terrestial Gamma-Ray Flashes (TGFs).',
            'I was the lead developer for the live classifcation engine for the MLS environment, and I created a methodology to translate Security Classification Guides (SCGs) to a machine readable format to be digest by the engine.',
            'I met with stakeholders (USAF, Navy, and other government agencies) frequently and participated in and lead multi-day technical discussions. From these instructions, we developed technical requirements for a government-owned, re-configufrable, re-deployable MLS Cross Domain Solution (CDS)'
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
            'I developed a Powershell script that analyzed the company\'s users in Active Directory comparing it to a spreadsheet in shared via Box. The script would produce a report that had entries if a users AD entry differed from the data ( phone, email, etc ) in the spreadsheet so that it could be rectified.',
            'I worked as a Research temp where I assited FTEs in performing OS updates for about 150 VMs in an on-prem environment. I would contribute to and create new ansible scripts to speed to up our tasks.',
            'I assited in deploying new work machines to FTEs and assited with any technology problems in office.'
        ]
    },
    {
        position: 'Assistant Student Web Developer',
        employer: 'University of San Diego',
        startDate: '2017-06-10',
        endDate: '2022-10-1',
        languageList: [ toolsData['PHP'], toolsData['Javascript'], toolsData['SQL'] ],
        toolsList: [ toolsData['Jira'] ],
        environmentList: [ toolsData['Linux / Unix'] ],
        descriptionList: [ 
            'I interfaced with USD site maintainers via tickets and assisted with web content updates, workflow, and several redeisgns.',
            'I developed an app which interfaces with vendor APIs to fetch user activity data for the Content Management Systemt (CMS)',
            'I developed the Summer and Intersession Office\'s database driven Courses application utilizing data from internal enterpise APIs'
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
            'I participated in the Summer Undergrad Reseach Expereince (S.U.R.E) Scholar program. Between semesters, I met frequently with Dr. Saturnino Garcia and did a deep dive into GDPR, and its effect on users in the USA. I designed and began developing a web application that would analyze data that makes up a user\'s online footprint and present it to the user in such a way that the user could learn about the importance of digital privacy.',
            'I served as the Vice President (2019) and marketing chair (2018) of USD\'s student chapter of Association for Computing Machinery (ACM).',
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