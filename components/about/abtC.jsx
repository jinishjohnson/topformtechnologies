"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import data from "../../data.json";
import Title from "../Title";

gsap.registerPlugin(ScrollTrigger);

const AbtC = () => {
    const abtC = data.about.abtC;

    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const btnsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image parallax — slides up as you scroll into view
            gsap.fromTo(
                imageRef.current,
                { y: 80, opacity: 0, scale: 1.05 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: 1,
                    },
                }
            );

            // Subtle floating parallax on the image as you continue scrolling
            gsap.to(imageRef.current, {
                y: -40,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Text elements stagger in from the right
            const textEls = [
                badgeRef.current,
                titleRef.current,
                descRef.current,
                btnsRef.current,
            ].filter(Boolean);

            gsap.fromTo(
                textEls,
                { x: 60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={sectionRef} className='py-20 lg:py-32 bg-white relative overflow-hidden'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>

                    {/* Image — parallax target */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative overflow-hidden group">
                            <img
                                ref={imageRef}
                                src={abtC.img.src}
                                alt={abtC.img.alt}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Text — stagger slide-in */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                        <div ref={badgeRef} className="mb-4 lg:text-left flex justify-center lg:justify-start">
                            <span className="bg-blue-50 text-blue-600 font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">
                                {abtC.badge}
                            </span>
                        </div>
                        <div ref={titleRef} className='flex justify-center lg:justify-start'>
                            <Title titleText={abtC.title} />
                        </div>
                        <p ref={descRef} className="text-md text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-4">
                            {abtC.description}
                        </p>
                        <div ref={btnsRef} className='flex gap-4 justify-center lg:justify-start'>
                            <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                                Contact Us
                            </button>
                            <button className="px-8 py-3 rounded-full bg-gray-100 text-gray-900 font-bold shadow-md hover:bg-gray-200 hover:-translate-y-1 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AbtC;