import React from 'react'
import { calculateSunsetSunriseHoursToDate, calculateSunsetSunriseMinutesToDate, dayInfo, isDay } from '../../helpers/dates'
import WeatherData from './WeatherData'

const WeatherDataContainer = ({ data }) => {
    const { dt, sys, timezone, weather, main } = data;
    const { localTime, sunriseTime, sunsetTime } = dayInfo(dt, sys.sunrise, sys.sunset, timezone);

    const itIsDay = isDay(localTime, sunriseTime, sunsetTime);

    const getEventInfo = () => {
        const eventType = itIsDay ? 'sunset' : 'sunrise';
        const compareWithDate = itIsDay ? sunsetTime : sunriseTime;
        const hoursToEvent = calculateSunsetSunriseHoursToDate(compareWithDate, localTime);

        if (hoursToEvent < 1) {
            const minutesToEvent = calculateSunsetSunriseMinutesToDate(compareWithDate, localTime);
            return `${eventType} in ${minutesToEvent} ${minutesToEvent > 1 ? 'minutes' : 'minute'}`;
        } else {
            return `${eventType} in ${hoursToEvent} ${hoursToEvent > 1 ? 'hours' : 'hour'}`;
        }
    }

    return (
        <WeatherData description={weather[0].description} icon={weather[0].icon} title={weather[0].main} temperature={Math.round(main.temp, 0)} eventInfo={getEventInfo()} />
    )
}

export default WeatherDataContainer
