import Adminheader from "../Upper/Adminheader";
import axios from "axios";
import {useState,useEffect} from "react";
import {useNavigate} from "react-router";

function Query(){
    const[Contactquery,setContactquery]=useState([]);
    const navigate=useNavigate();
    function Return(){
      navigate("/dashboard");
    }
    useEffect(()=>{
        axios.post("/api/querydetail")
        .then(function(res){
            setContactquery(res.data)
        })
        .catch(function(err){
            console.log(err)
        })
    },[])
    const querydata=Contactquery.map((obj,count)=>{
        return(
                <tr>
                    <td>{++count}</td>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>{obj.mobile}</td>
                    <td>{obj.message}</td>
                    <td>{obj.postingdate}</td>
                    <td>{obj.status}</td>
                </tr>
        )
    })
    return(
        <div className="query_pages">
            <div className="left_query_pages">
                <div>
                    <Adminheader />
                </div>
            </div>
            <div className="right_query_pages">
                <div className="return_dashboard_pages">
                    <button onClick={Return}>Back to Dashboard</button>
                </div>
                <h3 margin-left="10px">User Query</h3>
                <hr width="1000px"></hr>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Mobile Number</th>
                        <th>Message</th>
                        <th>Posting Date</th>
                        <th>Status</th>
                    </tr>
                    {querydata}
                </table>
            </div>
        </div>
    )
}
export default Query;