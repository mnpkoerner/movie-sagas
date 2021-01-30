import {useSelector} from 'react-redux'

export default function Details() {
    //details has response from server with movie details
    const details = useSelector(store=>store.detailsReducer)
    const genres = useSelector(store=>store.genres)

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
            {genres.map((genre)=>{
                return(
                    <p key={genre.name}>{genre.name}</p>
                )
            })}
        </>

    )
}
