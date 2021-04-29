import pbimage from "../../images/pillBox.png";
import noteimage from "../../images/noteTaker.png";
import betimage from "../../images/BETTER-WEATHER-2020.png";
import empimage from "../../images/EmpTracker.png";
import alistsimage from "../../images/a-lists.png";
import teamimage from "../../images/TeamGenerator.png";

const projects = [
    {
        id: 1,
        title: "A-LISTS",
        href: "https://github.com/ggfalloon/a-lists",
        githref: "https://a-lists.herokuapp.com/",
        image: alistsimage,
        description:
            "Heroku deployed React app. Users save watchlists for quick access to shows and movies.",
        languages: "React/JSX Node.js/ MySQL/ Bootstrap"
    },
    {
        id: 2,
        title: "Pill Box",
        href: "https://github.com/ggfalloon/Pill-Box",
        githref: "https://sheltered-caverns-06883.herokuapp.com/",
        image: pbimage,
        description:
            "Heroku deployed responsive app. Caretakers can keep medications organized and reduce errors.",
        languages: "JavaScript/ Node.js/ MySQL/ Bootstrap"
    },
    {
        id: 3,
        title: "Note Taker",
        href: "https://github.com/ggfalloon/NoteTaker",
        githref: "https://quiet-peak-88900.herokuapp.com/",
        image: noteimage,
        description:
            "Heroku deployed app using an express server. Write, save and delete notes to stay on top of tasks.",
        languages: "JavaScript/ Node.js/ Express.js"
    },
    {
        id: 4,
        title: "Better Weather",
        href: "https://github.com/ggfalloon/BETTER-WEATHER",
        githref: "https://github.com/ggfalloon/BETTER-WEATHER",
        image: betimage,
        description: "NFL betting app that includes odds data, stadium info and weather.",
        languages: "JavaScript/ Node.js/ Express.js"
    },
    {
        id: 5,
        title: "Employee Tracker",
        href: "https://github.com/ggfalloon/NoteTaker",
        githref: "https://quiet-peak-88900.herokuapp.com/",
        image: empimage,
        description:
            "Heroku deployed app using an express server. Write, save and delete notes to stay on top of tasks.",
        languages: "HTML5/ TailwindCSS/ JavaScript/ jQuery"
    },
    {
        id: 6,
        title: "Team Profile Generator",
        href: "https://github.com/ggfalloon/TeamGenerator-CLI",
        githref: "https://github.com/ggfalloon/TeamGenerator-CLI",
        image: teamimage,
        description:
            "Node.js CLI application that generates team profile information.",
        languages: "HTML5/ BootstrapCSS/ JavaScript/ Node.js/ Jest"
    }
];

export default projects;
