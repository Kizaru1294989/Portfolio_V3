import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import NetworkStack from "./NetworkStack";
import LinuxStack from "./LinuxStack";
import AutomatisationStack from "./AutomatisationStack";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
                 <span className="tags bottom-tags">
           <div id="stars"></div>
           <div id="stars2"></div>
           <div id="stars3"></div>
           <div id="rocket"></div>
           <div id="rocket2"></div>
           <div id="rocket3"></div>
         
        </span>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui <strong className="purple">suis-je ?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
           <strong className="purple">Réseaux </strong>
        </h1>
        <NetworkStack />


        <h1 className="project-heading">
          <strong className="purple">Linux Blue/Red Team</strong>
        </h1>
        <LinuxStack />

        <h1 className="project-heading">
           <strong className="purple">Devops/Secops </strong>
        </h1>
        <AutomatisationStack />


        <h1 className="project-heading">
           <strong className="purple">Devloppement </strong>
        </h1>
        <Techstack />


   



        <Github />
      </Container>
    </Container>
  );
}

export default About;
