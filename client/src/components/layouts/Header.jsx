import React from 'react'
import userImage from '/images/pfp-1.webp'
import { LogOut, Settings } from 'lucide-react'

const Header = ({
    SidebarOpen,
    setSidebar
}) => {
    return (
        <div className='flex w-full border-b border-zinc-100 bg-white justify-end items-center p-2 px-5 gap-3'>

            <img
                onClick={()=> setSidebar(!SidebarOpen)}
                className='w-8 h-8 rounded-full object-cover'
                src={userImage}
                alt="" />


            <button className='w-8 h-8 bg-zinc-100 text-center rounded-full flex justify-center items-center text-zinc-400 hover:text-teal-700 hover:bg-teal-100'>
                <Settings size={22} />
            </button>

            <button className='w-8 h-8 bg-zinc-100 text-center rounded-full flex justify-center items-center text-zinc-400 hover:text-red-500 hover:bg-red-100'>
                <LogOut size={22} />
            </button>

        </div>
    )
}

export default Header
