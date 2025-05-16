import React from 'react'

const Quote = ({
    text, caption
}) => {
  return (
    <div className='p-3 my-3 bg-zinc-300 border-l-8 border-zinc-400 dark:bg-gray-600 dark:border-stone-700'>
      <p className='text-md text-zinc-600 dark:text-zinc-900'>
        {text}
      </p>
      <i className='text-sm text-right block mt-4 text-zinc-400'>
        {caption}
      </i>
    </div>
  )
}

export default Quote
