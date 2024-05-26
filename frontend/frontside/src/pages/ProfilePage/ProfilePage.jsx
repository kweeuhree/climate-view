import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';


const ProfilePage = ({loggedIn, setLoggedIn, setUser, user}) => {

  const [editName, setEditName] = useState(false); // state for editing user name
  const [displayDays, setDisplayDays] = useState(0); // state for dynamic rendering of days since creation of user account
  const [showPopUp, setShowPopUp] = useState(false); // state for a confirmation of account deletion
  // state for a name changing form
  const [formData, setFormData] = useState({
    name: user.name
  })

  const navigate = useNavigate(); // redirect to a different address

  // render days since account creation dynamically
  useEffect(() => {
    if (!user || !user.createdAt) return; //return if no user 

    const target = days(user); // get days 
    // display dynamically with setInterval 
    const interval = setInterval(() => {
      setDisplayDays((prevDays) => {
        if (prevDays >= target) {
          clearInterval(interval);
          return target;
        }
        return prevDays + 1;
      });
    }, 550); 
  }, [user]); 

  //calculate days since account creation
  const days = (user) => {
    const today = Date.now(); // todays date
    const createdAt = new Date(user.createdAt); // date user joined
    console.log(createdAt, 'inside days, createadAt'); 
    const difference = today - createdAt.getTime(); // get difference between dates
    const result = Math.floor(difference / (1000 * 60 * 60 * 24)); // get days
    console.log(result, ' result inside days');
    return result; // return days
  }

  const handleClick = () => {
    setEditName(true); // display input form
  }

  const handleChange = (event) => {
    // dynamically set form data
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    console.log('attempting put request, formData: ', formData);
    event.preventDefault();
    // try updating username based on form data information
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
        setUser(updatedUser); // update user object
        setFormData({name:''}); // reset form 
        setEditName(prevState => !prevState); // stop displaying input form
      }
    } catch (error) { //catch and log error
      console.log('inside handleSubmit of ProfilePage ', error);
    }
  }

  const handleConsent = () => {
    //display a confirmation window before deleting user account
    console.log('attempting popup');
    setShowPopUp(true);
  }

  // logic in case of user log out
  const logoutLogic = () => {
    setLoggedIn(false); // set logged in state to false
    // reset user object
    setUser({
      id: null,
      name: '',
      email: ''
    });
    navigate('/dashboard'); // navigate to home page
  };

  const handleDelete = async (event) => {
    console.log('attempting deleting profile');
    //try sending a delete request
    try {
      const response = await fetch(`http://localhost:3000/profile/${user.id}`, {
        method: 'DELETE'
      });
    if(response.ok) {
      console.log(response);
      //if successful log the user out
      logoutLogic();
    }
    } catch (error) {
      console.log('error inside handleDelete of ProfilePage ', error);
    }
  }

  const handleLogout = async () => {
    console.log('inside handleLogout');
    // try logging user out
    try {
      const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('Logout successful');
        // if successful follow through with logout logic
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
          <div><h1>hello, {user.name}</h1></div>
          {/* display days dynamically */}
          <div className="account-days">{displayDays} day(s) since creation</div>
        </div>

        <div className="bottom-profile">
          <div>
            {/* display form input if 'update name' was clicked */}
            {editName ? (
              <form onSubmit={handleSubmit}>
                {/* handle change of the form */}
                <input type="text" name='name' placeholder='enter new name' value={formData.name} onChange={handleChange}/>
                {/* submit name change */}
                <button type="submit">Submit</button>
                {/* stop displaying form input without changing the name */}
                <button onClick={()=>setEditName(false)}>Cancel</button>
              </form>
            ) : (
              // update name button
              <button onClick={handleClick}>update name</button>
            )}
          </div>
          
          <div>
            {/* delete account button */}
            <button onClick={handleConsent}>delete account</button>
          </div>

          {/* display pop up before deleting user account */}
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
            {/* logout button */}
            <button onClick={handleLogout}>log out</button>
          </div>
          
        

        </div>

      </section>
    )
  }
// if user is not logged in do not display profile
  return loggedIn ? profileDisplay() : (<div>restricted access</div>)
  
}

export default ProfilePage;