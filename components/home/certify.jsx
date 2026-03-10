import React from 'react'
import Title from '../Title'
import Image from 'next/image'
import Data from '../../data.json'

const certify = () => {
    return (
        <div className='mx-auto px-20 py-4 max-sm:px-2 shadow-2xl rounded-3xl flex justify-center items-center w-full h-[450px]'>
            <div className='mx-auto flex flex-col justify-center items-center gap-4 w-full h-full'>
                <Title titleText={Data.certify.title} titleHighlight={Data.certify.titleHighlight} />
                <div className='grid grid-cols-2 max-sm:grid-cols-1 mx-auto max-w-7xl  justify-center items-center gap-5 h-full'>
                    <p className='font-mono text-2xl bg-linear-to-r from-taupe-400 to-blue-500 bg-clip-text text-transparent max-sm:text-xl max-sm:text-center'>{Data.certify.description}</p>
                    <Image src={Data.certify.image} width={500} height={200} className='' alt="authority_logo" />
                </div>
            </div>
        </div>
    )
}

export default certify