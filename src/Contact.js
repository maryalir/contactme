import React, {Component} from 'react';
import axios from 'axios';
import './Contact.css';
import ContactComp from './components/ContactComp';

class Contact extends Component{
  
  render(){
    return(
      <div className='grandivcont'>
        <div className='littledivcont'>
          <div className='divuno'>
            <div className='contactinf'>
              <span className="">connect with me on linkeIn</span>
              <span className="">Download Resume</span>
            </div>
            <div className='animatedimg'>
              <span className="">Imagenes animadas van aqui</span>
            </div>
          </div>
         
          <div className='contactform'>
            <ContactComp />
          </div>
        </div>
      </div>

    )
  }
}

export default Contact;
