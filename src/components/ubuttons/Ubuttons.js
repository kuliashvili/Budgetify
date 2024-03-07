import "./Ubuttons.css";
import pluse from "../../assets/pluse.svg";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

function Ubuttons({ showAddButtons, ubuttonsText, ubuttonsText1}) {
  return (
    <div className="Ubuttons">
      {showAddButtons && (
        <>
          <button className="income ubutton">
            <img className="ubuttons-image" src={down}></img>
            <p className="ubuttons-text">Income</p>
          </button>
          <button className="expense ubutton">
            <img className="ubuttons-image" src={up}></img>
            <p className="ubuttons-text">Expenses</p>
          </button>
        </>
      )}

      <button className="add-transact ubutton1">
        <img className="ubuttons-image" src={pluse} alt="Add Transaction" />
        <p className="ubuttons-text">{ubuttonsText ? ubuttonsText : "Add Transaction"}</p>
      </button>
      <button className="add-acc ubutton1">
        <img className="ubuttons-image" src={pluse} alt="Add Account" />
        <p className="ubuttons-text">{ubuttonsText1 ? ubuttonsText1 : "Add Account"}</p>
      </button>
    </div>
  );
}

export default Ubuttons;
