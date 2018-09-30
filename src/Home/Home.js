import React from 'react';
import './Home.css';
import image from '../assets/home-photo.jpg';

const Home = () => {
  return (
    <div className='Home'>
      <p className='coming-soon'>Coming soon...</p>
      <img src={image} />
    </div>
  )
}

export default Home;  