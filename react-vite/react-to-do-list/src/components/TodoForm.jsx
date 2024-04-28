import React, { useState } from 'react'

function TodoForm({onAdd }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(inputValue);
        setInputValue('');
    };

  return (
    <form className='col-9 d-flex flex-row align-items-center' onSubmit={handleSubmit}>
        <input className='col-9 form-control mx-1' type="text" value={inputValue} onChange={handleInputChange} placeholder="Neue Aufgabe hinzufügen" />
        <button className='btn btn-primary' type='submit'>Hinzufügen</button>
    </form>
  )
}

export default TodoForm;
