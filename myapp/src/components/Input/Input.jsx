import React from 'react'
import { useState,useEffect } from 'react'


export const Input = () => {
    const inputHandler = (event) =>{
        event.preventDefault ()
        console.log (event)
        
    }
  return (
    <div className="box"> 
            <div className='border border-1 border-warning w-50'>
    
    
    <Input/>
    </div>
    </div>
  )
}

export default Input