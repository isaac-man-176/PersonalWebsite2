import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "/src/index.css";

export default function Contact() {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText("Sending...");

    emailjs
      .sendForm(
        "default_service",      // same as your plain JS code
        "template_9tqm9jm",     // your EmailJS template ID
        form.current,           // React-safe reference to form
        "Voi94j4mRkqH8X696"    // your public key
      )
      .then(() => {
        setButtonText("Send");
        alert("Sent!");
        e.target.reset();
      })
      .catch((err) => {
        setButtonText("Send");
        alert("Failed: " + JSON.stringify(err));
      });
  };

  return (
    <>
      <br></br><br></br>
      <h1 className = "bigHeader">Contact</h1>
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <div className="topForm">
            <input
              type="text"
              name="name"
              required
              className="formName"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              required
              className="formEmail"
              placeholder="Email Address"
            />
          </div>

          <textarea name="message" required placeholder="Message"></textarea>
          <button id="button" className="sendButton" type="submit">
            {buttonText}
          </button>
        </form>
      </div>

      <br />
      <br />
      <h2>Or Via</h2>
      <p>Email: isaacman176@gmail.com</p>
      <p>Phone: (647) 966 - 1332</p>
      <p>Location: Toronto, ON, Canada</p>
      <p>Linkedin: <a href="https://www.linkedin.com/in/isaac-man-865621305/" target="_blank" rel="noopener noreferrer">Isaac Man</a></p>
    </>
  );
}
