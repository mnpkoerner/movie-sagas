import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

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

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>

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
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
            <section>
                <div>
                    <p>Don't see what you're looking for?</p>
                    <button onClick={() => handleClick(false)}>Add a Movie!</button>
                </div>
            </section>
        </main>

    );
}

export default MovieList;
