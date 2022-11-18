import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Adminheader(){
    const navigate=useNavigate();
    function signingup(){
        alert("Logout Successful");
        navigate("/login")
    }
    return(
        <div className="admin-header-page">
            <p>Admin Portal</p>
            <hr></hr>
            <ul>
                <li>
                    <Link to="/dashboard" className="admin-pages"><img width="20px" height="20px" src="Image/checkmark.png"/>Dashboard</Link>
                </li>
                <li>
                    <Link to="/add" className="admin-pages"><img width="20px" height="20px" src="Image/checkmark.png"/>AddDonor</Link>
                </li> 
                <li>
                    <Link to="/managechanges" className="manage-pages"><img width="20px" height="20px" src="Image/checkmark.png"/>Manage Pages</Link>
                </li>
                <li>
                    <Link to="/donorlist" className="donorlist-pages"><img width="20px" height="20px" src="Image/checkmark.png"/>DonorList</Link>
                </li>
                <li>
                    <Link to="/checkquery"><img width="20px" height="20px" src="Image/checkmark.png"/>Check Contacts Query</Link>
                </li>
                <li>
                    <Link to="/update" className="update-pages"><img width="20px" height="20px" src="Image/checkmark.png"/>Update Contact Info</Link>
                </li>
                <li>
                    <Link to="/blood" className="add-blood"><img width="20px" height="20px" src="Image/checkmark.png" />AddBlood</Link>
                </li>
            </ul>
            <div className="admin-logout-options">
                <img width="20px" height="20px" src="Image/power-off.png" alt="log-out-sign" />
                <button onClick={signingup}>LogOut</button>
            </div>
        </div>

    )
}
export default Adminheader;