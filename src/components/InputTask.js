import { React, useState } from 'react'
import Button from './Button'

const InputTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState(false)

  const onSubmit = (/*e*/) => {
    // e.preventDefault();

    onAdd({ text, date, priority});

    setText('')
    setDate('')
    setPriority(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
          <label>Add Note</label>
          <input type="text" placeholder='Add Note' />
          
          <label>Add Date</label>
          <input type="text" placeholder='Add Date' />

          <label>Priority</label>
          <input type="checkbox" />

          <input type="submit" value="add" />
      </div>
    </form>
  )
}

export default InputTask