

const toolsData = {
    /* Languages */
    'Java': {
        type: 'Languages',
        name: 'Java',
        tag: [ 'Backend' ],
        level: 7,
        imageSrc: 'about/logos/java-logo.png'
    },
    'PHP': {
        type: 'Languages',
        name: 'PHP',
        tag: [ 'Backend', 'Scripting' ],
        level: 9,
        imageSrc: 'about/logos/php-logo.png'
    },
    'Javascript': {
        type: 'Languages',
        name: 'Javascript',
        tag: [ 'Frontend' ],
        level: 8,
        imageSrc: 'about/logos/javascript-logo.png'
    },
    'Python': {
        type: 'Languages',
        name: 'Python',
        tag: [ 'Scripting' ],
        level: 6,
        imageSrc: 'about/logos/python-logo.png'
    },
    'SQL': {
        type: 'Languages',
        name: 'SQL',
        tag: [ 'Backend' ],
        level: 8,
        imageSrc: 'about/logos/sql-logo.png'
    },
    'Bash': {
        type: 'Languages',
        name: 'Bash / ZSH',
        tag: [ 'Scripting' ],
        level: 5,
        imageSrc: 'about/logos/cmdline-logo.png'
    },
    /* Tools */
    'Jira': {
        type: 'Tools',
        name: 'Jira',
        tag: [ ],
        imageSrc: 'about/logos/jira-logo.png'
    },
    'Gitlab Jobs': {
        type: 'Tools',
        name: 'Gitlab Jobs',
        tag: [ 'CI/CD' ],
        level: 6,
        imageSrc: 'about/logos/gitlab-logo.png'
    },
    'Github Actions': {
        type: 'Tools',
        name: 'Github Actions',
        tag: [ 'CI/CD' ],
        level: 5,
        imageSrc: 'about/logos/github-lord-logo.png'
    },
    'Apache JMeter': {
        type: 'Tools',
        name: 'Apache JMeter',
        tag: [ 'Backend', 'Infrastructure' ],
        level: 7,
        imageSrc: 'about/logos/apache-logo.png'
    },
    'Postman': {
        type: 'Tools',
        name: 'Postman',
        tag: [ 'Backend' ],
        level: 8,
        imageSrc: 'about/logos/postman-logo.png'
    },
    'Packer': {
        type: 'Tools',
        name: 'Packer',
        tag: [ 'Infrastructure' ],
        level: 7,
        imageSrc: 'about/logos/hashicorp-packer-logo.png'
    },
    'Ansible': {
        type: 'Tools',
        name: 'Ansible',
        tag: [ 'Infrastructure', 'Scripting' ],
        level: 6,
        imageSrc: 'about/logos/ansible-logo.png'
    },
    'Chrome Dev Protocol': {
        type: 'Tools',
        name: 'Chrome DevTools Protocol (CDP)',
        tag: [ 'Frontend' ],
        level: 7,
        imageSrc: 'about/logos/chrome-devtools-logo.png'
    },
    'Cursor': {
        type: 'Tools',
        name: 'Cursor',
        tag: [ 'Frontend', 'Backend' ],
        level: 8,
        imageSrc: 'about/logos/cursor-logo.png'
    },
    /* Libraries */
    'React': {
        type: 'Libraries',
        name: 'React',
        tag: [ 'Frontend' ],
        level: 9,
        imageSrc: 'about/logos/react-logo.png'
    },
    'GraphQL': {
        type: 'Libraries',
        name: 'GraphQL',
        tag: [ 'Backend' ],
        level: 10,
        imageSrc: 'about/logos/graphql-logo.png'
    },
    'Storybook': {
        type: 'Libraries',
        name: 'Storybook',
        tag: [ 'Frontend' ],
        level: 9,
        imageSrc: 'about/logos/storybook-logo.png'
    },
    'Eloquent': {
        type: 'Libraries',
        name: 'Eloquent',
        tag: [ 'Backend' ],
        level: 8,
        imageSrc: 'about/logos/eloquent-logo.png'
    },
    'PHPUnit': {
        type: 'Libraries',
        name: 'PHPUnit',
        tag: [ 'Backend' ],
        level: 8,
        imageSrc: 'about/logos/phpunit-logo.png'
    },
    'Google Protobuf': {
        type: 'Libraries',
        name: 'Google Protobuf',
        tag: [ 'Backend' ],
        level: 7,
        imageSrc: 'about/logos/google-logo.png'
    },
    /* Running environments */
    'Docker': {
        type: 'Platforms',
        name: 'Docker',
        tag: [ 'Infrastructure' ],
        level: 8,
        imageSrc: 'about/logos/docker-logo.png'
    },
    'AWS EC2': {
        type: 'Platforms',
        name: 'AWS EC2',
        tag: [ 'Infrastructure' ],
        level: 6,
        imageSrc: 'about/logos/aws-logo.png'
    },
    'VMWare VSphere / ESXI': {
        type: 'Platforms',
        name: 'VMWare VSphere / ESXI',
        tag: [ 'Infrastructure' ],
        level: 7,
        imageSrc: 'about/logos/vmware-logo.png'
    },
    'Linux / Unix': {
        type: 'Platforms',
        name: 'Linux / Unix',
        tag: [ 'Infrastructure' ],
        level: 10,
        imageSrc: 'about/logos/linux-logo.png'
    },
}


