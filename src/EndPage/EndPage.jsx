import Board from "../Board/Board";
import ComedyFeudLogo from "../ComedyFeudLogo/ComedyFeudLogo";
import useSound from 'use-sound';
import './EndPage.css';
import Sound from '../Audio/family-feud-theme.wav';
import qrcode from '../Images/rpi_upac.png';



function Startpage({onSwitch}){
    const [playSound] = useSound(Sound);
    return(
        <div className="endpage">
            <h1 className ="textcolor font-effect-3d">
                Thanks For Playing
            </h1>
            <div className="Logo1" onClick= {playSound}>
                <ComedyFeudLogo/>
            </div>
            <div className="Bottom-Box">
                <div className="Left-Box">
                    <div className="textcolor font-effect-3d">
                        Follow us on Instagram:
                    </div>
                    <div className="Textcolor font-effect-3d">
                        upac_comedy
                    </div>
                </div>
                <div className="Right-Box Textcolor font-effect-3d">
                        Join Our 
                        Discord:
                        <img src="qrcode" alt="QR Code" className="qr-code"  />
                </div>
            </div>
            {/* <div className="border">
                
            </div> */}
        </div>
    )
}

export default Startpage;