// https://open-meteo.com/en/docs/historical-weather-api

const getCoordinates = async (city) => {
    // send a request to geocoding api
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const data = await response.json();
    const result = data.results[0];
    console.log(result, ' inside get coordinates');
    return result;
} 

const getWeather = async (lat, lon, date) => {
    const archiveUrl = 'https://archive-api.open-meteo.com/v1/archive?';
    const query = `latitude=${lat}&longitude=${lon}&start_date=${date}&end_date=${date}&temperature_unit=fahrenheit&hourly=apparent_temperature,precipitation`;

    try {
        const response = await fetch(`${archiveUrl}${query}`);
        if(response.ok) {
            const data = await response.json();
            console.log(data, ' data inside getWeather');
            return data;
        }
    } catch (error) {
        console.log('failed inside getWeather ', error);
    }
};

export const fetchData = async (city, date) => {
    console.log('attempting fetching city');
    // get latitude and longitude
    const { id, latitude, longitude } = await getCoordinates(city);
    console.log(`latitude: ${latitude}, longitude: ${longitude}`);

    //fetch weather based on date
    const weatherData = await getWeather(latitude, longitude, date);
    console.log('weather data after fetching, ', weatherData);
    const avgTemp = weatherData.hourly.apparent_temperature[12];
    const cityId = id;
    return { cityId, avgTemp };
};