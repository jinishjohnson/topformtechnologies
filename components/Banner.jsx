"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const Banner = () => {
    const pathname = usePathname()
    const path = pathname.replace("/", "")
    return (
        <div className='w-full bg-linear-to-r  from-[#091e57] to-[#091e57] h-[350px] max-sm:h-auto max-sm:pt-40 max-sm:pb-24 '>
            <div className='w-full h-full flex gap-2 flex-col items-baseline max-w-7xl mx-auto justify-center pl-12 max-sm:pl-4'>
                <h2 className='text-6xl font-bold text-white tracking-wider uppercase'>{path}</h2>
                <h2 className='text-xl font-thin text-white capitalize'>Home{pathname}</h2>
            </div>
        </div>
    )
}

export default Banner