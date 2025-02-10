import React from "react";
import './Startpage.css';
import Board from "../Board/Board";
import ComedyFeudLogo from "../ComedyFeudLogo/ComedyFeudLogo";
import useSound from 'use-sound';
import Sound from '../Audio/family-feud-introduction.wav';
// class = "font-effect-fire"


function Startpage({onSwitch, selectedGame, setSelectedGame}){
    const [playSound] = useSound(Sound);
    return(
        <div className="startpage">
            <div className="Buttons">
                <button onClick={() => setSelectedGame("game0")}>0</button>
                <button onClick={() => setSelectedGame("game1")}>1</button>
                <button onClick={() => setSelectedGame("game2")}>2</button>
                <button onClick={() => setSelectedGame("game3")}>3</button>
                <button onClick={() => setSelectedGame("game4")}>4</button>
            </div>
            <h1 className ="textcolor font-effect-3d">
                UPAC Comedy Presents
            </h1>
            <div className="Logo" onClick= {onSwitch}>
                <ComedyFeudLogo/>
            </div>
            <div className="Button" onClick={playSound}>
                Please Applaud
            </div>
            {/* <div className="border">
                
            </div> */}
        </div>
    )
}

export default Startpage;