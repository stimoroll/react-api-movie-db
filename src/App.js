import React, {useEffect,useState} from 'react';
import './App.css';

import { instance, URL_WITH_KEY } from './services/movieService';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {


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
      {movies && movies.map((movie, key)=><p key={key}>{movie.Title}</p>)}
    </div>
  );
}

export default App;
