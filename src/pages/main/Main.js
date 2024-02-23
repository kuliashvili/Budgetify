import "./Main.css";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import Transaction from "../../components/transaction/Transactions";
import Search from "../../components/search/Search";
import Ubuttons from "../../components/ubuttons/Ubuttons";
import Dbuttons from "../../components/dbuttons/Dbuttons";
import Information from "../../components/information/Transact-Information";

function Main() {
  return (
    <div className="Main">
      <Header />
      <div className="main-content">
        <div className="main-left">
          <Cards />
        </div>
        <div className="main-center">
          <Search />
          <Transaction />
        </div>
        <div className="main-right">
            <Ubuttons/>
            <Dbuttons/>
        </div>
      </div>
    </div>
  );
}

export default Main;
