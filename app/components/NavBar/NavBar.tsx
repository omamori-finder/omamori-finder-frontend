"use client"
import { useState, useEffect } from "react";
import Filter from "../Filter";

const NavBar = () => {
    // md menu
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    const toggleMenuPopup = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    // filter search
    const [filterIsOpen, setFilterIsOpen] = useState(false);

    const toggleFilterPopup = () => {
        setFilterIsOpen(!filterIsOpen);
    };

    /* 
    handle resize to md 
    when screen size is more than or equal to 768px, close the menu if open 
    when screen size is less than or equal to 768px, close the filter (menu) if open
    */
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setMenuIsOpen(false);
        } else if (window.innerWidth < 768) {
            setFilterIsOpen(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <div className="sticky top-0 right-0 z-[99999]">
            <nav className="bg-white w-full flex justify-between user-select-none px-10 pt-6 mb-6 items-center">
                <div>
                    <a href="/">Omamori Finder</a>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <svg width="16" height="16" viewBox="0 0 16 16" onClick={toggleFilterPopup}>
                        <path d="M6.38 0A6.3 6.3 0 000 6.23a6.3 6.3 0 006.38 6.24c1.26 0 2.43-.36 3.41-.97L14.4 
                        16l1.6-1.56-4.55-4.43a6.1 6.1 0 001.31-3.78A6.3 6.3 0 006.38 0zm0 1.47c2.7 0 4.88 2.12 4.88 4.76A4.82 
                        4.82 0 016.38 11 4.82 4.82 0 011.5 6.23a4.82 4.82 0 014.88-4.76z" fill="currentColor"/>
                    </svg>
                    <a className="hover:underline" href="/about">About</a>
                    <a className="hover:underline" href="/login">Login</a>
                </div>
                <div  className="md:hidden" onClick={toggleMenuPopup}>
                    <svg width="24" height="24" viewBox="0 0 55 16">
                        <path fill="currentColor" d="M0 3h55V0H0zM0 16h55v-3H0z"></path>
                    </svg>
                </div>
            </nav>

            {/* Toggling menu on mobile screens */}
            {menuIsOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 p-8 bg-[var(--background)] flex items-center justify-left text-[var(--filter-text-color)] w-full">
                    <div className="fixed top-8 right-10 flex items-center space-x-4">
                        <div onClick={toggleMenuPopup}>
                            <svg width="19" height="19" viewBox="0 0 19 19" className="text-[var(--filter-text-color)]">
                                <path fill="currentColor" d="M1 17L17 1l1.5 1.5L2.5 18.5z"></path>
                                <path fill="currentColor" d="M1.5 0l16.5 16.5-1.5 1.5L0 1.5z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={`flex flex-col items-left text-base text-menu w-full`}>
                        <Filter />
                        <a className="h-16 flex items-center hover:underline text-[var(--filter-text-color)]" href="/login">Login</a>
                        <a className="h-16 flex items-center hover:underline text-[var(--filter-text-color)]" href="/about">About</a>
                    </div>
                </div>
            )}

            {/* Toggling Filter on non-mobile screens */}
            {filterIsOpen && (
                <div>
                    <Filter />
                </div>
            )}
        </div>
    )
}

export default NavBar;