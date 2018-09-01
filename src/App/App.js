import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Diary from '../Diary/Diary';
import Contact from '../Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to='/'><h1>Victor Alvarez</h1></NavLink>
        </header>
        <Nav />
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/diary' component={Diary} />
          <Route exact path='/contact' component={Contact} />
        </main>
        
      </div>
    );
  }
}

export default App;
