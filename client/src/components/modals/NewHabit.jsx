import React, { useEffect, useRef, useState } from "react";
import { Grid2X2Plus, X } from "lucide-react";
import MoodSelector from "./MoodSelector";

const NewHabit = ({ onClose }) => {
  const modalRef = useRef();

  
  const [emoji, setEmoji] = useState("🤓");
  const [showemoji, setShowEmoji] = useState(false);

  const handleSetEmoji = (emoji)=>{
    setEmoji(emoji)
    setShowEmoji(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white dark:bg-stone-900 rounded-2xl shadow-xl w-[90%] max-w-lg p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          <X size={20} />
        </button>

{
  showemoji && (
    <MoodSelector onClose={()=> setShowEmoji(false)} onEmojiSelect={(emoji)=> handleSetEmoji(emoji)} />
  )
}

        <div className="flex flex-col justify-center items-center">

          <div onClick={()=> setShowEmoji(true)} className="w-20 h-20 border-4 bg-yellow-200 border-amber-300 text-3xl rounded-full flex justify-center items-center">
            {emoji}
          </div>
          <small className="text-zinc-500 mt-2">Choose emoji</small>
          
          <div className="my-2 w-full">

            <input 
              type="text" 
              className="w-full p-2 text-md border border-zinc-200 rounded-md outline-0 px-3"
              placeholder="Learn New Skill..."
            />

          </div>

          <div className="flex justify-center">

            <button className="flex items-center px-3 py-2 bg-indigo-500 text-white rounded-md gap-4 mt-4 hover:bg-indigo-600">
              <Grid2X2Plus size={18} />
              <span>Add Habbit</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default NewHabit;
