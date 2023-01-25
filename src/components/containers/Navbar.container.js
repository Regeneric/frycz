import React from 'react';
import {Link} from "react-router-dom";

// function Navbar(props) {}

const Navbar = props => {
    return(
        <nav className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>                
                <li><Link to="/oferta">Oferta</Link></li>       
                <li><Link to="/cennik">Cennik</Link></li>       
                <li><Link to="/galeria">Galeria</Link></li>     
                <li><Link to="/kontakt">Kontakt</Link></li>     
            </ul>
        </nav>
    );
}; export default Navbar;