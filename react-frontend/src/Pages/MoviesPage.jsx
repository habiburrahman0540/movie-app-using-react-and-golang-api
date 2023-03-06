import React from 'react'
import { useEffect } from 'react';
import {useState} from "react"
import {Table} from "react-bootstrap"
import { Link } from 'react-router-dom';
const MoviesPage = () => {
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
      const moviesList =[
        {
          id:1,
          title:"Highlander",
          release_date: "1986-03-07",
          runtime:116,
          mpaa_rating:'R',
          description:"This movie is awesome history"
        },
        {
          id:2,
          title:"Raiders of the lost art",
          release_date: "1981-06-12",
          runtime:115,
          mpaa_rating:'pg-13',
          description:"This movie is awesome history"
        },
      ]
      setMovies(moviesList)
  })
  return (
    <div className=''>
    <h1 className='text-center'>Movies Page</h1>
    <hr className=''></hr>
    <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th>Movie</th>
          <th>Release Date</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie)=>(
          <tr key={movie.id}>
          <td>
            <Link to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </td>
          <td>{movie.release_date}</td>
          <td>{movie.mpaa_rating}</td>
        </tr>
        ))}
      
      </tbody>
    </Table>
</div>
  )
}

export default MoviesPage
