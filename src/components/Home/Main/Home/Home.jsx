import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../../Geometry/Particules/Particle";
import HomeBottom from "../../HomeBottom/HomeBottom";
import Type from "../../Type/Type";
import WaveParticlesScene from "../../../Geometry/Particules/wave-particules";
import { Cube } from "../../../Geometry/Cube";
import TerrainViewer from "../../../Geometry/three_animation/Montain";
import RainEffect from "../../../Geometry/Cloud/Cloud";
import WavyText from "../../../About/Text/Awesome";
import ParticleAnimation from "../../../Geometry/Particules/WaveTube";
import { ButtonHome } from "../../../Button/ButtonHome";
import { motion, AnimatePresence } from "framer-motion";
import TelegramIcon from "@mui/icons-material/Telegram";
import ButtonBackgroundShine from "../../../Button/ButtonBackgroundShine";

function Home() {
  const [replay, setReplay] = React.useState(true);
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        {/* <ParticleAnimation /> */}
        <WaveParticlesScene />
        {/* <RainEffect/> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <WavyText text="Bonjour Bonsoir Je suis" replay={replay} />{" "}
              </h1>

              <h1 className="heading-name">
                {/* <WavyText text="Je suis" replay={replay} /> */}
                <strong className="main-name">
                  <WavyText text="Ryan Rais" replay={replay} />
                </strong>
              </h1>
              {/* <TerrainViewer/> */}

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ButtonHome Text={"Contact"} Icon={<TelegramIcon />} />
                <ButtonHome Text={"à propos"} Icon={<TelegramIcon />} />
                {/* <ButtonBackgroundShine/> */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 700 }}>
              <Cube />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeBottom />
    </section>
  );
}

export default Home;
