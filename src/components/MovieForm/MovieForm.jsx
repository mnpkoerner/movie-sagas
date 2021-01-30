import {useState} from 'react'

export default function MovieForm() {

    let [newMovie, setNewMovie] = useState({
                                            title: '',
                                            poster: '',
                                            description: '',
                                            })
    let [newMovieGenre, setNewMovieGenre] = useState([])

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
            default:
                console.log('something went wrong')
        }
    }

    const addGenre = (id) => {
        if(newMovieGenre.length === 0){
        setNewMovieGenre([id])
        console.log(newMovieGenre)
        }
        else if(newMovieGenre.indexOf(id) === -1) {
        setNewMovieGenre([...newMovieGenre, id]);
        console.log(newMovieGenre)
        }
    }
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
            <div>
                <h2>Pick the movie's genre(s)</h2>
                <button onClick={()=>addGenre(1)} >Adventure</button>
                <button onClick={()=>addGenre(2)} >Animated</button>
                <button onClick={()=>addGenre(3)} >Biographical</button>
                <button onClick={()=>addGenre(4)} >Comedy</button>
                <button onClick={()=>addGenre(5)} >Disaster</button>
                <button onClick={()=>addGenre(6)} >Drama</button>
                <button onClick={()=>addGenre(7)} >Epic</button>
                <button onClick={()=>addGenre(8)} >Fantasy</button>
                <button onClick={()=>addGenre(9)} >Musical</button>
                <button onClick={()=>addGenre(10)} >Romantic</button>
                <button onClick={()=>addGenre(11)} >Science Fiction</button>
                <button onClick={()=>addGenre(12)} >Space Opera</button>
                <button onClick={()=>addGenre(13)} >Superhero</button>
            </div>
            <div>{newMovieGenre}</div>
        </form>
        </div>
    )
}
