import React from "react"; // Importing the React library to use in this component.
import "./style.css"; // Importing a CSS file to style this component.
import { Helmet, HelmetProvider } from "react-helmet-async"; /* Importing the Helmet and HelmetProvider components from the react-helmet-async library. 
Helmet allows for adding metadata to the page header, and HelmetProvider provides context for Helmet components.*/
import { Container, Row, Col } from "react-bootstrap"; /* Importing Container, Row, and Col components from the react-bootstrap 
library. These are components used for building layouts and UI elements.*/
import { dataportfolio, meta } from "../../content_option"; // Importing the dataportfolio and meta objects from a file located in the content_option directory.

// Exporting a Portfolio component as a functional component.
export const Portfolio = () => {
    // Returning the following JSX code.
  return (
    <HelmetProvider>
    {/* Wrapping the entire component with a HelmetProvider component, which provides context for Helmet components.*/}
      <Container className="About-header">
      {/* Using a Container component from react-bootstrap with the class name "About-header". */}
        <Helmet>
        {/* Using the Helmet component to set the title and description of the page. */}
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
        {/* Creating a row with a column that contains a heading for the Portfolio page and a horizontal rule beneath it. */}
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
        {/* Creating a div element with the class name "mb-5 po_items_ho". */}
        {/*Mapping over the dataportfolio array and rendering a div element for each object in the array.
         Each div contains an image, a description, and a link to view the project. */}
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        {/* Closing the div element that wraps the mapped elements. */}
      </Container>
      {/* Closing the Container component. */}
      {/* Closing the HelmetProvider component. */}
    </HelmetProvider>
  );
};
