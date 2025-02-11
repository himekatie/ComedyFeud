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
          ["Paris", "London", "Berlin", "Madrid", "Rome", "Lisbon"],
          ["2", "4", "6", "8", "10", "12"],
          ["Shakespeare", "Dickens", "Hemingway", "Austen", "Twain", "Chaucer"]
      ],
      scores: {
          "Paris": 40, "London": 10, "Berlin": 10, "Madrid": 5, "Rome": 5, "Lisbon": 5,
          "2": 60, "4": 5, "6": 5, "8": 5, "10": 5, "12": 5,
          "Shakespeare": 80, "Dickens": 5, "Hemingway": 5, "Austen": 5, "Twain": 5, "Chaucer": 5
      }
  },
  game1: {
      questions: [
          "Name a popular fruit.",
          "Which of these animals is a pet?",
          "What is a common mode of transport?"
      ],
      answers: [
          ["Apple", "Banana", "Orange", "Grapes", "Mango", "Peach"],
          ["Dog", "Cat", "Elephant", "Tiger", "Lion", "Rabbit"],
          ["Car", "Bike", "Bus", "Train", "Plane", "Boat"]
      ],
      scores: {
          "Apple": 30, "Banana": 20, "Orange": 15, "Grapes": 10, "Mango": 10, "Peach": 5,
          "Dog": 50, "Cat": 40, "Elephant": 5, "Tiger": 5, "Lion": 5, "Rabbit": 20,
          "Car": 50, "Bike": 20, "Bus": 15, "Train": 10, "Plane": 5, "Boat": 5
      }
  },
  game2: {
      questions: [
          "What is a primary color?",
          "What is a popular fast food?",
          "Which sport is played with a bat?"
      ],
      answers: [
          ["Red", "Blue", "Green", "Yellow", "Purple", "Pink"],
          ["Pizza", "Burger", "Pasta", "Sushi", "Salad", "Steak"],
          ["Soccer", "Basketball", "Tennis", "Cricket", "Baseball", "Hockey"]
      ],
      scores: {
          "Red": 50, "Blue": 40, "Green": 30, "Yellow": 20, "Purple": 10, "Pink": 5,
          "Pizza": 60, "Burger": 50, "Pasta": 20, "Sushi": 10, "Salad": 5, "Steak": 5,
          "Soccer": 10, "Basketball": 20, "Tennis": 30, "Cricket": 40, "Baseball": 50, "Hockey": 5
      }
  },
  game3: {
      questions: [
          "Which is a season?",
          "Name a precious metal.",
          "Which planet is closest to the Sun?"
      ],
      answers: [
          ["Summer", "Winter", "Spring", "Autumn", "Rainy", "Dry"],
          ["Gold", "Silver", "Diamond", "Ruby", "Sapphire", "Emerald"],
          ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]
      ],
      scores: {
          "Summer": 40, "Winter": 30, "Spring": 20, "Autumn": 10, "Rainy": 5, "Dry": 5,
          "Gold": 60, "Silver": 50, "Diamond": 40, "Ruby": 30, "Sapphire": 20, "Emerald": 10,
          "Mercury": 80, "Venus": 50, "Earth": 30, "Mars": 20, "Jupiter": 10, "Saturn": 5
      }
  },
  game4: {
      questions: [
          "What is a common household pet?",
          "Which country is known for pizza?",
          "What is the main ingredient in a cake?"
      ],
      answers: [
          ["Dog", "Cat", "Fish", "Bird", "Rabbit", "Hamster"],
          ["Italy", "France", "USA", "Mexico", "Greece", "Japan"],
          ["Flour", "Sugar", "Butter", "Eggs", "Milk", "Chocolate"]
      ],
      scores: {
          "Dog": 50, "Cat": 40, "Fish": 30, "Bird": 20, "Rabbit": 10, "Hamster": 5,
          "Italy": 80, "France": 50, "USA": 30, "Mexico": 20, "Greece": 10, "Japan": 5,
          "Flour": 60, "Sugar": 50, "Butter": 40, "Eggs": 30, "Milk": 20, "Chocolate": 10
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