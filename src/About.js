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


          <div className='maybe'>I am... </div>
            <div className='summary'>
              <div className='summaryuno'><img className='imageAbout' src='https://www.einfochips.com/blog/wp-content/uploads/2019/11/a-blueprint-on-device-engineering-services-featured-Image.jpg' alt=''/> </div>
              <div className='summarydos'>
                <p className='parrafo'>A person that wants to create...</p>
                <p className='parrafo'>It doesn't matter about your edge or your experience. 
                If you find something that you love and you are willing 
                to work hard to get it, you can fulfill your 
                aspirations...</p>
              </div>
            </div>

          <div className='maybe'>What I want? </div>
            <div className='summary'>
              <div className='summaryuno'>
              <p className='parrafo'>
                I want to create practical solutions 
                for problems that exist, as well as trying to prevent 
                problems from ocurring. I want to do this so I can help to improve 
                the quality of people's lives. 
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
