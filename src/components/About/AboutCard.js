import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Dhruvin Dabhi</span> from{" "}
            <span className="purple">Ahmedabad, India</span>.
            <br />
            I am in the business of supplying <span className="purple"> building materials</span>,
            including <span className="purple"> upvc/PVC/cpvc pipe fittings, bathroom fixtures , sanitarywares and construction chemicles

            </span>, and provide services in{" "}
            <span className="purple">renovation works and construction chemicals</span>.
            <br />
            I am dealing in brands like <span className="purple">CERA, JAQUAR, ESSCO, BAFIT, ACURA, LEO TAPS AND FITTINGS</span>.
            <br />
            My work focuses on delivering <span className="purple">reliable and high-quality solutions</span>
            for both <span className="purple">residential and commercial projects</span>.
            <br />
            <br />
            I am also the author of <span className="purple">Half Story Half Goodbye</span>, a{" "}
            <span className="purple">published creative work</span> that explores emotions, relationships,
            and unexpected moments in life. The book reflects real-world experiences through expressive
            storytelling and relatable narratives, creating a deep connection with readers.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
