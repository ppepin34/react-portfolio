import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Project() {

    // list of projects to be rendered
    const [projects] = useState([
        {
            name: 'Belize National Fire Service',
            github: 'fire-dept',
            deploy: 'https://belize-fire-dept.herokuapp.com/'
        },
        {
            name: 'Coding Quiz',
            github: 'coding-quiz',
            deploy: 'https://ppepin34.github.io/coding-quiz/'
        },
        {
            name: 'Weather Dashboard',
            github: 'weather-dashboard',
            deploy: 'https://ppepin34.githhub.io/weather-dashboard'
        },
        {
            name: 'Work Day Scheduler',
            github: 'work-day-scheduler',
            deploy: 'https://ppepin34.github.io/work-day-scheduler/'
        },
        {
            name: 'Note Taker',
            github: 'note-taker',
            deploy: 'https://express-challenge-ppp.herokuapp.com/'
        },
        {
            name: 'MongoDB Social Media Back-end',
            github: 'mongo-social-media-challenge',
            deploy: 'https://youtu.be/fHjsdPPgswc'
        }
    ]);

    return (
        <div>
            {projects.map((project) => (
                <div>
                    <Container>
                        <Row>
                            <h3 className="m-1">{project.name}</h3>
                        </Row>
                        <Row>
                            <img
                                src={require(`../../assets/portfolio/${project.github}.jpg`)}
                                alt={project.name}
                                key={project.name}
                                className="m-1 project-border"
                            />
                        </Row>
                        <Row>
                            <Col className="text-center m-1"> <a href={project.deploy} target="_blank" rel="noreferrer">Deployed application  </a> </Col>
                            <Col className="text-center m-1">
                                <a href={`https://github.com/ppepin34/${project.github}`} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                                </a>
                            </Col>
                        </Row>
                </Container>
                </div>
    ))
}
        </div >
    )
}

export default Project;