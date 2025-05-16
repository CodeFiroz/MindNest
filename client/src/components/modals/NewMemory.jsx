import React, { useEffect, useRef, useState } from "react";
import { Grid2X2Plus, Image, ImagesIcon, PencilIcon, Trash, X } from "lucide-react";
import MoodSelector from "./MoodSelector";

const NewMemory = ({ onClose }) => {
  const modalRef = useRef();

  const [image, setImage] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleFileChange  = (e)=>{
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); 
      
    };
    reader.readAsDataURL(file);
  }

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



        <div className="flex flex-col justify-center pt-4 items-center">

          
          <div className="my-2 w-full">

          <input type="file" onChange={(e)=> handleFileChange(e)} accept="image/*" id="picture" hidden />
            <label htmlFor="picture" className="w-full border p-2 rounded-lg border-zinc-200 mb-3 h-52 flex justify-center items-center text-zinc-300 cursor-pointer">
              
              {
                image !== null ? <img src={image} className="h-full rounded-2xl object-contain" /> :  <Image size={52}/>
              }
              
              
              
            </label>

            <input 
              type="text" 
              className="w-full p-2 text-md border border-zinc-200 rounded-md outline-0 px-3 dark:bg-neutral-800 dark:text-zinc-300 dark:border-zinc-700"
              placeholder="Caption"
            />

          </div>

          <div className="flex justify-center">

            <button className="flex items-center px-3 py-2 bg-indigo-500 text-white rounded-md gap-4 mt-4 hover:bg-indigo-600">
              <Grid2X2Plus size={18} />
              <span>Add Memory</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default NewMemory;
