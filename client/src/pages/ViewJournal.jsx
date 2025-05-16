import React from 'react'
import cover from '/images/cover.jpg'
import List from '../components/Ui/List'
import Quote from '../components/Ui/Quote'
import Heading from '../components/Ui/Heading'
import demoEditorData from './journal.js'
import RenderEditorContent from '../utils/renderBlock.jsx'

const ViewJournal = () => {
    return (
        <>

            <div className="w-full h-60 flex justify-center items-center bg-zinc-700 rounded">
                <div className="w-full h-60 flex justify-center items-center bg-zinc-700 rounded overflow-hidden relative">

                    <img src={cover} className="h-full object-cover" alt="Cover Preview" />


                </div>

            </div>


            <div className="w-full flex justify-center  items-end">
                <div className="lg:w-5/6 w-full px-5 mt-10">

                    <div className="flex lg:items-center items-start gap-5">

                        <div className='lg:w-24 lg:h-24 w-16 h-16 bg-amber-100 flex justify-center items-center rounded-full border-4 border-orange-200 text-4xl'>
                            😾
                        </div>
                        <div>
                            <p className='text-sm text-zinc-400'>
                                12 May 2025 - 02:33 PM
                            </p>

                            <h1 className='text-2xl lg:text-4xl font-semibold mt-2 text-gray-600'>
                                Finding Stillness in the Chaos
                            </h1>
                        </div>

                    </div>

                    <div className="my-5">
                        
                        <RenderEditorContent blocks={demoEditorData.blocks} />

                       
                    </div>

                </div>
            </div>

        </>
    )
}

export default ViewJournal
