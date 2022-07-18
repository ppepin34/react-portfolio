import React from "react";

function Resume() {
    return (
        <div>
            <h2>Resume</h2>

            <a href="https://drive.google.com/file/d/1YENmMd7LVaoaFYYmqSxkMYWAAyhQpR7-/view?usp=sharing" target="_blank" rel="noreferrer">
                My resume is available for viewing and download as a pdf here.
            </a>

            <h3>Front-End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-End Proficiencies</h3>
            <ul>
                <li>Express.JS</li>
                <li>Node.JS</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>APIs (Including REST and GraphQL)</li>
            </ul>
        </div>
    )
}

export default Resume;