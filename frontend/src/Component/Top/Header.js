import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className="header-content">
            <div className="header-col1">
                <h3>Blood Bank System</h3>
            </div>
            <div className="header-col2">
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/information">Information</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/donor">Donor</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;