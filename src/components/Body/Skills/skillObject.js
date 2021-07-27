import { faAngular, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCogs, faDatabase, faGlobe, faServer } from '@fortawesome/free-solid-svg-icons';

const skillsObject = [
    {
        icon: faCode,
        text: "All frameworks and tools aside, knowing the core & fundamentals is what gets you through the end. I am well versed in both old and modern versions of ECMAScript and I would feel comfortable in any of its environments.",
        title: "Vanilla Javascript"
    },
    {
        icon: faReact,
        icon2: faAngular,
        text: "I can create and structure front end code that is readable and easy to maintain. My own portfolio projects were done with React, but I mostly work with Angular in my current company.",
        title: "Front end development - react & angular"
    },
    {
        icon: faNodeJs,
        icon2: faServer,
        text: "Whether you need standard routing and authentication or more complex information flow and back-end structure, I can be of assistance. I have general experience with REST API, mostly in Node.js, but lately I've been coding in .NET as well.",
        title: "Back end development - Node.js & .NET"
    },
    {
        icon: faDatabase,
        text: "In my own projects I used NoSQL database (MongoDB with Mongoose) because that's what you learn first as a self-taught developer. However, projects that I do for my company all SQL based, so I did my fair share of SQL queries as well.",
        title: "Experience with SQL & NoSQL databases"
    },
    {
        icon: faCogs,
        text: "In the past I have worked with Bootstrap and Materialize for styling, Redux for centralizing data on the front end, D3 for data visualization and of course, the necessity - SASS. I am familiar with jQuery although I prefer not to use it with React.",
        title: "Conversance of common web tools"
    },
    {
        icon: faGlobe,
        text: "If your company does frequent meetings & pitchings with international clients, my non-developer skills can come in hand. I have worked previously as a night receptionist in a hostel, photographer and tourist guide for Travel agency, assistant director on sets with international crew. I have a profound knowledge of the English language, speak it fluently and without a thick Russian accent.",
        title: "Advanced English"
    }
]

export default skillsObject;