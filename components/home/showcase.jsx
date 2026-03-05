import React from 'react';
import LottieAnimation from '../Lottie';
import Link from 'next/link';
import data from '../../data.json';
import onlineBusinessAnimation from '../../animation/Online Business.json';

const Showcase = () => {
    const {
        badge,
        titleText,
        titleHighlight,
        description,
        primaryCta,
        secondaryCta
    } = data.showcase;

    return (
        <section className='w-full bg-gray-50 flex items-center justify-center py-2 px-8 md:px-8'>
            <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>

                <div className='w-full lg:w-1/2 h-[400px] lg:h-[600px] flex items-center justify-center'>
                    <LottieAnimation animationData={onlineBusinessAnimation} />
                </div>

                <div className='w-full lg:w-1/2 flex flex-col items-start'>
                    <span className='bg-blue-100 text-blue-700 font-bold px-5 py-2 rounded-full text-sm uppercase tracking-widest mb-6 shadow-sm border border-blue-200'>
                        {badge}
                    </span>

                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6'>
                        {titleText} <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                            {titleHighlight}
                        </span>
                    </h1>

                    <p className='text-gray-600 text-sm md:text-md leading-relaxed mb-10 max-w-xl'>
                        {description}
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                        <Link
                            href={primaryCta.href}
                            className='px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center'
                        >
                            {primaryCta.text}
                        </Link>
                        <Link
                            href={secondaryCta.href}
                            className='px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center'
                        >
                            {secondaryCta.text}
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Showcase;