import React, {Component} from "react";
// import ./images;
import './About.css';

class about extends Component{
  render(){
    return(
      <div className="grandivab">
        <div className='littledivab'>
          <div className="WhoAmI">
            <div className="who">
              <span className='bio'>Who Am I? </span>
              <p className='iAsk'>I ask the same question to myself everyday!</p>
            </div>
            <div className="whoIAmDiv">
              <img className="whoAmIPic" src={require('./images/WhoAmI.png')} yar alt=''/>
            </div>
          </div>

          <div className="MynameStyleC">
            <span>MBA | Scrum Product Owner | Electronic Engineer | Developer</span>
          </div>

          <div className='maybeuno'>
            I am a creator, a person created to create 
          </div>
          <div className='maybedos'>
            what I want? to create practical solutions for problems
            so i can improve the life quality of persons 
          </div>
          <div className='maybetres'>
            Como lo hago? analizando el origen del problema, 
            detectando inconsistencia de datos,
            estrategizando planes agiles  

          </div>
          <div className='maybecuatro'>
            4
          </div>

        </div>
      </div>

    )
  }
}

export default about;
