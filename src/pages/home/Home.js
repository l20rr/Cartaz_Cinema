import React from "react";
import { Container, MovieList , Movie } from "./style";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";



function Home(){

    const [movies, setmovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'
    useEffect(()=>{
        //consumir uma API
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=31962af5bef643f17aee7a648f172713&language=en-US&page=1')
        .then(response => response.json())
        .then(data => setmovies(data.results))
    },[])

    return(
        
        <Container>
            <h1>Cartaz Cinema:</h1>
            <MovieList >
                {movies.map(movie => {
                    return(
                        <Movie key={movie.id}>
                        <Link to={`/Details/${movie.id}`} ><img src={`${image_path}${movie.poster_path}`} /></Link>
                         <span>{movie.title}</span>
                     
                     </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;