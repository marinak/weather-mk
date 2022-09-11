import { differenceInHours, differenceInMinutes, compareAsc, format, add } from 'date-fns'

const browserOffset = (new Date()).getTimezoneOffset() * 60;
const getCuratedTime = (time, timezone) => (time + timezone + browserOffset) * 1000

const dayInfo = (local, sunrise, sunset, timezone) => {
    const sunriseTime = new Date(getCuratedTime(sunrise, timezone));
    const sunsetTime = new Date(getCuratedTime(sunset, timezone));
    const localTime = new Date(getCuratedTime(local, timezone)); // note: this comes a few minutes off from the API

    return { localTime, sunriseTime, sunsetTime };
}

// used for testing
const formatDate = (date) => format(date, 'dd/MM/yyyy HH:mm');

const isDay = (local, sunrise, sunset) => {
    return compareAsc(local, sunset) < 1 && compareAsc(local, sunrise) > 0;
}

//TODO refactor following 2 functions
//TODO fix bug showing sunset/sunrise in 24h??

const calculateSunsetSunriseHoursToDate = (dateLeft, dateRight) => {
    const difference = differenceInHours(dateLeft, dateRight);
    return difference > 0 ? difference : differenceInHours(add(dateLeft, { days: 1 }), dateRight);
}

const calculateSunsetSunriseMinutesToDate = (dateLeft, dateRight) => {
    const difference = differenceInMinutes(dateLeft, dateRight);
    return difference > 0 ? difference : differenceInMinutes(add(dateLeft, { days: 1 }), dateRight);
}

export { dayInfo, formatDate, isDay, calculateSunsetSunriseHoursToDate, calculateSunsetSunriseMinutesToDate }