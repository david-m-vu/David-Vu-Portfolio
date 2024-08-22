import "./Projects.css";
import Project from "../../components/Project/Project.jsx"
import { projects } from "../../data/projects.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import rightArrowIcon from "../../assets/icons/arrow-right.svg";
import purpleRightArrowIcon from "../../assets/icons/arrow-right-purple.svg";

import { motion } from "framer-motion"

const Projects = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    props.setLinksAccessed((prev) => new Map([...prev, ["/projects", true]]))
  }, [])

  return (
    <motion.div id="Projects">
      <p>&gt; I&apos;m also a <span className="font-bold">Full-stack developer</span> interested in creating fun and engaging user experiences.</p>
      <p>Some <b><u>Projects</u></b> I&apos;ve done that showcase this:</p>
      <ul className="flex flex-col items-center md:justify-start md:flex-row md:items-start flex-wrap gap-8 mt-4">
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <Project name={project.name} date={project.date} link={project.link} thumbnail={project.thumbnail} description={project.description} tags={project.tags} />
            </li>
          )
        })}
      </ul>
      <div className="flex flex-row cursor-pointer gap-2 float-right p-4">
        <h3 onClick={() => navigate("/work")} className={`${props.linksAccessed.get("/work") ? "text-gray-300 hover:text-white" : "text-purple-400 hover:text-purple-300"}`}>Work</h3>
        {
          props.linksAccessed.get("/work") ? <img onClick={() => navigate("/work")} className="rightArrow w-[1rem]" src={rightArrowIcon}></img> : <img onClick={() => navigate("/work")} className="rightArrow w-[1rem]" src={purpleRightArrowIcon}></img>
        }
      </div>
    </motion.div>
  )
}

export default Projects