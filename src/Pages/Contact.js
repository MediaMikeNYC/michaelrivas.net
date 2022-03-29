import React from "react";
import "./pages.css";
import ContactForm from "../Components/ContactForm/form";

function ContactPage() {
  return (
    <div className="mainDiv">
      <h1>Stay in touch</h1>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
