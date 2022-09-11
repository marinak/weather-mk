const API_KEY = '8d28dafdde1bc8694ad597a41e7b750b'
const API_URL = 'http://api.openweathermap.org/data/2.5/weather'

const getWeather = (location) => fetch(`${API_URL}?q=${location}&APPID=${API_KEY}&units=metric`);

export default getWeather