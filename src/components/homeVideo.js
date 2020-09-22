import React from 'react'
import ReactPlayer from 'react-player'

const VideoHome = () => {
    return(
        <>
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
      </>
    )
}

export default VideoHome


