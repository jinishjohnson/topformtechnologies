import React from 'react';
import Link from 'next/link';
import data from '../../data.json';

const About = () => {
    const { about } = data;
    return (
        <section className="w-full py-20 lg:py-32 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
                        <div className="inline-block mb-4">
                            <span className="bg-blue-50 text-blue-600 font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">
                                {about.badge}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6" style={{ whiteSpace: 'pre-line' }}>
                            {about.title} <span className="text-blue-500">{about.titleHighlight}</span>
                        </h2>
                        <p className="text-md text-gray-600 mb-2 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {about.description}
                        </p>
                        <p className="text-md text-gray-600 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {about.description2}
                        </p>
                        <div>
                            <Link
                                href={about.cta.href}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                {about.cta.text}
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                        </div>
                    </div>


                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <div className="absolute -inset-4 opacity-20 group-hover:opacity-30 blur-lg transition duration-500"></div>

                            <img
                                src={about.image.src}
                                alt={about.image.alt}
                                className="relative z-10 w-full h-auto max-h-[500px] object-contain rounded-3xl transform transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/40 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-[90%] sm:w-max mb-6">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                    {about.services.map((service) => (
                                        <div key={service.id} className="flex items-center gap-3 group/icon cursor-pointer">
                                            <div
                                                className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 transition-all duration-300 group-hover/icon:bg-blue-600 group-hover/icon:text-white group-hover/icon:shadow-md"
                                                dangerouslySetInnerHTML={{ __html: service.iconSvg }}
                                            />
                                            <div>
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
    );
};

export default About;