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
          <NavLink to='/'><h1>Victor Alvarez</h1></NavLink>
        </header>
        <nav>
          <a href='http://victoralvarezdiary.tumblr.com/' target="_blank" rel='noopener'>
            DIARY
          </a>
          <NavLink to='/contact'>
            CONTACT
          </NavLink>
        </nav>
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
        </main>
        
      </div>
    );
  }
}

export default App;
