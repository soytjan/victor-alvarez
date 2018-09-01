import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component{
  render() {
    return(
      <div className='Nav'>
        <nav>
          <NavLink to='/diary'>
            Diary
          </NavLink >
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </nav>
      </div>
    )
  }
}