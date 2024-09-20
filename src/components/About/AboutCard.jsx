import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour , Je suis <span className="purple">Ryan Rais </span>
            et je viens de <span className="purple"> Paris en France.</span>
            <br />
            Je suis actuellement employé en tant qu'apprentis NetDevops sécurité chez Exaprobe
            <br />
       
            <br />
            <br />
            Mettons de coté l'informatique je suis également passionné par
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Géopolitique/Histoire
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyage
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Cinéma
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ryan Rais</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
