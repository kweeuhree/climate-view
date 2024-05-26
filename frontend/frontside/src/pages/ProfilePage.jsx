import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({loggedIn, setLoggedIn, setUser, user}) => {

  const [editName, setEditName] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name
  })

  const navigate = useNavigate();

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

  const handleDelete = async () => {
    console.log('inside handleDelete');
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
        setLoggedIn(false);
        setUser({
          id: null,
          name: '',
          email: ''
        });
        navigate('/dashboard');
      } else {
        console.error('Logout failed:', response.statusText);
        // Handle logout failure, e.g., display an error message to the user
      }
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle network or other errors, e.g., display an error message to the user
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
              </form>
            ) : (
              <button onClick={handleClick}>update name</button>
            )}
          </div>
          
          <div>
            <button onClick={handleDelete}>delete account</button>
          </div>

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