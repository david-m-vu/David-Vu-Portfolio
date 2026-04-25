import "./Projects.css";
import Project from "../../components/Project/Project.jsx"
import { projects } from "../../data/projects.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types";

import rightArrowIcon from "../../assets/icons/arrow-right.svg";
import purpleRightArrowIcon from "../../assets/icons/arrow-right-purple.svg";

import Technology from "../../components/Technology/Technology.jsx";
import { technologies } from "../../data/technologies.js";

import { motion } from "framer-motion"

const Projects = ({ setLinksAccessed, linksAccessed }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setLinksAccessed((prev) => new Map([...prev, ["/projects", true]]))
  }, [setLinksAccessed])

  return (
    <motion.div id="Projects" className="inline-flex flex-col items-start gap-4 px-4 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <p className="prompt">I&apos;m also a <span className="font-bold"><u>Full-stack developer</u></span> interested in creating fun and engaging user experiences with AI.</p>
        <p>The projects I&apos;ve done so far have pushed me to optimize for real-time data processing and software scalability, with the goal of having both passive and active interactions translate to instant, useful results.</p>
        <p><br /><b><u>Projects</u></b> I&apos;ve done throughout my journey that showcase this:</p>
        <ul className="flex flex-col items-center md:justify-start md:flex-row md:items-start flex-wrap gap-8 mt-4">
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <Project name={project.name} date={project.date} link={project.link} thumbnail={project.thumbnail} description={project.description} tags={project.tags} />
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <p className="prompt">Here are the <u><b>Languages and Technologies</b></u> I&apos;ve learned along the way:</p>
        <ul className="flex flex-row gap-x-6 gap-y-2 flex-wrap items-start mt-4 justify-center md:justify-start">
          {technologies.map((technology, index) => {
            return <li key={index}><Technology name={technology.name} icon={technology.icon} round={technology.round} /></li>
          })}
        </ul>
      </div>
      <div className="inline-flex flex-row cursor-pointer gap-2">
        <h3 onClick={() => navigate("/work")} className={`${linksAccessed.get("/work") ? "text-gray-300 hover:text-white ease-in-out duration-150 transition-colors" : "text-purple-400 hover:text-purple-300 ease-in-out duration-150 transition-colors"}`}>Work</h3>
        {
          linksAccessed.get("/work") ? <img onClick={() => navigate("/work")} className="rightArrow w-[1rem]" src={rightArrowIcon}></img> : <img onClick={() => navigate("/work")} className="rightArrow w-[1rem]" src={purpleRightArrowIcon}></img>
        }
      </div>
    </motion.div>
  )
}

Projects.propTypes = {
  setLinksAccessed: PropTypes.func.isRequired,
  linksAccessed: PropTypes.instanceOf(Map).isRequired
}

export default Projects