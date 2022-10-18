import Header from "../Top/Header";

function Donor(){
    return(
        <div className="donor-content">
            <Header />
            <div className="donor-content-r1">
              <h2>Donate Blood</h2>
            </div>
            <hr></hr>
            <form >
                <div className="form-content-row">
                  <div>
                    <label>Full Name*:</label>
                    <br></br>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Mobile Number*:</label>
                    <br></br>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Email*:</label>
                    <br></br>
                    <input type="Email" />
                  </div>
                </div>
                <div className="form-content-row">
                  <div>
                    <label>Age*:</label>
                    <br></br>
                    <input type="number" />
                  </div>
                  <div>
                    <label>Gender*:</label>
                    <br></br>
                    <select>
                       <option>Male</option>
                       <option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label>Blood Group*</label>
                    <br></br>
                    <select>
                      <option>A+</option>
                      <option>A-</option>
                      <option>AB-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                  </div>
                </div>
                <div className="form-content-row">
                   <div className="add-row-text">
                     <label>Address*:</label>
                     <br></br>
                     <input type="text" />
                   </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Donor;