import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

// TODO: move this out to APP
export default class Nav extends Component{
  render() {
    return(
      <div className='Nav'>
        <nav>
          <a href='http://victoralvarezdiary.tumblr.com/' target="_blank" rel='noopener'>
            DIARY
          </a>
          <NavLink to='/contact'>
            CONTACT
          </NavLink>
        </nav>
      </div>
    )
  }
}