import React, { useEffect, useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import './ImageSliderContainer.css';

const ImageSliderContainer = () => {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <ReactCompareImage
        onMouseOver={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        leftImage="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2024/05/iceberg_a-83_breaks_free/26094469-6-eng-GB/Iceberg_A-83_breaks_free_pillars.jpg"
        rightImage="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2024/05/thermal_image_of_a-83_iceberg/26095691-3-eng-GB/Thermal_image_of_A-83_iceberg_pillars.jpg"
     />
  )
}

export default ImageSliderContainer;