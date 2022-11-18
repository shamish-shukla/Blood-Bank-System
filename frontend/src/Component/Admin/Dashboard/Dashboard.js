import React, { useEffect } from "react";
import Adminheader from "../Upper/Adminheader";
import { useNavigate } from "react-router";
function Dashboard(){
    const navigate=useNavigate();
    function Return(){
        navigate("/dashboard");
    }
    return(
        <div className="dashboard-content">
            <div className="left-dashboard-content">
                <div >
                    <Adminheader />
                </div>
            </div>
            <div className="right-dashboard-content">
                <div className="return_dashboard_pages">
                    <button onClick={Return}>Back to Dashboard</button>
                </div>
                <h3>Dashboard</h3>
                <hr></hr>
                <span className="row2-dashboard">
                    <div className="col1-row2">
                        <span>14</span>
                        <p>Blood Donor Available</p>
                        <button onClick={()=>navigate("/donorlist")}>Full Detail</button>
                    </div>
                    <div className="col1-row2">
                        <span>8</span>
                        <p>User Queries</p>
                        <button onClick={()=>navigate("/checkquery")}>Full Detail</button>
                    </div>
                    <div className="col1-row2">
                        <span>2</span>
                        <p>Pending Queries</p>
                        <button onClick={()=>navigate("/checkquery")}>Full Detail</button>
                    </div>
                </span>
                <span className="row3-dashboard">
                    <div className="col2-row3">
                        <span>A+</span>
                        <p>Total Blood:138ml</p>
                        <button onClick={()=>navigate("/blood")}>Add Blood</button>
                    </div>
                    <div className="col2-row3">
                        <span>A-</span>
                        <p>Total Blood:198ml</p>
                        <button onClick={()=>navigate("/blood")}>Add Blood</button>
                    </div>
                    <div className="col2-row3">
                        <span>B-</span>
                        <p>Total Blood:158ml</p>
                        <button onClick={()=>navigate("/blood")}>Add Blood</button>
                    </div>
                    <div className="col2-row3">
                        <span>B-</span>
                        <p>Total Blood:188ml</p>
                        <button onClick={()=>navigate("/blood")}>Add Blood</button>
                    </div>
                    <div className="col2-row3">
                        <span>AB-</span>
                        <p>Total Blood:168ml</p>
                        <button onClick={()=>navigate("/blood")}>Add Blood</button>
                    </div>
                    <div className="col2-row3">
                        <span>AB-</span>
                        <p>Total Blood:178ml</p>
                        <button onClick={()=>navigate("/blood")}>Add Blood</button>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Dashboard;