import React from "react";
import pbimage from "../images/pillBox.png";
import noteimage from "../images/noteTaker.png";
import betimage from "../images/BETTER-WEATHER-2020.png";
import empimage from "../images/EmpTracker.png";
import burgerimage from "../images/BurgerEater.png";
import teamimage from "../images/TeamGenerator.png";

const portfolio = [
    {
        id: 1,
        title: "Pill Box",
        href: "https://github.com/ggfalloon/Pill-Box",
        githref: "https://sheltered-caverns-06883.herokuapp.com/",
        image: pbimage,
        description:
            "Heroku deployed responsive app.Caretakers can keep medications organized and reduce errors.",
        languages: "JavaScript/ Node.js/ MySQL/ Bootstrap"
    },
    {
        id: 2,
        title: "Note Taker",
        href: "https://github.com/ggfalloon/NoteTaker",
        githref: "https://quiet-peak-88900.herokuapp.com/",
        image: noteimage,
        description:
            "Heroku deployed app using an express server. Write, save and delete notes to stay on top of tasks.",
        languages: "JavaScript/ Node.js/ Express.js"
    },
    {
        id: 3,
        title: "Better Weather",
        href: "https://github.com/ggfalloon/BETTER-WEATHER",
        githref: "https://github.com/ggfalloon/BETTER-WEATHER",
        image: betimage,
        description: "NFL betting app that includes odds data, stadium info and weather.",
        languages: "JavaScript/ Node.js/ Express.js"
    },
    {
        id: 4,
        title: "Employee Tracker",
        href: "https://github.com/ggfalloon/NoteTaker",
        githref: "https://quiet-peak-88900.herokuapp.com/",
        image: empimage,
        description:
            "Heroku deployed app using an express server. Write, save and delete notes to stay on top of tasks.",
        languages: "HTML5/ TailwindCSS/ JavaScript/ jQuery"
    },
    {
        id: 5,
        title: "Burger Eater",
        href: "https://github.com/ggfalloon/BurgerEater",
        githref: "https://infinite-sea-58389.herokuapp.com/",
        image: burgerimage,
        description:
            "Heroku deployed, full stack, fun burger app.",
        languages: "Node.js/ MySQL/ JavaScript/ Handlebars/ORM"
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

// return (
//     <div className="row">
//         <div className="col-md-6">
//             <h3>{title} - <a href={href} target="_blank" rel="noreferrer">
//                 <span><i className="fab fa-github-square iconPort"></i></span>
//             </a></h3>
//             <div className="overlayHolder">
//                 <a href={githref} target="_blank" rel="noreferrer">
//                     <img src={image}
//                         alt="app page screenshot"
//                         className="img-thumbnail img-thumb" />
//                     <div className="img-overlay">
//                         <p>{description}</p>
//                         <p>{languages}</p>
//                     </div>
//                 </a></div>
//         </div>
//     </div>
// )
export default portfolio;
