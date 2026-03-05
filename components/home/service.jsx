"use client";
// only for this section i add a parallex GSAP scroll which i know.i didnt include in other sections.
import React, { useRef } from 'react';
import data from '../../data.json';
import Link from 'next/link';
import LottieAnimationMbl from '../LottieMbl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const serviceData = data.service;
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const lottieRef = useRef(null);

    useGSAP(() => {
        gsap.to(textRef.current, {
            y: -80,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to(lottieRef.current, {
            y: 80,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom top",
                scrub: 1
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full py-20 lg:py-32 bg-gray-50 overflow-hidden" id="service">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div ref={textRef} className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left order-2 lg:order-2">
                        <div className="inline-block mb-4">
                            <span className="bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">
                                {serviceData.badge}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6" style={{ whiteSpace: 'pre-line' }}>
                            {serviceData.title} <span className="text-blue-600">{serviceData.titleHighlight}</span>
                        </h2>
                        <p className="text-md text-gray-600 mb-2 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {serviceData.description}
                        </p>
                        <p className="text-md text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {serviceData.description2}
                        </p>
                        <div>
                            <Link
                                href={serviceData.cta.href}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                {serviceData.cta.text}
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                        </div>
                    </div>


                    <div ref={lottieRef} className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-1 h-auto min-h-[400px]">
                        <LottieAnimationMbl />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Service;