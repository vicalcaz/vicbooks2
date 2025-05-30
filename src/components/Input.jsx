import React, { useState } from 'react'

const Input = () => {
    const [name, setName]= useState('')
    const inputHandler = (e) =>{
        setName(e.target.value)
    }
    const noVocals = (e) => {
    console.log(e.key)
    if('aeiou'.includes(e.key.toLowerCase())){
        e.preventDefault()
        console.log('señora las vocales no!')
    }
    }

  return (
    <div>
        <input placeholder='Ingrese su nombre' type='text' name='nombre completo' onChange={inputHandler} />
        <p>{name}</p>
        <h2>No se permiten vocales</h2>
        <input placeholder='No vocals' type='text' onKeyDown={noVocals}/>
    </div>
  )
}

export default Input