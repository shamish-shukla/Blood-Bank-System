import Top from "../Top/Header";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";

function Login(){
    const[username,setusername]=useState('');
    const[pass,setpass]=useState();
    const navigate=useNavigate();
    function option(){
        if(username==="shamish123" && pass==="shamish1056")
        {
            alert("Login Successfull");
            navigate("/dashboard");
            
        }
        else if(username!="shamish123")
        {
            alert("Incorrect Username Please Login Again");
        }
        else  if(pass!="shamish1056")
        {
            alert('Incorrect Password Please Login Again');
        }
        else{
            alert("Login Again");
        }
    }
    return(
        <div>
            <div>
                <Top />
            </div>
            <div className="body-login-form">
              <div className="login-form">
                <h2>Blood System Login</h2>
                <form>
                    <label><b>Username*</b>:</label>
                    <br></br>
                    <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}/>
                    <br></br>
                    <label><b>Enter Password*:</b></label>
                    <br></br>
                    <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <button onClick={option}>Submit</button>
                </form>
              </div>
            </div>
            <div className="login-footer-content">
                <Footer />
            </div>
        </div>
    )
}

export default Login;