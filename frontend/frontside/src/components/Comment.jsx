import React from 'react'

const Comment = ({comment}) => {

  const [formData, setFormData] = useState({
    body: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch('http://localhost:3000/comments', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

        const data = await response.json();
        console.log(data, 'handle submit inside create form');

        //update to trigger a render
        setFormData((prevComment) => [...prevComment, data]);
        setFormData({body:''});
    } catch (error) {
        console.log(error, 'errror inside handle submit');
    }
  }

  return (
    <div className='comment'>
    {comment ? comment : 
        <Form 
          name={body} 
          formData={formData} 
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />}
    </div>
  )
}

export default Comment;