import React from "react";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
            <div className ="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
               <h1 className="tracking-tight font-bold text-xl">my portfolio</h1>
               <nav className="space-x-6 hover:text-indigo-400 transition">
                   <a href="#home">home</a>
                   <a href="#about">about</a>
                   <a href="#about">projects</a>
                   <a href="#about">skills</a>
                   <a href="#about">contact</a>
                </nav>
            </div>
            
        </header>
    );
}

export default Header;