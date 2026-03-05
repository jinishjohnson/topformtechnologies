"use client";

import React, { useRef, useState } from 'react';
import data from '../../data.json';

const MService = () => {
    const scrollWrapperRef = useRef(null);
    const [activeCard, setActiveCard] = useState(null);

    const { badge, titleText, titleHighlight, cards } = data.mService;

    const scrollLeft = () => {
        if (scrollWrapperRef.current) {
            scrollWrapperRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollWrapperRef.current) {
            scrollWrapperRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full py-20 lg:py-32 bg-white flex flex-col justify-center overflow-hidden relative" id="m_service">
            <div className="w-full px-8 md:px-16 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
                <div>
                    <span className="bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
                        {badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        {titleText} <span className="text-blue-600"> {titleHighlight}</span>
                    </h2>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={scrollLeft}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300 text-gray-600"
                        aria-label="Scroll Left"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300 text-gray-600"
                        aria-label="Scroll Right"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <div
                ref={scrollWrapperRef}
                className="flex flex-row flex-nowrap items-center px-8 md:px-16 gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => setActiveCard(card)}
                        className="snap-start relative w-[300px] md:w-[400px] h-[400px] flex-shrink-0 bg-white border border-gray-100 rounded-3xl p-8 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <span className="text-2xl font-bold">{card.id}</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-3">{card.desc}</p>
                            <div className="w-12 h-1 bg-gray-200 rounded-full mt-6 group-hover:bg-blue-600 transition-colors duration-300 transform origin-left group-hover:scale-x-150"></div>
                        </div>
                    </div>
                ))}
            </div>

            {activeCard && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                >
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                        onClick={() => setActiveCard(null)}
                    ></div>

                    <div className="relative w-full max-w-5xl h-auto min-h-[50vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-all z-10">
                        <button
                            onClick={() => setActiveCard(null)}
                            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-white z-20 order-2 md:order-1">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold">{activeCard.id}</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{activeCard.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">
                                {activeCard.desc}
                            </p>
                            <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-10"></div>
                        </div>

                        <div className="w-full md:w-1/2 min-h-[300px] h-full relative bg-gray-100 order-1 md:order-2">
                            <img
                                src={activeCard.image || "/assets/mbl.png"}
                                alt={activeCard.title}
                                className="w-full h-full object-cover absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MService;