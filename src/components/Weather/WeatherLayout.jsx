import React from 'react'

// bg colours for Tailwind compiler bg-gray-200 bg-blue-200 //TODO tidy this up

const WeatherLayout = ({ children, type }) => {
    return (
        <div className={`transition-colors text-center min-h-screen md:flex md:items-center bg-${type}-200 bg-opacity-50`}>
            <div className={`transition-colors md:min-h-[610px] md:rounded-2xl mx-auto text-center bg-${type}-200 transition-colors min-h-screen md:min-h-[650px] md:w-[60vw] md:max-w-3xl md:shadow-2xl overflow-hidden`}>
                <div className='relative sm:max-w-sm pt-10 px-2 mx-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WeatherLayout