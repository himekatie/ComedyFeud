import React, {useDebugValue, useEffect, useState} from "react";
import './Mainpage.css';
import Board from "../Board/Board";
import Startpage from "../Startpage/Startpage";
import EndPage from "../EndPage/EndPage";

const games = {
    game0: {//Test
        questions: [
            "What is the capital of France",
            "Which of the following is a prime number?",
            "Who wrote 'Romeo and Juliet'?"
        ],
        answers: [
            ["Paris", "London", "Berlin", "Madrid", "Rome", "Lisbon", "Place", "Place"],
            ["2", "4", "6", "8", "10", "12"],
            ["Shakespeare", "Dickens", "Hemingway", "Austen", "Twain", "Chaucer"]
        ],
        scores: {
            "Paris": 40, "London": 10, "Berlin": 10, "Madrid": 5, "Rome": 5, "Lisbon": 5,"Place":5, "Place" : 5,
            "2": 60, "4": 5, "6": 5, "8": 5, "10": 5, "12": 5,
            "Shakespeare": 80, "Dickens": 5, "Hemingway": 5, "Austen": 5, "Twain": 5, "Chaucer": 5
        }
    },
    game1: {
        questions: [
            "Question 1?", "Question 2?", "Question 3?"
        ],
        answers: [
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"],
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"],
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"]
        ],
        scores: {
            "Answer1": 80, "Answer2": 70, "Answer3": 60, "Answer4": 50, 
            "Answer5": 40, "Answer6": 30, "Answer7": 20, "Answer8": 10
        }
    },
    game2: {
        questions: [
            "Question 1?", "Question 2?", "Question 3?"
        ],
        answers: [
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"],
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"],
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"]
        ],
        scores: {
            "Answer1": 80, "Answer2": 70, "Answer3": 60, "Answer4": 50, 
            "Answer5": 40, "Answer6": 30, "Answer7": 20, "Answer8": 10
        }
    },
    game3: {
        questions: [
            "Question 1?", "Question 2?", "Question 3?"
        ],
        answers: [
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"],
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"],
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"]
        ],
        scores: {
            "Answer1": 80, "Answer2": 70, "Answer3": 60, "Answer4": 50, 
            "Answer5": 40, "Answer6": 30, "Answer7": 20, "Answer8": 10
        }
    },
    game4: {
        questions: [
            "Question 1?", "Question 2?", "Question 3?"
        ],
        answers: [
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"],
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"],
            ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8"]
        ],
        scores: {
            "Answer1": 80, "Answer2": 70, "Answer3": 60, "Answer4": 50, 
            "Answer5": 40, "Answer6": 30, "Answer7": 20, "Answer8": 10
        }
    }
};

function Mainpage(){
  const [currentComponent, setCurrentComponent] = useState("first");
  const [selectedGame, setSelectedGame] = useState("game0"); 
  const gameData = games[selectedGame] || games["game0"];
  const [Team1, setTeam1] = useState('');
  const [Team2, setTeam2] = useState('');
      return(

        // Could put form here once code is finished
        // <div className="mainpage">
        //   <Board/>
        // </div>
      
        <div>
      {currentComponent === "first" ? (
        <Startpage onSwitch={() => setCurrentComponent("second")} selectedGame = {selectedGame} setSelectedGame = {setSelectedGame} Team1 = {Team1} setTeam1 = {setTeam1} Team2 = {Team2} setTeam2={setTeam2}/>
      ) : currentComponent === "second" ? (
        <div className="mainpage">
          <Board onSwitch={() => setCurrentComponent("third")} questions={gameData.questions} answers={gameData.answers} scores={gameData.scores} Team2 = {Team2} Team1 = {Team1}  />
        </div>
      ) : (
         <EndPage onSwitch={() => {setCurrentComponent("first");
            setTimeout(() => setCurrentComponent("first"), 0); 
         }}/> // Show Game Over screen
      )}

        
       
      

      </div>
    
            
    )


    




}


export default Mainpage;