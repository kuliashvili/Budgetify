import "./Subscriptions.css";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import Transactions from "../../components/transaction/Transactions";
import Search from "../../components/search/Search";
import Ubuttons from "../../components/ubuttons/Ubuttons";
import { useState } from "react";
import { useEffect } from "react";

function Subscriptions() {
  const [transactions, setTransactions] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [showSubscriptions, setShowSubscriptions] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/transactions");
        if (response.ok) {
          const data = await response.json();
          setTransactions(data);
        } else {
          console.error("Failed to fetch transactions");
        }
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/subscriptions");
        if (response.ok) {
          const data = await response.json();
          setSubscriptions(data);
        } else {
          console.error("Failed to fetch subscriptions");
        }
      } catch (error) {
        console.log("Error fetching transactions: ", error);
      }
    };
    // console.log("Fetching subscriptions...");
    fetchSubscriptions();
  }, []);

  return (
    <div className="Subscriptions">
      <Header transactions={transactions} />
      <div className="subscribtions-content">
        <div className="main-left">
          <Cards
            debitCardBalance={
              transactions.length > 0 ? transactions[0].amount : ""
            }
            creditCardBalance={
              transactions.length > 0 ? transactions[6].amount : ""
            }
          />
        </div>
        <div className="main-center">
          <Search />
          <Transactions
            showSubscriptions={showSubscriptions}
            subscriptions={subscriptions}
          />
        </div>
        <div className="main-right">
          <Ubuttons
            ubuttonsText={"Add Subscription"}
            ubuttonsText1={"Add Transaction"}
          />
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
