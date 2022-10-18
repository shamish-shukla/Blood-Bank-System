import Header from "../Top//Header";

function Contact(){
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
              <input type="text" />
              <br></br>
              <label>Phone Number*:</label><br></br>
              <input type="text" />
              <br></br>
              <label>Email Address*:</label><br></br>
              <input type="email" />
              <br></br>
              <label className="message-detail">Send Us a Message*:</label><br></br>
              <textarea></textarea>
              <br></br>
              <button>Send Message</button>
            </div>
            <div className="contact-detail-col-right">
                <h3>Contacts Details</h3>
                <span>Address:</span>
                <p>Bihar</p>
                <span>Contact Number:</span>
                <p>3456712890</p>
                <span>Email:</span>
                <p>sgag35@gmail.com</p>
            </div>
            </div>
         </form>
       </div>
    )
}

export default Contact;
