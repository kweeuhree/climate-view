// https://open-meteo.com/en/docs/historical-weather-api

const getCoordinates = async (country, stateRegion, city) => {
    // send a request to geocoding api
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const data = await response.json();
    const results = data.results;
    console.log(country, stateRegion);
    console.log('results: ', results);
    const location = results.find((item) => item.admin1 === stateRegion && item.country === country);
    console.log(location, ' inside get coordinates');
    return location;
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

const capitalizeEach = (input) => {
    // if input is an array than split, capitalize each, join and send back
    // else if input is not an array, capitalize and send back
    let inputCapitalized;
    inputCapitalized = input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    console.log(inputCapitalized);

    return inputCapitalized;
}

export const fetchData = async ({ country, stateRegion, city, date }) => {
    console.log('attempting fetching city ', country, stateRegion, city, date);
    // get latitude and longitude
    const countryCapitalized = capitalizeEach(country);
    const stateRegionCapitalized = capitalizeEach(stateRegion);
    const { id, latitude, longitude } = await getCoordinates(countryCapitalized, stateRegionCapitalized, city);
    console.log('result: ', id, latitude, longitude);
    // { id, latitude, longitude }
    console.log(`latitude: ${latitude}, longitude: ${longitude}`);

    // fetch weather based on date
    const weatherData = await getWeather(latitude, longitude, date);
    console.log('weather data after fetching, ', weatherData);
    const avgTemp = weatherData.hourly.apparent_temperature[12];
    const cityId = id;
    return { cityId, avgTemp };
};