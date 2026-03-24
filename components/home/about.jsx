"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../LanguageContext';
import Image from 'next/image';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const About = () => {

    const { lang, t } = useLanguage();
    const about = t?.about || {};
    const isRtl = lang === 'ar';

    const containerRef = useRef(null);
    const bgRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        if (!about) return;

        gsap.fromTo(containerRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        if (bgRef.current) {
            gsap.to(bgRef.current, {
                y: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

        if (imageRef.current) {
            gsap.to(imageRef.current, {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }

    }, { scope: containerRef, dependencies: [about] });

    if (!about || !about.badge) return null;

    return (
        <>
            <section ref={containerRef} className="w-full py-20 lg:py-32 bg-white relative overflow-hidden" id="about">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex relative z-[1] flex-col lg:flex-row items-center gap-16">
                        {/* Decorative background image */}
                        {about.imgBg && (
                            <div ref={bgRef} className={`absolute z-[-1] opacity-20 -top-10 ${isRtl ? 'left-0.5' : 'right-0.5'} w-full`}>
                                <Image width={500} height={500} src={about.imgBg.src} alt={about.imgBg.alt} className="w-[320px] h-[320px]  translate-y-10 object-contain" />
                            </div>
                        )}

                        {/* Content Column */}
                        <div className={`w-full lg:w-1/2 flex flex-col justify-center text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'} order-2 lg:order-1`}>
                            <div className="inline-block mb-4">
                                <span className="bg-blue-50 text-blue-600 font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">
                                    {about.badge}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6" style={{ whiteSpace: 'pre-line' }}>
                                {about.title} <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">{about.titleHighlight}</span>
                            </h2>
                            <p className="text-md text-gray-600 mb-2 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {about.description}
                            </p>
                            <p className="text-md text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {about.description2}
                            </p>
                            <div>
                                <Link
                                    href={about.cta?.href || "#"}
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    {about.cta?.text}
                                    <svg className={`w-5 h-5 transition-transform duration-300 ${isRtl ? 'mr-2 -ml-1 rotate-180 group-hover:-translate-x-1' : 'ml-2 -mr-1 group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <div ref={imageRef} className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <div className="absolute -inset-4 bg-linear-to-r from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                                {about.image && (
                                    <Image
                                        width={500}
                                        height={500}
                                        src={about.image.src}
                                        alt={about.image.alt}
                                        className="relative z-10 w-full h-auto max-h-[500px] object-cover rounded-3xl transform transition duration-700 group-hover:scale-105"
                                    />
                                )}

                                {/* Floating Services Card */}
                                <div className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/40 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-[90%] sm:w-max mb-6">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                        {about.services && about.services.map((service) => (
                                            <div key={service.id} className="flex items-center gap-3 group/icon cursor-pointer">
                                                <div
                                                    className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 transition-all duration-300 group-hover/icon:bg-blue-600 group-hover/icon:text-white group-hover/icon:shadow-md"
                                                    dangerouslySetInnerHTML={{ __html: service.iconSvg }}
                                                />
                                                <div className={isRtl ? 'text-right' : 'text-left'}>
                                                    <h4 className="text-sm font-bold text-gray-900 leading-tight">{service.title}</h4>
                                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">{service.subtitle}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;