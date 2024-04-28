import './App.css'
import React, { useState } from 'react'
import Input from './input';

function App() {
  const [data, setData] = useState({name: '', email: '', message: ''});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({...prevData, [name]: value}));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    
    <main>
      <h1>Feedback form</h1>
      {submitted ? (
      <p>Vielen Dank für dein Feedback!</p>):(
      <form onSubmit={onSubmit}>
      
      <Input 
      name='name'
      type="text"
      value={data.name}
      onChange={onChange}
      label="name"
     />
     <Input 
     name='email'
     type="email"
     value={data.email}
     onChange={onChange}
     label="email"
      />
      <Input 
      name='message'
      type="textarea"
      value={data.message}
      onChange={onChange}
      label="message" 
      />
     <button type='submit'>Send</button>
     </form>
      )}
    </main>
  
  )
}

export default App
