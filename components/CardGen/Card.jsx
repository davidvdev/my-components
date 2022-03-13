import { useState } from 'react'
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
        spades: "",
        clubs: "",
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
        <div className="innercard">
            <h1>{faceKey[card.face]}</h1>
            <h2>{card.suit}</h2>
        </div>
    )

    const numCard = () => (
        <div className='innerCard'>
            <h2>{card.suit}</h2>
            <h1>{card.cardValue}</h1>
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