"use client"
import React from 'react'
import { FlipWords } from '../ui/flip-words'
import { DotPattern } from '../ui/dot-pattern'

const heroNew = () => {
    return (
        <section className='relative w-full h-screen flex items-center justify-center mx-auto overflow-hidden'>
            <DotPattern />
            <div className='flex flex-col items-center z-10 justify-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal flex flex-col xl:block items-center justify-center text-center leading-tight md:leading-snug'>
                    <span className="mb-2 xl:mb-0 block">We Build</span>
                    <FlipWords className="text-center xl:text-left" words={["CCTV and Security", "Door Access & TNA Systems", "PABX & Telephone Systems", "Website Design & Development", "Custom Software Developments", "Mobile Application Development", "Home & Office IT Solutions", "ERP & Inventory Applications"]} />
                </h1>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mt-6 text-center px-4'>Quality Blends with Excellent Service</p>
                <div className='flex gap-2 '>
                    <button className='mt-4 bg-transparent border border-blue-600 text-blue-500 text-center px-6 py-2  rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-600'>Explore</button>
                    <button className='mt-4 bg-blue-600 text-white text-center px-6 py-2  rounded-full cursor-pointer hover:bg-blue-700 hover:text-white transition-all hover:translate-y-1 shadow-lg duration-600'>Contact Us</button>
                </div>
            </div>
        </section>
    )
}

export default heroNew