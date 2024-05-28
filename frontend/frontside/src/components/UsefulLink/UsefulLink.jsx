import React from 'react';
import './UsefulLink.css';

const UsefulLink = () => {
    const fundraisers = 'https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine';
  
    return (
    <div className='fundraiser-container'>
        {/* display the link, open in a new tab */}
        <a href={fundraisers} alt="Fundraisers for Ukraine" target='_blank' rel='noopener noreferrer'>
            Fundraisers for Ukraine: Get Involved
        </a>
    </div>
  )
}

export default UsefulLink;