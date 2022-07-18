import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <a href="https://www.github.com/ppepin34" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
            <a href="https://www.linkedin.com/in/philip-pepin/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
            <a href="https://stackoverflow.com/users/17844247/ppepin34" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faStackOverflow} size="2xl" />
            </a>
        </footer>
    )
}

export default Footer;