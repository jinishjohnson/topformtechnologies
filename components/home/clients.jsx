import React from 'react'
import Title from '../Title'

const clients = () => {
    const clientLogos = [
        '/assets/clients/set1.png',
        '/assets/clients/set2.png',
        '/assets/clients/set3.png',
        '/assets/clients/set4.png',
        '/assets/clients/set5.png',
        '/assets/clients/set6.png',
        '/assets/clients/set7.png',
    ];

    return (
        <section className='w-full bg-gray-50 flex flex-col items-start justify-start py-8 overflow-hidden'>
            <div className="px-8 md:px-16 w-full flex items-start justify-start mb-10">
                <Title titleText="Our" titleHighlight="Clients" />
            </div>

            <div className='w-full relative flex overflow-hidden group px-8 md:px-16 py-4'>
                <div className='flex whitespace-nowrap animate-marquee w-max'>

                    {clientLogos.map((logo, index) => (
                        <div key={index} className='flex-shrink-0 w-[180px] md:w-[200px] mx-8 flex  items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-600'>
                            <img src={logo} alt={`Client ${index + 1}`} className="w-full h-auto object-contain max-h-20" />
                        </div>
                    ))}

                    {clientLogos.map((logo, index) => (
                        <div key={`dup-${index}`} className='flex-shrink-0 w-[150px] md:w-[200px] mx-8 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300'>
                            <img src={logo} alt={`Client duplicate ${index + 1}`} className="w-full h-auto object-contain max-h-20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default clients