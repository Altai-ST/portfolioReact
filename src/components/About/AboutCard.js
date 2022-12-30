import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="anime-font">Stamov Altai </span>
            from <span className="anime-font"> Bishkek, Kyrgyzstan.</span>
            <br />I am a student pursuing a degree in{" "}
            <span className="anime-font">Software Technology</span> at{" "}
            <span className="anime-font">INAI</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading manga and ranobe
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A logical, optimal solution exists in any wartime situation,
            no matter how difficult the challenge. You must not forget that,
            especially in times of confusion when you might feel inclined
            to recklessness."{" "}
          </p>
          <footer className="blockquote-footer">Ogai Mori</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
