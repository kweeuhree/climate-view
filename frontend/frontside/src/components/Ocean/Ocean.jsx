import React from 'react';
import ImageSliderContainer from '../ImageSliderContainer/ImageSliderContainer';
import Header from '../Header';
import './Ocean.css';

const Ocean = () => {

    const descriptions = {
        beforeImage:`As greenhouse gases trap more energy from the sun, 
        the oceans are absorbing more heat, resulting in an increase 
        in sea surface temperatures and rising sea level. Changes in ocean 
        temperatures and currents brought about by climate change will lead 
        to alterations in climate patterns around the world. For example, 
        warmer waters may promote the development of stronger storms in the 
        tropics, which can cause property damage and loss of life.`,
        afterImage: `These photographs of the Acropora palmata zone 
        on Carysfort Reef, Key Largo, FL were taken from the same vantage 
        point from 1975 to 2014. They document the loss of over 95% of the 
        living coral cover.`,
        context: `Changes in ocean systems generally occur over much longer 
        time periods than in the atmosphere. Even if greenhouse gas emissions 
        were stabilized tomorrow, it would take many more years—decades to 
        centuries—for the oceans to adjust to changes in the atmosphere 
        and the climate that have already occurred.`
    };

    const imageSliderUrl = {
        leftImage: `https://biospherefoundation.org/wp-content/uploads/2014/09/1975-1024x670.jpg`,
        rightImage: `https://biospherefoundation.org/wp-content/uploads/2014/09/2014-1024x683.jpg`
    };

    const flags = ['Before', 'After'];


  return (
    <article className="ocean-article">
        <Header header={'ocean'} />

        <div className="description">{descriptions.beforeImage}</div>
         {/* image slider container */}
         <ImageSliderContainer images={imageSliderUrl} flags={flags} />
         <div className="quarter-spacer"></div>
         <div className="description">{descriptions.afterImage}</div>
        <div className="ocean-slider-context">
            <div className="description">{descriptions.context}</div>
        </div>
    </article>
  )
}

export default Ocean;