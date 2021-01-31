import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default function MovieForm() {

    //gets genres from DB to populate list
    const genreList = useSelector(store=>store.genresList)

    //dispatch for genre list
    const dispatch = useDispatch();

    //history for routing
    const history = useHistory();

    //local state for creating new movie to post
    const [newMovie, setNewMovie] = useState({
                                            title: '',
                                            poster: '',
                                            description: '',
                                            genre_id: ''
                                            })

    //updates state from user input
    const handleMovieChange = (key, event) => {
        console.log('changing movie')
        switch(key){
            case 'title':
                setNewMovie({...newMovie, title: event.target.value})
                break;
            case 'poster':
                setNewMovie({...newMovie, poster: event.target.value})
                break;
            case 'description':
                setNewMovie({...newMovie, description: event.target.value})
                break;
            case 'dropdown':
                setNewMovie({...newMovie, genre_id: event.target.value})
                break;
            default:
                console.log('something went wrong')
        }
    }

    //sends user to home page, submits or doesn't depending on button
    const newMovieReady = (ready, event) => {
        event.preventDefault()

        if(ready){
        dispatch({type:'POST_MOVIE', payload: newMovie})
        setNewMovie({
            title: '',
            poster: '',
            description: '',
            genre_id: ''
            })

            history.push('/')
        }

        if(!ready){
            history.push('/')
        }
    }

    //gets data for dropdown list
    useEffect(() => {
        dispatch({ type:'GENRE_DROPDOWN'});;
      }, []);
    return(
        <div>
        <h3>Add a new movie to the database</h3>
        <form className="movieForm">
            <div className="textInput">
            <label htmlFor="title">Title:</label>
            <input
                name="title"
                id="title"
                type="text"
                placeholder="title"
                onChange={(event)=>handleMovieChange('title', event)}
                value={newMovie.title} />
            <label htmlFor="posterURL">Poster URL:</label>
            <input
                name="posterURL"
                id="posterURL"
                type="text"
                placeholder="poster url"
                onChange={(event)=>handleMovieChange('poster', event)}
                value={newMovie.poster} />
                </div>
                <div className="descriptionInput">
            <label htmlFor="description">Description:</label>
            <textarea
                name="description"
                id="description"
                type="text"
                rows="4"
                cols="45"
                maxLength="120"
                onChange={(event)=>handleMovieChange('description', event)}
                placeholder="a brief description of the movie"
                value={newMovie.description}
                ></textarea>
            <label htmlFor="genre">Genre:</label>
            <select
                name="genre"
                id="genre"
                value={newMovie.genre}
                onChange={(event)=>handleMovieChange('dropdown', event)}>
                        <option value="" disabled>Chose the genre:</option>
                {genreList.map((genre)=>{
                    return(
                        <option value={genre.id} key={genre.id}>{genre.name}</option>
                    )
                })}
            </select>
            </div>
            <div className="buttonPanel">
            <Button
                variant="contained"
                color="primary"
                startIcon={<KeyboardArrowLeftIcon/>}
                onClick={(event)=>newMovieReady(false, event)}>
                Return Home
            </Button>
            <Button
                variant="contained"
                color="primary"
                endIcon={<DoubleArrowIcon/>}
                onClick={(event)=>newMovieReady(true, event)}>
                Submit
            </Button>
            </div>
        </form>
        </div>
    )
}

// let [newMovieGenre, setNewMovieGenre] = useState([])
// const addGenre = (id) => {
//     if(newMovieGenre.length === 0){
//     setNewMovieGenre([id])
//     console.log(newMovieGenre)
//     }
//     else if(newMovieGenre.indexOf(id) === -1) {
//     setNewMovieGenre([...newMovieGenre, id]);
//     console.log(newMovieGenre)
//     }
// }


// <div>
//                 <h2>Pick the movie's genre(s)</h2>
//                 <button onClick={()=>addGenre(1)} >Adventure</button>
//                 <button onClick={()=>addGenre(2)} >Animated</button>
//                 <button onClick={()=>addGenre(3)} >Biographical</button>
//                 <button onClick={()=>addGenre(4)} >Comedy</button>
//                 <button onClick={()=>addGenre(5)} >Disaster</button>
//                 <button onClick={()=>addGenre(6)} >Drama</button>
//                 <button onClick={()=>addGenre(7)} >Epic</button>
//                 <button onClick={()=>addGenre(8)} >Fantasy</button>
//                 <button onClick={()=>addGenre(9)} >Musical</button>
//                 <button onClick={()=>addGenre(10)} >Romantic</button>
//                 <button onClick={()=>addGenre(11)} >Science Fiction</button>
//                 <button onClick={()=>addGenre(12)} >Space Opera</button>
//                 <button onClick={()=>addGenre(13)} >Superhero</button>
//             </div>
//             <div>{newMovieGenre}</div>
