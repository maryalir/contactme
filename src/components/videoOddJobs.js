import React from 'react'
import ReactPlayer from 'react-player'
import '../Portada.css'

const VideoOddJobs = () => {
    return(
        <>
        <div className='mitadPageDos'>
            <div className='presentationScreen'>
                <ReactPlayer
                    url='src/videos/OddJobs-Demo1.mov'
                    // className={reactPlayer}
                    playing= {false} 
                    controls
                    autoPlay = {false}
                    width='100%'
                    height='200%'
                />
            </div>
            <div className='webSiteLink'>
                <link src='' /><a href="https://www.mozilla.org/es-ES/" blank='true'>Go to website</a>
            </div>
        </div>
      </>
    )
}

export default VideoOddJobs


