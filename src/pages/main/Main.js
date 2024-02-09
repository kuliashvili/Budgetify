
import "./Main.css"
import Header from "../../components/header/Header"
import Cards from "../../components/cards/Cards"
import Transaction from "../..//components/transaction/Transaction"
import Search from "../../components/search/Search"

function Main(){

    return (
        <div className="Main">
            <Header />
            <Cards />
            <Transaction />
            <Search />
        </div>
    )
}

export default Main