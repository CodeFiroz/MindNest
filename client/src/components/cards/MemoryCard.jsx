import { Archive, Trash2Icon } from 'lucide-react'
import React from 'react'

const MemoryCard = ({
  image,
  caption,
  date
}) => {
  return (
    <div className="group block w-full break-inside-avoid p-4 bg-zinc-50 mb-3 border border-zinc-200 dark:bg-neutral-800 dark:border-neutral-700 duration-300 hover:scale-[0.98]00">
      <img
        className='w-full object-cover'
        src={image}
        alt="" />
      <h4 className='text-slate-700 my-3 text-xs dark:text-neutral-400'>
        {caption}
      </h4>
      <div className='flex justify-between items-center'>
        <p className='text-zinc-500 text-[10px]'>
          {date}
        </p>

        <div className="flex items-center gap-2">
          <button className='w-6 h-6 bg-teal-500 scale-0 rounded-md flex justify-center items-center text-red-50 duration-300 group-hover:scale-100'>
            <Archive size={15} />
          </button>
          <button className='w-6 h-6 bg-red-500 scale-0 rounded-md flex justify-center items-center text-red-50 duration-300 group-hover:scale-100'>
            <Trash2Icon size={15} />
          </button>

        </div>
      </div>
    </div>

  )
}

export default MemoryCard
