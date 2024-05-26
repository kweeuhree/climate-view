import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = ({loggedIn, setLoggedIn, setUser, user}) => {

  const [editName, setEditName] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name
  })

  const navigate = useNavigate();

  const logoutLogic = () => {
    setLoggedIn(false);
    setUser({
      id: null,
      name: '',
      email: ''
    });
    navigate('/dashboard');
  };

  const handleClick = () => {
    setEditName(true);
  }

  const handleChange = (event) => {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    console.log('attempting put request, formData: ', formData);
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/profile/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      console.log('response: ', response);
      if(response.ok) {
        const data = await response.json();
        console.log(data, ' data inside handleSubmit of ProfilePage');
        const updatedUser = data.updatedUser;
        setUser(updatedUser);
        setFormData({name:''});
        setEditName(prevState => !prevState);
      }
    } catch (error) {
      console.log('inside handleSubmit of ProfilePage ', error);
    }
  }

  const handleConsent = () => {
    console.log('attempting popup');
    setShowPopUp(true);
  }

  const handleDelete = async (event) => {
    console.log('attempting deleting profile');
    try {
      const response = await fetch(`http://localhost:3000/profile/${user.id}`, {
        method: 'DELETE'
      });
    if(response.ok) {
      console.log(response);
      logoutLogic();
    }
    } catch (error) {
      console.log('error inside handleDelete of ProfilePage ', error);
    }
  }

  const handleLogout = async () => {
    console.log('inside handleLogout');
    try {
      const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('Logout successful');
        logoutLogic();
      } else {
        console.error('Logout failed:', response);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // profile display function
  const profileDisplay = () => {

    return (
      <section className='profile-section'>
        <div className="top-profile">
          <h1>hello, {user.name}</h1>
        </div>

        <div className="bottom-profile">
          <div>
            {editName ? (
              <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='enter new name' value={formData.name} onChange={handleChange}/>
                <button type="submit">Submit</button>
                <button onClick={()=>setEditName(false)}>Cancel</button>
              </form>
            ) : (
              <button onClick={handleClick}>update name</button>
            )}
          </div>
          
          <div>
            <button onClick={handleConsent}>delete account</button>
          </div>

          { showPopUp &&   (

                <div className='consent-popup'>
                  <div>Delete account?</div>
                  <div>
                    <button onClick={handleDelete}>
                      Yes
                    </button>
                    <button onClick={()=> setShowPopUp(false)}>
                      No
                    </button>
                  </div>
                </div>
               )
              }

          <div>
            <button onClick={handleLogout}>log out</button>
          </div>
          
        

        </div>

      </section>
    )
  }

  return loggedIn ? profileDisplay() : (<div>restricted access</div>)
  
}

export default ProfilePage;