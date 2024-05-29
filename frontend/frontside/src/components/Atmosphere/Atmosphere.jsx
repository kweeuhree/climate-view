import React from 'react';
import Video from './Video';
import Header from '../Header';
import './AtmosphereStyle.css';
import image15 from '../../assets/atmosphereImages/image15.png';
import image20 from '../../assets/atmosphereImages/image20.png';
import image30 from '../../assets/atmosphereImages/image30.png';
import image40 from '../../assets/atmosphereImages/image40.png';

const Atmosphere = () => {

    const descriptions = {
        context: `Carbon dioxide in the atmosphere warms the planet, 
        causing climate change.`
    };
    const images = [[image15, '1.5'], [image20, '2'], [image30, '3'], [image40, '4']];
    const imagesJSX = images.map((item, index) => (
      <div key={`image-${index}`} className='image-parent'>

        <div className='temp-increase'><div>{item[1]}°C</div></div>
        <img src={item[0]} alt={`Earth map with temperature increased by ${item[1]}C`} />
        
      </div>
    ));

  return (
    <article className='atmospehere-article'>
        <Header header={'atmosphere'} />
        <div className="map-image-container">
           <div className="all-images-parent">{imagesJSX}</div>
            <div className="description">
                {descriptions.context}
            </div>
        </div>

      <div className='video-container'>
        <Video />
        <div className='description video-description'>Clouds help to cool Earth. Further reading: <span>
            <a target="_blank" rel="noreferrer noopener" href="https://neo.gsfc.nasa.gov/">NASA Earth Observations</a></span></div>
       </div>
    </article>
  )
}

export default Atmosphere;