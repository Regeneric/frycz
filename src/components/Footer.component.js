import React, {Component} from "react";

import Navbar from "./containers/Navbar.container";

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer>
                <h2>Lorem ipsum</h2>    

                <div className="address">
                    <h3>Lorem ipsum dolor sit amet.</h3>                                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>     
                    <p>Lorem ipsum dolor sit amet.</p>                                  
                </div>

                {/* <Navbar /> */}
            </footer>
        );
    }
}