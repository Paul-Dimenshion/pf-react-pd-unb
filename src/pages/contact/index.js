import React, { useState } from "react"; // Imports the React and useState modules from the 'react' library.
import * as emailjs from "emailjs-com"; // Imports all modules from the 'emailjs-com' library and assigns them to the 'emailjs' object.
import "./style.css"; // Imports a CSS file named 'style.css' located in the same directory as this file.
import { Helmet, HelmetProvider } from "react-helmet-async"; // Imports the Helmet and HelmetProvider components from the 'react-helmet-async' library.
import { meta } from "../../content_option"; // Imports an object named 'meta' from a file located in a relative directory '../../content_option'.
import { Container, Row, Col, Alert } from "react-bootstrap"; // Imports the Container, Row, Col, and Alert components from the 'react-bootstrap' library.
import { contactConfig } from "../../content_option"; // Imports an object named 'contactConfig' from a file located in a relative directory '../../content_option'.

// Defines and exports a functional component named 'ContactUs'.
export const ContactUs = () => {
    /* Declares a state variable named 'formData' using the 'useState' hook,
     and initializes it with an object containing empty strings for 'email', 'name', 
     and 'message', false for 'loading' and 'show', and empty strings for 'alertmessage' and 'variant'. */
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

    /* Declares a function named 'handleSubmit' that takes an event object 'e' as its argument. 
    The function prevents the default form submission behavior, and updates the 'formData' state variable to set 
    'loading' to true. */
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    /* Declares an object named 'templateParams' containing properties for the form data and email 
    recipient specified in the 'formData' and 'contactConfig' state variables. */
    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    /* Calls the 'send' function from the 'emailjs' object, passing in the service ID,
    template ID, email recipient, and message specified in the 'contactConfig' and 'templateParams' state variables. */
    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      /* Defines a promise chain with two callbacks - one for a successful response and one for an error response. 
      On success, it logs the response text and updates the 'formData' state variable */
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
