import '../App.css';

function IdCard({cards}){
    return (
        cards.map((card) => {
            return ( 
            <div className="card">
                <div>
                    <img src={card.picture} alt=""/>
                </div>
                <div className="cardInfo">
                    <p><b>First Name: </b> {card.firstName} </p>
                    <p><b>Last Name: </b> {card.lastName} </p>
                    <p><b>Gender: </b> {card.gender} </p>
                    <p><b>Height: </b> {card.height}</p>
                    <p><b>Birth: </b><span>{card.birth.toString()}</span></p>  
                    
                </div> 
            </div>
            )
        }) 
    )
}

export default IdCard;