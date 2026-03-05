"use client"
import React, { useState } from "react";
import Title from "../Title";

const MapSection = () => {
    const [activeLocation, setActiveLocation] = useState(0);

    const locations = [
        {
            name: "Dubai - Head Office",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.351513477489!2d55.2474327!3d25.1576061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bdbd255bc7f%3A0xe02e9fe83d7c4bc0!2sTopform%20Technologies%20LLC.%20Head%20Office%20-%20Dubai!5e0!3m2!1sen!2sae!4v1772709629575!5m2!1sen!2sae",
        },
        {
            name: "Sharjah Office",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.7466695240073!2d55.4007382!3d25.346280500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bd54c8b3ebd%3A0x77dc62a3d0ecd983!2sTOPFORM%20TECHNOLOGIES%20L.L.C%20-%20SHJ.%20BR!5e0!3m2!1sen!2sae!4v1772710431858!5m2!1sen!2sae",
        },
        {
            name: "Abu Dhabi Office",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.8242595140855!2d54.4992186!3d24.352613700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40ea85933661%3A0x562443f7db1cadea!2sAl%20Jazzeem%204%20St%20-%20Musaffah%20-%20Musaffah%20Industrial%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1772710539807!5m2!1sen!2sae",
        },
    ];

    return (
        <section className="w-full bg-gray-50 py-16 px-6 md:px-16">


            <div className="w-full flex flex-col items-center mb-12">
                <Title titleText="Our" titleHighlight="Locations" />
            </div>


            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {locations.map((location, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveLocation(index)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${activeLocation === index
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-white text-gray-600 border border-gray-300 hover:bg-blue-50"
                            }`}
                    >
                        {location.name}
                    </button>
                ))}
            </div>


            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <iframe
                    src={locations[activeLocation].map}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                ></iframe>
            </div>
        </section>
    );
};

export default MapSection;