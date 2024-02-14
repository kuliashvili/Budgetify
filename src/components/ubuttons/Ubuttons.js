import "./Ubuttons.css"
import pluse from "../../assets/pluse.svg"
import up from "../../assets/up.svg"
import down from "../../assets/down.svg"

function Ubuttons(){

    return (
        <div className="Ubuttons">
            <button className="income ubutton" >
                <img className="ubuttons-image" src={down} ></img>
                <p className="ubuttons-text" >Income</p>
            </button>
            <button className="expense ubutton" >
                <img className="ubuttons-image" src={up} ></img>
                <p className="ubuttons-text" >Expenses</p>
            </button>
            <button className="add-transact ubutton1" >
                <img className="ubuttons-image" src={pluse} ></img>
                <p className="ubuttons-text" >Add Transaction</p>
            </button>
            <button className="add-acc ubutton1" >
                <img className="ubuttons-image" src={pluse} ></img>
                <p className="ubuttons-text" >Add Account</p>
            </button>
            {/* <button className="add-transact button1" ></button>
            <button className="add-acc button1" ></button> */}
        </div>
    )
}

export default Ubuttons