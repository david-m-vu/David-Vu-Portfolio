import "./About.css";
import Technology from "../../components/Technology/Technology.jsx";
import { technologies } from "../../data/technologies.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rightArrowIcon from "../../assets/icons/arrow-right.svg";
import purpleRightArrowIcon from "../../assets/icons/arrow-right-purple.svg";

import Projects from "../Projects/Projects.jsx";

import { motion } from "framer-motion";

const About = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        props.setLinksAccessed((prev) => new Map([...prev, ["/about", true]]))
    }, [])

    return (
        <motion.div id="About">
            <div className="flex flex-col items-start gap-8">
                <div id="personal-info">
                    <p>&gt; I&apos;m a Senior at  <u><b>UC Berkeley,</b></u> studying <u><b>Electrical Engineering and Computer Science</b></u> <br />set to graduate with a Bachelor&apos;s by December 2025.</p>
                </div>
                <div>
                    <p>&gt; I started coding in 2021 and haven&apos;t stopped ever since.</p>
                    <p>My passion lies in elevating human interactions through user-centered design utilizing both software and hardware.</p>
                </div>
                <Projects />
                <div>
                    <p>&gt; Here are the <u><b>Technologies</b></u> I&apos;ve learned along the way:</p>
                    <ul className="flex flex-row gap-x-6 gap-y-2 flex-wrap items-start mt-4 justify-center md:justify-start">
                        {technologies.map((technology, index) => {
                            return <li key={index}><Technology name={technology.name} icon={technology.icon} /></li>
                        })}
                    </ul>
                </div>

            </div>
            <div className="flex flex-row cursor-pointer gap-2 float-right p-4">
                <h3 onClick={() => navigate("/work")} className={`${props.linksAccessed.get("/work") ? "text-gray-300 hover:text-white" : "text-purple-400 hover:text-purple-300"}`}>Work</h3>
                {
                    props.linksAccessed.get("/work") ? <img onClick={() => navigate("/work")} className="rightArrow w-[1rem]" src={rightArrowIcon}></img> : <img onClick={() => navigate("/work")} className="rightArrow w-[1rem]" src={purpleRightArrowIcon}></img>
                }
            </div>
        </motion.div>
    )
}

export default About