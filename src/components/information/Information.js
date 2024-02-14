import "./Information.css";
import pen from "../../assets/pen.svg";
import trash from "../../assets/trash.svg";
import close from "../../assets/close.svg";

function Information() {
  function closeInfo() {
    let info = document.getElementById("Information");
    info.style.display = "none";
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
      </div>
    </div>
  );
}

export default Information;
