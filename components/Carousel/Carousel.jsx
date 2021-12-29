import { useState } from 'react'

import './Carousel.css'
import './default-data.json'
import data from './default-data.json'
import arrow from './button.svg'

const Carousel = (props) => {

    const photos = data
    const [focusPhoto, setFocusPhoto] = useState(0)

    const advanceReel = (direction) => {

        const max = photos.length -1

        if(direction === "forward"){
            focusPhoto != max ? setFocusPhoto(focusPhoto + 1) : setFocusPhoto(0)
        }
        else if (direction === "back"){
            focusPhoto != 0 ? setFocusPhoto(focusPhoto - 1) : setFocusPhoto(max)
        }
    }

    return (
        <div className="Carousel">
            <div className="reel">
                <div 
                    role="button" 
                    className="button back"
                    onClick={() => advanceReel('back')}
                >
                    <img src={arrow} className="arrow" alt="back button"/>
                </div>

                { photos.map((photo, index) => {
                    return (
                        <img 
                            src={photo.url} 
                            alt={photo.name} 
                            key={index}
                            className=""    
                        />
                        )
                    })
                }

                <div 
                    role="button" 
                    className="button forward"
                    onClick={() => advanceReel('forward')}    
                >
                    <img src={arrow} className="arrow" alt="forward button"/>
                </div>
            </div>
            <div className="progress">
                {
                    photos.map((photo, index) => {
                        return (
                            <svg 
                                viewBox="0 0 100 100" 
                                xmlns="http://www.w3.org/2000/svg"
                                key={index}
                                className={index === focusPhoto ? "focus" : ""}
                            >
                                <circle cx="50" cy="50" r="50"/>
                            </svg>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel