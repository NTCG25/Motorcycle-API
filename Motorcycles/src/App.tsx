import React from 'react'
import './App.css'
import Model  from './Model'
import Button from './Button'

function App() {

  return (
    <div>
      <h2>Make: </h2>
      <input></input>
      <Model /><br></br>
      <Button />
    </div>
    )
}

function getMotorcycle() {
  fetch("https://api.api-ninjas.com/v1/motorcycles?make=")
}

export default App
