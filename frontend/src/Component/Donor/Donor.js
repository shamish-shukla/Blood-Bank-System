import Header from "../Top/Header";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";
import { useState ,useEffect} from "react";
import axios from "axios";
import { Navigate } from "react-router";

function Donor(){
  const[name,setname]=useState('')
  const[mobile,setmobile]=useState()
  const[email,setemail]=useState('')
  const[age,setage]=useState()
  const[gender,setgender]=useState()
  const[bloodgr,setbloodgr]=useState()
  const[address,setaddress]=useState()
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
        <div className="donor-content">
            <Header />
            <div className="donor-content-r1">
              <h2>Donate Blood</h2>
            </div>
            <hr></hr>
            <form >
                <div className="form-content-row">
                  <div>
                    <label>Full Name*:</label>
                    <br></br>
                    <input type="text" value={name} onChange={(event)=>setname(event.target.value)}/>
                  </div>
                  <div>
                    <label>Mobile Number*:</label>
                    <br></br>
                    <input type="text" value={mobile} onChange={(event)=>setmobile(event.target.value)}/>
                  </div>
                  <div>
                    <label>Email*:</label>
                    <br></br>
                    <input type="Email" value={email} onChange={(event)=>setemail(event.target.value)}/>
                  </div>
                </div>
                <div className="form-content-row">
                  <div>
                    <label>Age*:</label>
                    <br></br>
                    <input type="number" value={age} onChange={(event)=>setage(event.target.value)}/>
                  </div>
                  <div>
                    <label>Gender*:</label>
                    <br></br>
                    <select value={gender} onChange={(event)=>setgender(event.target.value)}>
                       <option>Male</option>
                       <option>Female</option>
                    </select>
                  </div>
                  <div>
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
                  </div>
                </div>
                <div className="form-content-row">
                   <div className="add-row-text">
                     <label>Address*:</label>
                     <br></br>
                     <input type="text" value={address} onChange={(event)=>setaddress(event.target.value)}/>
                   </div>
                </div>
                <button onClick={Adding}>Submit</button>
            </form>
            <div className="donor-bottom-content">
              <Footer />
            </div>
        </div>
    )
}
export default Donor;