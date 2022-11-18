import React from "react";
import Header from "../Top/Header";
import "../Top/Header.css";
import {useNavigate} from "react-router-dom";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";

function About(){
    const navigate=useNavigate();
    function main(){
        navigate("/donor");
    }
    return(
        <div>
            <Header />
            <div className="about-content">
                <div>
                    <img  width="400px" height="300px" alt="bloodinfo" src="Image/drop_blood.png"/>
                </div>
                <div>
                    <h1>Welcome to BloodBank & Donor Mangement System</h1>
                </div>
                <div className="info-general-content">
                    <div className="info-c1">
                        <h3>Need For Blood</h3>
                        <hr color="white" margin="0px" padding="0px"></hr>
                        <p>As a result of cancer treatment or other illnesses that cause anemia. Anemia occurs when the body's red blood cell count is very low. Red blood cells carry oxygen from the lungs so that it can be used.

                        </p>
                    </div>
                    <div className="info-c2">
                        <h3>Blood Tips</h3>
                        <hr color="white" padding="0px" margin="0px"></hr>
                        <p>1.Drink an extra 16 oz. of water (or other nonalcoholic drink) before your appointment.<br></br>
                            2.Eat a healthy meal, avoiding fatty foods like hamburgers, fries or ice cream.</p>
                    </div>
                    <div className="info-c3">
                        <h3 background-color="red">Who you could Help</h3>
                        <hr color="white" padding="0px" margin="0px"></hr>
                        <p>1.Injured People.<br></br>
                           2.Chronic Disease Person.<br></br>
                           3.Sugar Suffering Person.</p>
                    </div>
                </div>
                <div className="about-row4">
                    <div className="about-row4-col1">
                        <h3>BLOOD GROUPS</h3>
                        <span>Blood Group of any Human Beings will mainly fall in any one of 
                            the following groups:-
                        </span>
                        <ul>
                            <li>A positive or A negative</li>
                            <li>B positive or B negative</li>
                            <li>O positive or O negative</li>
                            <li>AB positve or AB negaative</li>
                        </ul>
                    </div>
                    <div className="about-row4-col2">
                        <img width="400px" height="180px" src="Image/blood-1968457.png" alt="blood-group-types" />
                    </div>
                </div>
                <div className="row5-about">
                    <div className="row5-col1-about">
                       <h3>UNIVERSAL DONORS AND RECIPENTS</h3>
                       <span>The Most common blood type is O following by type A, type O individually are often called 'universal donors' since the blood 
                        since the blood can be transfused in the person with the blood types. Those with the type AB blood are called universal
                        recipients because they can receive the blood of any type.
                        <br></br>
                        <br></br>
                        For emergency transfusions blood group type O negative blood is the variety of the blood that has the lowest 
                        risk of causing the serious reactions for most people who receive it.Because of this, it's sometimes called 
                        the universal blood donor type.
                       </span>
                    </div>
                    <div className="row5-col2-about">
                        <button onClick={main}>Become a Donor</button>

                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export default About;