import React, { useEffect } from "react";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = currentPage.name
    }, [currentPage]);

    return (
        <header>
            <h2>
                <a data-testid='link' href="/">
                    Phil Pepin
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {pages.map((page) => (
                        <li
                        className={`mx-1 ${
                            currentPage.name === page.name && 'navActive'
                            }`}
                        key={page.name}
                        >
                            <span onClick={() => {
                                setCurrentPage(page);
                            }} >
                                {page.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;