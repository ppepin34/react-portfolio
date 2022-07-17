import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Portfolio({ project }) {
    const { name, github, deploy } = project
    return (
        <section>
            <h2>Portfolio</h2>
            <div>
                <div>
                    <h3>{name}</h3>
                    <img
                        src={require(`../../assets/portfolio/${id}.jpg`).default}
                        alt={name}
                        key={name}
                    />
                    <a href={deploy} target="_blank">Deployed application</a>
                    <a href={`https://github.com/ppepin34/${github}`}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>

        </section >
    )
}

export default Portfolio;