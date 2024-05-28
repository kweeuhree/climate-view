import React from 'react';
import ImageSliderContainer from '../ImageSliderContainer/ImageSliderContainer';
import './Iceberg.css'

const Iceberg = () => {
  return (
    <article classname="iceberg-article">

            <div className='description'>
            The radar image on the left, 
            captured by the <span>
                <a 
                href={'https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-1'}
                target="_blank"
                rel="noopener noreferrer"
                >Copernicus Sentinel-1 mission</a>
            </span>, 
            shows the 380 sq km triangular iceberg on 22 May 2024. 
            The thermal image on the right shows brightness temperature data 
            from the 
            <span>
                <a
                href="https://landsat.gsfc.nasa.gov/satellites/landsat-8/landsat-8-mission-details/"
                rel="noopener noreferrer"
                target="_blank">
                US Landsat 8 mission</a>
            </span>.
            </div>
            <div className='description'>
                On May 20th, 2024, an iceberg measuring 380 square kilometers (~147 mi2) broke off the Brunt Ice Shelf in Antarctica.
            </div>

            {/* image slider container */}
                <ImageSliderContainer />

            {/* image slider context and description */}
            <div className='image-slider-context'>
                <div className="description">
                The ongoing loss of Antarctic ice is one of the clearest indications of 
                rising global temperatures and a dire warning.

                In addition to contributing to rising sea levels, 
                coastal flooding, and extreme weather, the loss of polar ice 
                leads to additional solar radiation being absorbed by Earth's oceans, 
                causing temperatures to rise further.
                </div>
                <div>
                <img 
                    src={'https://www.sciencealert.com/images/2024/05/AntarcticaLandsatMap.jpg'} 
                    alt="NASA reference map of Antarctica highlighting the location of Iceberg A-83 on the Brunt Ice Shelf." />
                </div>
            </div>
    </article>
  )
}

export default Iceberg;