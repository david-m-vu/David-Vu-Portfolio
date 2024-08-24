import "./Project.css";
import { useState, useEffect } from "react";
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

const ImageWithPlaceHolder = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [placeholderColor, setPlaceholderColor] = useState("#686b5e")

    useEffect(() => {
        setPlaceholderColor(getRandomDullHslColor());
    }, [])

    const getRandomDullHslColor = () => {
        // Generate random hue (0-360)
        const hue = Math.floor(Math.random() * 361);
        // Set saturation to a low value to ensure dullness (e.g., 10-20%)
        const saturation = Math.floor(Math.random() * 11) + 10;
        // Set lightness to a low-medium value (e.g., 30-50%)
        const lightness = Math.floor(Math.random() * 21) + 30;
      
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    return (
        <div className="flex flex-row justify-center">
            <img className={`object-cover w-full h-full rounded-lg ${isLoaded ? "block" : "hidden"}`} src={props.src} alt={props.alt} style={{aspectRatio: 1.5}}
                onLoad={() => {
                    setIsLoaded(true); 
                }}/>
            {!isLoaded && <div className={`w-full h-full rounded-lg`} style={{ backgroundColor: placeholderColor, aspectRatio: 1.5 }}/>}
        </div>
    )
}

export default Project