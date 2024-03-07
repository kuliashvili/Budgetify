// update database with values of  debit card value, credit card value
// think about how can you send username data from login.js to header.js


{showSubscriptions &&  (
    <>
    {subscriptions && subscriptions.map((subscription, index) => (
      <div
        key={index}
        id="Subscription"
        // onClick={() => showInfo(subscription)}
        className="Subscription"
      >
        <div className="both-left">
          <div className="transaction-left">
            <p className="transaction-header">{subscription.category}</p>
          </div>
          <div className="transaction-center">
            <p className="transaction-header">{subscription.header}</p>
            <div className="transaction-description">
              {/* <img src={transaction.down} alt="icon" /> */}
              <p className="transaction-description-text">
                {/* <p className="txt">
                  {transaction.isExpense ? "Expenses" : "Income"}
                </p> */}
                <p className="txt">{subscription.nextPaymentDate}</p>
              </p>
            </div>
          </div>
        </div>
        <div className="transaction-right">
          <p
            className={
              subscription.isExpense
                ? "transaction-output"
                : "transaction-output1"
            }
          >
            {subscription.actualPrice}$
          </p>
        </div>
      </div>
    ))}
    </>
  )}