import React from 'react'

const Code = ({code}) => {
  return (
    <div className='bg-slate-200 w-full h-40 overflow-auto text-sm p-3 font-mono text-slate-700'>
        {code}
    </div>
  )
}

export default Code