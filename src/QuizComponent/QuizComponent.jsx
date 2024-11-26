import React, { useState } from 'react';
import './QuizComponent.css';

const QuizComponent = () => {
  // Questions array
  const questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "Who wrote 'To Kill a Mockingbird'?"
  ];

  const answers = [
    ["1", "2","a"],
    ["3", "4","b"],
    ["5", "6","c"],
  ];

  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);

  

  // Handler to go to the next question
  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setCurrentAnswerIndex((prevIndex) => (prevIndex + 1) % answers.length);

  };

  return (
    <div className="quiz">
      <div className="header">
        <div className="round">
          Round: {currentQuestionIndex+1}
        </div>

        <div className="score">

        </div>

        

      </div>

      <div className="board">
      <button onClick={nextQuestion}>Next Question</button>

        

      </div>

      {/* <h1>Quiz Game</h1>
      <p>{questions[currentQuestionIndex]}</p>
      <button onClick={nextQuestion}>Next Question</button>

      <p>{answers[currentQuestionIndex]}</p> */}







    </div>
  );
};

export default QuizComponent;