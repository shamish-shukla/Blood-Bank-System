import Adminheader from "../Upper/Adminheader";
import {useNavigate} from "react-router";
import { useState } from "react";
import axios from "axios";

function AddDonor(){
  const [name,setname]=useState('');
  const [mobile,setmobile]=useState();
  const [email,setemail]=useState('');
  const [age,setage]=useState();
  const [gender,setgender]=useState();
  const [bloodgr,setbloodgr]=useState();
  const [address,setaddress]=useState();
  const navigate=useNavigate();
  function Return(){
      navigate("/dashboard");
  }
  function Adding(){
    alert("Donor details Registered Successfully");
    const donordata={name:name,mobile:mobile,email:email,age:age,gender:gender,bloodgr:bloodgr,address:address}
    axios.post("/api/adddonor",donordata)
    .then(function(res){
      console.log("Data Added Succesfully")
    })
    .catch(function(err){
      console.log(err);
    })
  }
    return(
        <div className="addonor">
            <div className="left-addonor">
                <div>
                  <Adminheader />
                </div>
            </div>
            <div className="right-addonor">
                <div className="return_dashboard_pages">
                <button onClick={Return}>Back to Dashboard</button>
                </div>
                <h3>Add Donor</h3>
                <hr></hr>
                <form >
                <span className="form-content-row">
                  <span>
                    <label>Full Name*:</label>
                    <br></br>
                    <input type="text" value={name} onChange={(event)=>setname(event.target.value)} required/>
                  </span>
                  <span>
                    <label>Mobile Number*:</label>
                    <br></br>
                    <input type="text" value={mobile} onChange={(event)=>setmobile(event.target.value)} required/>
                  </span>
                  <span>
                    <label>Email*:</label>
                    <br></br>
                    <input type="Email" value={email} onChange={(event)=>setemail(event.target.value)} required/>
                  </span>
                </span>
                <span className="form-content-row">
                  <span>
                    <label>Age*:</label>
                    <br></br>
                    <input type="number" value={age} onChange={(event)=>setage(event.target.value)} required/>
                  </span>
                  <span>
                    <label>Gender*:</label>
                    <br></br>
                    <select value={gender} onChange={(event)=>setgender(event.target.value)} required>
                       <option>Male</option>
                       <option>Female</option>
                    </select>
                  </span>
                  <span>
                    <label>Blood Group*</label>
                    <br></br>
                    <select value={bloodgr} onChange={(event)=>setbloodgr(event.target.value)}>
                      <option>A+</option>
                      <option>A-</option>
                      <option>AB-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                  </span>
                </span>
                <span className="form-content-row">
                   <span className="add-row-text">
                     <label>Address*:</label>
                     <br></br>
                     <input type="text" value={address} onChange={(event)=>setaddress(event.target.value)} required/>
                   </span>
                </span>
                <button onClick={Adding}>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default AddDonor;