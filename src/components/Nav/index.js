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
            <h1>Phil Pepin</h1>
            <nav>
                <ul className="flex-row px-1">
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