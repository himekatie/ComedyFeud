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
            "Name something you wear to keep warm in winter", "Name a sport people played as a kid", "Name something college students normally eat for breakfast"
        ],
        answers: [
            ["Coat", "Hat", "Gloves", "Scarf", "Boots"],
            ["Soccer", "Baseball/Softball", "Tennis", "Volleyball", "Swim", "Track & Field/XC", "Basketball"],
            ["Eggs", "Nothing", "Cereal", "Pancakes/Waffles", "Bagels/Toast", "Yogurt"]
        ],
        scores: {
            "Coat": 50, "Hat": 30, "Gloves": 10, "Scarf": 7, 
            "Boots": 3, "Soccer": 41,"Baseball/Softball":13, "Tennis":14, "Volleyball":9, "Swim":9, "Track & Field/XC":7, "Basketball":7,
            "Eggs":34, "Nothing":27, "Cereal":14, "Pancakes/Waffles":9, "Bagels/Toast":9, "Yogurt":7
        }
    },
    game2: {
        questions: [
            "Name a common reason to show up late to a party.", "Name something to do in the winter.", "Name something you do to stay awake at night."
        ],
        answers: [
            ["Traffic/Car Trouble", "Getting Ready", "Lost Track of Time", "Fashionably Late", "Bad Party"],
            ["Sledding", "Skiing/Snowboarding", "Sleep", "Drink Hot Choco", "Snowman Army", "Snowball Fight", "Ice skate"],
            ["Social Media", "Caffeine", "Movies/Shows", "Inner Thoughts", "Games", "Homework", "Read " ]
        ],
        scores: {
            "Traffic/Car Trouble":30, "Getting Ready":27, "Lost Track of Time":22, "Fashionably Late":14, "Bad Party":7,
            "Sledding":24, "Skiing/Snowboarding":22, "Sleep":14, "Drink Hot Choco":12, "Snowman Army":10, "Snowball Fight":10, "Ice skate":8,
            "Social Media":40, "Caffeine":36, "Movies/Shows":34, "Inner Thoughts":32, "Games":22, "Homework":20, "Read ":16
        }
    },
    game3: {
        questions: [
            "Name something or someone you would bring to a party.", "Name something people put on toast.", "Name somewhere you would bring your partner to a first date."
        ],
        answers: [
            ["Food", "Drinks/Alcohol", "Friends", "Myself", "Music & Games" ],
            ["Butter", "Jam", "Peanut butter", "Avocado", "Honey" ],
            ["Restaurant", "Coffee Shop", "The Movies", "Park", "Arcade/Amusement Park", "Shopping", "Beach" ]
        ],
        scores: {
            "Food":26, "Drinks/Alcohol":25, "Friends":21, "Myself":15, "Music & Games":13,
            "Butter":45, "Jam":30, "Peanut butter":15, "Avocado":5, "Honey":5,
            "Restaurant":39, "Coffee Shop":18, "The Movies":14, "Park":13, "Arcade/Amusement Park":6, "Shopping":5, "Beach":5,
        }
    },
    game4: {
        questions: [
            "Name a classic Disney movie.", "Name a place where you might need to be very quiet.", "Name a type of weather that would cancel a flight."
        ],
        answers: [
            ["Cinderella", "The Lion King", "Beauty and the Beast", "Aladdin", "Snow White" ],
            ["Library", "Church", "Hospital", "Courtroom", "Movie Theater" ],
            ["Thunderstorm", "Snowstorm", "Fog", "Hurricane", "High Winds" ]
        ],
        scores: {
           "Cinderella":40, "The Lion King":30, "Beauty and the Beast":15, "Aladdin":10, "Snow White":5, 
           "Library":50, "Church":25, "Hospital":15, "Courtroom":5, "Movie Theater":5, 
           "Thunderstorm":50, "Snowstorm":30, "Fog":10, "Hurricane":7, "High Winds":3 
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