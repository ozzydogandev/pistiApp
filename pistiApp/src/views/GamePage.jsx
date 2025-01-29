import React, { useState, useEffect } from "react";
import "../styles/gamepage.css";

const GamePage = () => {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const cardImages = {
        "2♠": "2_of_spades.svg",
        "2♥": "2_of_hearts.svg",
        "2♦": "2_of_diamonds.svg",
        "2♣": "2_of_clubs.svg",
        "3♠": "3_of_spades.svg",
        "3♥": "3_of_hearts.svg",
        "3♦": "3_of_diamonds.svg",
        "3♣": "3_of_clubs.svg",
        "4♠": "4_of_spades.svg",
        "4♥": "4_of_hearts.svg",
        "4♦": "4_of_diamonds.svg",
        "4♣": "4_of_clubs.svg",
        "5♠": "5_of_spades.svg",
        "5♥": "5_of_hearts.svg",
        "5♦": "5_of_diamonds.svg",
        "5♣": "5_of_clubs.svg",
        "6♠": "6_of_spades.svg",
        "6♥": "6_of_hearts.svg",
        "6♦": "6_of_diamonds.svg",
        "6♣": "6_of_clubs.svg",
        "7♠": "7_of_spades.svg",
        "7♥": "7_of_hearts.svg",
        "7♦": "7_of_diamonds.svg",
        "7♣": "7_of_clubs.svg",
        "8♠": "8_of_spades.svg",
        "8♥": "8_of_hearts.svg",
        "8♦": "8_of_diamonds.svg",
        "8♣": "8_of_clubs.svg",
        "9♠": "9_of_spades.svg",
        "9♥": "9_of_hearts.svg",
        "9♦": "9_of_diamonds.svg",
        "9♣": "9_of_clubs.svg",
        "10♠": "10_of_spades.svg",
        "10♥": "10_of_hearts.svg",
        "10♦": "10_of_diamonds.svg",
        "10♣": "10_of_clubs.svg",
        "J♠": "jack_of_spades.svg",
        "J♥": "jack_of_hearts.svg",
        "J♦": "jack_of_diamonds.svg",
        "J♣": "jack_of_clubs.svg",
        "Q♠": "queen_of_spades.svg",
        "Q♥": "queen_of_hearts.svg",
        "Q♦": "queen_of_diamonds.svg",
        "Q♣": "queen_of_clubs.svg",
        "K♠": "king_of_spades.svg",
        "K♥": "king_of_hearts.svg",
        "K♦": "king_of_diamonds.svg",
        "K♣": "king_of_clubs.svg",
        "A♠": "ace_of_spades.svg",
        "A♥": "ace_of_hearts.svg",
        "A♦": "ace_of_diamonds.svg",
        "A♣": "ace_of_clubs.svg"
    };    

    const createDeck = () => {
        const deck = [];

        while (deck.length < 52) {
            const randomSuitIndex = Math.floor(Math.random() * 4);
            const suit = suits[randomSuitIndex];

            const randomValueIndex = Math.floor(Math.random() * 13);
            const value = values[randomValueIndex];

            const card = { suit, value };

            if (!deck.some(c => c.suit === card.suit && c.value === card.value)) {
                deck.push(card);
            }
        }
        return deck;
    };

    const dealCards = () => {
        const deck = createDeck();
        return {
            playerHand: deck.slice(0, 4),
            rivalHand: deck.slice(4, 8),
            remainingDeck: deck.slice(8),
        };
    };

    // Store hands in state
    const [playerHand, setPlayerHand] = useState([]);
    const [rivalHand, setRivalHand] = useState([]);
    const [remainingDeck, setRemainingDeck] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    // Initialize hands only once when the component mounts
    useEffect(() => {
        const { playerHand, rivalHand, remainingDeck } = dealCards();
        setPlayerHand(playerHand);
        setRivalHand(rivalHand);
        setRemainingDeck(remainingDeck);
    }, []);

    // Handle card selection
    const handleCardClick = (card, isPlayer) => {
        setSelectedCard(card);

        // Remove card from the corresponding hand
        if (isPlayer) {
            setPlayerHand(prevHand => prevHand.filter(c => c !== card));
        } else {
            setRivalHand(prevHand => prevHand.filter(c => c !== card));
        }
    };

    // Render cards (now it includes isPlayer)
    const renderCards = (card, isPlayer) => (
        <img
            key={`${card.value}${card.suit}`}
            src={`./images/card-images/${cardImages[`${card.value}${card.suit}`]}`}
            alt={`${card.value} of ${card.suit}`}
            className={`card-image ${selectedCard === card ? "hidden" : ""}`}
            onClick={() => handleCardClick(card, isPlayer)}
        />
    );

    return (
        <div className="game-container">
            {/* Rival's Hand */}
            <div className="rival-hand">
                {rivalHand.map(card => renderCards(card, false))}
            </div>

            {/* Center area where selected card moves */}
            <div className="thrown-card-area">
                {selectedCard && (
                    <img
                        src={`./images/card-images/${cardImages[`${selectedCard.value}${selectedCard.suit}`]}`}
                        alt={`${selectedCard.value} of ${selectedCard.suit}`}
                        className="center-card"
                    />
                )}
            </div>

            {/* Player's Hand */}
            <div className="player-hand">
                {playerHand.map(card => renderCards(card, true))}
            </div>
        </div>
    );
};

export default GamePage;
