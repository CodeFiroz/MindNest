import React from 'react'
import UserAvatar from '../Ui/UserAvatar'
import NavItems from './NavItems'
import { Archive, BookHeart, Bot, CircleUserRound, Cog, DoorClosedLocked, Lightbulb, MessageCircleDashed, Notebook, Pin, Trash } from 'lucide-react'

const Sidebar = ({closeSidebar}) => {
  return (
    <div className='w-full h-screen bg-white border-r border-zinc-100 p-3'>
      
      <UserAvatar />

      <nav className='my-5 space-y-3' onClick={closeSidebar}>
        
        <NavItems 
            icon={<Notebook size={20} />}
            label={"Journal"}
        />

        <NavItems 
            icon={<Pin size={20} />}
            label={"Notes"}
            iconStyles={"group-hover:text-red-400"}
        />

         <NavItems 
            icon={<BookHeart size={20} />}
            label={"My Habits"}
            iconStyles={"group-hover:text-indigo-400"}
        />
         <NavItems 
            icon={<Lightbulb size={20} />}
            label={"Ideas"}
            iconStyles={"group-hover:text-amber-500"}
        />

      </nav>

        <nav className='my-5 space-y-3 border-t pt-5 border-zinc-100' onClick={closeSidebar}>
        
         <NavItems 
            icon={<Trash size={20} />}
            label={"Trash"}
            iconStyles={"group-hover:text-red-300"}
        />
         <NavItems 
            icon={<Archive size={20} />}
            label={"Archives"}
            iconStyles={"group-hover:text-slate-600"}
        />

        <NavItems 
            icon={<CircleUserRound size={20} />}
            label={"Profile"}
            iconStyles={"group-hover:text-teal-400"}
        />

        <NavItems 
            icon={<Cog size={20} />}
            label={"Settings"}
            iconStyles={"group-hover:text-indigo-900"}
        />
     
      </nav>


        <nav className='my-5 space-y-3 border-t pt-5 border-zinc-100' onClick={closeSidebar}>
        
         <NavItems 
            icon={<Bot size={20} />}
            label={"Chat With AI"}
        />
         <NavItems 
            icon={<MessageCircleDashed size={20} />}
            label={"Unsend Messages"}
        />
      </nav>

      <nav className='my-5 space-y-3 border-t pt-5 border-zinc-100' onClick={closeSidebar}>
        
         <NavItems 
            icon={<DoorClosedLocked size={20} />}
            label={"Log Out"}
            styles={"hover:bg-red-100"}
            iconStyles={"group-hover:text-red-500"}
            labelStyles={"group-hover:text-red-400"}
        />
        
      </nav>

    </div>
  )
}

export default Sidebar
