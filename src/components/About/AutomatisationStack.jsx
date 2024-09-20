import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNginx } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { SiApache } from "react-icons/si";
import aircrack from "../../Assets/Icons/air.png"
import { SiAnsible } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiJinja } from "react-icons/si";
import { SiYaml } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { FaJenkins } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { SiPrometheus } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
function AutomatisationStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJinja />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYaml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
      </Col>
    </Row>
  );
}

export default AutomatisationStack;
