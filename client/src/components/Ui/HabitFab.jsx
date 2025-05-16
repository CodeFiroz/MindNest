import { PlusIcon } from 'lucide-react'
import React from 'react'

const HabitFab = ({onClick}) => {
  return (
    <div onClick={onClick} className='w-14 h-14 cursor-pointer rounded-full bg-amber-400 flex justify-center items-center text-black text-xl absolute bottom-10 right-10 z-10 duration-200 hover:bg-black hover:text-amber-500 hover:scale-85'>
        <PlusIcon size={22} />
    </div>
  )
}

export default HabitFab