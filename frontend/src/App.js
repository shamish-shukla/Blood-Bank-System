import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "../src/Component/About/About";
import Information  from '../src/Component/Information/Information';
import Search from '../src/Component/Search/Search';
import Donor from '../src/Component/Donor/Donor';
import Contact from '../src/Component/Contact/Contact';
import Login from '../src/Component/Login/Login';
import Dashboard from "./Component/Admin/Dashboard/Dashboard";
import AddDonor from "./Component/Admin/AddDonor/AddDonor";
import Update from "../src/Component/Admin/Update/Update";
import Manage from "../src/Component/Admin/Manage/Manage";
import DonorList from "../src/Component/Admin/DonorList/DonorList";
import Query from "../src/Component/Admin/Query/Query";
import Appointment from "../src/Component/Appointment/Appointment";
import AddBlood from "../src/Component/Admin/AddBlood/AddBlood";
import "../src/Component/Top/Header.css";
import "../src/Component/Donor/Donor.css";
import "../src/Component/Search/Search.css";
import "../src/Component/Contact/Contact.css";
import "../src/Component/Login/Login.css";
import "../src/Component/About/About.css";
import "../src/Component/Admin/Upper/Adminheader.css";
import "../src/Component/Admin/AddDonor/AddDonor.css";
import "../src/Component/Admin/Update/Update.css";
import "../src/Component/Admin/Dashboard/Dashboard.css";
import "../src/Component/Information/Informations.css";
import "../src/Component/Admin/DonorList/DonorList.css";
import "../src/Component/Admin/Query/Query.css";
import "../src/Component/Admin/Manage/Manage.css";
import "../src/Component/Appointment/Appointment.css";
import "../src/Component/Admin/AddBlood/AddBlood.css";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="information" element={<Information />} />
        <Route path="search" element={<Search />} />
        <Route path="donor" element={<Donor />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login"element={<Login />} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
      <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add" element={<AddDonor />} />
          <Route path="donorlist" element={<DonorList />} />
          <Route path="managechanges" element={<Manage />} />
          <Route path="checkquery" element={<Query />} />
          <Route path="update" element={<Update />} />
          <Route path="blood" element={<AddBlood/>}/>
       </Routes>
    </Router>
  );
}

export default App;