"use client";
import { useState } from "react";
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current path

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getLinkClass = (path: any) => {
        return pathname === path
            ? "bg-slate-600 text-white hover:bg-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            : "text-slate-600 hover:bg-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
    };

    return (
        <nav className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/" className={getLinkClass("/")}>Home</Link>
                                <Link href="/about" className={getLinkClass("/about")}>About</Link>
                                <Link href="/projects" className={getLinkClass("/projects")}>Projects</Link>
                                <Link href="/contact" className={getLinkClass("/contact")}>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden transition ease-in-out delay-120" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/" className={getLinkClass("/") + 'block'}>Home</Link>
                        <Link href="/about" className={getLinkClass("/about") + 'block'}>About</Link>
                        <Link href="/projects" className={getLinkClass("/projects") + 'block'}>Projects</Link>
                        <Link href="/contact" className={getLinkClass("/contact") + 'block'}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
