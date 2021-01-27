import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ); 
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        console.log('Submit hecho')
    }

    return (
        <form onSubmit={ handleSubmit }>
          <h2>Add Category</h2>  
          <input 
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          />
        </form>
    )
}

export default AddCategory
