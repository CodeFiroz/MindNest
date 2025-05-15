import { Pencil } from 'lucide-react'
import React from 'react'

const NewNote = () => {
  return (
    <>
        <a href="" className='bg-white w-full h-60 rounded-2xl border border-zinc-100 shadow-md p-2 flex flex-col justify-center items-center duration-200 hover:scale-95 hover:shadow-sm hover:rounded-3xl hover:border-slate-100 dark:bg-stone-700 dark:border-stone-800'>

            <div className='mb-4 w-20 h-20 bg-stone-100 rounded-full flex justify-center items-center text-zinc-600 border-4 border-stone-200 dark:bg-neutral-600 dark:border-neutral-800 dark:text-neutral-400'>
                <Pencil size={32} />
            </div>
            <p className='text-zinc-500 text-sm dark:text-zinc-300'>
                Write Your Journal
            </p>

        </a>
    </>
  )
}

export default NewNote