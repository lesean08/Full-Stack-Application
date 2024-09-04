import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000", 
        { email, message },
        { headers: { Accept: "application/json" } }
      )
      .then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
        } else {
          setError("Failed to submit. Please try again.");
        }
      })
      .catch((err) => {
        setError("An error occurred while sending the message.");
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>;
  }

  return (
    <div>
      <div
        className="background3"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <h1>Contact Us</h1>
      </div>
      <form onSubmit={submit} style={{ padding: '20px', align: 'center'}}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', align: 'center'}}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%', height: '100px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
