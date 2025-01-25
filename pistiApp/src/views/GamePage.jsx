import React from "react";
import "../styles/gamepage.css"

const GamePage = () => {

    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];      

    const createDeck = () => {
        const deck = [];

        while(deck.length<52) {
            const randomSuitIndex = Math.floor(Math.random() * 4);
            const suit = suits[randomSuitIndex];

            const randomValueIndex = Math.floor(Math.random() * 13);
            const value = values[randomValueIndex];

            const card = { suit, value };

            const cardExist = deck.some(
                (c) => c.suit === card.suit && c.value === card.value
            );

            if(!cardExist){
                deck.push(card);
            }
        }
        return deck;
    }

    const dealCards  = () => {
        const deck = createDeck();
        const playerHand = deck.slice(0,4);
        const rivalHand = deck.slice(4,8);
        const remainingDeck = deck.slice(8);
        return { playerHand, rivalHand, remainingDeck}
    }

    const { playerHand, rivalHand, remainingDeck } = dealCards();

    console.log("Player's Hand:", playerHand);
    console.log("Rival's Hand:", rivalHand);
    console.log("Remaining Deck:", remainingDeck.length);

    return(
        <div className="game-container">
            <div className="rival-hand">
                {rivalHand.map((card, index) => (
                    <div key={index} className="rival-hand-cards">
                        {card.value} {card.suit}
                    </div>
                ))}
            </div>
            <div className="thrown-card-area"></div>
            <div className="player-hand">
                {playerHand.map((card, index) => (
                    <div key={index} className="player-hand-cards">
                        {card.value} {card.suit}
                    </div> 
                ))}
            </div>
            
        </div>
    )
}

export default GamePage;