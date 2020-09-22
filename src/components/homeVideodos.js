import React from 'react'
import ReactPlayer from 'react-player'

const VideoHomedos = () => {
    return(
        <>
        <div className='presentationScreen'>
            <ReactPlayer
                url='https://drive.google.com/file/d/1CqOyWSmoWkhZ3nylQZgdjpNdPPnBJp1q/vie'
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

export default VideoHomedos


