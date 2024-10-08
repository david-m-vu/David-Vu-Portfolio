import "./Work.css";
import WorkExperience from "../../components/WorkExperience/WorkExperience.jsx";
import { workExperiences } from "../../data/workExperiences.js";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import rightArrowIcon from "../../assets/icons/arrow-right.svg";
import purpleRightArrowIcon from "../../assets/icons/arrow-right-purple.svg";

import { motion } from "framer-motion"

const Work = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.setLinksAccessed((prev) => new Map([...prev, ["/work", true]]))
  }, [])

  return (
    <motion.div id="Work" className="inline-flex flex-col items-start px-4 pb-4"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      {/* <p><b><u>Work Experience</u></b></p> */}
      <ul className="flex flex-col gap-8 mt-4 pl-4 pt-2 border-l-4 border-white">
        {workExperiences.map((experience, index) => {
          return (
            <li key={index} className="flex flex-col gap-2">
              <h3 className="text-gray-200">{`${experience.dates[0]} - ${experience.dates[1]}`}</h3>
              <WorkExperience logo={experience.logo} role={experience.role} company={experience.company} points={experience.points} />
            </li>
          )
        })}
      </ul>
      <div className="inline-flex flex-row cursor-pointer gap-2 my-4">
        <h3 onClick={() => navigate("/")} className={`${props.linksAccessed.get("/") ? "text-gray-300 hover:text-white ease-in-out duration-150 transition-colors" : "text-purple-400 hover:text-purple-300 ease-in-out duration-150 transition-colors"}`}>About</h3>
        {
          props.linksAccessed.get("/") ? <img onClick={() => navigate("/")} className="rightArrow w-[1rem]" src={rightArrowIcon}></img> : <img onClick={() => navigate("/")} className="rightArrow w-[1rem]" src={purpleRightArrowIcon}></img>
        }
      </div>
    </motion.div>
  )
}

export default Work