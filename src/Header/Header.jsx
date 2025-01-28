import React, { useState } from "react";
import './Header.css';


const Header = ({sharedData, setSharedData, resetStrikes}) => {

    const questions = [
        "What is the capital of France?",
        "Which of the following is a prime number?",
        "Who wrote 'Romeo and Juliet'?"
      ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const nextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
        setSharedData((prevIndex) => (prevIndex + 1) % questions.length);
        resetStrikes();
  };

  return(//return the index which will be the first number for the ansers in the 2d array
        <div className="header">
            <div className="round" onClick={nextQuestion}>
                Round {currentQuestionIndex+1}:
                <div className="que">
                    {questions[currentQuestionIndex]}
                </div>
            </div>
        </div>

  );


};


export default Header;