import "./Technology.css";

import PropTypes from "prop-types";

const Technology = ({icon, name, round}) => {
    return (
        <div id="Technology" className="flex flex-col justify-center items-center gap-2">
            <div className="tech-icon-container rounded-full w-[100px] h-[100px] flex justify-center items-center">
                <img className={`w-[2.5rem] h-[2.5rem] ${round && "rounded-full"}`} src={icon}></img>
            </div>
            <p className="max-w-[100px] text-center text-[0.73rem]">{name}</p>
        </div>
    )
}

Technology.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    round: PropTypes.bool
}

export default Technology;