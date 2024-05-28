import React, { useEffect, useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import './ImageSliderContainer.css';

const ImageSliderContainer = () => {

    const [isHovered, setIsHovered] = useState(false);

    const flags = ['Radar Image', 'Thermal Image'];

  return (
    <div className="image-slider-container"
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
      >
      <div className='flag-container left'>
        <div className='flag' style={{ display: isHovered ? 'flex' : 'none'}}>{flags[0]}</div>
      </div>

      <div className="flag-container right">
        <div className='flag' style={{ display: isHovered ? 'block' : 'none'}}>{flags[1]}</div>
      </div>


          <ReactCompareImage
              className="slider"
              leftImage="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2024/05/iceberg_a-83_breaks_free/26094469-6-eng-GB/Iceberg_A-83_breaks_free_pillars.jpg"
              rightImage="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2024/05/thermal_image_of_a-83_iceberg/26095691-3-eng-GB/Thermal_image_of_A-83_iceberg_pillars.jpg"
          />
    </div>
  )
}

export default ImageSliderContainer;