import React from 'react';
import {Grid,Typography} from '@material-ui/core/';

const MovieItem = ({movie}) => {
    const handleMovieClick = (event) => {
      console.log(event.currentTarget.getAttribute('data-id'));
    }
    return (
      <Grid item data-id={movie.imdbID} onClick={handleMovieClick} xs={12} xm={6} md={4} lg={3} xl={2}>
        <Typography>{movie.Title}</Typography>
        <figure>
          <img src={movie.Poster} alt={movie.Title} />
        </figure>
        <Typography>{movie.Type}</Typography>
        <Typography>{movie.Year}</Typography>
        <Typography>{movie.imdbID}</Typography>
      </Grid>
    )
}

export default MovieItem;