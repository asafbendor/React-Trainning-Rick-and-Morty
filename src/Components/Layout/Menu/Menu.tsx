import "./Menu.css";
import { Link } from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
        <div className="centerColumn menuList">
            <Link to="home">Home</Link> 
            <Link to="cards">Rick and Morty in Cards</Link> 
            <Link to="table">Rick and Morty in Table</Link>
            <Link to="about">About</Link>
    </div>
    </div>
    

    );
}

export default Menu;
