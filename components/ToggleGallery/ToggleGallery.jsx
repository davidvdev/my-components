import { useState } from 'react'
import './ToggleGallery.css'
import photos from '../data/images.json'

const ToggleGallery = (props) => {

    const [quantity, setQuantity] = useState(photos.length)
    const [focusPhoto, setFocusPhoto] = useState(photos[0])

    const createButtons = (number) => {

        const buttons = []

        for (let i = 0; i < number; i++) {
            buttons.push(
                    <svg 
                        viewBox="0 0 100 100"
                        onClick={() => setFocusPhoto(photos[i])}
                        >
                        <circle cx="50" cy="50" r="50" role="button"/>
                    </svg>
            )
        }

        return buttons
    }

    return (
        <div className="ToggleGallery">
            <div className="container">
                <img src={focusPhoto.url} alt={focusPhoto.name}/>
            </div>
            <div className='toggles'>
                { createButtons(quantity).map(item => item)}
            </div>

        </div>
    )
}

export { ToggleGallery }