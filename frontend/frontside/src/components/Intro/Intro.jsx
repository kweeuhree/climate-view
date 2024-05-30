import React, { useState, useEffect } from 'react';
import './Intro.css';
import Header from '../Header';

const Intro = () => {

  // set state to trigger onload timer
  const [loaded, setLoaded] = useState(false);

  // onmount set a timer to trigger soft appearance of text
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true); // trigger new style
    }, 150); // timeout

    return () => clearTimeout(timer); // clean up
  }, []);

  // text to display on the page
  const descriptions = {
    intro1: `Widespread and rapid changes in the atmosphere, ocean, cryosphere and biosphere have
    occurred. Human-caused climate change is already affecting many weather and climate
    extremes in every region across the globe.`,
    intro2: `This has led to widespread adverse impacts and
    related losses and damages to nature and people. Vulnerable communities
    who have historically contributed the least to current climate change are disproportionately
    affected`,
    afterImage: ` Carbon dioxide emissions from fossil fuels reached another 
    record high in 2023, according to a `,
    linkText: `Global Carbon Project study.`
    };

  return (
    <article className="intro-article">

        {/* header */}
        <Header header={'climate view'} />
        <div className='quarter-spacer'></div>

        {/* main article, apply style dynamically */}
        <div className={`intro-text ${loaded ? 'fade-in' : ''}`}>
            <div className='description'>{descriptions.intro1}</div>
            <div className='description'>{descriptions.intro2}</div>
        </div>

        <div className="gif-div">  
         
            <div className="description">
            {descriptions.afterImage}
                <span>
                  {/* external link */}
                <a 
                    target="_blank" 
                    rel="noreferrer noopener"
                    href="https://essd.copernicus.org/articles/15/5301/2023/"
                    > {descriptions.linkText}</a>
                </span>
            </div>

            {/* gif */}
            <div className="gif">
                    <img 
                            src='https://media.licdn.com/dms/image/D5610AQEii3Qb0GPARg/image-shrink_800/0/1701811163703?e=1717549200&v=beta&t=CCQZGtUW90F28BFJj9ck8c0d2LJF2MRs0y_adEfelEM' 
                            alt="Earth surrounded by Carbon Monoxide gas" 
                        />
            </div>
        </div>
        <div className="description">Further reading: 
           <span>
            {/* external link */}
             <a 
                target="_blank" 
                rel="noreferrer noopener"
                href="https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf"> 
                    &nbsp;A Report of the Intergovernmental Panel on Climate Change, 2023
                </a>
            </span>
        </div>
        <div className="quarter-spacer"></div>
    </article>
  )
}

export default Intro;