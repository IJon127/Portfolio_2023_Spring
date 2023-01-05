import { useState, useEffect } from "react";
import "./Contact.css";
import ContactForm from "./ContactForm.jsx";

function Contact() {
  const [emailSent, setEmailSent] = useState(false);
  const [clickedSend, setClickedSend] = useState(false);
  const [submitActive, setSubmitActive] = useState(false);

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  useEffect(() => {
    if (validName && validEmail && validMessage) {
      setSubmitActive(true);
    } else {
      setSubmitActive(false);
    }
  }, [validName, validEmail, validMessage]);

  return (
    <div>
      <ContactForm
        submitActive={submitActive}
        emailSent={emailSent}
        setClickedSend={setClickedSend}
        setEmailSent={setEmailSent}
        setValidName={setValidName}
        setValidEmail={setValidEmail}
        setValidMessage={setValidMessage}
      />
      {emailSent && (
        <p className="contact__sent-message">Message sent. Thank you!</p>
      )}
      {clickedSend && !emailSent && (
        <div className="contact__validation-container">
          {!validName && (
            <p className="contact__validation">* Please enter your name.</p>
          )}
          {!validEmail && (
            <p className="contact__validation">* Invalid email address.</p>
          )}
          {!validMessage && (
            <p className="contact__validation">* Message can't be empty.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Contact;
