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
    const shape = suitKey[card.suit]

    const cardFlip = (e) => {
        setTimeout(() => setIsFlipped(!isFlipped),100)
        console.log(e)
        const thisCard = e
        thisCard.style.transform === "" 
            ? thisCard.style.transform = "rotateY(180deg)" 
            : thisCard.style.transform = ""

        thisCard.style.transitionDuration = "0.5s"
    }

    const num = Number(card.cardValue)
    const layout = []
    switch (num) {
        case 1:
            layout.push({gridColumn: "2", gridRow: "4"})
            break;
        case 2:
            layout.push(
                {gridColumn: "2", gridRow: "1"},
                {gridColumn: "2", gridRow: "7"}
            )
            break;
        case 3:
            layout.push(
                {gridColumn: "2", gridRow: "1"},
                {gridColumn: "2", gridRow: "7"},
                {gridColumn: "2", gridRow: "4"}
            )
            break;
        case 4:
            layout.push(
                {gridColumn: "1", gridRow: "1"},
                {gridColumn: "1", gridRow: "7"},
                {gridColumn: "3", gridRow: "1"},
                {gridColumn: "3", gridRow: "7"}
            )
            break;
        case 5:
            layout.push(
                {gridColumn: "2", gridRow: "4"},
                {gridColumn: "1", gridRow: "1"},
                {gridColumn: "1", gridRow: "7"},
                {gridColumn: "3", gridRow: "1"},
                {gridColumn: "3", gridRow: "7"}
            )
            break;
        case 6:
            layout.push(
                {gridColumn: "1", gridRow: "1"},
                {gridColumn: "1", gridRow: "4"},
                {gridColumn: "1", gridRow: "7"},
                {gridColumn: "3", gridRow: "1"},
                {gridColumn: "3", gridRow: "4"},
                {gridColumn: "3", gridRow: "7"}
            )
            break;
        case 7:
            layout.push(
                {gridColumn: "1", gridRow: "1"},
                {gridColumn: "1", gridRow: "4"},
                {gridColumn: "1", gridRow: "7"},
                {gridColumn: "3", gridRow: "1"},
                {gridColumn: "3", gridRow: "4"},
                {gridColumn: "3", gridRow: "7"},
                {gridColumn: "2", gridRow: "2"}
            )
            break;
        case 8:
            layout.push(
                {gridColumn: "1", gridRow: "1"},
                {gridColumn: "1", gridRow: "4"},
                {gridColumn: "1", gridRow: "7"},
                {gridColumn: "3", gridRow: "1"},
                {gridColumn: "3", gridRow: "4"},
                {gridColumn: "3", gridRow: "7"},
                {gridColumn: "2", gridRow: "2"},
                {gridColumn: "2", gridRow: "6"}
            )
            break;
        case 9:
            layout.push(
                {gridColumn: "1", gridRow: "1"},
                {gridColumn: "1", gridRow: "3"},
                {gridColumn: "1", gridRow: "5"},
                {gridColumn: "1", gridRow: "7"},
                {gridColumn: "3", gridRow: "1"},
                {gridColumn: "3", gridRow: "3"},
                {gridColumn: "3", gridRow: "5"},
                {gridColumn: "3", gridRow: "7"},
                {gridColumn: "2", gridRow: "4"}
            )
            break;
        case 10:
            layout.push(
                {gridColumn: "1", gridRow: "1"},
                {gridColumn: "1", gridRow: "3"},
                {gridColumn: "1", gridRow: "5"},
                {gridColumn: "1", gridRow: "7"},
                {gridColumn: "2", gridRow: "2"},
                {gridColumn: "2", gridRow: "6"},
                {gridColumn: "3", gridRow: "1"},
                {gridColumn: "3", gridRow: "3"},
                {gridColumn: "3", gridRow: "5"},
                {gridColumn: "3", gridRow: "7"},
            )
            break;
        default:
            break;
    } 

    const faceCard = () => (
        <div className="inner-card" style={card.suit === 'diamonds' || card.suit  === 'hearts' ? {color: 'red'}:{color: 'black'}}>
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
        <div className='inner-card' style={card.suit === 'diamonds' || card.suit  === 'hearts' ? {color: 'red'}:{color: 'black'}}>
            <div className="shorthand upper">
                <p>{card.cardValue}</p>
                <img src={suitKey[card.suit]} alt="" />
            </div>
            <div className="pips">
                {layout.map((item, index) => (
                    <img key={index} src={shape} alt="pip" style={item}/>
                ))}    
            </div>
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