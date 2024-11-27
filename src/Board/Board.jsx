import React from 'react';
import './Board.css';
import QuizComponent from '../QuizComponent/QuizComponent';

const Board = () => {
    return(
        <div className='board'>
            <div className='oval'></div>
            <div className='rectangle-left'></div>
            <div className='rectangle-right'></div>
            <div className="question">
              <QuizComponent/>

            </div>
        </div>

    )


}

export default Board;