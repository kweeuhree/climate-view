
const api_key = import.meta.env.VITE_API_KEY;
const baseUrl = 'https://api.tomorrow.io/v4';
const api_query = `?apikey=${api_key}`;

//timelines 
const timelines = '/timelines';


const getWeather = async () => {
    const timelinesUrl = `${baseUrl}${timelines}${api_query}`;
    try {
        const response = await fetch(timelinesUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fields": [
                    "temperature"
                  ]
            })
        });
        const data = await response.json();
        console.log('data inside getWeather: ', data);
        return data;
    } catch (error) {
        console.log('error inside getWeather ', error);
    }
}

export { getWeather };