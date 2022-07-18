import React from "react";
import portrait from "../../assets/portrait/portrait.jpg";
import { Container } from 'react-bootstrap';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function About() {
    return (
        <section>
            <Container>
                <Col>
                    <Row className="justify-content-center">
                        <Col sm={8} className="text-center">
                            <h2 id="about">
                                This is not the greatest dev in the world...<br />
                                No, this is just a tribute.
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="text-center"> <img src={portrait} style={{ maxWidth: 336 }} alt="Photograph of Phil Pepin" /> </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <div>
                            <p>
                                Full stack web developer with a background in history and education from Virginia Commonwealth University. <br />Recently earned a certificate in full stack web development through the University of Richmond and Trilogy Education, developing skills with JavaScript, SQL, NoSQL, Express.JS, Node.JS, React.JS, and responsive web design. <br />
                                Possessed with a passion for creating applications that focus on solving real problems for users with intuitive UI. Also equipped with management, scheduling, and creative experience.
                            </p>
                        </div>
                    </Row>
                </Col>
            </Container>
        </section>
    )
}

export default About;