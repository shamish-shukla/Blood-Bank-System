import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "../src/Component/About/About";
import Information  from '../src/Component/Information/Information';
import Search from '../src/Component/Search/Search';
import Donor from '../src/Component/Donor/Donor';
import Contact from '../src/Component/Contact/Contact';
import Login from '../src/Component/Login/Login';
import "../src/Component/Top/Header.css";
import "../src/Component/Donor/Donor.css";
import "../src/Component/Search/Search.css";
import "../src/Component/Contact/Contact.css";
import "../src/Component/Login/Login.css";
import "../src/Component/About/About.css";

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
      </Routes>
    </Router>
  );
}

export default App;