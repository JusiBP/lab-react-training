import '../App.css';
import { useState } from 'react';

function Random({min, max}){
    const [num, setNum] = useState(0);
    let pickNum = () => {
        return setNum(Math.floor(Math.random() * ((max+1) - min) ) + min);
    }  
            return ( 
                <>
                    <br></br>
                    <div>
                        <button onClick={pickNum}>Randomize</button>
                        <p>Random number between {min} & {max} is {num}</p>
                    </div>

                </>
            
                )
}

export default Random;