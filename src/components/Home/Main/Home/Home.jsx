import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../../Geometry/Particules/Particle";
import HomeBottom from "../../HomeBottom/HomeBottom";
import Type from "../../Type/Type";
import WaveParticlesScene from "../../../Geometry/Particules/wave-particules";
import { Cube } from "../../../Geometry/Cube";
import TerrainViewer from "../../../Geometry/three_animation/Montain";
import RainEffect from "../../../Geometry/Cloud/Cloud";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
 
        <WaveParticlesScene/>
        {/* <RainEffect/> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour Bonsoir{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Je suis
                <strong className="main-name"> Ryan Rais</strong>
              </h1>
              {/* <TerrainViewer/> */}

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 700 }}>
             <Cube/>
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeBottom />
    </section>
  );
}

export default Home;
