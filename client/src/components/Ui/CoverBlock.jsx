import React from 'react'

const CoverBlock = ({cover, handleCoverPhoto}) => {
  return (
    <>
        <div className="w-full h-60 flex justify-center items-center bg-zinc-700 rounded">
          <div className="w-full h-60 flex justify-center items-center bg-zinc-700 rounded overflow-hidden relative">
            {cover ? (
              <img src={cover} className="h-full object-cover" alt="Cover Preview" />
            ) : (
              <span className="text-zinc-400">No cover selected</span>
            )}

            {cover && (
              <button
                onClick={() => handleCoverPhoto(null)}
                className="text-xs mt-2 bg-red-200 text-red-500 hover:underline px-4 py-2 rounded absolute top-5 right-5"
              >
                Remove Cover
              </button>
            )}
          </div>

        </div>
    </>
  )
}

export default CoverBlock
