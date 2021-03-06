import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to='/' className='header-link'><h1>Victor Alvarez</h1></NavLink>
        </header>
        <nav>
          <a href='http://victoralvarezdiary.tumblr.com/' target="_blank" rel="noopener noreferrer">
            DIARY
          </a>
          <NavLink to='/contact'>
            CONTACT
          </NavLink>
          <a href='https://www.instagram.com/victoralvarezstudio/'  target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> </a>
        </nav>
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <p className='hidden'>Victor Alvarez is a photographer based in Madrid.</p>
        </main>
        
      </div>
    );
  }
}

export default App;
