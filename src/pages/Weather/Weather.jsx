import React, { useState, useEffect } from 'react'
import useApi from '../../hooks/useApi'
import getWeather from '../../api/weather'
import { FeedbackMessage } from '../../components/common'
import { WeatherLayout, WeatherDataContainer, WeatherLoader, WeatherSearch } from '../../components/Weather'
import { isDay } from '../../helpers/dates'
import { capitalizeFirstLetterText } from '../../helpers/strings'

const Weather = () => {
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');

    const getWeatherApi = useApi(getWeather);

    const onSubmit = () => getWeatherApi.request(location);

    useEffect(() => {
        let bgType = 'gray';
        if (getWeatherApi.data && !getWeatherApi.data.message) {
            const { dt, sys } = getWeatherApi.data;
            bgType = isDay(dt, sys.sunrise, sys.sunset) ? 'blue' : 'gray';
        }
        setType(bgType);
    }, [getWeatherApi])

    //TODO when page loads show weather for local place if allowed with geolocation api

    return (
        <WeatherLayout type={type}>
            <WeatherSearch onSubmit={onSubmit} onChange={setLocation} />
            {getWeatherApi.loading && <WeatherLoader />}
            {!getWeatherApi.loading && getWeatherApi.error && <FeedbackMessage type="error" classes="mt-10" text={getWeatherApi.error} />}
            {!getWeatherApi.loading && getWeatherApi.data?.message && <FeedbackMessage type="info" classes="mt-10" text={capitalizeFirstLetterText(getWeatherApi.data.message)} />}
            {!getWeatherApi.loading && getWeatherApi.data && !getWeatherApi.data.message &&
                <WeatherDataContainer data={getWeatherApi.data} />}
        </WeatherLayout>
    )
}

export default Weather