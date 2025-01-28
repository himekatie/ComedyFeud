import React, { useState, useEffect } from "react";
import './QuizNew.css';


const QuizNew = ({ sharedData, totalScore, setTotalScore}) => {
  const [flipped, setFlipped] = useState(Array(6).fill(false));
  const [isResetting, setIsResetting] = useState(false);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);
  const [displayedData, setDisplayedData] = useState(sharedData);


  const answers = [
    ["Paris", "London", "Berlin", "Madrid", "Rome", "Lisbon", "Athens", "Vienna"],
    ["2", "4", "6", "8", "10", "12", "14", "16"],
    ["Shakespeare", "Dickens", "Hemingway", "Austen", "Twain", "Chaucer", "Poe", "Joyce"]
  ];
  const scores = {
    "Paris": 40,
    "London": 10,
    "Berlin": 10,
    "Madrid": 5,
    "Rome": 5,
    "Lisbon": 5,
    "Athens": 5,
    "Vienna": 20,
    "2": 60,
    "4": 5,
    "6": 5,
    "8": 5,
    "10": 5,
    "12": 5,
    "14": 5,
    "16": 10,
    "Shakespeare": 80,
    "Dickens": 5,
    "Hemingway": 5,
    "Austen": 5,
    "Twain": 5,
    "Chaucer": 5,
    "Poe": 5,
    "Joyce": 5
  };


    const handleFlip = (index) => {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);

        if (newFlipped[index]) {
            const selectedAnswer = answers[displayedData][index];
            if (scores[selectedAnswer]) {
              setTotalScore((prevTotal) => prevTotal + scores[selectedAnswer]);
            }
        }

    };
    
    const nextQuestion = () => {
        setCurrentAnswerIndex((prevIndex) => (prevIndex + 1) % answers.length);
        setFlipped(Array(6).fill(false));
    };


    useEffect(() => {
        if (sharedData !== displayedData) {
          // Start the reset sequence when sharedData changes
          setIsResetting(true);
          setFlipped(Array(6).fill(false)); // Flip all cards back to front
          
          const timeout = setTimeout(() => {
            // Update the displayed data after the flip animation completes
            setDisplayedData(sharedData);
            setIsResetting(false);
          }, 300); // Match this duration to the CSS flip animation
    
          return () => clearTimeout(timeout); // Cleanup on unmount
        }
      }, [sharedData, displayedData]);

    function getFlippedValue(index, answer){
        return flipped[index] ? answer : index + 1;
    };

  return(
        <div className="quiz">

            {answers[displayedData].map((answer, index) => (

            <div key={index} className={`card ${flipped[index] ? "flipped" : ""}`} onClick={() => handleFlip(index)}>
                <div className="card-front">{index + 1}</div> 
                <div className="card-back">{!isResetting ? (
              <>
                <div className="answer-text">{answer}</div>
                <div className="score-box">{scores[answer]}</div>
              </>
            ) : (
              ""
            )}</div>
            </div>
             ))}
        </div>

    );
};


export default QuizNew;