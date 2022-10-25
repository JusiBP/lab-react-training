import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';


const cards = [{
  lastName: "Doe",
  firstName: "John",
  gender: "male",
  height: 178,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
},
{
  lastName: "Delores",
  firstName: "Obrien",
  gender: "female",
  height: 172,
  birth: new Date("1988-05-11"),
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
}]

const greetings = {
  eng: "Hello in English",
  fr: "Bonjour François",
  de: "Hallo Ludwig",
  es: "Hola en Español"
}

const card = [{
  type: "Visa",
  number: "0123456789018845",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "BNP",
  owner: "Maxence Bouret",
  bgColor: "#11aa99",
  color: "white",
},
{
  type: "Master Card",
  number: "0123456789010995",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "N26",
  owner: "Maxence Bouret",
  bgColor: "#eeeeee",
  color: "#222222",
},
{
  type: "Visa",
  number: "0123456789016984",
  expirationMonth: 12,
  expirationYear: 2019,
  bank: "CaixaBank",
  owner: "Jusi BP",
  bgColor: "#ddbb55",
  color: "white",
}]

function App() {
  return (
    <div className="App">
      <IdCard cards = {cards}/>
      <Greetings greetings = {greetings}/>
      <Random min = {1} max = {6}/>
      <BoxColor r = {255} g = {255} b = {255}/>
      <CreditCard card = {card}/>
    </div>
  );
}

export default App;
