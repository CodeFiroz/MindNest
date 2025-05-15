import React from 'react';

const NavItems = ({
  icon,
  label,
  link = "#",
  styles = "",
  labelStyles = "",
  iconStyles = "",
}) => {
  return (
    <a
      href={link}
      className={`cursor-pointer hover:bg-zinc-100 dark:hover:bg-stone-800 flex items-center gap-3 rounded p-2 py-1 group ${styles}`}
    >
      <div
        className={`text-zinc-400 group-hover:scale-110 group-hover:rotate-12 duration-300  ${iconStyles}`}
      >
        {icon}
      </div>

      <span
        className={`text-md font-medium text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 ${labelStyles}`}
      >
        {label}
      </span>
    </a>
  );
};

export default NavItems;
