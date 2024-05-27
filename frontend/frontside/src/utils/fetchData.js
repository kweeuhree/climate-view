// https://open-meteo.com/en/docs/historical-weather-api

const getCoordinates = async (city, country = null, stateRegion = null) => {
    // send a request to geocoding api
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const data = await response.json();
    const results = data.results;
    console.log(country, stateRegion, ' inside getCoordinates');
    console.log('results: ', results);
    let location;

    if(country && stateRegion) {
        location = results.find((item) => item.admin1 === stateRegion && item.country === country);
    } else if(country) {
        location = results.find((item) => item.country === country);
    } else if(stateRegion) {
        location = results.find((item) => item.admin1 === stateRegion);
    } else if (!country && !stateRegion) {
        location = results[0];
    }
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

export const fetchData = async ({ countryFormData = null, stateRegion = null, cityFormData, date }) => {
    console.log('attempting fetching city ', countryFormData, stateRegion, cityFormData, date);
    // get latitude and longitude

    const countryCapitalized = countryFormData ? capitalizeEach(countryFormData) : null;
    const stateRegionCapitalized = stateRegion ? capitalizeEach(stateRegion) : null;

    console.log(countryCapitalized, stateRegionCapitalized);
    const { id, admin1, country, name, latitude, longitude } = await getCoordinates(cityFormData, countryCapitalized, stateRegionCapitalized);
    console.log('result: ', admin1, id, latitude, longitude);
    // { id, latitude, longitude }
    console.log(`latitude: ${latitude}, longitude: ${longitude}`);

    // fetch weather based on date
    const weatherData = await getWeather(latitude, longitude, date);
    console.log('weather data after fetching, ', weatherData);
    const avgTemp = weatherData.hourly.apparent_temperature[12];
    const cityId = id;
    return { cityId, avgTemp, admin1, country, name };
};