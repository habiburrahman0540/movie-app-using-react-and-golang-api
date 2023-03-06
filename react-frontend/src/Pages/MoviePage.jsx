import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
const MoviePage = () => {
    const [movie,setMovie] = useState({})
    const {id} =useParams();
    useEffect(()=>{
       const myMovie = {
        id:1,
        title:"Highlander",
        release_date: "1986-03-07",
        runtime:116,
        mpaa_rating:'R',
        description:"This movie is awesome history"
      }
      setMovie(myMovie)
    },[id])
  return (
    <div className=''>
        <h2 className=''>Movie: {movie.title}</h2>
        <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}</em></small>
        <hr className=''></hr>
        <p>{movie.description}</p>
    </div>
  )
}

export default MoviePage
