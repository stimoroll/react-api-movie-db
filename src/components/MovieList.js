import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core/';
import MovieItem from './MovieItem';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100vw',
        background: 'rgba(230,230,230,0.9)',
        marginTop: '5em',
        flexGrow: 1,
    },
}));

const MoviesList = ({movies, loading}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.container}>
        {(!loading && movies) && movies.map((movie, key)=><MovieItem key={key} movie={movie} />)}
        </Grid>
    )
}

export default  MoviesList;