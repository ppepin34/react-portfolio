import React, { useState } from "react";
import Portfolio from "../Portfolio";

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
            {projects.map((projects, id) => (
                <Portfolio
                    project={projects}
                    key={"project" + id}
                />
            ))}
        </div>
    )
}

export default Project;