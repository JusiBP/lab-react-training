import '../App.css';
import { useState } from 'react';

// const greetings = {
//     eng: "Hello in English",
//     fr: "Bonjour François",
//     de: "Hallo Ludwig",
//     es: "Hola en Español"
//   }

function Greetings({greetings}){
    

    const [greet, setGreet] = useState(greetings.es);
    const handlerLanguage = (e) => {
        if (e.target.value === "eng") setGreet(greetings.eng);
        else if (e.target.value === "fr") setGreet(greetings.fr);
        else if (e.target.value === "de") setGreet(greetings.de);
        else setGreet(greetings.es);
        console.log ("Lang sel: ", e.target.value)
        

    }

    return(
    <>
        <select onChange={handlerLanguage}>
            <option value="es">Español</option>
            <option value="fr">French</option>
            <option value="de">Deutch</option>
            <option value="eng">English</option>
        </select>
        <p> {greet} </p>

    </>
    )
}

export default Greetings;