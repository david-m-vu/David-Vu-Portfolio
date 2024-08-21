import "./WorkExperience.css"

const WorkExperience = (props) => {
    return (
        <div className={`WorkExperience w-full 2xl:max-w-[50%] mr-4 outline-white outline-1 outline rounded-lg`}>
            <div className="content p-4 h-full">
                <header className="flex flex-row gap-4 items-start">
                    <div>
                        <div className="flex flex-row items-center gap-4">
                            <div className="rounded-full logo-container relative flex justify-center items-center flex-col">
                                <img className="logo rounded-full" src={props.logo}></img>
                            </div>
                            <h3 className="role">
                                <b>{props.role}</b>
                            </h3>
                        </div>
                        <p className="company text-gray-300">
                            {props.company}
                        </p>
                    </div>
                </header>
                <ul className="ml-4 list-disc">
                    {props.points.map((point, index) => {
                        return <li key={index}><p className="text-xs">{point}</p></li>
                    })}
                </ul>

            </div>
        </div>
    )
}

export default WorkExperience