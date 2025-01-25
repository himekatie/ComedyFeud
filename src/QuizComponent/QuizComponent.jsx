import React, { useState } from 'react';
import './QuizComponent.css';

const QuizComponent = () => {

  // Questions array
  const questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "Who wrote 'To Kill a Mockingbird'?",
  ];

  const answers = [
    ["Paris", "London", "Berlin", "Rome", "Madrid", "Lisbon"],
    ["1", "2", "3", "4", "5", "6"],
    ["Harper Lee", "Mark Twain", "J.K. Rowling", "Shakespeare", "Charles Dickens", "Hemingway"],
  ];

  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);
  const [flipped, setFlipped] = useState(Array(6).fill(false)); // Array to track flipped state of each card

  
  const handleFlip = (index) => {
    console.log("Card clicked:", index);
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    console.log("Updated flipped array:", newFlipped);
    setFlipped(newFlipped);

  };

  // Handler to go to the next question
  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setCurrentAnswerIndex((prevIndex) => (prevIndex + 1) % answers.length);
    setFlipped(Array(6).fill(false));
  };

  function getFlippedValue(index, answer){
    return flipped[index] ? answer : index + 1;
  };

  return (
    <div className="quiz">
      <div className="header">
        <div className="round" onClick={nextQuestion}>
          Round {currentQuestionIndex+1}:
          <div className="que">
          {questions[currentQuestionIndex]}
          </div>
        </div>

        <div className="score">

        </div>

      
      </div>

      <div className="board">
        <div className="multi-border">  

          <div className="container">
            {answers[currentQuestionIndex].map((answer, index) => (

              <div key={index} className={`card ${flipped[index] ? "flipped" : ""}`} onClick={() => console.log("hello")}>{/*handleFlip(index)*/}
              
              {/* <div className="card-inner"> */}
              <div className={`card-${!flipped[index] ? "front" : "back"} `} >{getFlippedValue(index,answer)}</div>
                {/* <div className="card-front">{index + 1}</div> 
                <div className="card-back">{answer}</div> */}
              {/* </div> */}
          </div>
        ))}
            
            {/* <div className="card">1</div>
            <div className="card">5</div>
            <div className="card">2</div>
            <div className="card">6</div>
            <div className="card">3</div>
            <div className="card">4</div> */}
          </div>

            {/* <div className="ans">

            </div> */}

        </div>
          
          {/* <button onClick={nextQuestion}>Next Question</button> */}

          

      </div>

   


      {/* <h1>Quiz Game</h1>
      <p>{questions[currentQuestionIndex]}</p>
      <button onClick={nextQuestion}>Next Question</button>

      <p>{answers[currentQuestionIndex]}</p> */}







    </div>
  );
};

export default QuizComponent;