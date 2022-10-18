import Top from "../Top/Header";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[username,setusername]=useState('');
    const[pass,setpass]=useState();
    const navigate=useNavigate();
    function option(){
        if(username==="shamish123" && pass==="shamish1056")
        {
            navigate('/Home');
            
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
                  <a href="#">Forget Password?</a>
                  <br></br>
                  <button onClick={option}>Submit</button>
              </form>
            </div>
        </div>
    )
}

export default Login;