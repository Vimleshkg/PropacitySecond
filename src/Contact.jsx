import React from "react";
import './App.css';

function Contact() {
  return (
    <div className="contact">
      <div>
        <h1>CONTACT US</h1>
        <p>
          Please enter details below and we shall get in touch with you shortly
        </p>
      </div>
      <form >
        
        <input  type="text" placeholder="Full Name"  className="Fields"/>
        <input type="text" placeholder="Contact Number" className="Fields" />
        <input type="email" placeholder="Email Address"  className="Fields" />
        <button className="sumbit">SUMBIT</button>
      
      </form>
    </div>
  );
}

export default Contact;
