'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { motion } from "motion/react"

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

    // Touch handlers for swipe
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);
    const touchEndX = useRef(null);
    const touchEndY = useRef(null);

    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
        touchEndX.current = null;
        touchEndY.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
        touchStartY.current = e.targetTouches[0].clientY;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
        touchEndY.current = e.targetTouches[0].clientY;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;

        const distanceX = touchStartX.current - touchEndX.current;
        const distanceY = touchStartY.current - touchEndY.current;

        const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);
        // We use window width for a mobile check
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

        if (isMobile && isHorizontalSwipe) {
            // Left swipe -> next
            if (distanceX > minSwipeDistance) nextSlide();
            // Right swipe -> prev
            if (distanceX < -minSwipeDistance) prevSlide();
        } else if (!isMobile && !isHorizontalSwipe) {
            // Up swipe -> next
            if (distanceY > minSwipeDistance) nextSlide();
            // Down swipe -> prev
            if (distanceY < -minSwipeDistance) prevSlide();
        }
    };

    useGSAP(() => {
        // Fade in text for current slide
        if (textRef.current && textRef.current.children) {
            gsap.fromTo(
                textRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" }
            );
        }
    }, { scope: container, dependencies: [currentSlide] });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div
            ref={container}
            className="relative w-full h-[650px] min-h-[650px] overflow-hidden bg-gray-900 flex items-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Background Slides Container */}
            <div className="absolute inset-0 z-0">
                <div
                    className="h-full w-full transition-transform duration-1000 ease-in-out flex flex-row sm:flex-col translate-x-[var(--slide-offset)] sm:translate-x-0 sm:translate-y-[var(--slide-offset)]"
                    style={{ '--slide-offset': `-${currentSlide * 100}%` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="relative h-full w-full shrink-0">
                            <div className="absolute inset-0 bg-neutral-900/75 z-10"></div>
                            <img
                                src={slide.image}
                                alt="Hero background slide"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 pointer-events-none">
                <div className="max-w-7xl mx-auto sm:mx-0 text-center sm:text-left pointer-events-auto" ref={textRef}>
                    <div className="text-[#5CB3FF] font-thin tracking-wide mb-3 text-sm sm:text-lg">
                        {slides[currentSlide].prefix}
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold  text-white leading-tight mb-8" style={{ whiteSpace: 'pre-line' }}>
                        {slides[currentSlide].heading}
                    </h1>
                    <div>
                        <motion.button
                            href={slides[currentSlide].href}
                            className="inline-block bg-transparent hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition-all border-blue-500 border-2 hover:border-blue-500 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {slides[currentSlide].cta}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Responsive Navigation buttons */}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-auto sm:left-auto sm:right-6 sm:top-1/2 sm:translate-x-0 sm:-translate-y-1/2 z-30 flex flex-row sm:flex-col items-center gap-4 sm:gap-3 pointer-events-auto">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-blue-500/90 cursor-pointer text-white rounded-full transition-all shrink-0"
                    aria-label="Previous slide"
                >
                    {/* Left arrow (mobile) */}
                    <svg className="w-5 h-5 sm:hidden pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    {/* Up arrow (desktop) */}
                    <svg className="w-5 h-5 hidden sm:block mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg>
                </motion.button>

                <div className="flex flex-row sm:flex-col gap-2 sm:gap-2.5 mx-1 sm:mx-0 sm:my-2">
                    {slides.map((_, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setCurrentSlide(index)}
                            className={`rounded-full transition-all duration-300 ${index === currentSlide
                                ? "bg-white w-2 h-2 sm:h-2.5 sm:w-2.5"
                                : "bg-white/50 hover:bg-white/80 w-2 h-2 sm:h-2.5 sm:w-2.5"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <motion.button
                    onClick={nextSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/60 hover:bg-blue-500/90 cursor-pointer text-white rounded-full transition-all shrink-0"
                    aria-label="Next slide"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {/* Right arrow (mobile) */}
                    <svg className="w-5 h-5 sm:hidden pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    {/* Down arrow (desktop) */}
                    <svg className="w-5 h-5 hidden sm:block mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </motion.button>
            </div>
        </div>
    );
}
