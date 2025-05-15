import React from 'react'
import userImage from '/images/pfp-1.webp'

const UserAvatar = ({
    username = 'CodeFiroz',
    picture = userImage,
    styles
}) => {
  return (
    <div className={`w-full rounded p-2 py-1 cursor-pointer flex items-center gap-3 hover:bg-zinc-100 ${styles}`}>

        <img 
            className='w-8 h-8 rounded-full object-cover'
            src={picture} 
            alt="" 
        />
      
      <p className='text-zinc-700'>
        {username}
      </p>

    </div>
  )
}

export default UserAvatar
