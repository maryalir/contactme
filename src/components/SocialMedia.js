import React from 'react';
import './SocialMedia.css'
import pdf from '../pdf/Maryali V. Rondon Resume.pdf'


const SocialMedia = () => {

    function linkLinkedIn() {
      window.open("https://www.linkedin.com/in/maryalirondon/","_blank");
    };

    function downloadResume() {
      window.open(`${pdf}`, "_blank")
    };

  return(

    <div className='divSocial'>
      <p className='titleContactme'>Contact Me</p>

      <div onClick={() => linkLinkedIn()} className='divlinkedIn' >
        <img className='iconLinkedin' src={'https://seeklogo.net/wp-content/uploads/2012/03/linkedin-icon-logo-vector.png'} alt="soy LinkedIn Icon"/>
        <span className="textLinkedIn">Connect with me on LinkedIn</span>
      </div>

      <div onClick={() => downloadResume()} className='divResume' >
        <img className='iconPdf' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png'} alt="soy LinkedIn Icon"/>
        <span className="textResume">Get my resume</span>
      </div>


    </div>
  )
}

export default SocialMedia;
