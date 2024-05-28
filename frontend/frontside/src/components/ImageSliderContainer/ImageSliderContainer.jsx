import React, { useEffect, useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import './ImageSliderContainer.css';

const ImageSliderContainer = ({images, flags}) => {

  // isHovered state triggers appearance of image flags
    const [isHovered, setIsHovered] = useState(false);


  return (
      
    <div className="image-slider-container"
    // change state on mouse enter and mouse leave
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
      >
        {/* dynamically apply style */}
      <div className={`flag-container left ${isHovered ? 'soft-appear' : ''}`}>
        <div className='flag'>{flags[0]}</div>
      </div>

      <div className={`flag-container right ${isHovered ? 'soft-appear' : ''}`}>
        <div className='flag'>{flags[1]}</div>
      </div>

        {/* image container */}
          <ReactCompareImage
              className="slider"
              leftImage={images.leftImage}
              rightImage={images.rightImage}
          />

    </div>
  )
}

export default ImageSliderContainer;