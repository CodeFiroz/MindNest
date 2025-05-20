import {Notebook, Pin, Trash2Icon } from 'lucide-react'
import React from 'react'

const Trash = () => {
  return (
    <div className='p-5'>

        <div className="flex flex-col lg:flex-row justify-between items-center">

            <h3 className='flex text-md items-center gap-3 font-semibold text-gray-500  '>
                <Trash2Icon size={17} /> Trash Items
            </h3>

            <div className="flex gap-2">

                <button className='px-3 py-1 rounded-full text-white flex items-center gap-2 ring-2 ring-zinc-400 bg-slate-600 cursor-pointer'><Notebook size={14} />Journals</button>
                <button className='px-3 py-1 rounded-full text-white flex items-center gap-2 bg-indigo-600 cursor-pointer'><Pin size={14} />Memories</button>

            </div>

        </div>

    </div>
  )
}

export default Trash