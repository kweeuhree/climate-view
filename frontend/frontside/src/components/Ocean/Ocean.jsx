import React from 'react';
import ImageSliderContainer from '../ImageSliderContainer/ImageSliderContainer';
import Header from '../Header';
import './Ocean.css';

const Ocean = () => {

    const descriptions = {

    };

    const imageSliderUrl = {
        leftImage: `https://biospherefoundation.org/wp-content/uploads/2014/09/1975-1024x670.jpg`,
        rightImage: `https://biospherefoundation.org/wp-content/uploads/2014/09/2014-1024x683.jpg`
    };

    const flags = ['Before', 'After'];


  return (
    <article className="ocean-article">
        <Header header={'ocean'} />


         {/* image slider container */}
         <ImageSliderContainer images={imageSliderUrl} flags={flags} />
    </article>
  )
}

export default Ocean;