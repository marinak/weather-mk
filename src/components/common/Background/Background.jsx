import React from 'react'

const Background = () => {
    return (
        <div className='absolute bottom-0 w-full h-full'>
            <div className='absolute w-[150vw] h-[150vw] bottom-0 left-1/2 -translate-x-1/2 bg-white bg-opacity-60 rounded-full'></div>
            <div className='absolute w-[150vw] h-[150vw] bottom-0 left-1/2 -translate-x-1/2 opacity-50 rounded-full shadow-2xl'></div>
        </div>
    )
}

export default Background