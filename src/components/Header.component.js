import React, {Component} from "react";
import {Link} from "react-router-dom";

import Navbar from "./containers/Navbar.container";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header>
                <h1 className="logo">Lorem ipsum</h1>   
                
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
                
                <Navbar />
            </header>
        );
    }
}