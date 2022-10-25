import '../App.css';

function CreditCard({card}){
    return (
        card.map((card) => {
            const divStyle = {
                backgroundColor: card.bgColor,
                width: "60vw",
                maxWidth: "400px",
                padding: "10px",
                margin: "auto"
              };
            return (
                <>
                    <br></br>
                    <div style={divStyle}>
                        <p>{card.type}</p>
                        <p>**** **** **** {card.number.slice((card.number.length -4),(card.number.length))}</p>
                        <p>Expires 0{card.expirationMonth}/{card.expirationYear - 2000} {card.bank}</p>
                        <p>{card.owner}</p>
                    </div> 
                </>

            )
        })
    )
}

export default CreditCard;