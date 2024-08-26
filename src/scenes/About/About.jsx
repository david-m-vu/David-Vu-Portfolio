import "./About.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rightArrowIcon from "../../assets/icons/arrow-right.svg";
import purpleRightArrowIcon from "../../assets/icons/arrow-right-purple.svg";
import me from "../../assets/me.png"

import { motion } from "framer-motion";

const About = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        props.setLinksAccessed((prev) => new Map([...prev, ["/", true]]))
    }, [])

    return (
        <motion.div id="About" className="inline-flex flex-col items-start px-4 pb-4 sm:gap-4 md:gap-8 sm:flex-row">
            <div className="">
                <div className="flex flex-col items-start gap-8">
                    <div id="personal-info">
                        <p>&gt; I&apos;m a Senior at  <u><b>UC Berkeley,</b></u> studying <u><b>Electrical Engineering and Computer Science</b></u> <br />set to graduate with a Bachelor&apos;s by December 2025.</p>
                    </div>
                    <div>
                        <p>&gt; I started coding in 2021 and haven&apos;t stopped ever since.</p>
                        <p>My passion lies in elevating human interactions through user-centered design utilizing both software and hardware.</p>
                    </div>
                    <div>
                        <p>Whether it&apos;s building apps that bring people together or autonomous robots that solve real-world issues, I&apos;m always in pursuit of new ideas that can cultivate meaningful progress.</p>
                    </div>
                </div>
                <div className="inline-flex flex-row cursor-pointer gap-2 my-4">
                    <h3 onClick={() => navigate("/projects")} className={`${props.linksAccessed.get("/projects") ? "text-gray-300 hover:text-white ease-in-out duration-150 transition-colors" : "text-purple-400 hover:text-purple-300 ease-in-out duration-150 transition-colors"}`}>Projects</h3>
                    {
                        props.linksAccessed.get("/projects") ? <img onClick={() => navigate("/projects")} className="rightArrow w-[1rem]" src={rightArrowIcon}></img> : <img onClick={() => navigate("/projects")} className="rightArrow w-[1rem]" src={purpleRightArrowIcon}></img>
                    }
                </div>
            </div>
            <div className="bg-black p-2 rounded-lg">
                <img src={me} alt="me" className="rounded-lg w-[20rem]"></img>
            </div>
        </motion.div >
    )
}

export default About