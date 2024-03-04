import "./Header.css";
import { Link } from "react-router-dom";
import person from "../../assets/person.svg"

function Header({transactions}) {

  const fullName = transactions.length > 0 ? transactions[0].fullName : '';

  return (
    <div className="Header">
      <div className="header-logo" >
        <p className="header-logo-text">Budgetify</p>
      </div>
      <ul className="header-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/subscriptions">Subscriptions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/obligatory">Obligatory</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/statistic">Statistic</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Admin</Link>
        </li>
      </ul>
      <div className="header-person" >
        <img className="person-icon" src={person}></img>
        <p className="person-name" >{fullName}</p>
      </div>
    </div>
  );
}

export default Header;
