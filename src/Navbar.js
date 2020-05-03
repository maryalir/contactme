import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
 

class Navbar extends Component {

  render(){
    return(
      <header>
      <nav className="navBar">
        <ul>
          {/* <li className='home'><i class="w3-jumbo w3-spin fa fa-home"></i> */}
          <li className='home'>
            <NavLink exact to="/">
              <i className="	fas fa-laptop-house">
              </i>
              <span> </span>HOME
            </NavLink>
          </li>
          <li className='about'>
            <NavLink exact to= "/About/">
              <i className='far fa-grin-beam-sweat'>
              </i> 
              <span> </span>ABOUT ME
            </NavLink>
          </li>
          <li className='contact'>
            <NavLink exact to="/Contact/">
              <i className='far fa-comment-dots'>
              </i> 
              <span> </span>ContactME!
            </NavLink>
          </li>
        </ul>
      </nav>
      </header>
    )
  }
}

export default Navbar;