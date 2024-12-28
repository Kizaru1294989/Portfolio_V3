import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../Assets/Atlas/image-removebg-preview.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import SoundBar from "../SoundBoard/SoundBoard";
import useThemeSwitcher from './useThemeSwitcher';
import { IoIosMailUnread } from "react-icons/io";
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { CgFileDocument } from "react-icons/cg";
import  FlagFr  from "../../Assets/Flag/png-transparent-flag-of-france-flag-of-france-french-seat-arona-fr-france-blue-angle-flag-thumbnail.png"
import  FlagEn  from "../../Assets/Flag/png-clipart-european-union-flag-of-the-united-kingdom-british-flag-logo.png"

function NavBar() {
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const language_button = {
    display: "flex",
    cursor: "pointer",
    position: "fixed",
    right: "15rem",
    top: "2.5rem",

  }

  window.addEventListener("scroll", scrollHandler);

  const iconstyle = {
    marginBottom: "2px",
    color: "#6cb4ee",
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="Atlas" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={iconstyle} /> Accueil
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={iconstyle} /> A propos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={iconstyle} /> Projets
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={iconstyle} /> Portfolio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <MdWorkOutline style={iconstyle} /> Expérience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlinePhoneInTalk   style={iconstyle} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <div
						onClick={() => setTheme(activeTheme)}
						style={language_button}
					>
						{activeTheme === 'dark' ? (
              <>
              <span class="fi fi-fr"></span>
              </>
						) : (
              <>
              <span class="fi fi-gb"></span> 
              </>
						)}
					</div>
            </Nav.Item>

            <Nav.Item>
              <SoundBar />
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
