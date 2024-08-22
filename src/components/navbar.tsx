"use client";
import { useState } from "react";
import Link from 'next/link';
import React from 'react'

const navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                        <div className="flex-shrink-0">
                            <img className="h-8" src="/portfolio.png" alt="Logo" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-gray-800 transition ease-in-out delay-120 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link href="/about" className="text-gray-800 transition ease-in-out delay-120 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                                <Link href="/services" className="text-gray-800 transition ease-in-out delay-120 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                                <Link href="/contact" className="text-gray-800 transition ease-in-out delay-120 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden transition ease-in-out delay-120" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/" className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link href="/about" className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link href="/services" className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                        <Link href="/contact" className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default navbar