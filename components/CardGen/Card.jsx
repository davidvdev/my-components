import { useState } from 'react'
const Card = (props) => {

    const [isFlipped, setIsFlipped] = useState(true)

    const card = props.card

    const cardFlip = (e) => {
        setTimeout(() => setIsFlipped(!isFlipped),100)
        thisCard = e.currentTarget
        thisCard.style.transform === "" 
            ? thisCard.style.transform = "rotateY(180deg)" 
            : thisCard.style.transform = ""
            
        thisCard.style.transitionDuration = "0.5s"
    }

    return(
        <div 
            className={isFlipped ? "flipped playing-card" : "playing-card"}
            onClick={(e) => cardFlip(e)}
        >
            { card.face ? (
                    <h1>{card.face}</h1>
                ) : (
                    <h1>{card.cardValue}</h1>
                )
            }
            <h2>{card.suit}</h2>
        </div>
    )
}

export { Card }