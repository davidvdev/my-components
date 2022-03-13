import { useState } from 'react'
import clubs from './clubs.svg'


const Card = (props) => {

    const [isFlipped, setIsFlipped] = useState(true)

    const card = props.card
    const faceKey = {
        king: "K",
        jack: "J",
        queen: "Q"
    }
    const suitKey = {
        hearts: "",
        spades: "SPADES",
        clubs: clubs,
        diamonds: ""
    }

    const cardFlip = (e) => {
        setTimeout(() => setIsFlipped(!isFlipped),100)
        console.log(e)
        const thisCard = e
        thisCard.style.transform === "" 
            ? thisCard.style.transform = "rotateY(180deg)" 
            : thisCard.style.transform = ""

        thisCard.style.transitionDuration = "0.5s"
    }

    const faceCard = () => (
        <div className="inner-card">
            <h1>{faceKey[card.face]}</h1>
            <img src={suitKey[card.suit]} alt="" />
        </div>
    )

    const numCard = () => (
        <div className='inner-card'>
            <h1>{card.cardValue}</h1>
            <img src={suitKey[card.suit]} alt="" />
        </div>
    )

    return(
        <div 
            className={isFlipped ? "flipped playing-card" : "playing-card"}
            onClick={(e) => cardFlip(e.currentTarget)}
        >
            {!isFlipped ? null : (card.face ? faceCard() : numCard())}
        </div>
    )
}

export { Card }