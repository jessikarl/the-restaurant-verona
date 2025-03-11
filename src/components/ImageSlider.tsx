import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

type ImageSliderProps = {
    imageUrls: string[]
}

export const ImageSlider = ({imageUrls}: ImageSliderProps) => {
    const [ImageIndex, setImageIndex] = useState(0)

    const showNextImage = () => {
        setImageIndex(index => {
            if (index === imageUrls.length -1) return 0
            return index +1 
        })
    }

    const showPrevImage = () => {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index -1 
        })
    }


    return (
        <>
        <div>
            <img src={imageUrls[ImageIndex]} className="imageSlider"/>
            <button onClick={showPrevImage} className="sliderButtonLeft">
                <ChevronLeft/>
            </button>
            <button onClick={showNextImage} className="sliderButtonRight">
                <ChevronRight/>
            </button>
        </div>
        </>
    )
}