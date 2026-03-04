'use client';
import { useState } from 'react';
import Link from 'next/link';
import data from '../data.json';

export default function Navbar() {
    const { navbar } = data;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-blue-500/70 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-transform">
                            <img src="/logo_web_dark.png" alt="Logo" width="150" height="150" />
                        </Link>
                    </div>
                    <div className="hidden md:flex flex-1 justify-center space-x-8">
                        {navbar.links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-white px-3 py-2 rounded-full text-sm font-medium transition-colors hover:bg-blue-500/70 hover:backdrop-blur-lg hover:rounded-full hover:transition-all hover:duration-600 hover:shadow-lg hover:shadow-blue-500/30"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden md:flex flex-shrink-0 items-center">
                        <Link
                            href={navbar.cta.href}
                            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            {navbar.cta.text}
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors p-2"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out border-b border-gray-200 ${isMobileMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
                <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
                    {navbar.links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 mt-2 border-t border-gray-100">
                        <Link
                            href={navbar.cta.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
                        >
                            {navbar.cta.text}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
