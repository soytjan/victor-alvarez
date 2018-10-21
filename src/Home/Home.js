import React from 'react';
import './Home.css';
import image from '../assets/home-photo.jpg';

const Home = () => {
  return (
    <div className='Home'>
      <img src={image} alt='Cecilia Gomez by Victor Alvarez Studio' />
      <p className='coming-soon'>Coming soon...</p>
    </div>
  )
}

export default Home;  