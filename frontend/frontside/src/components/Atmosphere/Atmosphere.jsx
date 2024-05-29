import React, { useRef, useEffect, useState } from 'react';
import Video from './Video';
import Header from '../Header';
import './AtmosphereStyle.css';
import image15 from '../../assets/atmosphereImages/image15.png';
import image20 from '../../assets/atmosphereImages/image20.png';
import image30 from '../../assets/atmosphereImages/image30.png';
import image40 from '../../assets/atmosphereImages/image40.png';

const Atmosphere = () => {

    const [isInView, setIsInView] = useState(false);
    const imagesParentRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      });
  
      if (imagesParentRef.current) {
        observer.observe(imagesParentRef.current);
      }
  
      return () => { // clean up
        if (imagesParentRef.current) {
          observer.unobserve(imagesParentRef.current);
        }
      };
    }, []);

    const descriptions = {
        context: `Carbon dioxide in the atmosphere warms the planet, 
        causing climate change.`,
        tempContext: `The likely range of total human-caused global surface temperature 
        increase from 1850–1900 to 2010–2019 is 0.8°C to 1.3°C, with a best estimate of 1.07°C. Over this period, it is likely that well-mixed greenhouse gases (GHGs) contributed
       a warming of 1.0°C to 2.0°C`
    };

    const images = [[image15, '1.5'], [image20, '2'], [image30, '3'], [image40, '4']];

    const imagesJSX = images.map((item, index) => (
      <div key={`image-${index}`} className={`image-parent  ${isInView ? 'animate' : ''}`}>

        <div className='temp-increase'><div>{item[1]}°C</div></div>
        <img src={item[0]} alt={`Earth map with temperature increased by ${item[1]}C`} />
        
      </div>
    ));

  return (
    <article className='atmospehere-article'>
        <Header header={'atmosphere'} />
        <div className="map-image-container">
           <div ref={imagesParentRef} className={`all-images-parent`}>{imagesJSX}</div>
            <div className="description temp-context">
                {descriptions.context} 
                <br /><br />
                {descriptions.tempContext}
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