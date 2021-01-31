import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default function Details() {
    //details has response from server with movie details
    const details = useSelector(store=>store.detailsReducer)
    //genres has response from server with genres
    const genres = useSelector(store=>store.genres)

    //to route back home
    const history = useHistory()

    const returnHome = () =>{
        history.push('/')
    }

    console.log('in details with clicked movie:', details)
    return (

        <>
            {details.map((detail)=>{
                return(
                    <div key={detail.title}>
                        <h1>{detail.title}</h1>
                        <img src={detail.poster} alt={detail.title}></img>
                        <p>{detail.description}</p>
                    </div>
                )

            })}
            <h3>Great for fans of the genres:</h3>
            {genres.map((genre)=>{
                return(
                    <p key={genre.name}>{genre.name}</p>
                )
            })}

            <Button
            variant="contained"
            color="primary"
            startIcon={<KeyboardArrowLeftIcon/>}
            onClick={()=>returnHome()}>
                Return Home</Button>
        </>

    )
}
