import React from 'react';
// import { render } from '@testing-library/react';
// import images from './images'
import './AnimatedImg.css';


const AnimatedImg = () => {

  let a = ([require ('../images/dosa.jpeg'),require('../images/unoa.jpeg')]);
  var b = [require ('../images/dosb.jpeg'), require ('../images/unob.jpeg')];
  var c = [require ('../images/dosc.jpeg'), require ('../images/unoc.jpeg')];
  var i=0;

function imgChange(){

  if (i===a.length-1){
    i=0;
  } else{ 
    i=i+1;
  }
  setTimeout(() => {
     document.getElementById("imguno").src=a[i]; 

  }, 2000);

  setTimeout(() => {
    document.getElementById("imgdos").src=b[i]; 
  }, 4000)

  setTimeout(() => {
     document.getElementById("imgtres").src=c[i]; 
     imgChange();
  },6000)
}

  return(
    <div className="adaptable"  onLoad={imgChange()}>

      <div className='divimguno'>
        <img className='imguno' Id='imguno' src='' alt=""/>
      </div>

    <div className='divimgdos'>
      <img className='imgdos'  Id='imgdos' src='' alt=""/>
    </div>

    <div className='divimgtres'>
      <img className='imgtres'  Id='imgtres' src='' alt=""/>
    </div>

    </div>
  )
}

export default AnimatedImg;