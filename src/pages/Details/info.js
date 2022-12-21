import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { Container } from './style'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Details(){
    const {id} = useParams()
    const [movie, setmovie] = useState({})

    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=31962af5bef643f17aee7a648f172713&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {

            const {title, poster_path, overview, release_date} = data

            const movie = {
                id,
                title,
                sinopse: overview,
                image: `${ image_path}${poster_path}`,
                releaseDate: release_date
            }
            console.log(movie)
            setmovie(movie)
        })
    }, [id])

    return(
        <Container>
            <div className='movie'>
                <img src={movie.image}alt={movie.sinopse}></img>
                <div className='details'>
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className='release-date'>{movie.releaseDate}</span>
                    <Link to="/">
                    <button  >Voltar</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Details