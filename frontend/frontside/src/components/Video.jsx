import React from 'react';
import ReactPlayer from 'react-player';
import TempVideo from '../assets/MODAL2_M_CLD_FR-MOD_LSTAD_M.mp4';

const Video = () => {

  return (
    <div>
      <ReactPlayer 
        url={TempVideo}
        width="600"
        playing={true}
        loop={true}
        muted={true} 
        controls={true}
      />
    </div>
  )
}

export default Video;
