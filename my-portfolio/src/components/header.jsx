import React from "react";

function Header() {
    return (
        <header className="bg-gray-900 text-white p-4 text-center text-2xl font-bold">
            <h1>my portfolio</h1>
            <nav>
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#about">projects</a>
                <a href="#about">skills</a>
                <a href="#about">contact</a>
            </nav>
        </header>
    );
}

export default Header;