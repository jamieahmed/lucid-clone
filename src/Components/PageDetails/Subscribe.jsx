import React from "react";
import "./Subscribe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Subscribe = () => {
  return (
    <div className="Subscribe-container">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="subscribedesc">
              <h3>Stay up to speed on the latest at Lucid.</h3>
            </div>
          </Col>
          <Col xs={6}>
            <div className="subscribeInput">
              <label htmlFor="">EMAIL</label>
              <input type="email" />
              <p className="checkboxDesc">
                <input type="checkbox" />
                Join our mailing list for early access to product announcements,
                special events in your area, promotions, and more.
              </p>
            </div>
            <button>Subsicribe</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscribe;
