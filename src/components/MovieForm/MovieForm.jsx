import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

export default function MovieForm() {

    //gets genres from DB to populate list
    const genreList = useSelector(store=>store.genresList)

    //dispatch for genre list
    const dispatch = useDispatch();

    //local state for creating new movie to post
    const [newMovie, setNewMovie] = useState({
                                            title: '',
                                            poster: '',
                                            description: '',
                                            genre: ''
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
                setNewMovie({...newMovie, genre: event.target.value})
                break;
            default:
                console.log('something went wrong')
        }
    }

    useEffect(() => {
        dispatch({ type:'GENRE_DROPDOWN'});;
      }, []);
    return(
        <div>
        <h3>Add a new movie to the database</h3>
        <form>
            <input
                type="text"
                placeholder="title"
                onChange={(event)=>handleMovieChange('title', event)}
                value={newMovie.title} />
            <input
                type="text"
                placeholder="poster url"
                onChange={(event)=>handleMovieChange('poster', event)}
                value={newMovie.poster} />
            <textarea
                type="text"
                maxLength="120"
                onChange={(event)=>handleMovieChange('description', event)}
                placeholder="a brief description of the movie"
                ></textarea>
            <label htmlFor="genre">Genre</label>
            <select
                name="genre"
                id="genre"
                value={newMovie.genre}
                onChange={(event)=>handleMovieChange('dropdown', event)}>
                {genreList.map((genre)=>{
                    return(
                        <option value={genre.id}>{genre.name}</option>
                    )
                })}
                {/* <option value="" disabled>Select a genre:</option>
                <option value="1">Adventure</option>
                <option value="2">Adventure</option>
                <option value="3">Adventure</option>
                <option value="4">Adventure</option>
                <option value="5">Adventure</option>
                <option value="6">Adventure</option>
                <option value="7">Adventure</option>
                <option value="8">Adventure</option>
                <option value="9">Adventure</option>
                <option value="10">Adventure</option>
                <option value="11">Adventure</option>
                <option value="12">Adventure</option>
                <option value="13">Adventure</option>
                <option value="14">Adventure</option> */}
            </select>

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
