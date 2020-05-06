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
        document.getElementById("imguno").src=a[i]; 
      }, 1500);

      setTimeout(() => {
        document.getElementById("imgdos").src=b[i]; 
        imgChange();
      }, 3000);

    // setTimeout(() => {
    //   document.getElementById("imgtres").src=c[i]; 
    //   imgChange();
    // },4500);
  }

  return(
    <div className="adaptable"  onLoad={imgChange()}>

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