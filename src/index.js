import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_DETAILS', getDetails);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('GENRE_DROPDOWN', getGenreDropdown)
}

//gets all genres for dropdown
function* getGenreDropdown(){
    try{
        console.log('in getGenreDropdown')
        const response = yield axios.get('/api/genre')
        yield put({type:'SET_GENRES_LIST', payload: response.data})
    } catch(error){
        console.log(error)
    }
}

//gets details from DB for one movie
function* getDetails(action) {
    try{
        console.log('in getDetails saga for id:', action.payload);
        const response = yield axios.get(`/api/movie/${action.payload}`)
        console.log('response from server for movie:', response.data);
        //this data will need to go do a reducer,
        //that reducer will be grabbed by the details page with useEffect
        //server get will query both tables
        yield put({type: 'SEE_DETAILS', payload: response.data})
    }catch(error) {
        console.log(error);
        alert('problem getting details')
    }
}

//saga to get genres for movie display
function* getGenres(action) {
    try{
        console.log('in getGenres saga for id:', action.payload);
        const response = yield axios.get(`/api/movie/genre/${action.payload}`)
        console.log('response from server for genre:', response.data);
        //this data will need to go do a reducer,
        //that reducer will be grabbed by the details page with useEffect
        //server get will query both tables
        yield put({type: 'SET_GENRES', payload: response.data})
    }catch(error) {
        console.log(error);
        alert('problem getting genres')
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//reducer to handle details for one movie
const detailsReducer = (state = [], action) => {
    if(action.type === 'SEE_DETAILS') {
        return action.payload;
    }
    return state;
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres for /detail
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//use to generate genres for dropdown
const genresList = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES_LIST':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        genresList,
        detailsReducer,
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
