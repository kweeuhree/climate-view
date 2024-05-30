import React from 'react';
import Header from '../Header';
import ImageContainer from '../ImageContainer';
import './Amazon.css';

const Amazon = () => {

    // text to display on the page
    const descriptions = {
        intro: `Forests cover nearly one-third of the land area on our planet 
        and are home to most of the world’s life on land. They are also essential 
        to human health, purifying our water and air and serving as our first line of 
        defense against new infectious diseases.`,
        beforeImage: `But forests across the globe are under threat. 
        Deforestation is a particular concern in tropical rain forests 
        because these forests are home to much of the world’s biodiversity. 
        In the Amazon alone, around 17% of the forest has been lost in 
        the last 50 years, mainly due to forest conversion for cattle ranching.`,
        afterImage: `The sequence of natural-color Landsat images above highlights 
        deforestation playing out between 2000-2019 around BR-163, 
        a key highway in Para first built in 1976 but only completely paved in 2019. 
        It links soy-growing areas in the southern Amazon rainforest with 
        an ocean-going port on the Amazon River.`
    }

  return (
    <article className='amazon-article'>

        {/* header */}
        <Header header={'deforestation'} />

        {/* main article*/}
        <div className='description'>{descriptions.intro}</div>
        <div className="display-flex flex-center">
            
            {/* image container */}
            <ImageContainer 
                url="https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145888/br163defores_tmo_amo_2019.gif"
                alt={"Amazon timeline"}
            />

            <div className='description'>{descriptions.beforeImage}</div>
        </div>
        <div className="description">{descriptions.afterImage}</div>

    </article>
  )
}

export default Amazon;