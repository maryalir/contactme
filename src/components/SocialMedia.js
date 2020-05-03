import React from 'react';
import './SocialMedia.css'


const SocialMedia = () => {

    function linkLinkedIn() {
      window.open("https://www.linkedin.com/in/maryalirondon/","_blank", "width=100, height=100");
    };

    function downloadResume() {
      
    };

  return(

    <div className='divSocial'>
      <p className='titleContactme'>Contact Me</p>

      <div onClick={() => linkLinkedIn()} className='divlinkedIn' >
        <img className='iconLinkedin' src={'https://seeklogo.net/wp-content/uploads/2012/03/linkedin-icon-logo-vector.png'} alt="soy LinkedIn Icon"/>
        <span className="textLinkedIn">Connect with me on linkeIn</span>
      </div>

      <div className='divResume' >
        <img className='iconPdf' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png'} alt="soy LinkedIn Icon"/>
        <span className="textResume">Download my resume</span>
      </div>


    </div>
  )
}

export default SocialMedia;
