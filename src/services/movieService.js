import axios from 'axios';

const config = {
    OMDB_API_KEY: '2e01619a',
    OMDB_API_URL: 'https://www.omdbapi.com/',
}

export const instance = axios.create({
    baseURL: `${config.OMDB_API_URL}`,
    responseType: 'json',
});

export const URL_WITH_KEY = `?apikey=${config.OMDB_API_KEY}`;