const positionsHeld = [
    {
        position: 'Full Stack Software Developer',
        employer: 'University of San Diego',
        startDate: '2022-06-10',
        endDate: null,
        languageList: [ 
            toolsData['PHP'], 
            toolsData['Javascript'], 
            toolsData['SQL'],
            toolsData['Bash'],
            toolsData['Java'],
        ],
        libraryFrameworkList: [ 
            toolsData['React'], 
            toolsData['Storybook'], 
            toolsData['GraphQL'],
            toolsData['Eloquent'],
            toolsData['PHPUnit'],
        ],
        toolsList: [ 
            toolsData['Postman'],
            { name: 'Rich Results Test', imageSrc: 'about/logos/google-logo.png' },
            toolsData['Chrome Dev Protocol'],
            toolsData['Cursor'],
        ],
        environmentList: [ 
            toolsData['Docker'], 
            toolsData['Linux / Unix'] 
        ],
        descriptionList: [
            'Contribute to the evolution of the <a href="https://camino.sandiego.edu/storybook/">university’s atomic web design system</a>, reusable components for sandiego.edu. Responsible for 50% of 70+ of the components in the system handling feature requests and bug fixes.',
            'I collaborate with my team to maintain open-source technologies like Storybook and Webpack, performing updates, fixes, and staying current with GitHub communities and AI workflows.',
            'I assist in integrating Camino and custom web applications with Hannon Hill\'s Cascade CMS, using Velocity (Java) scripts for integration.',
            'I spearheaded and maintain an environment of Docker containers mirroring our build, staging, and production environments for project use.',
            'I design, develop, and maintain custom web applications and scripts for the USD community, handling frontend React, APIs, and database design. My notable projects include:' +
                '<ul>' +
                '<li><a href="https://www.sandiego.edu/osp/research-expertise/">Expertise Database</a>: Enables USD staff and faculty to create profiles promoting research collaboration. It received high praise; Dr. Truc Ngo, and I submitted an abstract to NORDP.</li>' +
                '<li>Sidebar Navigation: Implemented <a href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/">WAI W3 Disclosure pattern</a> for intuitive navigation for all of <a href="https://www.sandiego.edu/">sandiego.edu</a>. Sidebar is both a reusable tree-like component and a page-level application that can be enabled for any of the 12,000+ webpages across our 170+ sites.</li>' +
                '<li>Component Inventory: Led the development of the Component Inventory system built on top of our enterprise CMS. Designed the sidecar application to recursively scan 170+ sites, generating design system usage reports with 800,000+ data points on 40,000+ components across 12,000+ webpages, informing decisions on feature support, deprecation, and user impact.</li>' +
                '<li>MyPostings 2.0: Led the ground-up modernization of <a href="https://www.sandiego.edu/newscenter/105010">MyPostings2</a>, transforming a 15+ year-old legacy system into a university-wide content platform serving hundreds of faculty, staff, and student users. Scaled the platform to support 600+ integrations across 170+ university websites and campus digital panels through RSS feeds, while integrating multiple internal and external APIs. I translated stakeholder needs into a modern, flexible publishing experience with live previews, drag-and-drop content creation, multimedia support, and workflows. MyPostings2 has since launched, but work is ongoing. Next steps include server-side rendering conversion for better AI readability, better search engine optimization, and mixed-typed feeds.</li>' +
                '</ul>',
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
            { name: 'Windows', imageSrc: 'about/logos/windows-logo.png'},
            { name: 'KVM', imageSrc: 'about/logos/linux-logo.png'} 
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
        position: 'Visiting Research Student / Tech Temp',
        employer: 'Georgia Tech Research Institute',
        startDate: '2019-06-01',
        endDate: '2020-06-20',
        languageList: [ 
            toolsData['Ansible'], 
            toolsData['Python'], 
            { name: 'Powershell', imageSrc: 'about/logos/powershell-logo.png' } 
        ],
        toolsList: [ 
            toolsData['Jira'],
        ],
        environmentList: [ 
            toolsData['Linux / Unix'], 
            { name: 'Windows', imageSrc: 'about/logos/windows-logo.png' }
        ],
        descriptionList: [ 
            'I developed custom PowerShell scripts such as one to analyze company users in Windows Active Directory against a Box-shared spreadsheet, generating reports on discrepancies in phone and email data for rectification.',
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
            { name: 'C', imageSrc: 'about/logos/c-logo.png' }, 
            { name: 'C++', imageSrc: 'about/logos/c++-logo.png' } 
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

const aboutContent = {
    title: "About Me",
    text: "I’m a software engineer, and I specialize in backend services and web application development. \n \
    I am a lifelong learner, and I enjoy utilizing software to solve complex problems and express my creativity through my work. \n \
    I graduated from the University of San Diego, and I lived in San Diego for about 5 years post-college. \n \
    Now, I'm giving the Bay Area a try! I enjoy walking around my neighborhood and <a href='https://en.wikipedia.org/wiki/Guadalupe_River_(California)' target='_blank'>Guadalupe River</a>, thrift and antique shopping, learning more about the local culture and history, and enjoying all the things the Bay has to offer!",
    photos: [
        {
            src: 'about/carousel/2022_1.jpg',
            caption: 'My professional headshot, 2022',
        },
        {
            src: 'about/carousel/2026_engaged.jpg',
            caption: 'My fiancé and I minutes after our engagement at CordeValle Winery in San Martin, 2026',
        },
        {
            src: 'about/carousel/2026_engaged_family.jpg',
            caption: 'Celebrating our engagement with family at CordeValle Winery in San Martin, 2026',
        },
        {
            src: 'about/carousel/2026_1.jpg',
            caption: 'Enjoing a sunny day at a Pokemon Go event at Pier 39 in San Francisco, 2026',
        },
        {
            src: 'about/carousel/2026_2.jpg',
            caption: 'My soon-to-be father-in-law and I at San Diego Comic-Con, 2026',
        },
        {
            src: 'about/carousel/2026_3.jpg',
            caption: 'Showing off San Francisco to my sister and her fiancé, 2026',
        },
        {
            src: 'about/carousel/2026_4.jpg',
            caption: 'Throwing an invisible poke-ball at Pokemon World Championships in San Francisco, 2026',
        },
        {
            src: 'about/carousel/2026_5.jpg',
            caption: 'Cosplaying as Vault-Dwellers from Fallout at San Diego Comic-Con, 2026',
        },
        {
            src: 'about/carousel/2026_6.jpg',
            caption: 'Crabbing under the Golden Gate bridge with friends and colleagues, 2026',
        },
        {
            src: 'about/carousel/2026_7.jpg',
            caption: 'A successful catch featuring the Golden Gate bridge, 2026',
        },
        {
            src: 'about/carousel/2026_8.jpg',
            caption: 'Random Mr. Jelly Belly sighting in Monterey, 2026',
        },
        {
            src: 'about/carousel/2025_1.png',
            caption: 'My best friend for 17 years! One of my childhood cats, Columbus, who has since passed, and I\'ve featured on the homepage of this site, 2025',
        },
        {
            src: 'about/carousel/2025_2.jpg',
            caption: 'Taking pictures with an amazing cosplayer at San Diego Comic-Con, 2025',
        },
        {
            src: 'about/carousel/2025_3.jpg',
            caption: 'Thats a big fish! At the Califonia Academy of Sciences, 2025',
        },
        {
            src: 'about/carousel/2025_4.jpg',
            caption: 'Sharing my love of Lee\'s Bahn Mis with my mom, 2025',
        },
        {
            src: 'about/carousel/2025_5.jpg',
            caption: 'Ikea\'s vegetarian meatballs are the best! 2025',
        },
        {
            src: 'about/carousel/2025_6.jpg',
            caption: 'Enjoing Falafel Drive-In in San Jose, 2025',
        },
        {
            src: 'about/carousel/2025_7.jpg',
            caption: 'Showing my love to the droids at San Diego Comic-Con, 2025',
        },
        {
            src: 'about/carousel/2025_8.jpg',
            caption: 'Hanging out with Charlie Brown at my first Great America experience, 2025',
        },
        {
            src: 'about/carousel/2025_9.jpg',
            caption: 'Secretly wearing San Diego Padres colors at a Giants game in Oracle park in San Francisco, 2025',
        },
        {
            src: 'about/carousel/2025_10.jpg',
            caption: 'Successfully escaping a fairy-tale-themed Escape Room in San Jose. Game designers used my name for one of the props! 2025',
        },
        {
            src: 'about/carousel/2025_11.jpg',
            caption: 'Another successful escape from an Italian mafia-themed Escape Room. This time with family in Chandler, Arizona, 2025',
        },
        {
            src: 'about/carousel/2025_12.jpg',
            caption: 'Enjoining renowed Irish coffees and clam chowder in San Francisco with friends, 2025',
        },
        {
            src: 'about/carousel/2025_13.jpg',
            caption: 'My mom\'s wedding in Coronado, California, 2025',
        },
        {
            src: 'about/carousel/2024_1.jpg',
            caption: 'Friends and I at a San Diego Padres game on a very sunny day, 2024',
        },
        {
            src: 'about/carousel/2024_2.jpg',
            caption: 'Being silly at a San Diego Padres game, 2024',
        },
        {
            src: 'about/carousel/2024_3.jpg',
            caption: 'My fiancé and I at a Pokemon Go event at the Rose Bowl Stadium in Pasadena, 2024',
        },
        {
            src: 'about/carousel/2024_4.jpg',
            caption: 'Yet another successful escape from a spooky-cabin-themed Escape Room in Chandler, Arizona with family, 2024',
        },
        {
            src: 'about/carousel/2024_5.jpg',
            caption: 'Found Ahsoka Tano at a Star War\'s Galaxy\'s Edge at Disneyland in Anaheim, 2024',
        },
        {
            src: 'about/carousel/2023_1.jpg',
            caption: 'My fiancé and I at our first Pokemon Go event in Las Vegas, 2023',
        },
        {
            src: 'about/carousel/2023_2.jpg',
            caption: 'Celebrating my friend\'s birthday in a box at a San Diego Padres game, 2023',
        },
        {
            src: 'about/carousel/2023_3.jpg',
            caption: 'Snowboarding at Big Bear Mountain with friends for my Birthday, 2023',
        },
        {
            src: 'about/carousel/2023_4.jpg',
            caption: 'Hanging out with the ATLA gang at my first San Diego Comic-Con, 2023.',
        },
        {
            src: 'about/carousel/2022_2.jpg',
            caption: 'On a bayou tour in New Orleans, Louisiana with my family. Originally, this was planned as my graduation trip, but it was two years late because of COVID-19. Ironically, I got COVID for the first time on this trip, 2022.',
        },
    ],
    experience: {
        title: "Experience",
        data: positionsHeld
    }
}

export default aboutContent;