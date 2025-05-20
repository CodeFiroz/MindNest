import React from 'react'

const Profile = () => {
  return (
    <div className='p-5'>

        <div className='flex flex-col lg:flex-row items-center justify-between gap-5 mb-10'>

        <div className="flex flex-col lg:flex-row gap-5">
            
            <div className="w-16 h-16 text-white text-3xl font-bold bg-indigo-600 flex justify-center items-center rounded-full">F</div>
            <div>
                <p className='text-zinc-400 text-sm'>
                    Prefered Name
                </p>
                <input 
                    type="text" 
                    value="Firoz" 
                    className='w-full border border-zinc-300 bg-zinc-50 px-2 py-1 rounded-md text-slate-600 outline-0 dark:bg-neutral-700 dark:text-white dark:border-gray-600'
                />
            </div>
        </div>

        <button className='text-xs px-4 py-2 rounded-full bg-amber-400'>Save changes</button>

        </div>

        <h3 className='text-lg font-semibold text-slate-500'>
            Account security
        </h3>
        <div className='mt-5 border-b border-zinc-200 pb-4'>
            <span className='text-sm text-zinc-500'>Email</span>
            <p className='text-slate-400 font-semibold'>
                khanfiroz4045@gmail.com
            </p>
        </div>
         <div className='flex justify-between items-center mt-5'>
           <div>
             <span className='text-sm text-zinc-500'>Password</span>
            <p className='text-slate-400 font-semibold'>
                ********
            </p>
           </div>
           <button className='px-4 py-2 text-xs rounded-full bg-red-600 text-white'>Change Password</button>
        </div>

    </div>
  )
}

export default Profile