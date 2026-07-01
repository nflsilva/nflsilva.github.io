import { faMobileScreenButton, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faReact, faGithub, faAppStore, faGooglePay } from '@fortawesome/free-brands-svg-icons';

export const link = (text, url) => (
    <a href={url} target="_blank" rel="noreferrer">
        {text}
    </a>
);

export function iconFromDetailType(type) {
    return [
        { name: "Apple's App Store", icon: faAppStore, },
        { name: "Google Play Store", icon: faGooglePay, },
        { name: "GitHub", icon: faGithub, },
    ][type];
};

export function imageFromLogoName(logoName) {
    var path = process.env.PUBLIC_URL + "/logos/";
    switch (logoName) {
        case 'C':
            path += "c-logo.png";
            break;
        case 'C++':
            path += "cpp-logo.png";
            break;
        case 'Kotlin':
            path += "kotlin-logo.png";
            break;
        case 'Swift':
            path += "swift-logo.png";
            break;
        case 'REST':
            path += "rest-logo.png";
            break;
        case 'Firebase':
            path += "firebase-logo.png"
            break;
        case 'OpenGL':
            path += "opengl-logo.png"
            break;
        case 'Python':
            path += "python-logo.png"
            break;
        case 'Docker':
            path += "docker-logo.png"
            break;
        case 'Database':
        case 'CoreData':
        case 'MySQL':
            path += "database-logo.png";
            break;
        default:
            path += "component-logo.png";
            break;
    }
    return path;
};

const mobileAppsData = {
    title: "Mobile Apps",
    description:
        <>
            Once upon a time, I did iOS Development for {' '}
            <a href="https://ren.pt" target="_blank" rel="noreferrer">REN</a>
            , the Portuguese transmission system operator.
        </>,
    projects: [
        {
            title: 'REN Energy',
            description: "Played a critical role in the development of REN - Energy for iOS. Implemented backend server integration, UI charts and transition animations.",
            image: process.env.PUBLIC_URL + '/images/ren-energy.png',
            tags: ['Swift', 'UIKit', 'REST', 'CoreData', 'Firebase'],
            details: 'https://apps.apple.com/pt/app/ren-energy/id1225154751',
            detailType: 0,
            professional: true
        },
        {
            title: 'REN Investors',
            description: "Solo-developed the iOS version of REN - Investors, an app aiming to communicate financial information to investors of all levels.",
            image: process.env.PUBLIC_URL + '/images/ren-investors.png',
            tags: ['Swift', 'UIKit', 'REST', 'CoreData', 'Firebase'],
            details: 'https://apps.apple.com/pt/app/ren-investidores/id1068433116',
            detailType: 0,
            professional: true
        },
    ]
};

const miscellaneousData = {
    title: "Miscelaneous",
    description: "Personal projects provide an opportunity to explore new ideas, and deepen technical knowledge. " +
        "The collection below showcases a selection of projects and experiments developed over the years.",
    projects: [
        {
            title: 'k2ddt (Kotlin 2D Development Tools)',
            description: "The forth iteration of a toy game engine. Started as a simple 3D engine in C++ and evolved into a collection of tools for 2D, written in Kotlin. I used this project to learn the language as well as modern OpenGL.",
            image: process.env.PUBLIC_URL + '/images/2dgt.png',
            tags: ['Kotlin', 'OpenGL'],
            details: 'https://github.com/nflsilva/k2ddt',
            detailType: 2,
            professional: false
        },
        {
            title: 'yane (Yet Another NES Emulator)',
            description: "The first emulator I tried to write. This project allowed me to learn about virtual machines and alternative computer architecture. This emulator implementation is not complete.",
            image: process.env.PUBLIC_URL + '/images/yane.png',
            tags: ['C++'],
            details: 'https://github.com/nflsilva/yane',
            detailType: 2,
            professional: false
        }
    ]
};

const computerGraphicsData = {
    title: "",
    description: "",
    projects: []
};

const technologies = {
    title: "Technologies",
    description: "I've worked with a vast range of technologies over the years. Professionally I'm currently working as a Mobile Software Engineer.",
    techs: [
        {
            title: "Mobile",
            description: "Experienced in both iOS and Android development. Worked with Kotlin and Swift professionally for a couple of years.",
            icon: faMobileScreenButton
        },
        {
            title: "Web",
            description: "Experience with .NET, Python, React.js and Docker. Created a couple of tool webservers to help automate repetitive tasks.",
            icon: faReact
        },
        {
            title: "Games",
            description: "Experience with OpenGL, C/C++. Worked on a couple of toy projects on free time.",
            icon: faGamepad
        }
    ]
};

export const aboutMe = {
    description:
        "Programmer at heart and software engineer by profession, with a passion for building engaging and impactful software. " +
        "Driven by the challenge of transforming ideas into well-designed, reliable solutions, and motivated by seeing projects evolve from concept to completion. "
    //,cv: process.env.PUBLIC_URL + "/files/cv_nflsilva_2023.pdf"
    , interests: [
        "Computer Graphics"
        , "Game development & Tools"
        , "Micro-controller Programming"
        , "Virtual Machines"
        , "High-performance computing"
    ]
    , timeline: [
        { year: "Currently", event: <>With {link('Miniclip', 'https://www.miniclip.com')}, on the 8 Ball Pool project as a client developer. Working with C++ and Objective-C.</> },
        { year: "Mid 2021", event: <>Joined {link('Outsystems', 'https://www.outsystems.com')} mobile team as an iOS and Android developer. Worked with Kotlin, Java, Swift and Objective-C.</> },
        { year: "Mid 2016", event: <>Graduated from {link('Instituto Superior Técnico (IST)', 'https://tecnico.ulisboa.pt')} with an MSc in Information Systems and Computer Engineering, Universidade de Lisboa, specializing in Distributed Systems and Embedded Systems.</> },
        { year: "Late 2015", event: <>Joined {link('REN', 'https://ren.pt')} development team, as a generalist in Web and Mobile development. Worked with Swift and C# (.NET).</> },
    ]
};

export const pageSections = [
    { id: 'intro' },
    { id: 'about', data: aboutMe },
    { id: 'projects', data: mobileAppsData },
    { id: 'projects', data: miscellaneousData },
    { id: 'projects', data: computerGraphicsData },
];

export const footer = {
    linkedIn: "https://www.linkedin.com/in/nflsilva/",
    github: "https://github.com/nflsilva",
};