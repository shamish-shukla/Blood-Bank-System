import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDonor from "../Admin/AddDonor/AddDonor";
import Dashboard from "../Admin/Dashboard/Dashboard";
import Home from "../Admin/Home";

function Account(){
    return(
        <Router>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="add" element={<AddDonor />} />
            </Routes>
        </Router>
    
    )
}

export default Account;