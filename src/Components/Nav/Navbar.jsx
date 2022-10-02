import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Offcanvas from "react-bootstrap/Offcanvas";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Container">
      <div className="Nav-start">
        <Link className="Nav-links" to="/air">
          LUCID AIR
        </Link>
        <Link className="Nav-links" to="/air/configure">
          DESIGN YOURS
        </Link>
        <Link className="Nav-links" to="/air/reserve">
          RESERVE
        </Link>
      </div>
      <div className="Nav-center">
        <Link className="Nav-links" to="/">
          LUCID
        </Link>
      </div>
      <div className="Nav-end">
        <Link className="Nav-links" to="/">
          <LanguageIcon />
        </Link>
        <Link className="Nav-links" to="/login">
          SIGN IN
        </Link>
        <button className="Nav-button">
          <Link className="Nav-links" to="/subscribe">
            STAY UPDATED
          </Link>
        </button>
        <span className="SideNav-menu-icon" onClick={handleShow}>
          <MenuOutlinedIcon />
        </span>
      </div>

      <Offcanvas
        className="sideNavbar"
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="divZero">
              <Link className="Side-Nav-Header-links" to="/login">
                SIGN IN
              </Link>
              <Link className="Side-Nav-Header-links" to="/subscribe">
                Stay Updated
              </Link>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="divOne">
            <Accordion allowMultiple>
              <AccordionItem border="none">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        LUCID AIR
                      </Box>

                      {isExpanded ? (
                        <RemoveIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <div className="bullets">
                        <Link to="/air">Overview</Link>
                        <Link to="/air/design">Design</Link>
                        <Link to="/air/performance">Performance</Link>
                        <Link to="/charging">Charging</Link>
                        <Link to="/air/connectivity">Connectivity</Link>
                        <Link to="/air/specs">Specs</Link>
                        <Link to="/air/configure/id">Sapphire</Link>
                        <Link to="/air/dream-edition">Dream Edition</Link>
                        <Link to="/air-grand-touring">Grand Touring</Link>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/air/configure">Design Yours</Link>
            </Box>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/air/reserve">Reserve</Link>
            </Box>
          </div>
          <div className="divTwo">
            <Accordion allowMultiple>
              <AccordionItem border="none">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        More about Lucid
                      </Box>
                      {isExpanded ? (
                        <RemoveIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <div className="bullets">
                        <Link to="/race-proven">Race-proven Performance</Link>
                        <Link to="/ownership">Purchase & Ownership</Link>
                        <Link to="/payment-calculator">Payment Calculator</Link>
                        <Link to="/future-models">Project Gravity</Link>
                        <Link to="/faq">FAQ</Link>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple>
              <AccordionItem border="none">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Company
                      </Box>
                      {isExpanded ? (
                        <RemoveIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <div className="bullets">
                        <Link to="/company">About Us</Link>
                        <Link to="/company/leadership">Leadership</Link>
                        <Link to="/sustainability">Sustainability</Link>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/investors">Investors </Link>
            </Box>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/stories">Stories </Link>
            </Box>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/tech-talks">Tech Talks </Link>
            </Box>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/careers">Careers </Link>
            </Box>
          </div>
          <div className="divThree">
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/contact">Contact </Link>
            </Box>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/locations">Locations </Link>
            </Box>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/events">Events </Link>
            </Box>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/media-room">Media </Link>
            </Box>
            <Box flex="1" textAlign="left" margin="15px">
              <Link to="/store">Store </Link>
            </Box>
          </div>
          <div className="side-Legal">
            <span className="Legal">Legal</span>
          </div>
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
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbar;
