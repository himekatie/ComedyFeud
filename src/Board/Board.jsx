import React, {useState} from 'react';
import './Board.css';
import QuizComponent from '../QuizComponent/QuizComponent';
import QuizNew from '../QuizNew/QuizNew';
import Header from '../Header/Header';
import Score from '../Score/Score';

const Board = () => {
    const [sharedData, setSharedData] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    return(
        <div className='board'>
             <Header sharedData={sharedData} setSharedData={setSharedData}/>
             <Score totalScore = {totalScore}/>
            <div className='oval'></div>
            <div className='rectangle-left'>
                <Score/>
            </div>
            <div className='rectangle-right'>
                <Score/>
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