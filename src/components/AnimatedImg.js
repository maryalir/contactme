import React from 'react';
// import { render } from '@testing-library/react';
// import images from './images'
import './AnimatedImg.css';


const AnimatedImg = () => {

  let a = [require ('../images/dosa.jpeg'),require('../images/unoa.jpeg'), require ('../images/unoc.jpeg')];
  let b = [require ('../images/dosc.jpeg'),require ('../images/unob.jpeg'), require ('../images/dosb.jpeg')];
  // var c = [require ('../images/dosc.jpeg'), require ('../images/unoc.jpeg')];
  var i=0;


  function imgChange(){
    
      if (i===a.length-1){
        i=0;
      } else{ 
        i=i+1;
      }
      setTimeout(() => {
        document.getElementById("imguno") 
        ? document.getElementById("imguno").src=a[i] 
        :  alto();
        console.log("estoy entrando al bucle")
      }, 1500);

      setTimeout(() => {
        document.getElementById("imgdos") 
        ? document.getElementById("imgdos").src=b[i] 
        : alto(); 
        console.log("estoy entrando al bucle tambien")
        imgChange();
      }, 3000);
     
    // setTimeout(() => {
    //   document.getElementById("imgtres").src=c[i]; 
    //   imgChange();
    // },4500);
  }

  function alto(){
    // e => e.preventDefault();
    console.log("estoy siendo llamado");
    clearTimeout();
  }



  return(
    <div className="adaptable"  onLoad={imgChange()
    }>

      <div className='divimguno'>
        <img className='imguno' id='imguno' src='' alt=""/>
      </div>

    <div className='divimgdos'>
      <img className='imgdos'  id='imgdos' src='' alt=""/>
    </div>

    {/* <div className='divimgtres'>
      <img className='imgtres'  id='imgtres' src='' alt=""/>
    </div> */}

    </div>

    
  )
}

export default AnimatedImg;