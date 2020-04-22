import React, {Component} from 'react';
import './Contact.css';
import ContactComp from './components/ContactComp';
// import './images';
import Animatedimg from './components/AnimatedImg';

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
              {/* <span className="">Imagenes animadas van aqui</span> */}
              <Animatedimg />
                  {/* <img onLoad='imgChange' Id='imguno' src={require ('./images/unob.jpeg')} alt="hola"/> */}
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
