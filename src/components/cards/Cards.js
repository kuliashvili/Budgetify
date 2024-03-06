import "./Cards.css";
import usd from "../../assets/usd.svg";
import euro from "../../assets/euro.svg";

function Cards({ debitCardBalance, creditCardBalance }) {
  return (
    <div className="Cards">
      <div className="card-debit card">
        <div className="card-left">
          <p className="card-header">Debit card  </p>
          <p className="card-money">{debitCardBalance}$</p>
        </div>
        <div className="card-right">
          <img className="card-icon" src={usd}></img>
        </div>
      </div>

      <div className="card-credit card">
        <div className="card-left">
          <p className="card-header">Credit card</p>
          <p className="card-money">{creditCardBalance}$</p>
        </div>
        <div className="card-right">
          <img className="card-icon" src={euro}></img>
        </div>
      </div>
    </div>
  );
}

export default Cards;
