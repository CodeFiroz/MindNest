import React from 'react'

const NavItems = ({
    icon,
    label,
    link = "#",
    styles,
    labelStyles,
    iconStyles
}) => {
  return (
     <a href={link} className={`w-full rounded p-2 py-1 cursor-pointer flex items-center group gap-3 hover:bg-zinc-100 ${styles}`}>

       <div className={`text-zinc-400 group-hover:scale-110 duration-300 group-hover:rotate-12 group-hover:text-slate-600 ${iconStyles}`}>
        {icon}
       </div>

       <span className={`text-zinc-500 font-medium text-md group-hover:text-zinc-700 ${labelStyles}`}>
        {label}
       </span>

    </a>
  )
}

export default NavItems
