import React from "react";
import { Link } from "react-router-dom";

function Adminheader(){
    return(
        <div className="admin-header-page">
            <h2>Blood Admin Portal</h2>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/add">AddDonor</Link>
                </li>
            </ul>
        </div>

    )
}
export default Adminheader;