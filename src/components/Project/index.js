import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
    ]);

    return (
        <div>
            {projects.map((project, i) => (
                <div>
                    <h3>{project.name}</h3>
                    <img
                        src={require(`../../assets/portfolio/${i}.jpg`).default}
                        alt={project.name}
                        key={project.name}
                    />
                    <a href={project.deploy} target="_blank">Deployed application</a>
                    <a href={`https://github.com/ppepin34/${project.github}`}>
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Project;