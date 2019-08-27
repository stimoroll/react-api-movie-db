import React from 'react';
import {Grid,Typography} from '@material-ui/core/';
import MovieItem from './MovieItem';

const MoviesList = ({movies, loading}) => (
    <Grid container spacing={3}>
      {(!loading && movies) && movies.map((movie, key)=><MovieItem key={key} movie={movie} />)}
    </Grid>
)

export default  MoviesList;