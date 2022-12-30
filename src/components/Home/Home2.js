import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/LogoAnime.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="intro">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love programming and don't intend to stop
              <br />
              <br />I am fluent in classic languages like
              <i>
                <b className="purple"> Javascript, Python, Java. </b>
              </i>
              <br />
              <br />
              My area of interest is creating new&nbsp;
              <i>
                <b className="purple">Web technologies and Products </b> as well
                as areas related to{" "}
                <b className="purple">Deep Learning and GameDev</b>
              </i>
              <br />
              <br />
              If possible, I plan to delve into{" "}
              <b className="purple">Node js </b> and then
              <i>
                <b className="purple"> GameDev.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid logoAnime" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Altai-ST"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
