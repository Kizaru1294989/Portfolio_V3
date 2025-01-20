import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../Assets/img/074A7445.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import WaveParticlesScene from "../../Geometry/Particules/wave-particules";
import Shader from "../../Geometry/shader";
import ParticlesBillboards from "../../Geometry/Circle";
import Resume from "./Resume";

function HomeBottom() {
  return (
    <Container
      fluid
      style={{ display: "flex", marginTop: "50px" }}
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row
          style={{
            display: "flex",
            backgroundColor: "#101010",
            padding: "100px",
            borderRadius: "30px",
          }}
        >
          {/* <Shader/> */}
          <Resume />
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Retrouvez moi sur</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeBottom;
