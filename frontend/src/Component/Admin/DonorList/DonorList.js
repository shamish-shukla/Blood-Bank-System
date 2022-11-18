import Adminheader from "../Upper/Adminheader";
import axios from "axios";
import { useState,useEffect } from "react";
import {useNavigate} from "react-router";

function DonorList(){
    const[Information,setInformation]=useState([]);
    const navigate=useNavigate();
    function Return(){
      navigate("/dashboard");
    }
    useEffect(()=>{
        axios.post("/api/donordetail")
        .then(function(res){
            setInformation(res.data);
        })
        .catch(function(err){
            console.log(err);
        })
    },[])
    const donordata=Information.map((obj,count)=>{
        return(
            <tr>
                <td>{++count}</td>
                <td>{obj.name}</td>
                <td>{obj.mobile}</td>
                <td>{obj.email}</td>
                <td>{obj.Age}</td>
                <td>{obj.Gender}</td>
                <td>{obj.BloodGroup}</td>
                <td>{obj.Address}</td>
            </tr>
        )
    })
    return(
        <div className="donorlist_pages">
            <div className="left_donorlist_pages">
              <div>
                <Adminheader />
              </div>
            </div>
            <div className="right_donorlist_pages">
                <div className="return_dashboard_pages">
                <button onClick={Return}>Back to Dashboard</button>
                </div>
                <div className="sub_right_donorlist_pages">
                    <h3>Donor Details</h3>
                    <hr width="1000px"></hr>
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Email Id</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Blood Group</th>
                            <th>Address</th>
                        </tr>
                        {donordata}
                    </table>
                </div>
            </div>
        </div>
    )
}
export default DonorList;