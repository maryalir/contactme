import React, {Component} from 'react';
import './Contact.css';
import ContactComp from './components/ContactComp';
import Animatedimg from './components/AnimatedImg';
import SocialMedia from './components/SocialMedia';

class Contact extends Component{
  
  render(){
    return(
      <div className='grandivcont'>
        <div className='littledivcont'>
          <div className='divuno'>
            <div className='contactinf'>
              <SocialMedia />
            </div>
            <div className='animatedimg'>
              <Animatedimg />
            </div>
          </div>
         
          <div className='contactform'>
            <ContactComp />
          </div>
        </div>
      </div>

    )
  }

//   componentWillUnmount(){
// console.log("no me estoy refrescando")

//   window.addEventListener('beforeunload',   this.preventDefault());
//   }
}

export default Contact;
