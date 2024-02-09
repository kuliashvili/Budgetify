import "./Search.css"
import search from "../../assets/search.svg"

function Search(){

    return(
        <div className="Search" >
            <div className="search-inner" >
                <img className="search-img" src={search} ></img>
                <input className="search-text" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Search