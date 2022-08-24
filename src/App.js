import { React, useState } from 'react';
import Header from "./components/Header";
import Notes from './components/Notes';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'first note',
      date: '08/23/2022',
      priority: true
    },
    {
      id: 2,
      text: 'second note',
      date: '08/24/2022',
      priority: false
    },
    {
      id: 3,
      text: 'third note',
      date: '08/25/2022',
      priority: true
    }
  ])

  const addNotes = () => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newNote = { id, ...notes };
    setNotes([ ...notes, newNote ]);
  }

  return (
    <div className="App">
      <header>
        <Header 
          title="Solo Notes"
          subtitle="a 100% self made note taking app"
          onAdd={addNotes}
        />
        <Notes notes={notes}/>
      </header>
    </div>
  );
}

export default App;
