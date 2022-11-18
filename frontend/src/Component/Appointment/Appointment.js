import React from "react";
import Header from "../Top/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import {useState} from"react";

function Appointment(){
    const[date,setdate]=useState();
    const[time,settime]=useState();
    const[newappoint,setnewappoint]=useState([]);
    function Appoint(){
        alert("Booking Slot Successful");
        const datappoint={date:date,time:time};
        axios.post("/api/postappointment",datappoint)
        .then((res)=>{
            setnewappoint(res.data);
        })
        .catch((err)=>{
            console.log(err);
        },[])
    }
    const currentslot=newappoint.map((obj,count)=>{
        return(
            <tr>
                <td>{++count}</td>
                <td>{obj.date}</td>
                <td>{obj.time}</td>
            </tr>
        )

    })
    return(
        <div className="appointment_content">
            <div>
                <Header />
            </div>
            <div className="main_appointment_content">
                <h3>Book Date and Time</h3>
                <hr></hr>
                <form>
                    <label>Select Date </label>
                    <input type="date" onChange={(event)=>setdate(event.target.value)}/>
                    <label>     Select Time </label>
                    <input type="time" onChange={(event)=>settime(event.target.value)}/>
                </form>
                <button onClick={Appoint}>Book Slot</button>
            </div>
            <div className="appointment_table">
                <table>
                    <tr>
                        <th>Token Number</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                    </tr>
                    {currentslot}
                </table>
            </div>
            <div className="down_appointment_content">
               <Footer />
            </div>
        </div>
    )
}
export default Appointment;