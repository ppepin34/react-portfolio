import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Footer() {
    return (
        <footer>
            <Container>
                <Row className="justify-content-center">
                    <Col className="justify-content-center text-center">
                        <a href="https://www.github.com/ppepin34" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2xl" />
                        </a>
                    </Col>
                    <Col className="justify-content-center text-center">
                        <a href="https://www.linkedin.com/in/philip-pepin/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                        </a>
                    </Col>
                    <Col className="justify-content-center text-center">
                        <a href="https://stackoverflow.com/users/17844247/ppepin34" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faStackOverflow} size="2xl" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;