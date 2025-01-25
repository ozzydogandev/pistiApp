import React from "react";
import "../styles/homepage.css"
import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
const HomePage = () => {

    const navigate = useNavigate();

    const goToGame = () => {
        navigate('/game');
    }

    return(
        <div className="homepage-container">
            <div className="top-images">
                <img className="logo-left" src="./images/pisti_logoo.png"></img>
                <img className="logo-right" src="./images/signs.png"></img>
            </div>
            <div className="homepage-content">
            <h1 className="title">PISTI</h1>
            <p className="creators-text">Creators: Saadet & Ozi</p>
            <p>This game has been coded and released for players who love to play pisti.</p>
            <Button size="xl" className="start-button" onClick={goToGame}>Start Game</Button>
            </div>
        </div>
    )
}

export default HomePage;