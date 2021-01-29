import {useSelector} from 'react-redux'

export default function Details() {
    //details has response from server with movie details
    const details = useSelector(store=>store.detailsReducer)

    console.log('in details with id:', details)
    return (
        <div>
            <p>{details}</p>
        </div>

    )
}
