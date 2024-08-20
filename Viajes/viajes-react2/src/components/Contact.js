import React from "react";
import "./css/contact.css";
import { useForm, ValidationError } from "@formspree/react";
<form action="https://formspree.io/f/xdknlygw" method="POST"></form>;

const Contact = () => {
  const [state, handleSubmit] = useForm("xdknlygw");
  if (state.succeeded) {
    return <p className="status success">Thanks for joining!</p>;
  }
  return (
    <section className="contacto" id="contact">
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nombre">Name:</label>
        <input id="name" name="name" placeholder="Name" />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <ValidationError prefix="email" field="email" errors={state.errors} />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="write your message"
          required
        ></textarea>
        <ValidationError
          prefix="message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
