import "./Information.css";
import pen from "../../assets/pen.svg";
import trash from "../../assets/trash.svg";
import close from "../../assets/close.svg";
import up from "../../assets/up.svg";
import whitedown from "../../assets/whitedown.svg";
import image from "../../assets/image.svg";
import { useState } from "react";

function Information({ onClose, transactionDataToShow }) {
  const [isVisible, setIsVisible] = useState(true);

  const closeInfo = () => {
    setIsVisible(false);
    onClose(); // Call the onClose function passed as prop
  };

  return isVisible && transactionDataToShow ? (
    <div id="Information" className="Information">
      <div className="info-inner">
        <div className="info-header">
          <p className="info-text">Transaction Information</p>
          <div className="info-buttons">
            <button className="pen info-button">
              <img className="pen-img info-img" src={pen} alt="Pen" />
            </button>
            <button className="trash info-button">
              <img className="trash-img info-img" src={trash} alt="Trash" />
            </button>
            <button onClick={closeInfo} className="close info-button">
              <img
                className="close-img info-img"
                src={close}
                alt="Close"
              />
            </button>
          </div>
        </div>

        <div className="info-expenses">
          <div className="expenses-top">
            <div className="top-left">
              <img src={up} alt="Up" />
              <p className="expenses-text">
                {transactionDataToShow.kind}
              </p>
            </div>
            <div className="expenses-money">
              {transactionDataToShow.amount}$
            </div>
          </div>
          <div className="expenses-bottom">
            <div className="bottom-up">
              {transactionDataToShow.header}
            </div>
            <div className="bottom-down">
              <button className="expenses-button">Home</button>
              <button className="expenses-button">Rent</button>
            </div>
          </div>
        </div>

        <div className="info-details">
          <div className="info-field">
            <p className="field-left">Payment Date:</p>
            <div className="field-right">
              <p className="field-right-text">
                {transactionDataToShow.date}
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="info-field">
            <p className="field-left">Payee:</p>
            <div className="field-right">
              <p className="field-right-text">
                {transactionDataToShow.fullName}
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="info-field">
            <p className="field-left">Description:</p>
            <div className="field-right">
              <p className="field-right-text">
                {transactionDataToShow.header}
              </p>
            </div>
          </div>
        </div>

        <div className="info-images">
          <div className="images-field">
            <div className="images-left">
              <img className="images-img" src={image} alt="Receipt" />
              <p className="images-text">Receipt for March flat rent</p>
            </div>
            <div className="images-right">
              <button className="images-button">
                <img
                  className="images-utton-img"
                  src={whitedown}
                  alt="Download"
                />
                Download
              </button>
            </div>
          </div>
        </div>
        <div className="info-images">
          <div className="images-field">
            <div className="images-left">
              <img className="images-img" src={image} alt="Receipt" />
              <p className="images-text">Receipt for March flat rent</p>
            </div>
            <div className="images-right">
              <button className="images-button">
                <img
                  className="images-utton-img"
                  src={whitedown}
                  alt="Download"
                />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="info-close" onClick={closeInfo}>
        Close
      </button>
    </div>
  ) : null;
}

export default Information;
