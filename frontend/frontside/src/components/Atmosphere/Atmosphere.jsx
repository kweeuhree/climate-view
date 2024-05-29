import React from 'react';
import Video from './Video';
import Header from '../Header';

const Atmosphere = () => {
  return (
    <article className='atmospehere-article'>
        <Header header={'atmosphere'} />
      <div className='video-container'>
        <Video />
        <div className='description video-description'>Clouds help to cool Earth. Further reading: <span>
            <a target="_blank" rel="noreferrer noopener" href="https://neo.gsfc.nasa.gov/">NASA Earth Observations</a></span></div>
       </div>
    </article>
  )
}

export default Atmosphere;