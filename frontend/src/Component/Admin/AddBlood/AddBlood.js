import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import Adminheader from "../Upper/Adminheader";
import axios from "axios";

function AddBlood(){
    const navigate=useNavigate();
    const[bloodgr,setbloodgr]=useState('');
    const[Quantityblood,setQuantityblood]=useState(0);
    function Quantmon(){
        alert("Added Blood Successfully")
        const bloodquan={bloodgr:bloodgr,Quantityblood:Quantityblood}
        axios.post("/api/quantblood",bloodquan)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className="addblood-system">
            <div className="left-addblood">
                <div>
                   <Adminheader />
                </div>
            </div>
            <div  className="right-addblood">
                <div className="top-right-addblood">
                    <button onClick={()=>navigate("/dashboard")}>Back to Dashboard</button>
                </div>
                <h3>Add Blood</h3>
                <hr></hr>
                <span className="row3-col3">
                    <h4>Update Blood Quantity</h4>
                    <form>
                       <label>Blood Group*</label>
                       <select value={bloodgr} onChange={(event)=>setbloodgr(event.target.value)}>
                          <option>A+</option>
                          <option>A-</option>
                          <option>AB-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>O+</option>
                          <option>O-</option>
                       </select>
                       <br></br>
                       <br></br>
                       <label>Blood Quantity</label>
                       <input type="text" placeholder="Enter the blood in ml" onChange={(event)=>setQuantityblood(event.target.value)}/>
                       <br></br>
                       <br></br>
                       <button onClick={Quantmon}>AddBlood</button>
                    </form>
                </span>
            </div>
        </div>
    )
}
export default AddBlood;