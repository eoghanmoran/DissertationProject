import React from "react";
import "./Contact.css";
import "../../App.css"
import Footer from '../../components/Footer'
import emailjs from "emailjs-com";
import { Form, Button, Card, Alert, Container, Table } from "react-bootstrap"

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ejha0cj', 'template_gzj6lpz', e.target, 'CrLFUT1-Vl2em7PbV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className="background">
      <div className="">
      <Container width= "80%"fluid background-color="white">
        
          <div className="contact">
            
            <div
              className="leftSide"
            >
              <iframe
                class="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.0173093746307!2d-5.936617048947077!3d54.58606908873286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486108f03ea92097%3A0x420253dcb69b79af!2sForward%20South%20Partnership!5e0!3m2!1sen!2suk!4v1643499654102!5m2!1sen!2suk"
                width="100%"
                height="100%"
                frameborder="0"
                // aria-hidden="false"
                // tabindex="0"
                allowfullscreen=""
              ></iframe>
            </div>
            <div className="rightSide">
            

              <form id="contact-form" onSubmit={sendEmail}>
              <h5 class="display-4">Send us a message</h5>
                <label htmlFor="name">Full Name</label>
                <input name="name" type="text" />
                <label htmlFor="email">Email</label>
                <input name="email" type="email" />
                <label htmlFor="message">Message</label>
                <textarea
                  rows="6"
                  name="message"
                  required
                ></textarea>
                <button type="submit"> Send Message</button>
              </form>
            </div>
            
          </div>
          </Container>
        </div>
     
        
      <Footer />
    </div>
  );
}

export default Contact;
