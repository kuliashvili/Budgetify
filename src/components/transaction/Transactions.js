import "./Transactions.css";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
import Information from "../information/Information";
import { useState } from "react";

function Transactions({ transactions }) {
  const [isInformationVisible, setIsInformationVisible] = useState(false);
  const [transactionDataToShow, setTransactionDataToShow] = useState(null);

  const closeInformation = () => {
    setIsInformationVisible(false);
    const overlay = document.getElementById("overlay")
    if (overlay) {
      overlay.remove() 
    }
   
  };
  const showInfo = (transactionData) => {
    setIsInformationVisible(true);
    setTransactionDataToShow(transactionData);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.id = "overlay";
    document.body.appendChild(overlay);
  };
  
  return (
    <div className="Transactions">
      {transactions.map((transaction, index) => (
        <div
          key={index}
          id="Transaction"
          onClick={() => showInfo(transaction)}
          className="Transaction"
        >
          <div className="both-left">
            <div className="transaction-left">
              <p className="transaction-header">{transaction.kind}</p>
            </div>
            <div className="transaction-center">
              <p className="transaction-header">{transaction.header}</p>
              <div className="transaction-description">
                <img src={transaction.isExpense ? up : down} alt="icon" />
                <p className="transaction-description-text">
                  <p className="txt">
                    {transaction.isExpense ? "Expenses" : "Income"}
                  </p>
                  <p className="txt">{transaction.date}</p>
                  <p className="txt">{transaction.fullName}</p>
                </p>
              </div>
            </div>
          </div>
          <div className="transaction-right">
            <p
              className={
                transaction.isExpense
                  ? "transaction-output"
                  : "transaction-output1"
              }
            >
              {transaction.amount}$
            </p>
          </div>
        </div>
      ))}
      {isInformationVisible && (
        <Information
          onClose={closeInformation}
          transactionDataToShow={transactionDataToShow}
        />
      )}
    </div>
  );
}

export default Transactions;
