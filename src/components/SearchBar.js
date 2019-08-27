import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'rgba(230,230,230,0.9)'
    },
    textField: {
        width: '100vw',
        paddingBottom: '1em'
      },
}));
//TODO add sobme debounce
//TODO check for min 3 letters - and add icon of loader here to show loading item 
//TODO add info about 3 letters
//TODO add filter for date range - is imposible to search by author as i see
//TODO add search icon
//NOTICE thinking about autocomplete
const SearchBar = ({handleFilterMovies}) => {
    const classes = useStyles();
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
            id="search-bar"
            label="Movie Title"
            className={classes.textField}
            onChange={handleFilterMovies}
            margin="normal"
            />
        </form>
    )
}
//NOTICE keep syntax like this help to use syntax hinting amd autoimport in vscode
export default SearchBar;