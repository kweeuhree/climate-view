import React from 'react';
// import './ImageContainerStyle.css';

const ImageContainer = ({url, alt}) => {

  return (

    <div className="image-container">
        {/* pass url and alt */}
        <img src={url} alt={alt} />
    </div>
  )
}

export default ImageContainer;