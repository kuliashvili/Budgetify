import "./Transactions.css";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
import Information from "../information/Information";
import { useState } from "react";
import { useEffect } from "react";

function Transactions({ transactions,subscriptions, showSubscriptions, obligatorys, showObligatorys}) {
  const [isInformationVisible, setIsInformationVisible] = useState(false);
  const [transactionDataToShow, setTransactionDataToShow] = useState(null);
  const [subscriptionDataToShow, setsubscriptionDataToShow] = useState(null);
  const [obligatoryDataToShow, setObligatoryDataToShow] = useState(null);

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

  const showInfo1 = (subscriptionData) => {
    setIsInformationVisible(true);
    setsubscriptionDataToShow(subscriptionData);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.id = "overlay";
    document.body.appendChild(overlay);
  };
  
  const showInfo2 = (obligatoryData) => {
    setIsInformationVisible(true);
    setObligatoryDataToShow(obligatoryData);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.id = "overlay";
    document.body.appendChild(overlay);
  };



  
  
  return (
    <div className="Transactions">

      {showSubscriptions  &&  !showObligatorys && subscriptions.length > 0 && (
  <>
    {subscriptions.map((subscription, index) => (
      <div
        key={index}
        id="Subscription"
        onClick={() => showInfo1(subscription)}
        className="Transaction"
      >
        <div className="both-left">
          <div className="transaction-left">
            <p className="transaction-category">{subscription.category}</p>
          </div>
          <div className="transaction-center">
            <p className="transaction-header">{subscription.header}</p>
            <div className="transaction-description">
              <p className="transaction-description-text">
                <p className="txt1">Next payment date: <b>{subscription.nextPaymentDate}</b></p>
              </p>
            </div>
          </div>
        </div>
        <div className="transaction-right">
          <p
            className="transaction-output"
          >
            {subscription.actualPrice}$
          </p>
        </div>
      </div>
    ))}
  </>
      )}



      {showObligatorys  && obligatorys.map((obligatory, index) => (
        <div
          key={index}
          id="Transaction"
          onClick={() => showInfo2(obligatory)}
          className="Transaction"
        >
          <div className="both-left">
            <div className="transaction-center">
              <p className="transaction-header">{obligatory.header}</p>
              <div className="transaction-description">
                {/* <img src={obligatory.isExpense ? up : down} alt="icon" /> */}
                <p className="transaction-description-text">
                  <p className="txt1"> Payment Date:  
                  <b style={{ marginLeft: '10px' }}>{obligatory.paymentDate}</b>
                  </p>
                 <p className="txt"></p>
                </p>
              </div>
            </div>
          </div>
          <div className="transaction-right">
            <p
              className="transaction-output"
            >
              {obligatory.amount}$
            </p>
          </div>
        </div>
      ))}


      {transactions && transactions.map((transaction, index) => (
        <div
          key={index}
          id="Transaction"
          onClick={() => showInfo(transaction)}
          className="Transaction"
        >
          <div className="both-left">
            <div className="transaction-left">
              <p className="transaction-category">{transaction.kind}</p>
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
          subscriptionDataToShow={subscriptionDataToShow}
          obligatoryDataToShow={obligatoryDataToShow}
        />
      )}
    </div>
  );
}

export default Transactions;
