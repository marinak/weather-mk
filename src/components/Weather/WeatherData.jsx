import React from 'react'
import { capitalizeFirstLetterText } from '../../helpers/strings'
import { Background } from '../common'

//TODO fade weather icons in & out when showing and hiding

const WeatherData = ({ description, icon, title, temperature, eventInfo }) => {
    return (
        <div className='p-5'>
            <p className='relative text-gray-600 text-sm z-20 tracking-wide'>{capitalizeFirstLetterText(description)}</p>
            <div className='relative h-48 sm:h-72 mb-10 text-center'>
                <Background />
                <img src={`../../src/assets/icons/weather/${icon}.svg`} alt={title} className='scale-[0.75] m-auto max-h-full' />
            </div>
            <p className='font-bold text-gray-500 text-5xl sm:text-6xl mb-5'>{temperature}&#176;</p>
            <p className='font-semibold text-gray-500 md:mb-6 tracking-wide'>{eventInfo}</p>
        </div>
    );
}

export default WeatherData