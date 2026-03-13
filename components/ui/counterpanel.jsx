import React from 'react'
import Counter from '@/components/ui/counter'

const counterpanel = ({ title1, title2, title3, title4, value1, value2, value3, value4 }) => {
    return (
        <div className="relative rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-900/20 overflow-hidden px-8 py-12 md:py-16">
            {/* Decorative background blurs */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:divide-x divide-blue-400/30">

                <div className="flex flex-col items-center justify-center text-center px-4">
                    <Counter endValue={value1} suffix="+" className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm" />
                    <p className="text-blue-100 font-semibold tracking-wider uppercase text-xs md:text-sm">{title1}</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center px-4">
                    <Counter endValue={value2} suffix="+" className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm" />
                    <p className="text-blue-100 font-semibold tracking-wider uppercase text-xs md:text-sm">{title2}</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center px-4">
                    <Counter endValue={value3} suffix="+" className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm" />
                    <p className="text-blue-100 font-semibold tracking-wider uppercase text-xs md:text-sm">{title3}</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center px-4">
                    <Counter endValue={value4} suffix="+" className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm" />
                    <p className="text-blue-100 font-semibold tracking-wider uppercase text-xs md:text-sm">{title4}</p>
                </div>

            </div>
        </div>
    )
}

export default counterpanel