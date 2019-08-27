import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
const config = {
  OMDB_API_KEY: '2e01619a',
  OMDB_API_URL: 'https://www.omdbapi.com/',
}

const tempTitle = 'klan';

function App() {
  useEffect(() => {
    const instance = axios.create({
      baseURL: `${config.OMDB_API_URL}`,
      responseType: 'json',
    });

    const URL_WITH_KEY = `?apikey=${config.OMDB_API_KEY}`;

    const fetchMovies = async (movieTitle) => {
      try {
        let posts = await instance.get(`${URL_WITH_KEY}&s=${movieTitle}`);
        console.log(posts);
      } catch(error)  {
        console.log(error);
      }
    }

    fetchMovies(tempTitle);
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
