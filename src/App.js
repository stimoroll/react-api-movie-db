import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
const config = {
  OMDB_API_KEY: '2e01619a',
  OMDB_API_URL: 'https://www.omdbapi.com/',
}

const tempTitle = 'klan';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const instance = axios.create({
      baseURL: `${config.OMDB_API_URL}`,
      responseType: 'json',
    });

    const URL_WITH_KEY = `?apikey=${config.OMDB_API_KEY}`;

    const fetchMovies = async (movieTitle) => {
      try {
        let response = await instance.get(`${URL_WITH_KEY}&s=${movieTitle}`);
        setMovies(response.data.Search);
        //if data not exist => error
        //if Search not exist => error
        //axios takes care about 30x, 40x => error
        // console.log(response.data.Search);
      } catch(error)  {
        console.log(error);
      }
    }

    fetchMovies(filter);
  }, [filter])

  const handleFilterMovies = (event) => {
    console.log(event.currentTarget.value);
    setFilter(event.currentTarget.value);
  }
  return (
    <div className="App">
      <input type="search" onChange={handleFilterMovies} />
      {movies && movies.map(movie=><p>{movie.Title}</p>)}
    </div>
  );
}

export default App;
