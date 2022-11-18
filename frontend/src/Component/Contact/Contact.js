import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";
import Header from "../Top//Header";
import axios from "axios";

function Contact(){
  const[name,setname]=useState('')
  const[phonenumber,setphonenumber]=useState()
  const[email,setemail]=useState('')
  const[message,setmessage]=useState('')
  const[admindata,setadmindata]=useState([])
  function Final(){
    console.log(name+" "+phonenumber+" "+email+" "+message)
    const usercontact={name:name,phonenumber:phonenumber,email:email,message:message}
    axios.post("/api/contactadd",usercontact)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    axios.get("/api/admincontact")
    .then((res)=>{
      setadmindata(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  const firstdata=admindata.map((obj)=>{
    return(
      <p>{obj.address}</p>
    )
  })
  const seconddata=admindata.map((obj)=>{
    return(
      <p>{obj.contactnumber}</p>
    )
  })
  const thirddata=admindata.map((obj)=>{
    return(
      <p>{obj.email}</p>
    )
  })
    return(
       <div className="contact-content">
         <Header />
         <h2>Contact Us</h2>
         <hr></hr>
         <form>
            <div className="contact-detail-col">
            <div className="contact-detail-col-left">
              <h3>Send Us a Message</h3>
              <label>Full Name*:</label><br></br>
              <input type="text" value={name} onChange={(event)=>setname(event.target.value)}/>
              <br></br>
              <label>Phone Number*:</label><br></br>
              <input type="text" value={phonenumber} onChange={(event)=>setphonenumber(event.target.value)}/>
              <br></br>
              <label>Email Address*:</label><br></br>
              <input type="email" value={email} onChange={(event)=>setemail(event.target.value)}/>
              <br></br>
              <label className="message-detail">Send Us a Message*:</label><br></br>
              <textarea value={message} onChange={(event)=>setmessage(event.target.value)}></textarea>
              <br></br>
              <button onClick={Final}>Send Message</button>
            </div>
            <div className="contact-detail-col-right">
                <h3>Contact Details</h3>
                <span>Address:</span>
                <p>{firstdata}</p>
                <span>Contact Number:</span>
                <p>{seconddata}</p>
                <span>Email:</span>
                <p>{thirddata}</p>
            </div>
            </div>
         </form>
         <div>
          <Footer />
         </div>
       </div>
    )
}

export default Contact;
