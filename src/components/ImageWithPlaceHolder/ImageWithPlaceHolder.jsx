import { useState, useEffect } from "react"

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

export default ImageWithPlaceHolder;