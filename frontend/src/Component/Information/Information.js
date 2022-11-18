import Header from "../Top/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Information(){
    const[Getdata,setGetdata]=useState('');
    /*useEffect(()=>{
        axios.post("/api/getdata")
        .then((res)=>{
            setGetdata(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    })*/
    return(
        <div>
            <Header />
            <div className="Information-content">
                <div className="left-Information-content">
                   <h2>Why Should I Donate Blood</h2>
                   <hr></hr>
                   <span>
                   Blood is the most precious gift that anyone
                      can give to the another person- the gift of life. A Decision to donate your  Blood
                      can save a life, or even several if your blood is separated into its componenets- red cells, platelets and plasma- which can 
                      be used individually fo patient with the specific conditions.
                      Safe blood save lives and improves health.
                      Blood transfusion is needed for:
                      <ul>
                         <li>Women with complications of pregancy, such as ectopic, pregancies and haemorrhage before, during or after children.</li>
                         <li>Children with severe anaemia often resulting from malaria or malnutritions.</li>
                         <li>People with severe trauma following man-made and natural disasters.</li>
                         <li>Many Complex medical and surgical proceddure and cancer patients.</li>
                       </ul>
                      <br></br>
                      <br></br>
                      It is also needed for regular tranfusions for people with 
                      conditions such as thalassaemia and sickle cell disease and is used to make products such as clotting factors for 
                      people with haemophillia. There is a constant need for regular blood supply because blood can be stored only
                      for only a limited time time before use. Regular blood donations by a suffer number of healthy
                      people are needed to ensure that safe blood will be whenever and wherever it is needed.
                   </span>
                   
                </div>
                <div className="right-Information-content">
                    <img width="300px" height="400px" src="Image/donated-blood-uses.png" alt="blood-uses" />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Information;