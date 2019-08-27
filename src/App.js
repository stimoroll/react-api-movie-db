import React, {useEffect, useState, useContext, useReducer} from 'react';
import {GET_MOVIE_BY_ID, OmdbIDContext} from './context';
import {Grid,Typography} from '@material-ui/core/';

import './App.css';

import { instance, URL_WITH_KEY } from './services/movieService';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MovieList';

//TODO: split into separate file
//TODO: better formatting
const MovieDetails = ({movie}) => (
  <div>
    <p>{movie.Actors}</p>
    <p>{movie.Awards}</p>
    <p>{movie.Country}</p>
    <p>{movie.Director}</p>
    <p>{movie.Title}</p>
    <p>{movie.Year}</p>
  </div>
)

//TODO moveout from here to file
const initialState = {
  omdbId: '',
}

function reducer(state, action) {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return {
        omdbId: action.omdbId,
      }
      default:
        return initialState
      }
}

const App = () => {
  const [filter, setFilter] = useState('klan'); //TODO remove defalut value afeter coding
  const [movies, setMovies] = useState(false);
  const [movie, setMovie] = useState(false);
  const [loading, setLoading] = useState(false);
  const [omdbId, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchMovies = async (movieTitle) => {
      try {
        setLoading(true);
        let response = await instance.get(`${URL_WITH_KEY}&s=${movieTitle}`);
        setMovies(response.data.Search);
        setMovie(false);
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
  }, [filter]);

  useEffect(() => {
    console.log(omdbId);
    const fetchMovieDetails = async (omdbId) => {
      try {
        setLoading(true);
        let response = await instance.get(`${URL_WITH_KEY}&i=${omdbId.omdbId}`);
        //if data not exist => error
        //axios takes care about 30x, 40x => error
        setMovies(false);
        setMovie(response.data);
        console.log(response.data);
      } catch(error)  {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails(omdbId);
  }, [omdbId]);

  const handleFilterMovies = (event) => {
    console.log(event.currentTarget.value);
    setFilter(event.currentTarget.value);
  }

  //TODO - better condition for dispaly MovieDetail or MovieList
  //TODO - better loader is required
  return (
    <OmdbIDContext.Provider value={{ omdbId, dispatch }}>
      <div className="App">
        <SearchBar handleFilterMovies={handleFilterMovies} />
        {loading && <p>loading - please wait</p>}
        {movies && <MoviesList movies={movies} loading={loading} />}
        {movie && <MovieDetails movie={movie}/>}

      </div>
    </OmdbIDContext.Provider>
  );
}

export default App;
