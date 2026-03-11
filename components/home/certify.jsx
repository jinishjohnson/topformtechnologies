import React from 'react'
import Title from '../Title'
import Image from 'next/image'
import Data from '../../data.json'

const certify = () => {
    return (
        <><div className='max-w-7xl px-28 '>

        </div>
            <div className='mx-auto px-20  max-sm:px-2 max-sm:py-2 shadow-2xl py-8  flex justify-center items-center w-full h-auto bg-amber-50'>
                <div className='mx-auto flex flex-col max-w-7xl justify-start items-start max-md:justify-start max-sm:justify-center max-sm:items-center max-md:w-full h-full'>
                    <Title titleText={Data.certify.title} titleHighlight={Data.certify.titleHighlight} />
                    <div className='grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-2 mx-auto max-w-7xl justify-center items-center gap-5 h-auto'>
                        <p className='font-mono text-xl bg-gradient-to-r from-taupe-400 to-blue-500 bg-clip-text text-transparent max-sm:text-sm max-sm:text-center'>{Data.certify.description}</p>
                        <Image src={Data.certify.image} width={500} height={200} className='' alt="authority_logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default certify