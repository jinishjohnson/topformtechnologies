import React from 'react'

const Title = ({ titleText, titleHighlight }) => {
    return (
        <div className='flex text-start py-2'>
            <h1 className='flex  gap-2 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight '>
                {titleText} <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                    {titleHighlight}
                </span>
            </h1>
        </div>
    )
}

export default Title