import React from 'react'

const ImageContainer = ({url, alt}) => {
  return (
    <div className="image-container">
        <img src={url} alt={alt} />
    </div>
  )
}

export default ImageContainer;