import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid,Paper,Typography} from '@material-ui/core/';
import {GET_MOVIE_BY_ID, OmdbIDContext} from '../context';

const Imgplaceholder = () => (
    <div>Sorry. No Image</div>
)

const MoviePoster = ({posterUrl, posterTitle}) => {
    return (
        <figure>
            {(posterUrl !== 'N\A')
                ? (<img src={posterUrl} alt={posterTitle} />)
                : (<Imgplaceholder />)
            }
        </figure>
    )
};

const useStyles = makeStyles(theme => ({
    item: {
        // padding: '0.2em',
    },
    paper: {
        background: '#fff',
        margin: '2px',
    }
}));

const MovieItem = ({movie}) => {
    const classes = useStyles();
    const { dispatch } = useContext(OmdbIDContext);

    const handleMovieClick = (event) => {
        let omdbId = event.currentTarget.getAttribute('data-id');
        console.log(omdbId);
        dispatch({ type: GET_MOVIE_BY_ID, omdbId: omdbId });
    }
    return (
      <Grid item data-id={movie.imdbID} onClick={handleMovieClick} xs={12} xm={6} md={4} lg={3} xl={2} className={classes.item}>
        <Paper className={classes.paper}>
            <Typography>{movie.Title}</Typography>
            <MoviePoster posterUrl={movie.Poster} posterTitle={movie.Title} />
            <Typography>{movie.Type}</Typography>
            <Typography>{movie.Year}</Typography>
            <Typography>{movie.imdbID}</Typography>
        </Paper>
      </Grid>
    )
}

export default MovieItem;