import "./Transaction.css";
import up from "../../assets/up.svg";

function Transaction() {
  function showInfo() {
    let info = document.getElementById("Information");
    info.style.display = "flex";

   
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  }

  return (
    <div id="Transaction" onClick={showInfo} className="Transaction">
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
