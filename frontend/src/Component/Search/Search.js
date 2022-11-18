import Header from "../Top/Header";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Search(){
  const navigate=useNavigate();
  const[bloodgroup,setbloodgroup]=useState('')
  const[reason,setreason]=useState('')
  const[Information,setInformation]=useState([])
  function Booking(){
    navigate("/appointment");
  }
  function Bloodsearch(){
    const datasearch={bloodgroup:bloodgroup,reason:reason}
    axios.post("/api/searching",datasearch)
    .then((res)=>{
      setInformation(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const finddata=Information.map((obj)=>{
    return(
      <div>
        <div className="bloodsearch">
        <img width="300px" height="200px" src="Image/blood_drop_logo.jpg" />
        <p>Name:{obj.name}</p>
        <p>Mobile:{obj.mobile}</p>
        <p>Email:{obj.email}</p>
        <p>Age:{obj.Age}</p>
        <p>Gender:{obj.Gender}</p>
        <p>BloodGroup:{obj.BloodGroup}</p>
        <p>Address:{obj.Address}</p>
        <button onClick={Booking}>Book</button>
      </div>
      </div>
    )
  })
    return(
        <div className="search-content">
            <Header />
            <h2>Need Blood</h2>
            <hr></hr>
            <form className="form-search">
                <div className="search-form-row">
                  <div>
                    <label>Blood Group*:</label><br></br>
                    <input type="text" placeholder="Enter the Blood Group" value={bloodgroup} onChange={(event)=>setbloodgroup(event.target.value)}/>
                  </div>
                  <div className="reason-text-area">
                    <label>Reason why do we need Blood?</label><br></br>
                    <input type="text" value={reason} onChange={(event)=>setreason(event.target.value)}/>
                  </div>
                </div>
            </form>
            <button onClick={Bloodsearch}>Submit</button>
            {finddata}
            <div className="search-footer-content">
              <Footer />
            </div>
        </div>
    )
}

export default Search;