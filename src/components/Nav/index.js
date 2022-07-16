import React from "react";

function Nav() {
    return (
        <header>
            <h2>
                <a data-testid='link' href="/">
                    Phil Pepin
                </a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a data-testid='about' href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                            <span>Portfolio</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;