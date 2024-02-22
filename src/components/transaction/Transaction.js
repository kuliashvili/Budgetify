import "./Transaction.css";
import up from "../../assets/up.svg";
import { useState } from "react";
import { useEffect } from "react";

function Transaction() {
  function showInfo() {
    let info = document.getElementById("Information");
    info.style.display = "flex";

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
  }

  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {


    try{
        const response = await fetch("http://localhost:3002/api/transactions")
        if(response.ok){
            const data = await response.json()
            setTransactions(data)
        }else{
          console.error("failed to fetch transactions")
        }
    }
    catch (error) {
      console.error("Error fetching transactions: ", error)
    }


  } 


  useEffect( () => {
    fetchTransactions()
  } )

  return (
    <div id="Transaction" onClick={showInfo} className="Transaction">
      {/* <h1>{transactions}</h1> */}
      <div className="transaction-left">
        <p className="transaction-header">Home</p>
      </div>

      <div className="transaction-center">
        <p className="transaction-header">Flat rent for March</p>
        <div className="transaction-description">
          <img src={up}></img>
          <p className="transaction-description-text">
            Expenses · 28.02.2022 · John Smith
          </p>
        </div>
      </div>

      <div className="transaction-right">
        <p className="transaction-output">-650.00$</p>
      </div>
    </div>
  );
}

export default Transaction;
