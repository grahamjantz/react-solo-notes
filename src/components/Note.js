import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Note = ({ note }) => {
  return (
    <div className='note'>
        <h3>
            <FaTimes style={{ 
                            color: 'red', 
                            cursor: 'pointer', 
                            marginRight: '10px' 
                            }}/>
            {note.text}
        </h3>
        <p>{note.date}</p>
    </div>
  )
}

export default Note