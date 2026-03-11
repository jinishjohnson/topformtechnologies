'use client';
import { useState } from 'react';
import Link from 'next/link';
import data from '../data.json';

export default function Navbar() {
    const { navbar } = data;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-[#091e57] ">
            <div className="max-w-7xl mx-auto px-4 max-sm:px-2 max-lg:px-6 py-0">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-transform">
                            <img src="/logo_web_dark.png" alt="Logo" width="150" height="150" />
                        </Link>
                    </div>
                    <div className="hidden md:flex flex-1 justify-center space-x-8">
                        {navbar.links.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="text-white hover:text-white px-3 py-2 rounded-full text-sm font-medium transition-colors hover:bg-blue-500/70 hover:backdrop-blur-lg hover:rounded-full hover:transition-all hover:duration-600 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.sublinks && (
                                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    )}
                                </Link>
                                {link.sublinks && (
                                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2">
                                        <div className="py-2 relative z-50 rounded-md bg-white">
                                            {link.sublinks.map((sublink) => (
                                                <Link
                                                    key={sublink.name}
                                                    href={sublink.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                >
                                                    {sublink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
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
                            className="text-white hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors p-2"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out border-b border-gray-200 ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100 visible overflow-y-auto' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
                <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
                    {navbar.links.map((link) => (
                        <div key={link.name} className="space-y-1">
                            <Link
                                href={link.href}
                                onClick={() => !link.sublinks && setIsMobileMenuOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${link.sublinks ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
                            >
                                {link.name}
                            </Link>
                            {link.sublinks && (
                                <div className="pl-6 pb-2 space-y-1">
                                    {link.sublinks.map((sublink) => (
                                        <Link
                                            key={sublink.name}
                                            href={sublink.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                        >
                                            {sublink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
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
