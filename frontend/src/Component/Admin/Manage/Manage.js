import { useState } from "react";
import Adminheader from "../Upper/Adminheader";
import axios from"axios";
import {useNavigate} from "react-router";

function Manage(){
    const[editdata,seteditdata]=useState('');
    const navigate =useNavigate();
    function Return(){
        navigate("/dashboard");
      }
    function modify(){
        alert("Edit Successfull");
        const sendata={editdata:editdata};
        axios.get("/api/datamodify",sendata)
        .then(function(res){
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    return(
        <div className="managepages">
            <div className="left-managepages">
                <div>
                  <Adminheader />
                </div>
            </div>
            <div className="right-managepages">
                <div className="return_dashboard_pages">
                    <button onClick={Return}>Back to Dashboard</button>
                </div>
                <h3>Manage Pages</h3>
                <hr></hr>
                <form>
                <label >Edit Information Tab</label>
                <br></br>
                <br></br>
                <textarea onChange={(event)=>seteditdata(event.target.value)}></textarea>
                <br></br>
                <button onClick={modify}>Edit</button>
                </form>
            </div>
        </div>
    )
}

export default Manage;