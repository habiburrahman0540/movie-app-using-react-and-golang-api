import React from 'react'
import Image from '../images/admit-one.jpg'
const Home = () => {
  return (
    <div className='text-center'>
        <h1>Find a movie to watch tonight!</h1>
        <hr className=''></hr>
        <img src={Image} alt="movie-ticket" />
    </div>
  )
}

export default Home
