import React from 'react'
import './App.css'
import Model  from './Model'
import Button from './Button'
import Year from './Year'
import {useState} from 'react'; 
import  Axios  from 'axios'

function App() {

const [make, setMake] = useState()
const [model, setModel] = useState() 
const [year, setYear] = useState()

const findMotorcycle = async () => {
  try {
    const response = await Axios.get(`/motorcycle?make=${make}&model=${model}&year=${year}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  } // Invalid hook call
}

  return (
    <div>
      <h2>Make: </h2>
      <input></input>
      <Model />
      <Year /> <br></br>
      <Button />
    </div>
    )
}

export default App
