import React, { useRef, useEffect, useState } from 'react';
import Video from './Video';
import Header from '../Header';
import ImageContainer from '../ImageContainer';
import './AtmosphereStyle.css';
//map images
import image15 from '../../assets/atmosphereImages/image15.png';
import image20 from '../../assets/atmosphereImages/image20.png';
import image30 from '../../assets/atmosphereImages/image30.png';
import image40 from '../../assets/atmosphereImages/image40.png';

const Atmosphere = () => {

   //trigger animation once images are in view
    const [isInView, setIsInView] = useState(false);
    //reference for the container with images
    const imagesParentRef = useRef(null);

    //observe intersections with viewport
    useEffect(() => {
      //create a new IntersectionObserver object
      const observer = new IntersectionObserver((entries) => {

        // entry object provides information about a single intersection between 
        // a target element and its root container
        entries.forEach((entry) => {

          // if observed element is currently intersecting with the root container
          if (entry.isIntersecting) {
            //change isInView state, trigger map animations
            setIsInView(true);
            // from the list of elements being observed by the observer
            observer.unobserve(entry.target);
          }
        });
      });
  
      //if images parent exists start observing
      if (imagesParentRef.current) {
        observer.observe(imagesParentRef.current);
      }
  
      return () => { // clean up
        if (imagesParentRef.current) {
          //stop observing once unmounted
          observer.unobserve(imagesParentRef.current);
        }
      };
    }, []);

    // text to be displayed on the page
    const descriptions = {
        context: `Carbon dioxide in the atmosphere warms the planet, 
        causing climate change.`,
        tempContext: `The likely range of total human-caused global surface temperature 
        increase from 1850–1900 to 2010–2019 is 0.8°C to 1.3°C, with a best estimate of 1.07°C. Over this period, it is likely that well-mixed greenhouse gases (GHGs) contributed
       a warming of 1.0°C to 2.0°C`
    };

    // images and respective degree
    const images = [[image15, '1.5'], [image20, '2'], [image30, '3'], [image40, '4']];

    //display images and degrees
    const imagesJSX = images.map((item, index) => (
      //dynamically apply animation
      <div key={`image-${index}`} className={`image-parent  ${isInView ? 'animate' : ''}`}>

        <div className='temp-increase'><div>{item[1]}°C</div></div>
        {/* Image container */}
        <ImageContainer 
          url={item[0]} 
          alt={`Earth map with temperature increased by ${item[1]}C`} 
        />
        {/* old line */}
        {/* <img src={item[0]} alt={`Earth map with temperature increased by ${item[1]}C`} /> */}
        
      </div>
    ));

  return (
    <article className='atmosphere-article'>

        {/* Header */}
        <Header header={'atmosphere'} />
        
        {/* main article */}
        <div className="map-image-container">

          {/* set up images parent reference and display images */}
           <div ref={imagesParentRef} className='all-images-parent'>{imagesJSX}</div>
            <div className="description temp-context">
                <div className='width-narrow'>{descriptions.context} </div>
                <br /><br />
                <div>{descriptions.tempContext}</div>
            </div>
        </div>

      {/* Video */}
      <div className='video-container'>
        <Video />

        {/* nasa link */}
        <div className='description video-description'>Clouds help to cool Earth. Further reading: <span>
            <a target="_blank" rel="noreferrer noopener" href="https://neo.gsfc.nasa.gov/">NASA Earth Observations</a></span></div>
       </div>
    </article>
  )
}

export default Atmosphere;