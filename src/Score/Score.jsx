import React, {useState, useEffect} from "react";
import './Score.css';

const Score = ({totalScore}) => {


    return(
        <div className="score">
           {totalScore}
        </div>
        
    );

};


export default Score;
