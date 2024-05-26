import React, { useState } from 'react';

const SignUpPage = () => {

    const [signUpMessage, setSignUpMessage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      })

      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
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
            setFormData({name:'', email: '', password: ''});

           } else {

            console.log('failed to sign up');
            setSignUpMessage(false);
           }
    
            
    
        } catch (error) {
            console.log(error, 'errror inside handle submit');
        }
      }

  return (
    <div className='sign-up'>
           <form onSubmit={handleSubmit}>
    
        <input 
          type='text' 
          name="name" 
          onChange={handleChange} 
          value={formData.name}
          /> 
          <input 
             type='text' 
             name="email" 
             onChange={handleChange} 
             value={formData.email}
          />
            <input 
                type='text' 
                name="password" 
                onChange={handleChange} 
                value={formData.password}
            />
            <button type='submit'>Submit</button>
        </form>
        {signUpMessage === true && <div>sign up successful</div>}
        {signUpMessage === false && <div>failed sign up</div>}
  </div>
  )
}

export default SignUpPage;