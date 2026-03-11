import React from 'react'
import data from "../../data.json";
import Title from "../Title";

const AbtC = () => {
    const abtC = data.about.abtC;
    return (
        <main className='py-20 lg:py-32 bg-white relative overflow-hidden'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
                    <div className="w-full lg:w-1/2">
                        <div className="relative overflow-hidden  group">
                            <img src={abtC.img.src} alt={abtC.img.alt} className="w-full h-auto object-contain  transform transition duration-700 " />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                        <div className="mb-4 lg:text-left flex justify-center lg:justify-start">
                            <span className="bg-blue-50 text-blue-600 font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">
                                {abtC.badge}
                            </span>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Title titleText={abtC.title} />
                        </div>
                        <p className="text-md text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-4">
                            {abtC.description}
                        </p>
                        <div className='flex gap-4 justify-center lg:justify-start'>
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
    )
}

export default AbtC;