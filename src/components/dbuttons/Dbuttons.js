import "./Dbuttons.css";
import pig from "../../assets/pig.svg";
import plus from "../../assets/pluse.svg";

function Dbuttons() {
  return (
    <div className="Dbuttons">
      <button className=" dbutton">
        <img className="dbuttons-image" src={pig}></img>
        <p className="dbuttons-text">Add Piggy Bank</p>
      </button>
      <button className=" dbutton1">
        <img className="dbuttons-image" src={pig}></img>
        <div className="dbutton1-inner">
          <div className="dbutton1-up">
            <div className="dbutton1-left">
              <p className="dbuttons-text2">Appartment</p>
              <p className="dbuttons-text1">1,520.00 / 4,560.00 $</p>
            </div>
            <div className="dbutton1-right">
              <img className="dbuttons-image1" src={plus}></img>
            </div>
          </div>
          <div className="dbutton1-down">

            <div class="progress">
              <div class="progress-background"></div>
              <div class="progress-fill" ></div>
            </div>

          </div>
        </div>
      </button>
      <button className=" dbutton1">
        <img className="dbuttons-image" src={pig}></img>
        <div className="dbutton1-inner">
          <div className="dbutton1-up">
            <div className="dbutton1-left">
              <p className="dbuttons-text2">Car</p>
              <p className="dbuttons-text1">12,587.52 $</p>
            </div>
            <div className="dbutton1-right">
              <img className="dbuttons-image1" src={plus}></img>
            </div>
          </div>
          <div className="dbutton1-down">

            <div class="progress">
              <div class="progress-background"></div>
              <div class="progress-fill" ></div>
            </div>

          </div>
        </div>
      </button>
    </div>
  );
}

export default Dbuttons;
