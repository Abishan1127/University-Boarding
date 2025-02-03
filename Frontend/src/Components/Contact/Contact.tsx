import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
     
      <h2>Have Questions? <span>We're Here To Help!</span></h2>
      <p>
        Have questions or need help narrowing down your search? We're here to assist!
        Simply fill out the form below with your details and inquiry, and we'll get back
        to you within 24 hours to help you find the perfect boarding option for your needs.
      </p>

      <form className="contact-form">
        <div className="input-group">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <input type="text" placeholder="Title" required />
        <textarea placeholder="Comments" required></textarea>
        <button type="submit">SEND</button>
      </form>

      
    </div>
  );
};

export default Contact;
