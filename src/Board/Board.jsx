import React, {useState} from 'react';
import './Board.css';
import QuizComponent from '../QuizComponent/QuizComponent';
import QuizNew from '../QuizNew/QuizNew';
import Header from '../Header/Header';
import Score from '../Score/Score';
import RedX from '../Images/RedX.png';


const Board = () => {
    const [sharedData, setSharedData] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [leftScore, setLeftScore] = useState(0);
    const [rightScore, setRightScore] = useState(0);
    const [strikes, setStrikes] = useState(0); // Track number of strikes
    const [overlay, setOverlay] = useState(null); // Handle full-screen images
    const [stealVisible, setStealVisible] = useState(false); 
    const [steals, setSteals] = useState(0);
    
    
    const handleLeftClick = () => {
        setLeftScore(leftScore + totalScore); // Add middle score to left
        setTotalScore(0); // Reset middle score
    };

    const handleRightClick = () => {
        setRightScore(rightScore + totalScore); // Add middle score to right
        setTotalScore(0); // Reset middle score
    };
    const handleStrike = () => {
        setStrikes(prev => prev + 1); // Increment strike count
        setOverlay('strike'); // Show strike overlay
    };

    const handleSteal = () => {
        setSteals(prev => prev + 1);
        setOverlay('steal'); // Show steal overlay
    };

    const resetStrikes = () => {
        setStrikes(0); // Reset strikes count
        setSteals(0); // Reset steals count
        setOverlay(null); // Remove any active overlay
        setStealVisible(false); 
    };
    return(
        <div className='board'>
             <Header sharedData={sharedData} setSharedData={setSharedData} resetStrikes = {resetStrikes}/>
             <Score totalScore = {totalScore}/>
            <div className='oval'></div>
            <div className='rectangle-left' onClick={handleLeftClick}>
                <Score totalScore={leftScore}/>
            </div>
            <div className='rectangle-right' onClick={handleRightClick}>
                <Score totalScore = {rightScore} />
            </div>
            <div className='middle'>
                <QuizNew sharedData={sharedData} totalScore = {totalScore} setTotalScore = {setTotalScore} />
            </div>
            {/* Strike Section */}
                <div className="bottom-left">
                    <button className="strike-btn" onClick={handleStrike}>Strike ({strikes})</button>
                    <div className="strike-images">
                        {[...Array(strikes)].map((_, index) => (
                            <img key={index} src={RedX} alt="Strike" />
                        ))}
                    </div>
                </div>
                <div className="bottom-right">
                    <button className="steal-btn" onClick={handleSteal}>Steal ({steals})</button>
                    <div className="steal-images">
                        {[...Array(steals)].map((_, index) => (
                            <img key={index} src={RedX} alt="Steal" />
                        ))}
                    </div>
                </div>

            {overlay === 'strike' && (
                <div className="overlay" onClick={() => setOverlay(null)}>
                    {[...Array(strikes)].map((_, index) => (
                        <img key={index} src={RedX} alt="Strike" />
                    ))}
                </div>
            )}

            {overlay === 'steal' && (
                <div className="overlay" onClick={() => setOverlay(null)}>
                    <img src={RedX} alt="Steal" />
                </div>
            )}
            

            
        </div>

    )


}

export default Board;