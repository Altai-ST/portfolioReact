import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project4 from "../../Assets/Mtutor.png";
import emotion from "../../Assets/Projects/emotion.png";
import project3 from "../../Assets/project3.jpg";
import project1 from "../../Assets/project1.png";
import project5 from "../../Assets/MobileFix.png";
import project2 from "../../Assets/pomofocus.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="MaguwoHost"
              description="Web site layout for hosting. Made it in 2020 in a layout course. I was doing 9 hours a day at the time. I used regular css and html. "
              ghLink="https://github.com/Altai-ST/firsthtml.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Pomofocus"
              description="I made an analogue of pomofocus.io. Here I used react + redux. Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo. "
              ghLink="https://github.com/Altai-ST/pomofocus.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Spectro"
              description="Online electronics store. I made it for my term paper. Used react, redux-toolkit, java spring boot, tailwind. I did all the layout myself, the team helped with the backend."
              ghLink="https://github.com/Altai-ST/spectro.git"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="MTutor"
              description="This project was the final one in the course. The site was made for students and teachers. It included a review of teachers' resumes, creating a teacher's schedule. Course catalog, personal accounts of students and teachers. Page for administration "
              ghLink="https://github.com/Altai-ST/Mtutor.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="MobileFix"
              description="My first term paper using react. The site was made for phone repair. It had five roles. Such as: repairman, vendor, customer, employee, admin. "
              ghLink="https://github.com/Altai-ST/MobileFix.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
