import "./Project.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import  ImageWithPlaceHolder from "../ImageWithPlaceHolder/ImageWithPlaceHolder.jsx"
import externalLinkIcon from "../../assets/icons/external-link.png"

const Project = ({name, date, thumbnail, link, description, tags}) => {
    const [hadHovered, setHadHovered] = useState(false)
    const [isHoveringImage, setIsHoveringImage] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        setIsOpened(true);
    }, [])

    return (
        <div className={`Project ${isOpened && "opened"} rounded-lg ${(hadHovered || window.innerWidth <= 452 ) ? "opened" : ""}`} onMouseOver={() => setHadHovered(true)}>
            <div className="content p-4 h-full flex flex-col gap-1">
                <div className="header flex justify-between items-center text-lg font-semibold">
                    <p className="text-nowrap">{name}</p>
                    <span className="text-[#f2bf24]">{date}</span>
                </div>
                <figure className="w-full m-0 flex-1 min-h-0 flex flex-col">
                    <div className="thumbnail-container w-full relative shrink-0" onMouseOver={() => setIsHoveringImage(true)} onMouseOut={() => setIsHoveringImage(false)}>
                        <a href={link} target="_blank" rel="noopener noreferrer"><ImageWithPlaceHolder alt={`${name} thumbnail`} src={thumbnail}></ImageWithPlaceHolder></a>
                        <img src={externalLinkIcon} className={`${!isHoveringImage && "icon-hidden"} external-link-icon h-[20px] w-[20px] absolute top-2 right-2 pointer-events-none	`}></img>
                    </div>
                    <figcaption className="caption mt-2 flex-1 min-h-0 flex flex-col gap-2 justify-between">
                        <main className="flex-1">
                            <p className="text-xs">
                                {description}
                            </p>
                        </main>
                        <footer className="flex flex-row flex-wrap gap-1">
                            {tags.map((tag, index) => {
                                const tagNormalized = (typeof tag === "string") ? tag.trim() : "";
                                if (!tagNormalized) {
                                    return;
                                }
                                return (
                                    <p key={index} className="py-0.5 px-1 border border-gray-700  rounded-md bg-[#571ec8] text-xs font-medium text-white">{tag}</p>
                                )
                            })}
                        </footer>
                    </figcaption>
                </figure>

            </div>
        </div>

    )
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Project
