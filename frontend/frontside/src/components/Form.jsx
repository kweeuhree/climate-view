import React from 'react'

const Form = ({formData, setFormData, name}) => {
    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
      }

      const handleSubmit = async (event) => {
        event.preventDefault();
        try{
          const response = await fetch('http://localhost:3000/cakes', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createForm)
          });

            const data = await response.json();
            console.log(data, 'handle submit inside create form');

            //update to trigger a render
            setCakes((prevCakes) => [...prevCakes, data]);
            setCreateForm({ name: '', recipe: '', countryOfOrigin: '' })

        } catch (error) {
            console.log(error, 'errror inside handle submit');
        }
      }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name={name} 
                onChange={handleChange} 
                value={formData.name}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form