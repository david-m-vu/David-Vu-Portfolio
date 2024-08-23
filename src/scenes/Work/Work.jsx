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
    window.scrollTo(0, 0);
    props.setLinksAccessed((prev) => new Map([...prev, ["/work", true]]))
  }, [])



  return (

    <motion.div id="Work">
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
      <div className="flex flex-row cursor-pointer gap-2 float-right p-4">
        <h3 onClick={() => navigate("/")} className={`${props.linksAccessed.get("/about") ? "text-gray-300 hover:text-white" : "text-purple-400 hover:text-purple-300"}`}>About</h3>
        {
          props.linksAccessed.get("/about") ? <img onClick={() => navigate("/")} className="rightArrow w-[1rem]" src={rightArrowIcon}></img> : <img onClick={() => navigate("/")} className="rightArrow w-[1rem]" src={purpleRightArrowIcon}></img>
        }
      </div>
    </motion.div>
  )
}

export default Work