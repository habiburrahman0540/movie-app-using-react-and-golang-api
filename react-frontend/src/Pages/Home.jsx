import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/admit-one.jpg'
const Home = () => {
  return (
    <div className='text-center'>
        <h1>Find a movie to watch tonight!</h1>
        <hr className=''></hr>
        <Link to='/movies'>
          <img src={Image} alt="movie-ticket" />
        </Link>
       
    </div>
  )
}

export default Home
