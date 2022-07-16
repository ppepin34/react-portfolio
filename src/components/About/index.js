import React from "react";
import portrait from "../../assets/portrait.jpg";

function About() {
    return(
        <section>
            <h1 id="about">Who am I?</h1>
            <img src={portrait} />
            <div>
                <p>
                Full stack web developer with a background in history and education from Virginia Commonwealth University. Recently earned a certificate in full stack web development through the University of Richmond and Trilogy Education, developing skills with JavaScript, CSS, Express.JS, Node.JS, and responsive web design. Possessed with a passion for creating applications that focus on solving real problems for users with intuitive UI. Also equipped with management, scheduling, and creative experience. 
                </p>
            </div>
        </section>
    )
}

export default About;