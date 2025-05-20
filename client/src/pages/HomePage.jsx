import React from 'react'
import NewNote from "../components/cards/NewNote"
import NoteCard from "../components/cards/NoteCard"

const HomePage = () => {
  return (
    <div className='p-5'>

    <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">

    <NewNote />
    <NoteCard />

    </div>

    </div>
  )
}

export default HomePage