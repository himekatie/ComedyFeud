import React, {useState} from 'react';
import './Board.css';
import QuizComponent from '../QuizComponent/QuizComponent';
import QuizNew from '../QuizNew/QuizNew';
import Header from '../Header/Header';
import Score from '../Score/Score';

const Board = () => {
    const [sharedData, setSharedData] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [leftScore, setLeftScore] = useState(0);
    const [rightScore, setRightScore] = useState(0);
    const handleLeftClick = () => {
        setLeftScore(leftScore + totalScore); // Add middle score to left
        setTotalScore(0); // Reset middle score
    };

    const handleRightClick = () => {
        setRightScore(rightScore + totalScore); // Add middle score to right
        setTotalScore(0); // Reset middle score
    };
    return(
        <div className='board'>
             <Header sharedData={sharedData} setSharedData={setSharedData}/>
             <Score totalScore = {totalScore}/>
            <div className='oval'></div>
            <div className='rectangle-left' onClick={handleLeftClick}>
                <Score totalScore={leftScore}/>
            </div>
            <div className='rectangle-right' onClick={handleRightClick}>
                <Score totalScore = {rightScore} />
            </div>
            <div className='middle'>
                <QuizNew sharedData={sharedData} totalScore = {totalScore} setTotalScore = {setTotalScore}/>
            </div>
            {/* <div className="question">
                <QuizNew sharedData={sharedData}/>
            </div> */}
            

            
        </div>

    )


}

export default Board;