import { useState } from 'react'
import clubs from './clubs.svg'
import hearts from './hearts.svg'
import spades from './spades.svg'
import diamonds from './diamonds.svg'


const Card = (props) => {

    const [isFlipped, setIsFlipped] = useState(true)

    const card = props.card
    const faceKey = {
        king: "K",
        jack: "J",
        queen: "Q"
    }
    const suitKey = {
        hearts: hearts,
        spades: spades,
        clubs: clubs,
        diamonds: diamonds
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
            <div className="shorthand upper">
                <p>{faceKey[card.face]}</p>
                <img src={suitKey[card.suit]} alt="" />
            </div>
            <img 
                className='card-art'
                src="https://i.imgur.com/iSqcRcw.png" 
                alt="" 
            />
            <div className="shorthand lower">
                <p>{faceKey[card.face]}</p>
                <img src={suitKey[card.suit]} alt="" />
            </div>
        </div>
    )

    const numCard = () => (
        <div className='inner-card'>
            <div className="shorthand upper">
                <p>{card.cardValue}</p>
                <img src={suitKey[card.suit]} alt="" />
            </div>
            <img 
                className='card-art'
                src="https://i.imgur.com/iSqcRcw.png" 
                alt="" 
            />
            <div className="shorthand lower">
                <p>{card.cardValue}</p>
                <img src={suitKey[card.suit]} alt="" />
            </div>
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