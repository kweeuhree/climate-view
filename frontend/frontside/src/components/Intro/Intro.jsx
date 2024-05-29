import React from 'react';
import './Intro.css';

const Intro = () => {

  const descriptions = {
    afterImage: ` Carbon dioxide emissions from fossil fuels reached another 
    record high in 2023, according to a `,
    linkText: `Global Carbon Project study.`
    };

  return (
    <article className="intro-article">
        <div className="gif-div">
            <img 
                src='https://media.licdn.com/dms/image/D5610AQEii3Qb0GPARg/image-shrink_800/0/1701811163703?e=1717549200&v=beta&t=CCQZGtUW90F28BFJj9ck8c0d2LJF2MRs0y_adEfelEM' 
                alt="Earth surrounded by Carbon Monoxide gas" 
            />
        </div>
        <div className="description">
        {descriptions.afterImage}
            <span>
              <a 
                target="_blank" 
                rel="noreferrer noopener"
                href="https://essd.copernicus.org/articles/15/5301/2023/"
                > {descriptions.linkText}</a>
            </span>
        </div>
    </article>
  )
}

export default Intro;