import React from 'react'
import ReactPlayer from 'react-player'
import '../Portada.css'

const VideoStarWars = () => {
    return(
        <>
        <div className='mitadPageDos'>
            <div className='presentationScreen'>
                <ReactPlayer
                    url='https://leo.nyc3.digitaloceanspaces.com/swapi-pics/charactersVideo%20(online-video-cutter.com)%20(1).mp4'
                    // className={reactPlayer}
                    playing= {false} 
                    controls
                    autoPlay = {false}
                    width='100%'
                    height='200%'
                />
            </div>
            <div className='webSiteLink'>
                <link src='' /><a href="https://www.mozilla.org/es-ES/" blank='true'>Go to   website</a>
            </div>
        </div>
      </>
    )
}


export default VideoStarWars


