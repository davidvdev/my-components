import { useState } from 'react'

import './CardGen.css'

import { Card } from './Card'


const CardGen = () => {

    const [suit, setSuit] = useState('')
    const [isFace, setIsFace] = useState(false)
    const [cardValue, setCardValue] = useState(1)
    const [face, setFace] = useState('')
    const [deck, setDeck] = useState([])

    const suits = ['hearts','spades','clubs','diamonds']
    const faces = ['jack', 'king', 'queen']

    const onSubmit = (event) => {
        event.preventDefault()
        isFace ? setDeck([...deck, {suit, face}]) : setDeck([...deck, {suit, cardValue}])
    }

    const randomDraw = () => {
        const randCard = {
            suit: (suits[Math.floor(Math.random() * suits.length)]),
            face: (faces[Math.floor(Math.random() * faces.length)]),
            isFace: (Math.random() > 0.5 ? true : false),
            cardValue: (Math.ceil(Math.random() * 10))
        }

        randCard.isFace ? 
            setDeck([...deck, {suit: randCard.suit, face: randCard.face}]) 
            : setDeck([...deck, {suit: randCard.suit, cardValue: randCard.cardValue}])

    }

    console.log(isFace)

    return (
        <>
        <div className="card-form">
            <form onSubmit={e => onSubmit(e)}>
                <label htmlFor='suit'>
                    Suit: {" "}
                    <select
                        id="suit"
                        value={suit}
                        onChange={(e)=>setSuit(e.target.value)}
                    >
                        <option />
                        { suits.map((suit) => (
                            <option key={suit} value={suit}>
                            {suit.charAt(0).toUpperCase() + suit.slice(1)}    
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor='isFace'>
                    Is this a face card? {" "}
                    <input 
                        type="checkbox" 
                        id="isFace"
                        name="isFace"
                        checked={isFace}
                        onChange={(e)=>setIsFace(e.target.checked)}
                    />
                </label>
                { !isFace ? 
                    (<label>
                        <input
                            type="number"
                            id="cardValue"
                            name="cardValue"
                            min="1"
                            max="10"
                            value={cardValue}
                            onChange={(e)=> setCardValue(e.target.value)}
                        />
                    </label>)
                    : 
                    (<label htmlFor='suit'>
                        Face: {" "}
                        <select
                            id="face"
                            value={face}
                            onChange={(e)=>setFace(e.target.value)}
                        >
                            <option />
                            { faces.map((face) => (
                                <option key={face} value={face}>
                                {face.charAt(0).toUpperCase() + face.slice(1)}    
                                </option>
                            ))}
                        </select>
                    </label>)}
                    { suit === "" || (isFace && face === "") ?
                        <input role="button" type="submit" value="deal!" disabled/> :
                        <input role="button" type="submit" value="deal!"/> 
                    }
            </form>
            <button onClick={() => randomDraw()}>Random Deal</button>
        </div>
        <div className="card-tableau">
            { deck.map((card,index) => (
                <Card 
                    card={card} 
                    key={index}
                />
            ))}
        </div>
        </>
    )
}

export { CardGen }