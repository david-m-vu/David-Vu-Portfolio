import "./Project.css";
import { useState, useEffect } from "react";
import  ImageWithPlaceHolder from "../ImageWithPlaceHolder/ImageWithPlaceHolder.jsx"
import externalLinkIcon from "../../assets/icons/external-link.png"

const Project = (props) => {
    const [hadHovered, setHadHovered] = useState(false)
    const [isHoveringImage, setIsHoveringImage] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        setIsOpened(true);
    }, [])

    return (
        <div className={`Project ${isOpened && "opened"} rounded-lg ${(hadHovered || window.innerWidth <= 452 )  ? "opened" : ""}`} onMouseOver={() => setHadHovered(true)}>
            <div className="content p-4 h-full ">
                <div className="header flex justify-between items-center text-lg font-semibold">
                    <p className="text-nowrap">{props.name}</p>
                    <span className="text-[#f2bf24]">{props.date}</span>
                </div>
                <figure className="w-full">
                    <div className="thumbnail-container w-full relative" onMouseOver={() => setIsHoveringImage(true)} onMouseOut={() => setIsHoveringImage(false)}>
                        <a href={props.link} target="_blank" rel="noopener noreferrer"><ImageWithPlaceHolder alt={`${props.name} thumbnail`} src={props.thumbnail}></ImageWithPlaceHolder></a>
                        <img src={externalLinkIcon} className={`${!isHoveringImage && "icon-hidden"} external-link-icon h-[20px] w-[20px] absolute top-2 right-2 pointer-events-none	`}></img>
                    </div>
                    <figcaption className="caption mt-2 flex flex-col justify-between">
                        <main>
                            <p className="text-xs">
                                {props.description}
                            </p>
                        </main>
                        <footer>
                            <p className="text-sm text-[#f2bf24]">{props.tags.join(", ")}</p>
                        </footer>
                    </figcaption>
                </figure>

            </div>
        </div>

    )
}

export default Project