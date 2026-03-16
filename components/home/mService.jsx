"use client";

import React, { useState, useRef, useEffect } from 'react';
import data from '../../data.json';
import { useLanguage } from '../LanguageContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MService = () => {
    const { lang, t } = useLanguage();
    const serviceData = t?.mService || data.mService;
    const { badge, titleText, titleHighlight, cards } = serviceData;

    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedService, setSelectedService] = useState(null);
    const gridRef = useRef(null);
    const modalRef = useRef(null);

    // GSAP Entry Animation for cards
    useGSAP(() => {
        gsap.fromTo(".service-card", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
        );
    }, [visibleCount]);

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, cards.length));
    };

    const openModal = (service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                setSelectedService(null);
                document.body.style.overflow = 'auto';
            }
        });
        tl.to(modalRef.current, { opacity: 0, scale: 0.9, duration: 0.3, ease: "power2.in" });
    };

    useGSAP(() => {
        if (selectedService && modalRef.current) {
            gsap.fromTo(modalRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
            );
        }
    }, [selectedService]);

    return (
        <section className="w-full py-20 lg:py-32 bg-white relative overflow-hidden" id="m_service">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <span className="bg-blue-100/50 text-blue-600 font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] mb-4 inline-block border border-blue-200/30">
                        {badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
                        {titleText} 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            {titleHighlight}
                        </span>
                    </h2>
                </div>

                {/* Card Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {cards.slice(0, visibleCount).map((card) => (
                        <div
                            key={card.id}
                            onClick={() => openModal(card)}
                            className="service-card group cursor-pointer bg-gray-50/50 hover:bg-white border border-gray-100 hover:border-blue-500/30 rounded-[2rem] p-8 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] flex flex-col justify-between min-h-[320px] relative overflow-hidden active:scale-[0.98]"
                        >
                            {/* Card Decoration */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-colors"></div>
                            
                            <div className="relative z-10 font-black text-5xl text-blue-600/10 group-hover:text-blue-600/20 transition-colors mb-4 rtl:text-right">
                                {card.id < 10 ? `0${card.id}` : card.id}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors rtl:text-right line-clamp-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm line-clamp-3 rtl:text-right mb-8">
                                    {card.desc}
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-3 text-blue-600 font-bold text-sm">
                                <span className="underline underline-offset-4 decoration-2 decoration-blue-600/30 group-hover:decoration-blue-600 transition-all uppercase tracking-wider">
                                    {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                                </span>
                                <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < cards.length && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="group flex flex-col items-center gap-3 text-gray-400 hover:text-blue-600 transition-all duration-300"
                        >
                            <span className="font-bold text-sm uppercase tracking-[0.3em]">
                                {lang === 'ar' ? 'تحميل المزيد' : 'Load More'}
                            </span>
                            <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                )}
            </div>

            {/* Premium Detail Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-gray-950/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-500"
                        onClick={closeModal}
                    ></div>

                    {/* Modal Content */}
                    <div 
                        ref={modalRef}
                        className="relative w-full max-w-5xl rounded-[3rem] bg-white overflow-hidden shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row h-auto max-h-[90vh] lg:h-[600px] border border-white/20"
                    >
                        {/* Image Preview Container */}
                        <div className="w-full lg:w-1/2 h-[300px] lg:h-full relative overflow-hidden bg-gray-100">
                            <img
                                src={selectedService.image || "/assets/mbl.png"}
                                alt={selectedService.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 via-transparent to-transparent"></div>
                            <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white font-bold text-sm">
                                0{selectedService.id}
                            </div>
                        </div>

                        {/* Details Container */}
                        <div className="w-full lg:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-center bg-white overflow-y-auto">
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 lg:top-8 lg:right-8 w-12 h-12 bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-2xl flex items-center justify-center transition-all duration-300 group shadow-sm active:scale-90"
                            >
                                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-3 mb-8 rtl:flex-row-reverse">
                                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                                <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{lang === 'ar' ? 'تفاصيل الخدمة' : 'Service Details'}</span>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight rtl:text-right">
                                {selectedService.title}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed rtl:text-right mb-10">
                                {selectedService.desc}
                            </p>

                            <button className="group/btn flex items-center justify-center gap-4 bg-gray-900 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-500 shadow-xl shadow-gray-200 hover:shadow-blue-200 active:scale-95 rtl:flex-row-reverse">
                                <span>{lang === 'ar' ? 'تواصل معنا الآن' : 'Connect with Experts'}</span>
                                <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform rtl:rotate-180 rtl:group-hover/btn:-translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MService;