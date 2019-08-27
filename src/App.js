import React, {useEffect,useState} from 'react';
import {Grid,Typography} from '@material-ui/core/';
import './App.css';

import { instance, URL_WITH_KEY } from './services/movieService';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MovieList';

const App = () => {
  const [filter, setFilter] = useState('klan'); //TODO remove defalut value afeter coding
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async (movieTitle) => {
      try {
        setLoading(true);
        let response = await instance.get(`${URL_WITH_KEY}&s=${movieTitle}`);
        setMovies(response.data.Search);
        //if data not exist => error
        //if Search not exist => error
        //axios takes care about 30x, 40x => error
        console.log(response.data.Search);
      } catch(error)  {
        console.log(error);
      } finally {
        setLoading(false);
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
      <SearchBar handleFilterMovies={handleFilterMovies} />
      {loading && <p>loading - please wait</p>}
      <MoviesList movies={movies} loading={loading} />
    </div>
  );
}

export default App;
