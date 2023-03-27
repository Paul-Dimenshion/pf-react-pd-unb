import React from "react"; // Imports the React library, which is required for building React components.
import "./style.css"; // Imports a CSS file named "style.css", which is used to style the component.
 /* Imports two components named "Helmet" and "HelmetProvider" from the "react-helmet-async" library. 
These components are used for managing the metadata of the web page. */
import { Helmet, HelmetProvider } from "react-helmet-async";
/* Imports three components named "Container", "Row", and "Col" from the "react-bootstrap" library. 
These components are used for building a responsive layout. */
import { Container, Row, Col } from "react-bootstrap";
/* Imports five objects named "dataabout", "meta", "worktimeline", "skills", 
and "services" from a file located in the parent directory under the name of "content_option". */
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

/* Defines a functional component named "About" using the ES6 arrow function syntax.
Wraps the component inside the "HelmetProvider" component, which provides the metadata management 
functionality to the component. The "Container" component is used to create a container with a class name of "About-header", 
and it is wrapped inside the "Helmet" component which sets the title and description metadata of the web page. */
export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Creates a row with a class name of "mb-5 mt-3 pt-md-3", which contains a single column 
        with a width of 8 out of 12 columns on large screens. Inside the column, 
        there's a heading with the text "About me", and a horizontal rule element. */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        {/* Creates a row with a class name of "sec_sp", which contains two columns.
        The first column has a width of 5 out of 12 columns on large screens, 
        and it contains a heading with the text specified in the "title" property of the "dataabout" object. 
        The second column has a width of 7 out of 12 columns on large screens, and it contains a paragraph element with 
        the text specified in the "aboutme" property of the "dataabout" object. */}
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
