import { BookDashed } from 'lucide-react'
import React from 'react'

const NoNotes = () => {
  return (
    <>
    <div 
        className='flex flex-col items-center justify-center h-full text-center p-6'
    >

        <div className='text-zinc-600 bg-slate-200 p-5 rounded-full ring-4 ring-slate-100 mb-5 dark:bg-neutral-800 dark:ring-neutral-900 dark:text-neutral-200'>
            <BookDashed size={32} />
        </div>
        <h2 className="text-2xl font-medium text-slate-700 dark:text-zinc-300">No Notes Yet</h2>
        <p className="text-sm my-3 text-zinc-500 max-w-md">
        You haven't jotted anything down yet. Ready to write your first note?
        It's as easy as hitting that <span className="text-amber-500 font-medium">+ New Note</span> button!
      </p>

      <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition">
        Create Note
      </button>

    </div>
    </>
  )
}

export default NoNotes