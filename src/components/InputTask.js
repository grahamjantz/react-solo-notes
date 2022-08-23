import React from 'react'
import Button from './Button'

const InputTask = () => {
  return (
    <div>
        <label>Add Note</label>
        <input type="text" placeholder='Add Note' />
        
        <label>Add Date</label>
        <input type="text" placeholder='Add Date' />

        <label>Priority</label>
        <input type="checkbox" />

        <Button text="Submit" />
    </div>
  )
}

export default InputTask