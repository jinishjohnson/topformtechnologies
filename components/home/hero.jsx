'use client';

import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const slides = [
    {
        prefix: "ERP & Inventory Systems",
        heading: "Efficient ERP &\nInventory\nManagement",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cta: "Contact Us",
        href: "/contact"
    },
    {
        prefix: "Data Analytics Solutions",
        heading: "Real-time Metrics &\nPerformance\nTracking",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
        cta: "Learn More",
        href: "/service"
    },
    {
        prefix: "Automated Workflows",
        heading: "Streamline Your\nBusiness\nProcesses",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
        cta: "Discover Features",
        href: "/topsoft-demo"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const container = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        // Fade in text for current slide
        if (textRef.current && textRef.current.children) {
            gsap.fromTo(
                textRef.current.children,
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" }
            );
        }
    }, { scope: container, dependencies: [currentSlide] });

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div ref={container} className="relative w-full h-screen min-h-[600px] overflow-hidden bg-gray-900 flex items-center">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <div className="absolute inset-0 bg-neutral-900/75 z-10"></div>
                    <img
                        src={slide.image}
                        alt="Hero background slide"
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
                <div className="max-w-2xl mx-auto sm:mx-0 text-center sm:text-left" ref={textRef}>
                    <div className="text-[#5CB3FF] font-thin tracking-wide mb-3 text-sm sm:text-lg">
                        {slides[currentSlide].prefix}
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal text-white leading-tight mb-8" style={{ whiteSpace: 'pre-line' }}>
                        {slides[currentSlide].heading}
                    </h1>
                    <div>
                        <Link
                            href={slides[currentSlide].href}
                            className="inline-block bg-blue-500 hover:bg-transparent text-white font-semibold px-6 py-3 rounded-full transition-colors border border-blue-500 hover:border-blue-500 cursor-pointer"
                        >
                            {slides[currentSlide].cta}
                        </Link>
                    </div>
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-blue-500/90 cursor-pointer text-white rounded-full transition-all"
                aria-label="Previous slide"
            >
                <svg className="w-5 h-5 pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-blue-500/90 cursor-pointer text-white rounded-full transition-all"
                aria-label="Next slide"
            >
                <svg className="w-5 h-5 pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white h-7" : "bg-white/50 hover:bg-white/80 h-5"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
