import '../App.css';
import { useState } from 'react';

function BoxColor({r,g,b}){
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    let pickColor = () => {
        setRed(Math.floor(Math.random() * (r+1)));
        setGreen(Math.floor(Math.random() * (g+1)));
        setBlue(Math.floor(Math.random() * (b+1)));    
    }  
    const divStyle = {
        backgroundColor: `rgb(${red},${green},${blue})`,
        height: "50px",
        width: "100vw",
        marginTop: "15px"
      };
            return ( 
                <>
                    <br></br>
                    <div>
                        <button onClick={pickColor}>Pick Color</button>
                        <div style={divStyle}>rgb({red},{blue},{green})</div>
                    </div>

                </>
            
                )
}

export default BoxColor;