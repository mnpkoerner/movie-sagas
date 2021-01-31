import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //to navigate to details page
    const history = useHistory();

    //GET movie from DB, routes to /details with movie info
    const handleClick = (id) => {
        if (!id) {
            history.push('/movieForm')
        } else {
            console.log('in getDetails with id:', id)
            //sends id to saga for database query
            dispatch({ type: 'GET_DETAILS', payload: id })
            dispatch({ type: 'GET_GENRES', payload: id })

            history.push('/details')
        }
    }
    //populates dom with movies from db
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section>
                <div className="addMovieNav">
                    {/* button to send add movie page */}
                    <p>Don't see what you're looking for?</p>
                    <Button
                    variant="contained"
                    endIcon={<DoubleArrowIcon />}
                    color="primary"
                    onClick={() => handleClick(false)}>
                    Add a Movie!</Button>
                </div>
            </section>

            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div
                            key={movie.id}
                            className="movieCard"
                            //clicking anywhere on the movie div
                            //routes you to the details page with
                            //the specific movie's information
                            onClick={() => handleClick(movie.id)}>
                            <h4>{movie.title}</h4>
                            <img src={movie.poster} alt={movie.title} className="poster"/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;
