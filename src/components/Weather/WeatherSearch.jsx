import React from 'react'
import { Button, InputText } from '../common'

const WeatherSearch = ({ onSubmit, onChange }) => {

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }

    //TODO make input width expand with search term eg. w-[${location.length*2}rem]
    //TODO unfocus on submit
    //TODO auto-complete location
    //TODO fix regex to be international eg. accents

    return (
        <form onSubmit={onFormSubmit} className='relative z-20'>
            <div className='w-auto inline-grid grid-cols-auto-2 sm:gap-3 ml-12'>
                <InputText
                    classes='bg-transparent max-w-full w-auto transition overflow-ellipsis text-gray-500 text-center font-semibold text-2xl sm:text-3xl focus:outline-none border-b border-gray-300 border-dotted'
                    placeholder='Search places'
                    autofocus={true}
                    capitalizeFirstLetter={true}
                    onChange={onChange} />
                <Button classes='col-auto btn--search border w-12 h-12'
                    text='Search'
                    textClasses='sr-only'
                    onClick={onSubmit} />
            </div>
        </form>
    )
}

export default WeatherSearch