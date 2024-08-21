import "./About.css";
import Technology from "../../components/Technology/Technology.jsx";

import jsIcon from "../../assets/icons/js-icon.png";
import tsIcon from "../../assets/icons/ts-icon.png";
import reactIcon from "../../assets/icons/react-icon.svg";
import nextIcon from "../../assets/icons/nextjs-icon.svg";
import reduxIcon from "../../assets/icons/redux-icon.svg";
import nodeIcon from "../../assets/icons/node-icon.svg";
import expressIcon from "../../assets/icons/expressjs-icon.webp";
import pythonIcon from "../../assets/icons/python-icon.svg";
import flaskIcon from "../../assets/icons/flask-icon.svg";
import mongoIcon from "../../assets/icons/mongo-icon.svg";
import javaIcon from "../../assets/icons/java-icon.svg";
import cIcon from "../../assets/icons/c-icon.png";
import cppIcon from "../../assets/icons/cpp-icon.svg";
import arduinoIcon from "../../assets/icons/arduino-icon.webp";
import jwtIcon from "../../assets/icons/jwt-icon.svg";
import sqlIcon from "../../assets/icons/sql-icon.svg";
import threeIcon from "../../assets/icons/threejs-icon.svg";
import htmlIcon from "../../assets/icons/html-icon.svg";
import cssIcon from "../../assets/icons/css-icon.svg";
import tailwindIcon from "../../assets/icons/tailwind-icon.svg";
import gitIcon from "../../assets/icons/git-icon.svg";
import flutterIcon from "../../assets/icons/flutter-icon.svg";
import postgreIcon from "../../assets/icons/postgre-icon.svg";
import firebaseIcon from "../../assets/icons/firebase-icon.svg";

const technologies = [
    {
        name: "Javascript (ES5/ES6)",
        icon: jsIcon
    },
    {
        name: "TypeScript",
        icon: tsIcon
    },
    {
        name: "React",
        icon: reactIcon
    },
    {
        name: "React Native",
        icon: reactIcon
    },
    {
        name: "Next.js",
        icon: nextIcon
    },
    {
        name: "Redux",
        icon: reduxIcon
    },
    {
        name: "Node.js",
        icon: nodeIcon
    },
    {
        name: "Express.js",
        icon: expressIcon
    },
    {
        name: "Python",
        icon: pythonIcon
    },
    {
        name: "Flask",
        icon: flaskIcon
    },
    {
        name: "MongoDB",
        icon: mongoIcon
    },
    {
        name: "Java",
        icon: javaIcon
    },
    {
        name: "C",
        icon: cIcon
    },
    {
        name: "C++",
        icon: cppIcon
    },
    {
        name: "Arduino",
        icon: arduinoIcon
    },
    {
        name: "JSON Web Token",
        icon: jwtIcon
    },
    {
        name: "SQL",
        icon: sqlIcon
    },
    {
        name: "Three.js",
        icon: threeIcon
    },
    {
        name: "HTML5",
        icon: htmlIcon
    },
    {
        name: "CSS3",
        icon: cssIcon
    },
    {
        name: "Tailwind",
        icon: tailwindIcon
    },
    {
        name: "Git",
        icon: gitIcon
    },
    {
        name: "Flutter",
        icon: flutterIcon
    },
    {
        name: "PostegreSQL",
        icon: postgreIcon
    },
    {
        name: "Firebase",
        icon: firebaseIcon
    },
]

const About = () => {
    return (
        <div id="About">
            <div className="flex flex-col gap-8">
                <div id="personal-info">
                    <p>&gt; I&apos;m a Senior studying <u><b>Electrical Engineering and Computer Science</b></u> at  <u><b>UC Berkeley,</b></u> <br />set to graduate with a Bachelor&apos;s by December 2025.</p>
                </div>

                <div>
                    <p>&gt; I started coding in 2021 and have not stopped ever since.</p>
                    <p>My passion lies in improving human interactions, especially mental health, with tech, whether it&apos;s with software or hardware.</p>

                </div>
                <div>
                    <p>&gt; <u><b>Technologies</b></u> I&apos;ve learned along the way:</p>
                    <ul className="flex flex-row gap-x-6 gap-y-2 flex-wrap items-start mt-4">
                        {technologies.map((technology, index) => {
                            return <li key={index}><Technology name={technology.name} icon={technology.icon} /></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About