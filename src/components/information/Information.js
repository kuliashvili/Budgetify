import "./Information.css";
import pen from "../../assets/pen.svg";
import trash from "../../assets/trash.svg";
import close from "../../assets/close.svg";
import up from "../../assets/up.svg";
import whitedown from "../../assets/whitedown.svg"
import image from "../../assets/image.svg"

function Information() {
  function closeInfo() {
    let info = document.getElementById("Information");
    info.style.display = "none";

  let overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
  }

  return (
    <div id="Information" className="Information">
      <div className="info-inner">
        <div className="info-header">
          <p className="info-text">Transaction Information</p>
          <div className="info-buttons">
            <button className="pen info-button">
              <img className="pen-img info-img" src={pen}></img>
            </button>
            <button className="trash info-button">
              <img className="trash-img info-img" src={trash}></img>
            </button>
            <button onClick={closeInfo} className="close info-button">
              <img className="close-img info-img" src={close}></img>
            </button>
          </div>
        </div>

        <div className="info-expenses">
          <div className="expenses-top">
            <div className="top-left">
              <img src={up}></img>
              <p className="expenses-text">Expenses</p>
            </div>
            <div className="expenses-money">-650.00$</div>
          </div>
          <div className="expenses-bottom">
            <div className="bottom-up">Flat rent for March</div>
            <div className="bottom-down">
              <button className="expenses-button">Home</button>
              <button className="expenses-button">Rent</button>
            </div>
          </div>
        </div>

        <div className="info-details" >
            <div className="info-field" >
                <p className="field-left" >Payment Date:</p>
                <div className="field-right" >
                    <p className="field-right-text" > 28.02.2022</p>
                </div>
            </div>
            <div className="line" ></div>
            <div className="info-field" >
                <p className="field-left" >Payee:</p>
                <div className="field-right" >
                    <p className="field-right-text" > John Smith</p>
                </div>
            </div>
            <div className="line" ></div>
            <div className="info-field" >
                <p className="field-left" >Description:</p>
                <div className="field-right" >
                    <p className="field-right-text" >Payment for flat in Samrocka street 25. Don’t forget to send a receipt.</p>
                </div>
            </div>
        </div>

        <div className="info-images" >
            <div className="images-field" >
                <div className="images-left" >
                    <img className="images-img" src={image} ></img>
                    <p className="images-text" >Receipt for March flat rent</p>
                </div>
                <div className="images-right" >
                    <button className="images-button" >
                        <img className="images-utton-img"  src={whitedown} ></img>Download
                    </button>
                </div>
            </div>
        </div>
        <div className="info-images" >
            <div className="images-field" >
                <div className="images-left" >
                    <img className="images-img" src={image} ></img>
                    <p className="images-text" >Receipt for March flat rent</p>
                </div>
                <div className="images-right" >
                    <button className="images-button" >
                        <img className="images-utton-img"  src={whitedown} ></img>Download
                    </button>
                </div>
            </div>
        </div>
      </div>
      <button className="info-close" onClick={closeInfo} >close</button>
    </div>
  );
}

export default Information;
