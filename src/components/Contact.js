import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3rckd3h", // ✅ Your EmailJS Service ID
        "template_z9xgeek", // ✅ Replace with your actual Template ID
        form.current,
        "61jzPoN7gsSi99afv" // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        If you’d like to get in touch regarding opportunities, collaborations,
        or admissions, please use the form below or connect with me directly
        through email and social links.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
<div className="contact-info">
  <p>
    <strong>Email:</strong>{" "}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=kashif7493@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      Click to send me an email
    </a>
  </p>

  <p>
    <strong>LinkedIn:</strong>{" "}
    <a
      href="www.linkedin.com/in/kashif-ali-57352b380"
      target="_blank"
      rel="noreferrer"
    >
      Click to view LinkedIn
    </a>
  </p>

  <p>
    <strong>GitHub:</strong>{" "}
    <a
      href="https://github.com/kashifali6273"
      target="_blank"
      rel="noreferrer"
    >
      Click to view GitHub
    </a>
  </p>

  <p>
    <strong>CV:</strong>{" "}
    <a href="/Your_CV.pdf" download>
       Click to download CV
    </a>
  </p>
</div>

      </div>
    </section>
  );
};

export default Contact;
