/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
  const [successMsg, setsuccessMsg] = useState("");
  const form = useRef();

  const serviceId = process.env.REACT_APP_JS_MAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_JS_MAIL_TEMPLATE_ID;
  const userId = process.env.REACT_APP_JS_MAIL_USER_ID;

  console.log(serviceId, templateId, userId, "pik");
  console.log(process.env);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then(setsuccessMsg("Message Sent..."));
    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>pikesh.patel492@gmail.com</h5>
              <a href="mailto:pikesh.patel492@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>pikesh.patel492@gmail.com</h5>
              <a href="https://m.me/pikesh1212" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>ping me</h5>
              <a href="https://api.whatsapp.com/send?phone=918602400701">
                Send a message
              </a>
            </article>
          </div>
          {/* End of contact options */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="email" name="email" placeholder="Your Email" />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {successMsg}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
