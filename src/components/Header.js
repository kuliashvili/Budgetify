import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
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
    </div>
  );
}

export default Header;
