import "./NavBar.css"
import { NavLink, useLocation } from "react-router-dom";

import linkedInIcon from "../../assets/icons/linkedin-icon.png";
import githubIcon from "../../assets/icons/github-mark.svg";

const NavBar = (props) => {
    const location = useLocation();

    const getIsHighlighted = (path) => {
        if (path === location.pathname) {
            return "text-white";
        } else {
            return "text-[#898989]"
        }
    }

    return (
        <div id="NavBar" className="mb-4">
            <nav className="flex flex-row justify-between">
                <div className="left flex flex-row items-center gap-8">

                    <NavLink to="/"><h1 className="font-bold">David Vu</h1></NavLink>
                    <div className="relative group">
                        <div className={`text-center absolute hover:cursor-pointer transition-colors ease-in-out duration-150 group-hover:bg-gradient-to-r from-pink-300 to-orange-400 group-hover:scale-125 inset-0 bg-clip-text text-transparent blur`}>PLAY</div>
                        <NavLink to="/"><div className={`${getIsHighlighted("/")} relative hover:cursor-pointer ease-in-out duration-150 group-hover:text-[#ffffff] transition-colors`}>About</div></NavLink>
                    </div>

                    <div className="relative group">
                        <div className={`text-center absolute hover:cursor-pointer transition ease-in-out duration-150 group-hover:bg-gradient-to-r from-pink-300 to-orange-400 group-hover:scale-125 inset-0 bg-clip-text text-transparent blur`}>PLAY</div>
                        <NavLink to="/projects"><div className={`${getIsHighlighted("/projects")} relative hover:cursor-pointer ease-in-out duration-150 group-hover:text-[#ffffff] transition-colors`}>Projects</div></NavLink>
                    </div>
                    <div className="relative group">
                        <div className={`text-center absolute hover:cursor-pointer transition-colors ease-in-out duration-150 group-hover:bg-gradient-to-r from-pink-300 to-orange-400 group-hover:scale-125 inset-0 bg-clip-text text-transparent blur`}>PLAY</div>
                        <NavLink to="/work"><div className={`${getIsHighlighted("/work")} relative hover:cursor-pointer ease-in-out duration-150 group-hover:text-[#ffffff] transition-colors`}>Work</div></NavLink>
                    </div>
                </div>
                <div className="right flex flex-row items-center gap-4">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/david-vu-a4a2b7223/"><img className="h-[2.5rem] hover:scale-95 transition-transform" src={linkedInIcon}></img></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/david-m-vu"><img className="h-[2.5rem] hover:scale-95 transition-transform" src={githubIcon}></img></a>
                </div>

            </nav>

        </div>
    )
}

export default NavBar