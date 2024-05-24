import React from 'react'

const ProfilePage = ({loggedIn}) => {
  return loggedIn ? (<div>ProfilePage</div>) : (<div>restricted access</div>)
  
}

export default ProfilePage;