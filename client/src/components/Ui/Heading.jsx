import React from 'react';

const Heading = ({ text, level = 1 }) => {
  const Tag = `h${level}`;

  const baseStyles = 'my-3 font-semibold text-zinc-700';
  const sizeMap = {
    1: 'text-3xl',
    2: 'text-2xl',
    3: 'text-xl',
    4: 'text-lg',
    5: 'text-base',
    6: 'text-sm',
  };

  const className = `${baseStyles} ${sizeMap[level] || 'text-base'}`;

  return <Tag className={className + "text-zinc-900 dark:text-zinc-100"}>{text}</Tag>;
};

export default Heading;
