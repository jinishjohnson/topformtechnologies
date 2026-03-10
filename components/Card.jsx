import React from 'react'

const Card = ({ icon, title, desc }) => {
    return (
        <div className="p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex flex-col gap-5 items-start justify-center w-full mx-auto">
                <div className="text-blue-600 p-4 rounded-xl text-4xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {icon}
                </div>
                <h2 className='text-xl font-bold text-gray-900 capitalize leading-tight'>{title}</h2>
                <p className='text-sm text-gray-600 leading-relaxed'>{desc}</p>
            </div>
        </div>
    )
}

export default Card