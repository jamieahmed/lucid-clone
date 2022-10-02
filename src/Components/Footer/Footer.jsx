import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container className="sub-footer">
          <Row>
            <Col>
              <strong>Lucid Air</strong>
              <div className="footer-links">
                <Link className="each-link" to="/">
                  Home
                </Link>
                <Link className="each-link" to="/air">
                  Discover Air
                </Link>
                <Link className="each-link" to="/air/configure">
                  Design Yours
                </Link>
                <Link className="each-link" to="/air/reserve">
                  Reserve Now
                </Link>
              </div>
            </Col>
            <Col>
              <strong>Lucid Motors</strong>
              <div className="footer-links">
                <Link className="each-link" to="/company">
                  Company
                </Link>
                <Link className="each-link" to="/company/leadership">
                  Leadership
                </Link>
                <Link className="each-link" to="/careers">
                  Careers
                </Link>
                <Link className="each-link" to="/stories">
                  Stories
                </Link>
                <Link className="each-link" to="/tech-talks">
                  Tech Talks
                </Link>
                <Link className="each-link" to="/future-models">
                  Future Models
                </Link>
                <Link className="each-link" to="/investors">
                  Investors
                </Link>
              </div>
            </Col>
            <Col>
              <strong>More</strong>
              <div className="footer-links">
                <Link className="each-link" to="/ownership">
                  Purchase & Ownership
                </Link>
                <Link className="each-link" to="/payment-calculator">
                  Payment Calculator
                </Link>
                <Link className="each-link" to="/store">
                  Store
                </Link>
                <Link className="each-link" to="/faq">
                  FAQ
                </Link>
                <Link className="each-link" to="/contact">
                  Contact Us
                </Link>
                <Link className="each-link" to="/locations">
                  Locations
                </Link>
                <Link className="each-link" to="/events">
                  Events
                </Link>
                <Link className="each-link" to="/media-room">
                  Media Room
                </Link>
                <Link className="each-link" to="/awards">
                  Awards and Accolades
                </Link>
              </div>
            </Col>
            <div className="footer-footer">
              <button>
                <LanguageIcon /> Language
              </button>
              <div className="Social-media">
                <span>
                  <InstagramIcon />{" "}
                </span>
                <span>
                  <YouTubeIcon />
                </span>
                <span>
                  <TwitterIcon />
                </span>
                <span>
                  <FacebookIcon />{" "}
                </span>
              </div>
              <span className="Legal">Legal</span>
              <span className="Copyrights">
                ©2022 Lucid. All rights reserved
              </span>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
