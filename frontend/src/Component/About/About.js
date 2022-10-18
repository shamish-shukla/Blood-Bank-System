import React from "react";
import Header from "../Top/Header";
import "../Top/Header.css";

function About(){
    return(
        <div>
            <Header />
            <div className="about-content">
                <div>
                    <img  width="600px" height="400px" alt="bloodinfo" src="Image/aboutblood.png"/>
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
                        <h3>Who you could Help</h3>
                        <hr color="white" padding="0px" margin="0px"></hr>
                        <p>1.Injured People.<br></br>
                           2.Chronic Disease Person.<br></br>
                           3.Sugar Suffering Person.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;