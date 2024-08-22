import "./About.css";
import Technology from "../../components/Technology/Technology.jsx";
import { technologies } from "../../data/technologies.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rightArrowIcon from "../../assets/icons/arrow-right.svg";
import purpleRightArrowIcon from "../../assets/icons/arrow-right-purple.svg";

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
                    <p>&gt; I&apos;m a Senior studying <u><b>Electrical Engineering and Computer Science</b></u> at  <u><b>UC Berkeley,</b></u> <br />set to graduate with a Bachelor&apos;s by December 2025.</p>
                </div>
                <div>
                    <p>&gt; I started coding in 2021 and haven&apos;t stopped ever since.</p>
                    <p>My passion lies in improving human interactions, especially concerning mental health, with both software and hardware</p>
                </div>
                <div>
                    <p>&gt; Here are the <u><b>Technologies</b></u> I&apos;ve learned along my journey:</p>
                    <ul className="flex flex-row gap-x-6 gap-y-2 flex-wrap items-start mt-4 justify-center md:justify-start">
                        {technologies.map((technology, index) => {
                            return <li key={index}><Technology name={technology.name} icon={technology.icon} /></li>
                        })}
                    </ul>
                </div>

            </div>
            <div className="flex flex-row cursor-pointer gap-2 float-right p-4">
                <h3 onClick={() => navigate("/projects")} className={`${props.linksAccessed.get("/projects") ? "text-gray-300 hover:text-white" : "text-purple-400 hover:text-purple-300"}`}>Projects</h3>
                {
                    props.linksAccessed.get("/projects") ? <img onClick={() => navigate("/projects")} className="rightArrow w-[1rem]" src={rightArrowIcon}></img> : <img onClick={() => navigate("/projects")} className="rightArrow w-[1rem]" src={purpleRightArrowIcon}></img>
                }
            </div>
        </motion.div>
    )
}

export default About