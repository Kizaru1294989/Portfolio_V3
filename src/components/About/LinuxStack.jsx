import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNginx } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { SiApache } from "react-icons/si";
import aircrack from "../../Assets/Icons/air.png"
import nmap from "../../Assets/Icons/sticker-hacker-nmap-removebg-preview.png"
import wifite from "../../Assets/Icons/1714930010717-removebg-preview.png"
import elk from "../../Assets/Icons/elk-logo-1-removebg-preview.png"


function LinuxStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{ width : '100px' , height : '90px'}} src={aircrack} alt="" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img style={{ width : '100px' , height : '90px'}} src={nmap} alt="" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img style={{ width : '200px' , height : '100px'}} src={wifite} alt="" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img style={{ width : '200px' , height : '90px'}} src={elk} alt="" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
    </Row>
  );
}

export default LinuxStack;
