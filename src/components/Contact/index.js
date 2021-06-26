import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Card, Button, Container, Form, Alert } from 'react-bootstrap'
import BXF from '../../assets/images/header/icon.jpg'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log("details", details)
    let response = await fetch("http://localhost:5000/contact", {

      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),

    });
    setStatus("Submit");
    setFormState({ ...formState });
    console.log('form state', setFormState)

    let result = await response.json();

    alert(result.status);
  };




  const handleChange = (e) => {
    console.log("target is good",)
    if (e.target.id === 'email') {
      const isValid = validateEmail(e.target.value);
      (console.log('valid', isValid))
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
       
      } else {
        setErrorMessage('');

      }
    }
  };
  



  return (
    <Container>
      <Card>
        <Card.Header className="contain-color">Contact Us</Card.Header>
        <Card.Body>

          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required value={name} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required value={email} onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" rows="10" required value={message} />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
              
            )}
            <Button type="submit" variant="primary">{status} </Button>
          </Form>

        </Card.Body>
      </Card>
    </Container>

  );
};

export default ContactForm;


