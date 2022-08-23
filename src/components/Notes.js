import React from 'react'
import Note from './Note'

const Notes = ({ notes }) => {
  return (
    <div>
        {notes.map((note) => <Note key={note.id} note={note}/>)}
    </div>
  )
}

export default Notes