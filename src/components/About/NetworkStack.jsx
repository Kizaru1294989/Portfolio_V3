import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiCisco } from "react-icons/si";
import { SiPaloaltonetworks } from "react-icons/si";
import { SiFortinet } from "react-icons/si";
import { TbBrandElastic } from "react-icons/tb";
import arista from "../../Assets/Icons/blob-removebg-preview.png"
import { SiPfsense } from "react-icons/si";

function NetworkStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandElastic />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFortinet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPaloaltonetworks />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCisco />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPfsense />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img style={{ width : '130px' , height : '110px'}} src={arista} alt="" />
      </Col>

    </Row>
  );
}

export default NetworkStack;
