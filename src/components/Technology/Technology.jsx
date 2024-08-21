import "./Technology.css";

const Technology = (props) => {
    return (
        <div id="Technology" className="flex flex-col justify-center items-center gap-2">
            <div className="tech-icon-container rounded-full w-[100px] h-[100px] flex justify-center items-center">
                <img className="tech-icon w-[2.5rem] h-[2.5rem]" src={props.icon}></img>
            </div>
            <p className="max-w-[100px] text-center text-[0.75rem]">{props.name}</p>
        </div>
    )
}

export default Technology;