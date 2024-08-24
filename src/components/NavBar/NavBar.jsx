import "./NavBar.css"
import { NavLink, useLocation } from "react-router-dom";

import linkedInIcon from "../../assets/icons/linkedin-icon.png";
import githubIcon from "../../assets/icons/github-mark.svg";

const textBgBlur = "text-center absolute hover:cursor-pointer transition-colors ease-in-out duration-150 group-hover:bg-gradient-to-r from-pink-300 to-orange-400 group-hover:scale-125 inset-0 bg-clip-text text-transparent blur"

const NavBar = (props) => {
    const location = useLocation();

    const getIsHighlighted = (path) => {
        if (path === location.pathname) {
            return "text-white";
        } else {
            return "text-[#898989]"
        }
    }

    const getNavLinkClass = (path) => {
        if (path !== location && !props.linksAccessed.get(path)) {
            return "pulsate text-purple-400 relative hover:cursor-pointer ease-in-out duration-150 group-hover:text-purple-300 transition-colors"
        } else {
            return "relative hover:cursor-pointer ease-in-out duration-150 group-hover:text-[#ffffff] transition-colors"
        }
    }

    return (
        <div id="NavBar" className="px-4 py-4 ">
            <nav className="flex flex-col min-[556px]:flex-row min-[556px]:justify-between">
                <div className="left flex flex-row justify-between items-center gap-4 md:gap-8 md:justify-start">

                    <NavLink to="/"><h1 className="font-bold text-center">David Vu</h1></NavLink>
                    <div className="flex flex-row items-center gap-4 md:gap-8">
                        <div className="relative group">
                            <div className={`${textBgBlur} text-[0.75rem] md:text-[0.8rem] lg:text-[1rem]`}>About</div>
                            <NavLink to="/"><div className={`${getIsHighlighted("/")} ${getNavLinkClass("/")} text-[0.75rem] md:text-[0.8rem] lg:text-[1rem]`}>About</div></NavLink>
                        </div>
                        <div className="relative group">
                            <div className={`${textBgBlur} text-[0.75rem] md:text-[0.8rem] lg:text-[1rem]`}>Projects</div>
                            <NavLink to="/projects"><div className={`${getIsHighlighted("/projects")} ${getNavLinkClass("/projects")} text-[0.75rem] md:text-[0.8rem] lg:text-[1rem]`}>Projects</div></NavLink>
                        </div>
                        <div className="relative group">
                            <div className={`${textBgBlur} text-[0.75rem] md:text-[0.8rem] lg:text-[1rem]`}>Work</div>
                            <NavLink to="/work"><div className={`${getIsHighlighted("/work")} ${getNavLinkClass("/work")} text-[0.75rem] md:text-[0.8rem] lg:text-[1rem]`}>Work</div></NavLink>
                        </div>
                    </div>

                </div>
                <div className="right flex-row items-center gap-4 flex justify-end">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/david-vu-a4a2b7223/"><img className="h-[1.5rem] md:h-[2rem] lg:h-[2.25rem] hover:scale-95 transition-transform" src={linkedInIcon}></img></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/david-m-vu"><img className="h-[1.5rem] md:h-[2rem] lg:h-[2.25rem] hover:scale-95 transition-transform" src={githubIcon}></img></a>
                </div>

            </nav>

        </div>
    )
}

export default NavBar