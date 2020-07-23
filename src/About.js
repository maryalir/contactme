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


          <div className='maybe'>I am a creator </div>
            <div className='summary'>
              <div className='summaryuno'><img className='imageAbout' src='https://www.ecs.soton.ac.uk/sites/www.ecs.soton.ac.uk/files/ECS-embedded-system-boxgrid-480x297.png' alt=''/> </div>
              <div className='summarydos'>
                <p className='parrafo'>A person created to create...</p>
                <p className='parrafo'>Sometimes, doesn't matter your edge or experience, 
                you found something that you love and you are able 
                to start from zero to get it, to fulfill your 
                creator side...</p>
              </div>
            </div>

          <div className='maybe'>What I want? </div>
            <div className='summary'>
              <div className='summaryuno'>
              <p className='parrafo'>
                I want to create practical solutions 
                for people's problems, so I can help to improve 
                their quality life. 
              </p>
              </div>
              <div className='summarydos'> <img className='imageAbout' src='https://specials-images.forbesimg.com/imageserve/5e91e9f381295f00079a210b/960x0.jpg?fit=scale' alt=""/> </div>
            </div>

          <div className='maybe'>How I do it?</div>
            <div className='summary'>
            <div className='summaryuno'> <img className='imageAbout' src='https://www.msystraining.com/wp-content/uploads/2019/04/Agile-project.jpg' alt=""/> </div>
              <div className='summarydos'> 
                <p className='parrafo'>
                  <li>Analyzing problems from its origin.</li>  
                  <li>Detecting data inconsistency.</li>
                  <li>Creating agile action strategies.</li>
                  <li>Generating the right outcomes.</li>
                </p>
              </div>
            </div>

          <div className='maybe'>
            Some More...
          </div>
          <div>
            <img className="mobius" src='https://scrumtraininginstitute.com/wp-content/uploads/2020/02/mobius-agile-outcome-delivery-article.jpg' alt="" />
          </div>

        </div>
      </div>

    )
  }
}

export default about;
