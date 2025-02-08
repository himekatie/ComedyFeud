import React, {useDebugValue, useEffect, useState} from "react";
import './Mainpage.css';
import Board from "../Board/Board";
import Startpage from "../Startpage/Startpage";
import EndPage from "../EndPage/EndPage";



function Mainpage(){
  const [currentComponent, setCurrentComponent] = useState("first");
      return(

        // Could put form here once code is finished
        // <div className="mainpage">
        //   <Board/>
        // </div>
      
        <div>
      {currentComponent === "first" ? (
        <Startpage onSwitch={() => setCurrentComponent("second")} />
      ) : currentComponent === "second" ? (
        <div className="mainpage">
          <Board onSwitch={() => setCurrentComponent("third")} />
        </div>
      ) : (
         <EndPage/> // Show Game Over screen
      )}

        
       
      

      </div>
    
            
    )


    




}


export default Mainpage;