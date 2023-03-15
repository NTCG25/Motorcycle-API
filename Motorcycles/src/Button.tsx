import React from "react";
import  Axios  from 'axios'
import { useState } from "react";
import findMotorcycle from './App';

function Button () { 

    return (
        <div> 
            <button onClick={findMotorcycle}>Find Motorcycle</button>
        </div>
    )
}

export default Button