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
            1
          </div>
          <div className='maybedos'>
            2
          </div>
          <div className='maybetres'>
            3
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
