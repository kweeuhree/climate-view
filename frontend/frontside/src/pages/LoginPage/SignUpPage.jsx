import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogInStyle.css';
import Sphere from '../../components/Sphere';

const SignUpPage = () => {

    // trigger signup status message
    const [signUpMessage, setSignUpMessage] = useState(null);
    // handle form data dynamically
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      })

    const navigate = useNavigate(); //for redirection

    // handle form data change dynamically
    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
      }
    
    //  handle sign up form submit
    const handleSubmit = async (event) => {
      event.preventDefault(); //prevent default form behavior
      console.log(formData);

      //  try signing up the user
        try{
          const response = await fetch('http://localhost:3000/auth/signup', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
    
           if(response.ok) {
            const data = await response.json();
            console.log(data, 'handle submit inside create form');

            //update to trigger a render
            setSignUpMessage(true);
            //reset form data
            setFormData({name:'', email: '', password: ''});
            navigate('/login'); //redirect to login page

           } else {
            console.log('failed to sign up');
            setSignUpMessage(false); // trigger status message
           }
    
        } catch (error) {
            console.log(error, 'error inside handle submit of SignUp');
        }
      }

  return (
    <div className='sign-up'>
      {/* header and sphere */}
          <header>
            <h1>join the community 
             <Sphere />
              </h1>
            </header>

        {/* sign up form */}
       <form onSubmit={handleSubmit}>
    
        <input 
          type='text' 
          name="name" 
          // handle change dynamically
          onChange={handleChange} 
          placeholder='name'
          value={formData.name}
          /> 
          <input 
             type='text' 
             name="email" 
             // handle change dynamically
             onChange={handleChange} 
             placeholder='email'
             value={formData.email}
          />
            <input 
                type='text' 
                name="password" 
                // handle change dynamically
                onChange={handleChange} 
                placeholder='password'
                value={formData.password}
            />
            <button type='submit'>Submit</button>
        </form>

        {/* show sign up status message */}
        {signUpMessage === true && <div>sign up successful</div>}
        {signUpMessage === false && <div>failed sign up</div>}
  </div>
  )
}

export default SignUpPage;