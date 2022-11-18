import { useState} from "react";
import Adminheader from "../Upper/Adminheader";
import axios from "axios";
import {useNavigate} from "react-router";


function Update(){
    const[address,setaddress]=useState('')
    const[emailid,setemailid]=useState('')
    const[contactnumber,setcontactnumber]=useState(0)
    const navigate =useNavigate();
    function Return(){
        navigate("/dashboard");
      }
    function Newdata(){
        const dataupdate={address:address,emailid:emailid,contactnumber:contactnumber}
        axios.post("/api/updating",dataupdate)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className="update-content">
            <div className="left-update-content">
               <div>
                 <Adminheader />
               </div>
            </div>
            <div className="right-update-content">
                <div className="return_dashboard_pages">
                    <button onClick={Return}>Back to Dashboard</button>
                </div>
                <h3>Update Contact Info</h3>
                <hr></hr>
                <span className="row3-col3">
                    <h4>Contact Details</h4>
                    <form>
                        <label>Address:</label>
                        <input type="text" value={address} onChange={(event)=>setaddress(event.target.value)} required/>
                        <br></br>
                        <label>Email Id:</label>
                        <input type="email" value={emailid} onChange={(event)=>setemailid(event.target.value)}required/>
                        <br></br>
                        <label>Contact Number:</label>
                        <input type="text" value={contactnumber} onChange={(event)=>setcontactnumber(event.target.value)} required/>
                        <br></br>
                        <button onClick={Newdata}>Update</button>
                    </form>
                </span>
            </div>
        </div>
    )
}

export default Update;
