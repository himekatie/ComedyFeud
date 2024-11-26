import React, {useEffect} from "react";
import './Mainpage.css';


function Mainpage(){
    useEffect(() => {
        const audio = new Audio('/path-to-your-background-sound.mp3'); // Replace with your sound file
        audio.loop = true; // Makes the sound loop
        audio.play();
    
        // Cleanup function to stop the sound when the component unmounts
        return () => {
          audio.pause();
          audio.currentTime = 0; // Reset playback to the start
        };
      }, []);

      return{
        // Could put form here once code is finished

        
      }


    




}


export default Mainpage;